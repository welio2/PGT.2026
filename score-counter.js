(() => {
    const playerNameKey = 'buuro-player-name';
    const legacyStorageKey = 'buuro-game-scores-v1';
    const profileStorageKey = 'buuro-game-scores-by-profile-v1';
    const migrationStorageKey = 'buuro-game-scores-profile-migration-v1';
    const challengeStorageKey = 'buuro-game-challenges-v1';
    const challengeRewardGame = 'challenges';
    const fallbackProfiles = Object.create(null);
    const fallbackChallengeProfiles = Object.create(null);
    let useFallbackStorage = false;
    let storageErrorReported = false;
    let challengeStorageErrorReported = false;
    let legacyMigrationChecked = false;
    const challengeDefinitions = [
        { id: 'daily-100-points', period: 'daily', metric: 'points', target: 100, reward: 50, titleKey: 'challengeDaily100Title', descriptionKey: 'challengeDaily100Description' },
        { id: 'daily-two-games', period: 'daily', metric: 'games', target: 2, reward: 75, titleKey: 'challengeDailyTwoGamesTitle', descriptionKey: 'challengeDailyTwoGamesDescription' },
        { id: 'daily-500-points', period: 'daily', metric: 'points', target: 500, reward: 150, titleKey: 'challengeDaily500Title', descriptionKey: 'challengeDaily500Description' },
        { id: 'weekly-1000-points', period: 'weekly', metric: 'points', target: 1000, reward: 250, titleKey: 'challengeWeekly1000Title', descriptionKey: 'challengeWeekly1000Description' },
        { id: 'weekly-five-games', period: 'weekly', metric: 'games', target: 5, reward: 300, titleKey: 'challengeWeeklyFiveGamesTitle', descriptionKey: 'challengeWeeklyFiveGamesDescription' },
        { id: 'weekly-2500-points', period: 'weekly', metric: 'points', target: 2500, reward: 500, titleKey: 'challengeWeekly2500Title', descriptionKey: 'challengeWeekly2500Description' }
    ];

    function formatLocalDate(date) {
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${date.getFullYear()}-${month}-${day}`;
    }

    function currentChallengePeriods() {
        const today = new Date();
        const weekStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        weekStart.setDate(weekStart.getDate() - ((weekStart.getDay() + 6) % 7));
        return {
            daily: formatLocalDate(today),
            weekly: formatLocalDate(weekStart)
        };
    }

    function emptyChallengePeriod(period) {
        return { period, points: 0, games: [], completed: [] };
    }

    function isValidChallengePeriod(value, period) {
        return isScoreMap(value)
            && value.period === period
            && Number.isFinite(value.points)
            && value.points >= 0
            && Array.isArray(value.games)
            && value.games.every((game) => typeof game === 'string')
            && Array.isArray(value.completed)
            && value.completed.every((id) => typeof id === 'string');
    }

    function saveChallengeProgress(profileId, progress) {
        if (useFallbackStorage) {
            fallbackChallengeProfiles[profileId] = progress;
            return;
        }

        try {
            const profiles = JSON.parse(localStorage.getItem(challengeStorageKey) || '{}');
            if (!isScoreMap(profiles)) throw new Error('Invalid challenge progress profiles.');
            profiles[profileId] = progress;
            localStorage.setItem(challengeStorageKey, JSON.stringify(profiles));
        } catch (error) {
            fallbackChallengeProfiles[profileId] = progress;
            if (!challengeStorageErrorReported) {
                challengeStorageErrorReported = true;
                console.error('Não foi possível salvar o progresso dos desafios.', error);
            }
        }
    }

    function readChallengeProgress(profileId) {
        if (useFallbackStorage) {
            return fallbackChallengeProfiles[profileId] || createChallengeProgress(profileId);
        }

        try {
            const profiles = JSON.parse(localStorage.getItem(challengeStorageKey) || '{}');
            if (!isScoreMap(profiles)) throw new Error('Invalid challenge progress profiles.');
            const stored = profiles[profileId];
            const periods = currentChallengePeriods();
            const progress = {
                daily: stored && isValidChallengePeriod(stored.daily, periods.daily)
                    ? stored.daily
                    : emptyChallengePeriod(periods.daily),
                weekly: stored && isValidChallengePeriod(stored.weekly, periods.weekly)
                    ? stored.weekly
                    : emptyChallengePeriod(periods.weekly)
            };
            if (!stored || progress.daily !== stored.daily || progress.weekly !== stored.weekly) {
                saveChallengeProgress(profileId, progress);
            }
            return progress;
        } catch (error) {
            if (!challengeStorageErrorReported) {
                challengeStorageErrorReported = true;
                console.error('Não foi possível carregar o progresso dos desafios.', error);
            }
            return fallbackChallengeProfiles[profileId] || createChallengeProgress(profileId);
        }
    }

    function createChallengeProgress(profileId) {
        const periods = currentChallengePeriods();
        const progress = {
            daily: emptyChallengePeriod(periods.daily),
            weekly: emptyChallengePeriod(periods.weekly)
        };
        fallbackChallengeProfiles[profileId] = progress;
        return progress;
    }

    function recordGamePoints(profileId, game, points) {
        if (game === challengeRewardGame) return;

        const progress = readChallengeProgress(profileId);
        progress.daily.points += points;
        progress.weekly.points += points;
        [progress.daily, progress.weekly].forEach((period) => {
            if (!period.games.includes(game)) period.games.push(game);
        });

        let reward = 0;
        challengeDefinitions.forEach((challenge) => {
            const period = progress[challenge.period];
            const value = challenge.metric === 'points' ? period.points : period.games.length;
            if (value >= challenge.target && !period.completed.includes(challenge.id)) {
                period.completed.push(challenge.id);
                reward += challenge.reward;
            }
        });
        saveChallengeProgress(profileId, progress);

        if (reward > 0) {
            const scores = readScores(profileId);
            scores[challengeRewardGame] = (Number(scores[challengeRewardGame]) || 0) + reward;
            writeScores(profileId, scores);
            render();
        }
        window.dispatchEvent(new Event('buuro-challenges-updated'));
    }

    function reportStorageError(message, error) {
        useFallbackStorage = true;
        if (storageErrorReported) return;
        storageErrorReported = true;
        console.error(message, error);
    }

    function isScoreMap(value) {
        return Boolean(value && typeof value === 'object' && !Array.isArray(value));
    }

    function currentProfileId() {
        try {
            const name = (localStorage.getItem(playerNameKey) || '')
                .normalize('NFC')
                .trim()
                .replace(/\s+/g, ' ')
                .toLocaleLowerCase('pt-BR');
            return name ? `profile:${name}` : 'profile:anonymous';
        } catch (error) {
            reportStorageError('Não foi possível identificar o perfil dos pontos.', error);
            return 'profile:anonymous';
        }
    }

    function migrateLegacyScores() {
        if (legacyMigrationChecked || useFallbackStorage) return;
        try {
            if (localStorage.getItem(migrationStorageKey) === 'true') {
                legacyMigrationChecked = true;
                return;
            }

            const legacyRaw = localStorage.getItem(legacyStorageKey);
            if (legacyRaw) {
                const legacyScores = JSON.parse(legacyRaw);
                if (isScoreMap(legacyScores)) {
                    const profiles = JSON.parse(localStorage.getItem(profileStorageKey) || '{}');
                    if (!isScoreMap(profiles)) throw new Error('Invalid saved score profiles.');
                    const profileId = currentProfileId();
                    if (useFallbackStorage) return;
                    if (!Object.prototype.hasOwnProperty.call(profiles, profileId)) {
                        profiles[profileId] = legacyScores;
                        localStorage.setItem(profileStorageKey, JSON.stringify(profiles));
                    }
                }
            }

            localStorage.setItem(migrationStorageKey, 'true');
            legacyMigrationChecked = true;
        } catch (error) {
            reportStorageError('Não foi possível migrar a pontuação antiga para o perfil atual.', error);
        }
    }

    function readProfiles() {
        if (useFallbackStorage) return fallbackProfiles;
        migrateLegacyScores();
        if (useFallbackStorage) return fallbackProfiles;
        try {
            const saved = JSON.parse(localStorage.getItem(profileStorageKey) || '{}');
            if (isScoreMap(saved)) return saved;
            throw new Error('Invalid saved score profiles.');
        } catch (error) {
            reportStorageError('Não foi possível carregar as pontuações dos perfis.', error);
            return fallbackProfiles;
        }
    }

    function readScores(profileId) {
        const profiles = readProfiles();
        const scores = profiles[profileId];
        if (isScoreMap(scores)) return scores;
        return {};
    }

    function writeScores(profileId, scores) {
        if (useFallbackStorage) {
            fallbackProfiles[profileId] = scores;
            return;
        }

        try {
            const profiles = readProfiles();
            if (useFallbackStorage) {
                fallbackProfiles[profileId] = scores;
                return;
            }
            profiles[profileId] = scores;
            localStorage.setItem(profileStorageKey, JSON.stringify(profiles));
        } catch (error) {
            fallbackProfiles[profileId] = scores;
            reportStorageError('Não foi possível salvar as pontuações do perfil.', error);
        }
    }

    function render() {
        const scores = readScores(currentProfileId());
        document.querySelectorAll('[data-score-total]').forEach((element) => {
            const game = element.dataset.scoreTotal;
            element.textContent = (Number(scores[game]) || 0).toLocaleString('pt-BR');
        });
        const grandTotal = Object.values(scores).reduce((total, points) => total + (Number(points) || 0), 0);
        document.querySelectorAll('[data-score-grand-total]').forEach((element) => {
            element.textContent = grandTotal.toLocaleString('pt-BR');
        });
    }

    window.GameScoreCounter = {
        add(game, points) {
            const amount = Math.max(0, Math.round(Number(points) || 0));
            if (!amount) return 0;

            const profileId = currentProfileId();
            const scores = readScores(profileId);
            scores[game] = (Number(scores[game]) || 0) + amount;
            writeScores(profileId, scores);
            render();
            recordGamePoints(profileId, game, amount);
            return scores[game];
        },
        reset(game) {
            const profileId = currentProfileId();
            const scores = readScores(profileId);
            delete scores[game];
            writeScores(profileId, scores);
            render();
        },
        render
    };

    window.GameChallenges = {
        getProgress() {
            const progress = readChallengeProgress(currentProfileId());
            return challengeDefinitions.map((challenge) => {
                const period = progress[challenge.period];
                const value = challenge.metric === 'points' ? period.points : period.games.length;
                return {
                    ...challenge,
                    progress: Math.min(value, challenge.target),
                    completed: period.completed.includes(challenge.id)
                };
            });
        }
    };

    window.addEventListener('storage', (event) => {
        if (
            event.key === profileStorageKey
            || event.key === migrationStorageKey
            || event.key === challengeStorageKey
            || event.key === playerNameKey
            || event.key === null
        ) {
            render();
            if (event.key === challengeStorageKey || event.key === null) {
                window.dispatchEvent(new Event('buuro-challenges-updated'));
            }
        }
    });

    render();
})();
