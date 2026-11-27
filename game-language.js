(() => {
    const storageKey = 'buuro-language-v1';
    const languages = ['pt-BR', 'en', 'es', 'de', 'ja', 'ru', 'fr', 'it'];
    const messages = [
        ['Adivinhe a Bandeira', 'Guess the Flag', 'Adivina la bandera', 'Rate die Flagge', '国旗を当てよう', 'Угадай флаг', 'Devinez le drapeau', 'Indovina la bandiera'],
        ['Batalha Naval', 'Battleship', 'Batalla naval', 'Schiffe versenken', '海戦', 'Морской бой', 'Bataille navale', 'Battaglia navale'],
        ['Capitais dos Países', 'World Capitals', 'Capitales del mundo', 'Hauptstädte der Welt', '世界の首都', 'Столицы мира', 'Capitales du monde', 'Capitali del mondo'],
        ['Charadas do Sócrates', "Socrates' Riddles", 'Acertijos de Sócrates', 'Sokrates-Rätsel', 'ソクラテスのなぞなぞ', 'Загадки Сократа', 'Énigmes de Socrate', 'Indovinelli di Socrate'],
        ['Jogo da Forca JS', 'Hangman', 'Ahorcado', 'Galgenmännchen', 'ハングマン', 'Виселица', 'Pendu', 'Impiccato'],
        ['Jogo da Forca', 'Hangman', 'Ahorcado', 'Galgenmännchen', 'ハングマン', 'Виселица', 'Pendu', 'Impiccato'],
        ['Jogo da Velha Deluxe', 'Tic-Tac-Toe Deluxe', 'Tres en raya Deluxe', 'Drei gewinnt Deluxe', '三目並べデラックス', 'Крестики-нолики Deluxe', 'Morpion Deluxe', 'Tris Deluxe'],
        ['Jogo da Velha', 'Tic-Tac-Toe', 'Tres en raya', 'Drei gewinnt', '三目並べ', 'Крестики-нолики', 'Morpion', 'Tris'],
        ['Jogo do Bilhão', 'Billionaire Quiz', 'Quiz del millonario', 'Quiz um die Milliarde', '億万長者クイズ', 'Викторина на миллиард', 'Quiz du milliard', 'Quiz del miliardo'],
        ['Jogo do Pontinho', 'Dots and Boxes', 'Puntos y cuadrados', 'Punkte und Kästchen', '点と四角', 'Точки и квадраты', 'Points et carrés', 'Punti e quadrati'],
        ['Jogo dos Copos', 'Cup Game', 'Juego de los vasos', 'Becherspiel', 'カップゲーム', 'Игра с кубками', 'Jeu des gobelets', 'Gioco dei bicchieri'],
        ['Jogo da Marmota', 'Whack-a-Mole', 'Golpea al topo', 'Maulwurfspiel', 'モグラたたき', 'Ударь крота', 'Tape-taupe', 'Colpisci la talpa'],
        ['Mega Jogo da Memória Gourmet', 'Gourmet Memory Game', 'Memoria gourmet', 'Gourmet-Memory', 'グルメ神経衰弱', 'Гурманская память', 'Mémoire gourmande', 'Memoria gourmet'],
        ['Mega Jogo da Memória: Banquete Completo', 'Mega Memory Game: Complete Feast', 'Mega juego de memoria: Banquete completo', 'Mega-Memory: Komplettes Festmahl', 'メガ記憶ゲーム：ごちそう', 'Мега-игра на память: Полный пир', 'Méga jeu de mémoire : Banquet complet', 'Mega gioco di memoria: Banchetto completo'],
        ['Magnitude', 'Magnitude', 'Magnitud', 'Größenvergleich', '大きさ比べ', 'Сравнение размеров', 'Grandeur', 'Grandezza'],
        ['Solitário', 'Solitaire', 'Solitario', 'Solitär', 'ソリティア', 'Пасьянс', 'Réussite', 'Solitario'],
        ['Tetris', 'Tetris', 'Tetris', 'Tetris', 'テトリス', 'Тетрис', 'Tetris', 'Tetris'],
        ['Acerte o Famoso', 'Guess the Celebrity', 'Adivina al famoso', 'Berühmtheit erraten', '有名人当て', 'Угадай знаменитость', 'Devinez la célébrité', 'Indovina il personaggio famoso'],
        ['← Voltar ao menu', '← Back to menu', '← Volver al menú', '← Zurück zum Menü', '← メニューに戻る', '← Вернуться в меню', '← Retour au menu', '← Torna al menu'],
        ['← Voltar ao Menu', '← Back to menu', '← Volver al menú', '← Zurück zum Menü', '← メニューに戻る', '← Вернуться в меню', '← Retour au menu', '← Torna al menu'],
        ['Voltar ao menu', 'Back to menu', 'Volver al menú', 'Zurück zum Menü', 'メニューに戻る', 'Вернуться в меню', 'Retour au menu', 'Torna al menu'],
        ['Voltar ao Menu', 'Back to menu', 'Volver al menú', 'Zurück zum Menü', 'メニューに戻る', 'Вернуться в меню', 'Retour au menu', 'Torna al menu'],
        ['Retornar ao menu', 'Return to menu', 'Volver al menú', 'Zum Menü zurückkehren', 'メニューに戻る', 'Вернуться в меню', 'Retourner au menu', 'Torna al menu'],
        ['Voltar à primeira questão', 'Back to the first question', 'Volver a la primera pregunta', 'Zur ersten Frage zurück', '最初の問題に戻る', 'Вернуться к первому вопросу', 'Revenir à la première question', 'Torna alla prima domanda'],
        ['Tocar trilha sonora', 'Play soundtrack', 'Reproducir banda sonora', 'Soundtrack abspielen', 'サウンドトラックを再生', 'Включить саундтрек', 'Lire la bande originale', 'Riproduci colonna sonora'],
        ['Tocar trilha', 'Play music', 'Reproducir música', 'Musik abspielen', '音楽を再生', 'Включить музыку', 'Lire la musique', 'Riproduci musica'],
        ['Ativar trilha', 'Enable soundtrack', 'Activar banda sonora', 'Soundtrack aktivieren', 'サウンドトラックを有効にする', 'Включить саундтрек', 'Activer la bande originale', 'Attiva colonna sonora'],
        ['🎵 Ativar trilha', '🎵 Enable soundtrack', '🎵 Activar banda sonora', '🎵 Soundtrack aktivieren', '🎵 サウンドトラックを有効にする', '🎵 Включить саундтрек', '🎵 Activer la bande originale', '🎵 Attiva colonna sonora'],
        ['Ativar música', 'Enable music', 'Activar música', 'Musik aktivieren', '音楽を有効にする', 'Включить музыку', 'Activer la musique', 'Attiva musica'],
        ['🔊 Mudo', '🔊 Sound off', '🔊 Silenciar', '🔊 Ton aus', '🔊 ミュート', '🔊 Без звука', '🔊 Muet', '🔊 Muto'],
        ['Pausar trilha sonora', 'Pause soundtrack', 'Pausar banda sonora', 'Soundtrack pausieren', 'サウンドトラックを一時停止', 'Приостановить саундтрек', 'Mettre en pause la bande originale', 'Metti in pausa la colonna sonora'],
        ['Pausar trilha', 'Pause music', 'Pausar música', 'Musik pausieren', '音楽を一時停止', 'Приостановить музыку', 'Mettre la musique en pause', 'Metti in pausa la musica'],
        ['Pausar música', 'Pause music', 'Pausar música', 'Musik pausieren', '音楽を一時停止', 'Приостановить музыку', 'Mettre la musique en pause', 'Metti in pausa la musica'],
        ['Trilha desligada', 'Soundtrack off', 'Banda sonora apagada', 'Soundtrack aus', 'サウンドトラック停止中', 'Саундтрек выключен', 'Bande originale désactivée', 'Colonna sonora disattivata'],
        ['Reiniciar jogo', 'Restart game', 'Reiniciar juego', 'Spiel neu starten', 'ゲームを再開', 'Начать игру заново', 'Recommencer le jeu', 'Riavvia gioco'],
        ['Reiniciar Jogo', 'Restart Game', 'Reiniciar juego', 'Spiel neu starten', 'ゲームを再開', 'Начать игру заново', 'Recommencer le jeu', 'Riavvia gioco'],
        ['Novo Jogo', 'New Game', 'Nuevo juego', 'Neues Spiel', '新しいゲーム', 'Новая игра', 'Nouvelle partie', 'Nuova partita'],
        ['Jogar novamente', 'Play again', 'Jugar de nuevo', 'Erneut spielen', 'もう一度プレイ', 'Играть снова', 'Rejouer', 'Gioca di nuovo'],
        ['Jogar novamente 🔄', 'Play again 🔄', 'Jugar de nuevo 🔄', 'Erneut spielen 🔄', 'もう一度プレイ 🔄', 'Играть снова 🔄', 'Rejouer 🔄', 'Gioca di nuovo 🔄'],
        ['Tentar novamente', 'Try again', 'Intentar de nuevo', 'Erneut versuchen', 'もう一度試す', 'Попробовать снова', 'Réessayer', 'Riprova'],
        ['Começar', 'Start', 'Comenzar', 'Starten', '開始', 'Начать', 'Commencer', 'Inizia'],
        ['Começar jogo', 'Start game', 'Iniciar juego', 'Spiel starten', 'ゲーム開始', 'Начать игру', 'Démarrer le jeu', 'Inizia il gioco'],
        ['Começar Quiz', 'Start Quiz', 'Empezar el quiz', 'Quiz starten', 'クイズを開始', 'Начать викторину', 'Commencer le quiz', 'Inizia il quiz'],
        ['Começar Charadas', 'Start Riddles', 'Empezar acertijos', 'Rätsel starten', 'なぞなぞを開始', 'Начать загадки', 'Commencer les énigmes', 'Inizia gli indovinelli'],
        ['Mostrar Dica', 'Show Hint', 'Mostrar pista', 'Hinweis anzeigen', 'ヒントを表示', 'Показать подсказку', 'Afficher l’indice', 'Mostra suggerimento'],
        ['Próxima', 'Next', 'Siguiente', 'Weiter', '次へ', 'Далее', 'Suivant', 'Avanti'],
        ['Próxima rodada', 'Next round', 'Siguiente ronda', 'Nächste Runde', '次のラウンド', 'Следующий раунд', 'Manche suivante', 'Prossimo round'],
        ['Próxima pergunta', 'Next question', 'Siguiente pregunta', 'Nächste Frage', '次の問題', 'Следующий вопрос', 'Question suivante', 'Prossima domanda'],
        ['Próxima bandeira', 'Next flag', 'Siguiente bandera', 'Nächste Flagge', '次の国旗', 'Следующий флаг', 'Drapeau suivant', 'Prossima bandiera'],
        ['Ver resultado', 'See results', 'Ver resultado', 'Ergebnis ansehen', '結果を見る', 'Посмотреть результат', 'Voir le résultat', 'Vedi risultato'],
        ['Jogar novamente 🔄', 'Play again 🔄', 'Jugar de nuevo 🔄', 'Erneut spielen 🔄', 'もう一度プレイ 🔄', 'Играть снова 🔄', 'Rejouer 🔄', 'Gioca di nuovo 🔄'],
        ['Pontos', 'Points', 'Puntos', 'Punkte', 'ポイント', 'Очки', 'Points', 'Punti'],
        ['Pontos:', 'Points:', 'Puntos:', 'Punkte:', 'ポイント：', 'Очки:', 'Points :', 'Punti:'],
        ['Pontos acumulados:', 'Accumulated points:', 'Puntos acumulados:', 'Gesammelte Punkte:', '累計ポイント：', 'Накопленные очки:', 'Points cumulés :', 'Punti accumulati:'],
        ['Pontos da partida:', 'Game points:', 'Puntos de la partida:', 'Punkte dieser Partie:', '今回のポイント：', 'Очки за игру:', 'Points de la partie :', 'Punti della partita:'],
        ['Total no sistema:', 'Total score:', 'Puntuación total:', 'Gesamtpunktzahl:', '合計スコア：', 'Общий счёт:', 'Score total :', 'Punteggio totale:'],
        ['Questão', 'Question', 'Pregunta', 'Frage', '問題', 'Вопрос', 'Question', 'Domanda'],
        ['Pergunta', 'Question', 'Pregunta', 'Frage', '問題', 'Вопрос', 'Question', 'Domanda'],
        ['Rodada', 'Round', 'Ronda', 'Runde', 'ラウンド', 'Раунд', 'Manche', 'Round'],
        ['Pontos acumulados', 'Accumulated points', 'Puntos acumulados', 'Gesammelte Punkte', '累計ポイント', 'Накопленные очки', 'Points cumulés', 'Punti accumulati'],
        ['Prêmio atual', 'Current prize', 'Premio actual', 'Aktueller Gewinn', '現在の賞金', 'Текущий приз', 'Gain actuel', 'Premio attuale'],
        ['Prêmio Garantido', 'Guaranteed prize', 'Premio garantizado', 'Garantierter Gewinn', '保証された賞金', 'Гарантированный приз', 'Gain garanti', 'Premio garantito'],
        ['Regras rápidas', 'Quick rules', 'Reglas rápidas', 'Kurzregeln', '簡単なルール', 'Краткие правила', 'Règles rapides', 'Regole rapide'],
        ['Lifelines', 'Lifelines', 'Comodines', 'Joker', 'ライフライン', 'Подсказки', 'Jokers', 'Aiuti'],
        ['Disponível', 'Available', 'Disponible', 'Verfügbar', '使用可能', 'Доступно', 'Disponible', 'Disponibile'],
        ['Usada', 'Used', 'Usada', 'Verwendet', '使用済み', 'Использовано', 'Utilisée', 'Usata'],
        ['Dificuldade:', 'Difficulty:', 'Dificultad:', 'Schwierigkeit:', '難易度：', 'Сложность:', 'Difficulté :', 'Difficoltà:'],
        ['Fácil (4x4)', 'Easy (4x4)', 'Fácil (4x4)', 'Einfach (4x4)', '簡単 (4x4)', 'Лёгкий (4x4)', 'Facile (4x4)', 'Facile (4x4)'],
        ['Médio (6x6)', 'Medium (6x6)', 'Medio (6x6)', 'Mittel (6x6)', '普通 (6x6)', 'Средний (6x6)', 'Moyen (6x6)', 'Medio (6x6)'],
        ['Difícil (8x8)', 'Hard (8x8)', 'Difícil (8x8)', 'Schwer (8x8)', '難しい (8x8)', 'Сложный (8x8)', 'Difficile (8x8)', 'Difficile (8x8)'],
        ['Movimentos:', 'Moves:', 'Movimientos:', 'Züge:', '手数：', 'Ходы:', 'Coups :', 'Mosse:'],
        ['Tempo:', 'Time:', 'Tiempo:', 'Zeit:', '時間：', 'Время:', 'Temps :', 'Tempo:'],
        ['Vazio', 'Empty', 'Vacío', 'Leer', '空', 'Пусто', 'Vide', 'Vuoto'],
        ['Erros:', 'Mistakes:', 'Errores:', 'Fehler:', 'ミス：', 'Ошибки:', 'Erreurs :', 'Errori:'],
        ['Geografia mundial', 'World Geography', 'Geografía mundial', 'Weltgeografie', '世界の地理', 'Мировая география', 'Géographie mondiale', 'Geografia mondiale'],
        ['Resultado final', 'Final result', 'Resultado final', 'Endergebnis', '最終結果', 'Итоговый результат', 'Résultat final', 'Risultato finale'],
        ['De que país é esta bandeira?', 'Which country does this flag belong to?', '¿De qué país es esta bandera?', 'Zu welchem Land gehört diese Flagge?', 'この旗はどこの国ですか？', 'Какой стране принадлежит этот флаг?', 'À quel pays appartient ce drapeau ?', 'Di quale paese è questa bandiera?'],
        ['Qual é a capital?', 'What is the capital?', '¿Cuál es la capital?', 'Was ist die Hauptstadt?', '首都はどこですか？', 'Какая столица?', 'Quelle est la capitale ?', 'Qual è la capitale?'],
        ['Próxima pergunta', 'Next question', 'Siguiente pregunta', 'Nächste Frage', '次の問題', 'Следующий вопрос', 'Question suivante', 'Prossima domanda'],
        ['Sua Frota', 'Your Fleet', 'Tu flota', 'Deine Flotte', '自分の艦隊', 'Ваш флот', 'Votre flotte', 'La tua flotta'],
        ['Águas Inimigas', 'Enemy Waters', 'Aguas enemigas', 'Feindliche Gewässer', '敵の海域', 'Вражеские воды', 'Eaux ennemies', 'Acque nemiche'],
        ['Tentativas restantes:', 'Attempts remaining:', 'Intentos restantes:', 'Verbleibende Versuche:', '残り回数：', 'Осталось попыток:', 'Tentatives restantes :', 'Tentativi rimasti:'],
        ['Fim de jogo! 🎉', 'Game over! 🎉', '¡Fin del juego! 🎉', 'Spiel vorbei! 🎉', 'ゲーム終了！🎉', 'Игра окончена! 🎉', 'Fin de la partie ! 🎉', 'Fine del gioco! 🎉'],
        ['Sua pontuação nesta partida:', 'Your score in this game:', 'Tu puntuación en esta partida:', 'Deine Punktzahl in dieser Partie:', '今回のスコア：', 'Ваш счёт в этой игре:', 'Votre score pour cette partie :', 'Il tuo punteggio in questa partita:'],
        ['Sair antes do fim cancela os pontos desta partida.', 'Leaving before the end cancels this game’s points.', 'Salir antes del final anula los puntos de esta partida.', 'Wenn du vor dem Ende gehst, verfallen die Punkte dieser Partie.', '終了前に退出すると、このゲームのポイントは無効になります。', 'Выход до конца отменит очки за эту игру.', 'Quitter avant la fin annule les points de cette partie.', 'Uscire prima della fine annulla i punti di questa partita.'],
        ['10 famosos sorteados por partida, sem repetição. Você tem 3 chances; a foto clareia a cada erro.', '10 randomly selected celebrities per game, no repeats. You have 3 tries; the photo gets clearer after each wrong answer.', '10 famosos al azar por partida, sin repetir. Tienes 3 intentos; la foto se aclara con cada error.', '10 zufällig ausgewählte Prominente pro Spiel, ohne Wiederholung. Du hast 3 Versuche; nach jedem Fehler wird das Bild klarer.', '毎回ランダムに選ばれる有名人10人（重複なし）。チャンスは3回。間違えるたびに写真が鮮明になります。', 'В каждой игре 10 случайных знаменитостей без повторов. У вас 3 попытки; после каждой ошибки фото становится чётче.', '10 célébrités tirées au sort par partie, sans répétition. Vous avez 3 essais ; la photo devient plus nette à chaque erreur.', '10 personaggi famosi casuali per partita, senza ripetizioni. Hai 3 tentativi; la foto diventa più nitida a ogni errore.'],
        ['Versão web independente. Clique nas letras, use a dica e tente adivinhar a palavra antes de ficar sem tentativas.', 'Standalone web version. Click the letters, use the hint, and guess the word before you run out of tries.', 'Versión web independiente. Haz clic en las letras, usa la pista e adivina la palabra antes de quedarte sin intentos.', 'Eigenständige Webversion. Klicke auf die Buchstaben, nutze den Hinweis und errate das Wort, bevor dir die Versuche ausgehen.', '独立したウェブ版です。文字をクリックし、ヒントを使って、回数がなくなる前に単語を当てましょう。', 'Отдельная веб-версия. Нажимайте буквы, используйте подсказку и угадайте слово, пока не закончились попытки.', 'Version web indépendante. Cliquez sur les lettres, utilisez l’indice et trouvez le mot avant la fin des essais.', 'Versione web indipendente. Clicca sulle lettere, usa il suggerimento e indovina la parola prima di esaurire i tentativi.'],
        ['Use o botão de dica apenas uma vez por rodada.', 'Use the hint button only once per round.', 'Usa el botón de pista solo una vez por ronda.', 'Verwende den Hinweis-Button nur einmal pro Runde.', 'ヒントボタンは1ラウンドにつき1回だけ使えます。', 'Используйте подсказку только один раз за раунд.', 'N’utilisez le bouton d’indice qu’une fois par manche.', 'Usa il pulsante suggerimento una sola volta per round.'],
        ['A marmota vai aparecer em diferentes buracos. Acerte nela antes que se esconda!', 'The groundhog will appear in different holes. Hit it before it hides!', 'La marmota aparecerá en distintos agujeros. ¡Golpéala antes de que se esconda!', 'Das Murmeltier erscheint in verschiedenen Löchern. Triff es, bevor es sich versteckt!', 'モグラがいろいろな穴から現れます。隠れる前に叩きましょう！', 'Сурок будет появляться в разных норках. Попадите в него, пока он не спрятался!', 'La marmotte apparaîtra dans différents trous. Tapez-la avant qu’elle ne se cache !', 'La marmotta apparirà in buche diverse. Colpiscila prima che si nasconda!'],
        ['Aperte “Iniciar jogo” para começar.', 'Press “Start game” to begin.', 'Pulsa «Iniciar juego» para empezar.', 'Drücke auf „Spiel starten“, um zu beginnen.', '「ゲーム開始」を押して始めましょう。', 'Нажмите «Начать игру», чтобы начать.', 'Appuyez sur « Démarrer le jeu » pour commencer.', 'Premi «Inizia il gioco» per iniziare.'],
        ['Aperte “Começar” para esconder a moeda.', 'Press “Start” to hide the coin.', 'Pulsa «Comenzar» para esconder la moneda.', 'Drücke auf „Starten“, um die Münze zu verstecken.', '「開始」を押してコインを隠しましょう。', 'Нажмите «Начать», чтобы спрятать монету.', 'Appuyez sur « Commencer » pour cacher la pièce.', 'Premi «Inizia» per nascondere la moneta.'],
        ['Acompanhe a moeda enquanto os copos trocam de lugar. Depois, escolha o copo que esconde a moeda!', 'Follow the coin as the cups switch places. Then choose the cup hiding the coin!', 'Sigue la moneda mientras los vasos cambian de lugar. ¡Después, elige el vaso que la esconde!', 'Verfolge die Münze, während die Becher ihre Plätze tauschen. Wähle anschließend den Becher mit der Münze!', 'カップが入れ替わる間コインを追いましょう。その後、コインが隠れているカップを選びます！', 'Следите за монетой, пока стаканы меняются местами. Затем выберите стакан с монетой!', 'Suivez la pièce lorsque les gobelets changent de place. Choisissez ensuite celui qui la cache !', 'Segui la moneta mentre i bicchieri si scambiano. Poi scegli quello che la nasconde!'],
        ['Aperte “Começar” para esconder a moeda.', 'Press “Start” to hide the coin.', 'Pulsa «Comenzar» para esconder la moneda.', 'Drücke auf „Starten“, um die Münze zu verstecken.', '「開始」を押してコインを隠しましょう。', 'Нажмите «Начать», чтобы спрятать монету.', 'Appuyez sur « Commencer » pour cacher la pièce.', 'Premi «Inizia» per nascondere la moneta.'],
        ['Partida concluída!', 'Game complete!', '¡Partida completada!', 'Spiel abgeschlossen!', 'ゲーム終了！', 'Игра завершена!', 'Partie terminée !', 'Partita completata!'],
        ['Encontre todos os navios inimigos. Ao acertar, você joga novamente; ao errar, a vez passa para o computador.', 'Find all enemy ships. A hit gives you another turn; a miss passes the turn to the computer.', 'Encuentra todos los barcos enemigos. Si aciertas, vuelves a jugar; si fallas, el turno pasa al ordenador.', 'Finde alle gegnerischen Schiffe. Bei einem Treffer bist du erneut dran; bei einem Fehlschuss übernimmt der Computer.', '敵の船をすべて見つけましょう。命中するともう一度、外すとコンピューターの番になります。', 'Найдите все корабли противника. При попадании вы ходите снова, при промахе ход переходит компьютеру.', 'Trouvez tous les navires ennemis. En cas de tir réussi, vous rejouez ; sinon, l’ordinateur prend la main.', 'Trova tutte le navi nemiche. Se colpisci giochi ancora; se manchi, passa il turno al computer.'],
        ['Sua vez! Escolha uma célula nas águas inimigas.', 'Your turn! Choose a cell in enemy waters.', '¡Tu turno! Elige una casilla en aguas enemigas.', 'Du bist dran! Wähle ein Feld in den feindlichen Gewässern.', 'あなたの番です！敵の海域のマスを選んでください。', 'Ваш ход! Выберите клетку во вражеских водах.', 'À vous de jouer ! Choisissez une case dans les eaux ennemies.', 'È il tuo turno! Scegli una casella nelle acque nemiche.'],
        ['Reiniciar jogo', 'Restart game', 'Reiniciar juego', 'Spiel neu starten', 'ゲームを再開', 'Начать игру заново', 'Recommencer le jeu', 'Riavvia gioco'],
        ['O vídeo de água não carregou; exibindo uma animação alternativa.', 'The water video could not be loaded; showing an alternative animation.', 'No se pudo cargar el vídeo del agua; se muestra una animación alternativa.', 'Das Wasservideo konnte nicht geladen werden; eine alternative Animation wird angezeigt.', '水の動画を読み込めませんでした。代わりのアニメーションを表示します。', 'Не удалось загрузить видео воды; показана альтернативная анимация.', 'La vidéo de l’eau n’a pas pu être chargée ; une animation de remplacement est affichée.', 'Impossibile caricare il video dell’acqua; viene mostrata un’animazione alternativa.'],
        ['A trilha não carregou. Confira o arquivo ou abra o jogo por um servidor local.', 'The soundtrack could not be loaded. Check the file or open the game from a local server.', 'No se pudo cargar la banda sonora. Comprueba el archivo o abre el juego desde un servidor local.', 'Der Soundtrack konnte nicht geladen werden. Prüfe die Datei oder öffne das Spiel über einen lokalen Server.', 'サウンドトラックを読み込めませんでした。ファイルを確認するか、ローカルサーバーからゲームを開いてください。', 'Не удалось загрузить саундтрек. Проверьте файл или откройте игру через локальный сервер.', 'La bande originale n’a pas pu être chargée. Vérifiez le fichier ou ouvrez le jeu depuis un serveur local.', 'Impossibile caricare la colonna sonora. Controlla il file o apri il gioco da un server locale.'],
        ['Tente encaixar as peças, complete linhas e supere sua pontuação.', 'Fit the pieces together, clear lines, and beat your high score.', 'Encaja las piezas, completa líneas y supera tu puntuación.', 'Setze die Teile zusammen, vervollständige Reihen und übertriff deinen Rekord.', 'ブロックを組み合わせてラインを消し、ハイスコアを目指しましょう。', 'Собирайте фигуры, заполняйте линии и побейте свой рекорд.', 'Assemblez les pièces, complétez des lignes et battez votre record.', 'Incastra i pezzi, completa le linee e supera il tuo record.'],
        ['Complete linhas, aumente sua pontuação e avance de nível.', 'Clear lines, increase your score, and level up.', 'Completa líneas, aumenta tu puntuación y sube de nivel.', 'Vervollständige Reihen, erhöhe deine Punktzahl und steige auf.', 'ラインを消してスコアを伸ばし、レベルアップしましょう。', 'Заполняйте линии, набирайте очки и повышайте уровень.', 'Complétez des lignes, augmentez votre score et passez au niveau supérieur.', 'Completa le linee, aumenta il punteggio e sali di livello.'],
        ['Próxima peça', 'Next piece', 'Siguiente pieza', 'Nächstes Teil', '次のブロック', 'Следующая фигура', 'Pièce suivante', 'Prossimo pezzo'],
        ['Linhas', 'Lines', 'Líneas', 'Reihen', 'ライン', 'Линии', 'Lignes', 'Linee'],
        ['Nível', 'Level', 'Nivel', 'Level', 'レベル', 'Уровень', 'Niveau', 'Livello'],
        ['Pausar', 'Pause', 'Pausar', 'Pausieren', '一時停止', 'Пауза', 'Pause', 'Pausa'],
        ['Continuar', 'Continue', 'Continuar', 'Fortsetzen', '続ける', 'Продолжить', 'Continuer', 'Continua'],
        ['Jogo pausado.', 'Game paused.', 'Juego pausado.', 'Spiel pausiert.', 'ゲームを一時停止しました。', 'Игра приостановлена.', 'Jeu en pause.', 'Gioco in pausa.'],
        ['Continue! Complete linhas para pontuar.', 'Keep going! Clear lines to score.', '¡Sigue! Completa líneas para puntuar.', 'Weiter so! Vervollständige Reihen, um Punkte zu sammeln.', '続けましょう！ラインを消して得点しましょう。', 'Продолжайте! Заполняйте линии, чтобы набирать очки.', 'Continuez ! Complétez des lignes pour marquer des points.', 'Continua! Completa le linee per fare punti.'],
        ['Boa sorte! Continue até completar o tabuleiro.', 'Good luck! Keep going until the board is full.', '¡Buena suerte! Continúa hasta llenar el tablero.', 'Viel Glück! Spiele weiter, bis das Feld voll ist.', '頑張って！盤面がいっぱいになるまで続けましょう。', 'Удачи! Продолжайте, пока поле не заполнится.', 'Bonne chance ! Continuez jusqu’à ce que le plateau soit rempli.', 'Buona fortuna! Continua finché il tabellone non è pieno.'],
        ['Use as setas do teclado ou os controles na tela.', 'Use the arrow keys or the on-screen controls.', 'Usa las flechas del teclado o los controles en pantalla.', 'Verwende die Pfeiltasten oder die Bildschirmsteuerung.', '矢印キーまたは画面上の操作ボタンを使います。', 'Используйте стрелки на клавиатуре или экранные кнопки.', 'Utilisez les flèches du clavier ou les commandes à l’écran.', 'Usa le frecce della tastiera o i controlli sullo schermo.'],
        ['Mover para a esquerda', 'Move left', 'Mover a la izquierda', 'Nach links bewegen', '左に移動', 'Двигаться влево', 'Déplacer à gauche', 'Sposta a sinistra'],
        ['Girar peça', 'Rotate piece', 'Girar pieza', 'Teil drehen', 'ブロックを回転', 'Повернуть фигуру', 'Tourner la pièce', 'Ruota pezzo'],
        ['Mover para a direita', 'Move right', 'Mover a la derecha', 'Nach rechts bewegen', '右に移動', 'Двигаться вправо', 'Déplacer à droite', 'Sposta a destra'],
        ['Descer peça', 'Move piece down', 'Bajar pieza', 'Teil nach unten bewegen', 'ブロックを下げる', 'Опустить фигуру', 'Descendre la pièce', 'Sposta il pezzo in basso'],
        ['Queda rápida', 'Hard drop', 'Caída rápida', 'Schnell fallen lassen', '高速落下', 'Быстрое падение', 'Chute rapide', 'Caduta rapida'],
        ['Pausar ou continuar', 'Pause or resume', 'Pausar o continuar', 'Pausieren oder fortsetzen', '一時停止または再開', 'Пауза или продолжение', 'Mettre en pause ou reprendre', 'Pausa o continua'],
        ['Ajuste o objeto vermelho em relação à referência azul. Os desafios mudam a cada partida.', 'Adjust the red object relative to the blue reference. Challenges change each game.', 'Ajusta el objeto rojo respecto a la referencia azul. Los desafíos cambian en cada partida.', 'Passe das rote Objekt an die blaue Referenz an. Die Herausforderungen ändern sich in jeder Partie.', '青い基準に合わせて赤いオブジェクトを調整しましょう。お題は毎回変わります。', 'Сравните красный объект с синим эталоном. Задания меняются в каждой игре.', 'Ajustez l’objet rouge par rapport à la référence bleue. Les défis changent à chaque partie.', 'Regola l’oggetto rosso rispetto al riferimento blu. Le sfide cambiano a ogni partita.'],
        ['Use o controle para ajustar o tamanho', 'Use the slider to adjust the size', 'Usa el control para ajustar el tamaño', 'Passe die Größe mit dem Regler an', 'スライダーで大きさを調整してください', 'Используйте ползунок, чтобы изменить размер', 'Utilisez le curseur pour ajuster la taille', 'Usa il cursore per regolare la dimensione'],
        ['Menor', 'Smaller', 'Más pequeño', 'Kleiner', '小さく', 'Меньше', 'Plus petit', 'Più piccolo'],
        ['Maior', 'Larger', 'Más grande', 'Größer', '大きく', 'Больше', 'Plus grand', 'Più grande'],
        ['Confirmar tamanho', 'Confirm size', 'Confirmar tamaño', 'Größe bestätigen', '大きさを確定', 'Подтвердить размер', 'Confirmer la taille', 'Conferma dimensione'],
        ['Desafio concluído!', 'Challenge complete!', '¡Desafío completado!', 'Herausforderung abgeschlossen!', 'チャレンジ完了！', 'Задание выполнено!', 'Défi terminé !', 'Sfida completata!'],
        ['Escolha uma das quatro alternativas', 'Choose one of the four options', 'Elige una de las cuatro opciones', 'Wähle eine der vier Antworten', '4つの選択肢から1つ選んでください', 'Выберите один из четырёх вариантов', 'Choisissez l’une des quatre réponses', 'Scegli una delle quattro opzioni'],
        ['Modo de Jogo:', 'Game Mode:', 'Modo de juego:', 'Spielmodus:', 'ゲームモード：', 'Режим игры:', 'Mode de jeu :', 'Modalità di gioco:'],
        ['Amigos (2 Jogadores)', 'Friends (2 Players)', 'Amigos (2 jugadores)', 'Freunde (2 Spieler)', '友達（2人プレイ）', 'Друзья (2 игрока)', 'Amis (2 joueurs)', 'Amici (2 giocatori)'],
        ['Contra o Robô (I.A.)', 'Against the Robot (AI)', 'Contra el robot (IA)', 'Gegen den Roboter (KI)', 'ロボットと対戦（AI）', 'Против робота (ИИ)', 'Contre le robot (IA)', 'Contro il robot (IA)'],
        ['Empates:', 'Draws:', 'Empates:', 'Unentschieden:', '引き分け：', 'Ничьи:', 'Égalités :', 'Pareggi:'],
        ['Ativar música', 'Enable music', 'Activar música', 'Musik aktivieren', '音楽を有効にする', 'Включить музыку', 'Activer la musique', 'Attiva musica'],
        ['Próxima Rodada', 'Next Round', 'Siguiente ronda', 'Nächste Runde', '次のラウンド', 'Следующий раунд', 'Manche suivante', 'Prossimo round'],
        ['Zerar Placar', 'Reset Score', 'Reiniciar puntuación', 'Punktestand zurücksetzen', 'スコアをリセット', 'Сбросить счёт', 'Réinitialiser le score', 'Azzera punteggio'],
        ['Como Jogar?', 'How to Play?', '¿Cómo jugar?', 'Wie wird gespielt?', '遊び方', 'Как играть?', 'Comment jouer ?', 'Come si gioca?'],
        ['Entendi, vamos jogar!', 'Got it, let’s play!', '¡Entendido, vamos a jugar!', 'Verstanden, los geht’s!', '分かりました。プレイしましょう！', 'Понятно, играем!', 'Compris, jouons !', 'Capito, giochiamo!'],
        ['O jogo é disputado entre dois jogadores:', 'The game is played between two players:', 'El juego se disputa entre dos jugadores:', 'Das Spiel wird von zwei Spielern gespielt:', 'このゲームは2人で対戦します：', 'В игре участвуют два игрока:', 'Le jeu se joue à deux :', 'La partita si gioca tra due giocatori:'],
        ['Objetivo:', 'Objective:', 'Objetivo:', 'Ziel:', '目的：', 'Цель:', 'Objectif :', 'Obiettivo:'],
        ['Selecione uma das quatro alternativas', 'Choose one of the four options', 'Elige una de las cuatro opciones', 'Wähle eine der vier Antworten', '4つの選択肢から1つ選んでください', 'Выберите один из четырёх вариантов', 'Choisissez l’une des quatre réponses', 'Scegli una delle quattro opzioni'],
        ['Adivinhe a palavra antes de ficar sem tentativas.', 'Guess the word before you run out of tries.', 'Adivina la palabra antes de quedarte sin intentos.', 'Errate das Wort, bevor dir die Versuche ausgehen.', '試行回数がなくなる前に単語を当てましょう。', 'Угадайте слово, пока не закончились попытки.', 'Devinez le mot avant la fin des essais.', 'Indovina la parola prima di esaurire i tentativi.'],
        ['Nenhuma letra restante para revelar.', 'No letters left to reveal.', 'No quedan letras por revelar.', 'Keine Buchstaben mehr aufzudecken.', '表示できる文字はもうありません。', 'Больше нет букв для открытия.', 'Plus aucune lettre à révéler.', 'Non ci sono altre lettere da rivelare.'],
        ['Não foi possível carregar a música.', 'Could not load the music.', 'No se pudo cargar la música.', 'Die Musik konnte nicht geladen werden.', '音楽を読み込めませんでした。', 'Не удалось загрузить музыку.', 'Impossible de charger la musique.', 'Impossibile caricare la musica.'],
        ['Trilha sonora ativada.', 'Soundtrack enabled.', 'Banda sonora activada.', 'Soundtrack aktiviert.', 'サウンドトラックを有効にしました。', 'Саундтрек включён.', 'Bande originale activée.', 'Colonna sonora attivata.'],
        ['Trilha sonora pausada.', 'Soundtrack paused.', 'Banda sonora pausada.', 'Soundtrack pausiert.', 'サウンドトラックを一時停止しました。', 'Саундтрек приостановлен.', 'Bande originale en pause.', 'Colonna sonora in pausa.'],
        ['Trilha sonora em reprodução.', 'Soundtrack playing.', 'Banda sonora en reproducción.', 'Soundtrack wird abgespielt.', 'サウンドトラックを再生中です。', 'Саундтрек воспроизводится.', 'Bande originale en cours de lecture.', 'Colonna sonora in riproduzione.'],
        ['Não foi possível reproduzir a trilha sonora.', 'Could not play the soundtrack.', 'No se pudo reproducir la banda sonora.', 'Der Soundtrack konnte nicht abgespielt werden.', 'サウンドトラックを再生できませんでした。', 'Не удалось воспроизвести саундтрек.', 'Impossible de lire la bande originale.', 'Impossibile riprodurre la colonna sonora.'],
        ['Não foi possível carregar o arquivo da trilha sonora.', 'Could not load the soundtrack file.', 'No se pudo cargar el archivo de la banda sonora.', 'Die Soundtrack-Datei konnte nicht geladen werden.', 'サウンドトラックファイルを読み込めませんでした。', 'Не удалось загрузить файл саундтрека.', 'Impossible de charger le fichier audio.', 'Impossibile caricare il file della colonna sonora.'],
        ['Não foi possível iniciar a trilha sonora.', 'Could not start the soundtrack.', 'No se pudo iniciar la banda sonora.', 'Der Soundtrack konnte nicht gestartet werden.', 'サウンドトラックを開始できませんでした。', 'Не удалось запустить саундтрек.', 'Impossible de démarrer la bande originale.', 'Impossibile avviare la colonna sonora.'],
        ['Não foi possível pausar a trilha sonora.', 'Could not pause the soundtrack.', 'No se pudo pausar la banda sonora.', 'Der Soundtrack konnte nicht pausiert werden.', 'サウンドトラックを一時停止できませんでした。', 'Не удалось приостановить саундтрек.', 'Impossible de mettre la bande originale en pause.', 'Impossibile mettere in pausa la colonna sonora.'],
        ['Não foi possível reproduzir a música.', 'Could not play the music.', 'No se pudo reproducir la música.', 'Die Musik konnte nicht abgespielt werden.', '音楽を再生できませんでした。', 'Не удалось воспроизвести музыку.', 'Impossible de lire la musique.', 'Impossibile riprodurre la musica.'],
        ['Sua vez! Escolha uma célula nas águas inimigas.', 'Your turn! Choose a cell in enemy waters.', '¡Tu turno! Elige una casilla en aguas enemigas.', 'Du bist dran! Wähle ein Feld in den feindlichen Gewässern.', 'あなたの番です！敵の海域のマスを選んでください。', 'Ваш ход! Выберите клетку во вражеских водах.', 'À vous de jouer ! Choisissez une case dans les eaux ennemies.', 'È il tuo turno! Scegli una casella nelle acque nemiche.'],
        ['Bot pensando...', 'Bot is thinking...', 'El bot está pensando...', 'Der Bot denkt nach...', 'ボットが考えています...', 'Бот думает...', 'Le bot réfléchit...', 'Il bot sta pensando...'],
        ['Empate!', 'Draw!', '¡Empate!', 'Unentschieden!', '引き分け！', 'Ничья!', 'Égalité !', 'Pareggio!'],
        ['Acerte as marmotas! Cada acerto vale 10 pontos.', 'Hit the moles! Each hit is worth 10 points.', '¡Golpea a los topos! Cada acierto vale 10 puntos.', 'Triff die Maulwürfe! Jeder Treffer bringt 10 Punkte.', 'モグラを叩こう！1回当たるごとに10ポイント。', 'Попадайте по кротам! Каждое попадание приносит 10 очков.', 'Tapez les taupes ! Chaque coup rapporte 10 points.', 'Colpisci le talpe! Ogni colpo vale 10 punti.'],
        ['Acertou! +10 pontos.', 'Correct! +10 points.', '¡Acertaste! +10 puntos.', 'Richtig! +10 Punkte.', '正解！+10ポイント。', 'Попадание! +10 очков.', 'Bien joué ! +10 points.', 'Corretto! +10 punti.'],
        ['Resposta correta! Você ganhou 100 pontos.', 'Correct answer! You earned 100 points.', '¡Respuesta correcta! Ganaste 100 puntos.', 'Richtige Antwort! Du hast 100 Punkte erhalten.', '正解！100ポイント獲得。', 'Правильный ответ! Вы получили 100 очков.', 'Bonne réponse ! Vous gagnez 100 points.', 'Risposta corretta! Hai ottenuto 100 punti.'],
        ['Fim de jogo! Você fez {score} pontos.', 'Game over! You scored {score} points.', '¡Fin del juego! Hiciste {score} puntos.', 'Spiel vorbei! Du hast {score} Punkte erzielt.', 'ゲーム終了！{score}ポイント獲得。', 'Игра окончена! Вы набрали {score} очков.', 'Fin de la partie ! Vous avez marqué {score} points.', 'Fine del gioco! Hai totalizzato {score} punti.'],
        ['Tentativas restantes: {count}', 'Attempts remaining: {count}', 'Intentos restantes: {count}', 'Verbleibende Versuche: {count}', '残り回数：{count}', 'Осталось попыток: {count}', 'Tentatives restantes : {count}', 'Tentativi rimasti: {count}'],
        ['Rodada {current} de {total}', 'Round {current} of {total}', 'Ronda {current} de {total}', 'Runde {current} von {total}', 'ラウンド {current}/{total}', 'Раунд {current} из {total}', 'Manche {current} sur {total}', 'Round {current} di {total}'],
        ['{score} pontos', '{score} points', '{score} puntos', '{score} Punkte', '{score}ポイント', '{score} очков', '{score} points', '{score} punti'],
        ['Você errou! Veja onde estava a moeda. A partida vai voltar para a fase 1.', 'Wrong! See where the coin was. The game will return to round 1.', '¡Fallaste! Mira dónde estaba la moneda. La partida volverá a la ronda 1.', 'Falsch! Sieh nach, wo die Münze war. Das Spiel beginnt wieder in Runde 1.', '不正解！コインの位置を確認しましょう。ラウンド1に戻ります。', 'Неверно! Посмотрите, где была монета. Игра вернётся к раунду 1.', 'Raté ! Regardez où se trouvait la pièce. La partie reprend à la manche 1.', 'Hai sbagliato! Guarda dov’era la moneta. La partita ripartirà dal round 1.'],
        ['Acerte! A moeda estava nesse copo. +100 pontos.', 'Correct! The coin was under that cup. +100 points.', '¡Correcto! La moneda estaba bajo ese vaso. +100 puntos.', 'Richtig! Die Münze war unter diesem Becher. +100 Punkte.', '正解！コインはそのカップの下でした。+100ポイント。', 'Верно! Монета была под этим стаканом. +100 очков.', 'Bravo ! La pièce était sous ce gobelet. +100 points.', 'Corretto! La moneta era sotto quel bicchiere. +100 punti.'],
        ['Memorize a posição da moeda...', 'Memorize the coin’s position...', 'Memoriza la posición de la moneda...', 'Merke dir die Position der Münze...', 'コインの位置を覚えましょう...', 'Запомните положение монеты...', 'Mémorisez la position de la pièce...', 'Memorizza la posizione della moneta...'],
        ['Onde está a moeda? Escolha um copo.', 'Where is the coin? Choose a cup.', '¿Dónde está la moneda? Elige un vaso.', 'Wo ist die Münze? Wähle einen Becher.', 'コインはどこ？カップを選んでください。', 'Где монета? Выберите стакан.', 'Où est la pièce ? Choisissez un gobelet.', 'Dov’è la moneta? Scegli un bicchiere.'],
        ['Partida reiniciada. Aperte “Tentar novamente” para começar pela fase 1.', 'Game restarted. Press “Try again” to begin at round 1.', 'Partida reiniciada. Pulsa «Intentar de nuevo» para empezar en la ronda 1.', 'Spiel neu gestartet. Drücke auf „Erneut versuchen“, um mit Runde 1 zu beginnen.', 'ゲームを再開しました。「もう一度試す」を押してラウンド1から始めましょう。', 'Игра началась заново. Нажмите «Попробовать снова», чтобы начать с раунда 1.', 'Partie relancée. Appuyez sur « Réessayer » pour reprendre à la manche 1.', 'Partita riavviata. Premi «Riprova» per iniziare dal round 1.'],
        ['Você encontrou a moeda {found} de {total} vezes e fez {score} pontos.', 'You found the coin {found} out of {total} times and scored {score} points.', 'Encontraste la moneda {found} de {total} veces y ganaste {score} puntos.', 'Du hast die Münze {found} von {total} Malen gefunden und {score} Punkte erzielt.', 'コインを{total}回中{found}回見つけ、{score}ポイント獲得しました。', 'Вы нашли монету {found} из {total} раз и набрали {score} очков.', 'Vous avez trouvé la pièce {found} fois sur {total} et marqué {score} points.', 'Hai trovato la moneta {found} volte su {total} e totalizzato {score} punti.'],
        ['Clique em continuar para começar.', 'Click continue to start.', 'Haz clic en continuar para empezar.', 'Klicke auf „Weiter“, um zu beginnen.', '続けるをクリックして開始します。', 'Нажмите «Продолжить», чтобы начать.', 'Cliquez sur continuer pour commencer.', 'Fai clic su continua per iniziare.'],
        ['Use as lifelines com sabedoria: só 1x cada.', 'Use lifelines wisely: each one can be used once.', 'Usa los comodines con cuidado: cada uno solo una vez.', 'Setze Joker mit Bedacht ein: jeden nur einmal.', 'ライフラインはそれぞれ1回だけ使えます。', 'Используйте подсказки с умом: каждую можно применить один раз.', 'Utilisez les jokers avec prudence : chacun une seule fois.', 'Usa gli aiuti con attenzione: ciascuno una sola volta.'],
        ['Vitória! Você conquistou o prêmio máximo.', 'Victory! You won the top prize.', '¡Victoria! Has conseguido el premio máximo.', 'Sieg! Du hast den Hauptgewinn erreicht.', '勝利！最高賞金を獲得しました。', 'Победа! Вы выиграли главный приз.', 'Victoire ! Vous avez remporté le prix maximum.', 'Vittoria! Hai conquistato il premio massimo.'],
        ['Game Over — você saiu com {prize}.', 'Game over — you leave with {prize}.', 'Fin del juego: te llevas {prize}.', 'Spiel vorbei — du gehst mit {prize}.', 'ゲームオーバー — 獲得賞金：{prize}。', 'Игра окончена — ваш выигрыш: {prize}.', 'Fin de la partie — vous repartez avec {prize}.', 'Game over — hai vinto {prize}.'],
        ['Você perdeu. A resposta correta era:', 'You lost. The correct answer was:', 'Perdiste. La respuesta correcta era:', 'Du hast verloren. Die richtige Antwort war:', '不正解。正解は：', 'Вы проиграли. Правильный ответ:', 'Vous avez perdu. La bonne réponse était :', 'Hai perso. La risposta corretta era:'],
        ['Resposta errada. Esta bandeira é de {country}. Voltando à primeira questão...', 'Wrong answer. This flag belongs to {country}. Returning to the first question...', 'Respuesta incorrecta. Esta bandera es de {country}. Volviendo a la primera pregunta...', 'Falsche Antwort. Diese Flagge gehört zu {country}. Zurück zur ersten Frage...', '不正解。この旗は{country}のものです。最初の問題に戻ります...', 'Неверный ответ. Это флаг страны {country}. Возврат к первому вопросу...', 'Mauvaise réponse. Ce drapeau est celui de {country}. Retour à la première question...', 'Risposta errata. Questa bandiera è di {country}. Torno alla prima domanda...'],
        ['Não foi desta vez. A capital correta é {capital}.', 'Not this time. The correct capital is {capital}.', 'Esta vez no. La capital correcta es {capital}.', 'Diesmal nicht. Die richtige Hauptstadt ist {capital}.', '残念。正しい首都は{capital}です。', 'Не угадали. Правильная столица — {capital}.', 'Pas cette fois. La capitale correcte est {capital}.', 'Non questa volta. La capitale corretta è {capital}.'],
        ['Não foi dessa vez. A foto ficou mais nítida; tente novamente!', 'Not this time. The photo is clearer; try again!', 'Esta vez no. La foto está más clara; ¡inténtalo de nuevo!', 'Diesmal nicht. Das Bild ist klarer; versuche es erneut!', '残念。写真が鮮明になりました。もう一度！', 'Не угадали. Фото стало чётче; попробуйте ещё раз!', 'Pas cette fois. La photo est plus nette ; réessayez !', 'Non questa volta. La foto è più nitida; riprova!'],
        ['❌ As tentativas acabaram. Era {name}.', '❌ No tries left. It was {name}.', '❌ Se acabaron los intentos. Era {name}.', '❌ Keine Versuche mehr. Es war {name}.', '❌ 挑戦回数がなくなりました。正解は{name}でした。', '❌ Попытки закончились. Это был(а) {name}.', '❌ Plus d’essais. C’était {name}.', '❌ Tentativi terminati. Era {name}.'],
        ['✅ Acertou! +{score} pontos.', '✅ Correct! +{score} points.', '✅ ¡Correcto! +{score} puntos.', '✅ Richtig! +{score} Punkte.', '✅ 正解！+{score}ポイント。', '✅ Верно! +{score} очков.', '✅ Bonne réponse ! +{score} points.', '✅ Corretto! +{score} punti.'],
        ['🎉 Você venceu!', '🎉 You won!', '🎉 ¡Has ganado!', '🎉 Du hast gewonnen!', '🎉 勝ちました！', '🎉 Вы победили!', '🎉 Vous avez gagné !', '🎉 Hai vinto!'],
        ['🎉 Você perdeu!', '🎉 You lost!', '🎉 ¡Has perdido!', '🎉 Du hast verloren!', '🎉 負けました！', '🎉 Вы проиграли!', '🎉 Vous avez perdu !', '🎉 Hai perso!'],
        ['🏅 Conquista desbloqueada:', '🏅 Achievement unlocked:', '🏅 Logro desbloqueado:', '🏅 Erfolg freigeschaltet:', '🏅 実績解除：', '🏅 Достижение открыто:', '🏅 Succès débloqué :', '🏅 Obiettivo sbloccato:'],
        ['Acerte o Famoso | Buuro', 'Guess the Celebrity | Buuro', 'Adivina al famoso | Buuro', 'Berühmtheit erraten | Buuro', '有名人当て | Buuro', 'Угадай знаменитость | Buuro', 'Devinez la célébrité | Buuro', 'Indovina il personaggio famoso | Buuro'],
        ['Jogo dos Copos | Buuro', 'Cup Game | Buuro', 'Juego de los vasos | Buuro', 'Becherspiel | Buuro', 'カップゲーム | Buuro', 'Игра с кубками | Buuro', 'Jeu des gobelets | Buuro', 'Gioco dei bicchieri | Buuro'],
        ['Jogo da Marmota | Buuro', 'Whack-a-Mole | Buuro', 'Golpea al topo | Buuro', 'Maulwurfspiel | Buuro', 'モグラたたき | Buuro', 'Ударь крота | Buuro', 'Tape-taupe | Buuro', 'Colpisci la talpa | Buuro'],
        ['Magnitude | Buuro', 'Magnitude | Buuro', 'Magnitud | Buuro', 'Größenvergleich | Buuro', '大きさ比べ | Buuro', 'Сравнение размеров | Buuro', 'Grandeur | Buuro', 'Grandezza | Buuro'],
        ['Tetris | Buuro', 'Tetris | Buuro', 'Tetris | Buuro', 'Tetris | Buuro', 'テトリス | Buuro', 'Тетрис | Buuro', 'Tetris | Buuro', 'Tetris | Buuro'],
        ['Tabuleiro de Tetris', 'Tetris board', 'Tablero de Tetris', 'Tetris-Spielfeld', 'テトリスの盤面', 'Поле Tetris', 'Plateau de Tetris', 'Tabellone di Tetris'],
        ['Prévia da próxima peça', 'Next piece preview', 'Vista previa de la siguiente pieza', 'Vorschau des nächsten Teils', '次のブロックのプレビュー', 'Предпросмотр следующей фигуры', 'Aperçu de la pièce suivante', 'Anteprima del prossimo pezzo'],
        ['Tabuleiro de cartas', 'Card board', 'Tablero de cartas', 'Kartenfeld', 'カードの場', 'Игровое поле карт', 'Plateau de cartes', 'Tavolo delle carte'],
        ['Tabuleiro da sua frota', 'Your fleet board', 'Tablero de tu flota', 'Spielfeld deiner Flotte', '自分の艦隊の盤面', 'Поле вашего флота', 'Plateau de votre flotte', 'Tabellone della tua flotta'],
        ['Tabuleiro inimigo, selecione uma célula para atacar', 'Enemy board, select a cell to attack', 'Tablero enemigo, selecciona una casilla para atacar', 'Gegnerisches Spielfeld, wähle ein Feld zum Angriff', '敵の盤面です。攻撃するマスを選んでください', 'Поле противника, выберите клетку для атаки', 'Plateau ennemi, sélectionnez une case à attaquer', 'Tabellone nemico, scegli una casella da attaccare'],
        ['Placar da partida', 'Game scoreboard', 'Marcador de la partida', 'Spielstand', 'ゲームスコア', 'Счёт игры', 'Score de la partie', 'Punteggio della partita'],
        ['Placar e controles', 'Score and controls', 'Marcador y controles', 'Punktestand und Steuerung', 'スコアと操作', 'Счёт и управление', 'Score et commandes', 'Punteggio e controlli'],
        ['Controles do jogo', 'Game controls', 'Controles del juego', 'Spielsteuerung', 'ゲーム操作', 'Управление игрой', 'Commandes du jeu', 'Controlli di gioco'],
        ['Nove buracos', 'Nine holes', 'Nueve agujeros', 'Neun Löcher', '9つの穴', 'Девять норок', 'Neuf trous', 'Nove buche'],
        ['Buraco {index}, vazio', 'Hole {index}, empty', 'Agujero {index}, vacío', 'Loch {index}, leer', '{index}番の穴、空', 'Норка {index}, пусто', 'Trou {index}, vide', 'Buco {index}, vuoto'],
        ['Buraco {index}, marmota!', 'Hole {index}, mole!', 'Agujero {index}, ¡topo!', 'Loch {index}, Maulwurf!', '{index}番の穴、モグラ！', 'Норка {index}, крот!', 'Trou {index}, taupe !', 'Buco {index}, talpa!'],
        ['Copo {index}', 'Cup {index}', 'Vaso {index}', 'Becher {index}', 'カップ {index}', 'Стакан {index}', 'Gobelet {index}', 'Bicchiere {index}'],
        ['Vire para a esquerda', 'Move left', 'Mover a la izquierda', 'Nach links bewegen', '左に移動', 'Двигаться влево', 'Déplacer à gauche', 'Sposta a sinistra'],
        ['Escolha o país correto.', 'Choose the correct country.', 'Elige el país correcto.', 'Wähle das richtige Land.', '正しい国を選んでください。', 'Выберите правильную страну.', 'Choisissez le bon pays.', 'Scegli il paese corretto.'],
        ['Observe a bandeira e escolha o país correto.', 'Look at the flag and choose the correct country.', 'Mira la bandera y elige el país correcto.', 'Sieh dir die Flagge an und wähle das richtige Land.', '旗を見て正しい国を選びましょう。', 'Посмотрите на флаг и выберите правильную страну.', 'Observez le drapeau et choisissez le bon pays.', 'Osserva la bandiera e scegli il paese corretto.'],
        ['Teste seus conhecimentos de geografia reconhecendo capitais do mundo.', 'Test your geography knowledge by identifying world capitals.', 'Pon a prueba tus conocimientos de geografía identificando capitales del mundo.', 'Teste dein Geografiewissen und erkenne Hauptstädte aus aller Welt.', '世界の首都を当てて、地理の知識を試しましょう。', 'Проверьте знания географии, угадывая столицы мира.', 'Testez vos connaissances géographiques en reconnaissant les capitales du monde.', 'Metti alla prova la tua geografia riconoscendo le capitali del mondo.'],
        ['Compare o tamanho de objetos famosos ajustando sua altura.', 'Compare famous objects by adjusting their height.', 'Compara el tamaño de objetos famosos ajustando su altura.', 'Vergleiche berühmte Objekte, indem du ihre Höhe anpasst.', '高さを調整して、有名な物の大きさを比べましょう。', 'Сравнивайте размеры известных объектов, меняя их высоту.', 'Comparez la taille d’objets célèbres en ajustant leur hauteur.', 'Confronta le dimensioni di oggetti famosi regolando la loro altezza.'],
        ['Organize as cartas neste clássico jogo de paciência.', 'Arrange the cards in this classic patience game.', 'Ordena las cartas en este clásico juego de paciencia.', 'Ordne die Karten in diesem klassischen Geduldsspiel.', '定番のソリティアでカードを並べましょう。', 'Раскладывайте карты в классическом пасьянсе.', 'Disposez les cartes dans ce jeu de patience classique.', 'Disponi le carte in questo classico gioco di pazienza.'],
        ['Encontre pares de cartas temáticas de comida com dificuldade ajustável.', 'Match pairs of food-themed cards with adjustable difficulty.', 'Encuentra pares de cartas de comida con dificultad ajustable.', 'Finde passende Essenskarten mit einstellbarem Schwierigkeitsgrad.', '食べ物のカードを組み合わせましょう。難易度を変更できます。', 'Собирайте пары карточек с едой и выбирайте уровень сложности.', 'Associez des cartes sur le thème de la cuisine avec une difficulté réglable.', 'Abbina carte a tema gastronomico con difficoltà regolabile.'],
        ['Conecte os pontos, capture quadrados e vença a partida entre dois jogadores.', 'Connect the dots, capture squares, and win the two-player match.', 'Une los puntos, captura cuadrados y gana la partida de dos jugadores.', 'Verbinde Punkte, erobere Kästchen und gewinne das Duell zu zweit.', '点をつないでマスを取り、二人対戦に勝ちましょう。', 'Соединяйте точки, захватывайте квадраты и побеждайте в игре для двоих.', 'Reliez les points, capturez les carrés et gagnez la partie à deux.', 'Collega i punti, conquista i quadrati e vinci la partita a due.'],
        ['Responda perguntas, use ajudas e tente alcançar o prêmio máximo.', 'Answer questions, use lifelines, and aim for the top prize.', 'Responde preguntas, usa ayudas e intenta ganar el premio máximo.', 'Beantworte Fragen, nutze Hilfen und strebe den Hauptgewinn an.', 'クイズに答え、ライフラインを使って最高賞金を目指しましょう。', 'Отвечайте на вопросы, используйте подсказки и стремитесь к главному призу.', 'Répondez aux questions, utilisez les jokers et visez le prix maximum.', 'Rispondi alle domande, usa gli aiuti e punta al premio massimo.'],
        ['Resolva enigmas divertidos contra o tempo e ganhe pontos.', 'Solve fun riddles against the clock and earn points.', 'Resuelve acertijos divertidos contra reloj y gana puntos.', 'Löse unterhaltsame Rätsel gegen die Zeit und sammle Punkte.', '時間内になぞなぞを解いてポイントを獲得しましょう。', 'Решайте весёлые загадки на время и набирайте очки.', 'Résolvez des énigmes amusantes contre la montre et gagnez des points.', 'Risolvi indovinelli divertenti contro il tempo e guadagna punti.'],
        ['Escolha o nível de dificuldade', 'Choose the difficulty level', 'Elige el nivel de dificultad', 'Wähle den Schwierigkeitsgrad', '難易度を選んでください', 'Выберите уровень сложности', 'Choisissez le niveau de difficulté', 'Scegli il livello di difficoltà'],
        ['🕵️ Acerte o Famoso', '🕵️ Guess the Celebrity', '🕵️ Adivina al famoso', '🕵️ Berühmtheit erraten', '🕵️ 有名人当て', '🕵️ Угадай знаменитость', '🕵️ Devinez la célébrité', '🕵️ Indovina il personaggio famoso'],
        ['🚢 Batalha Naval', '🚢 Battleship', '🚢 Batalla naval', '🚢 Schiffe versenken', '🚢 海戦', '🚢 Морской бой', '🚢 Bataille navale', '🚢 Battaglia navale'],
        ['🌙 Solitário 🌙', '🌙 Solitaire 🌙', '🌙 Solitario 🌙', '🌙 Solitär 🌙', '🌙 ソリティア 🌙', '🌙 Пасьянс 🌙', '🌙 Réussite 🌙', '🌙 Solitario 🌙'],
        ['Trilha: Ahrix - Nova (NoCopyrightSounds), usada sob licença.', 'Soundtrack: Ahrix - Nova (NoCopyrightSounds), used under license.', 'Banda sonora: Ahrix - Nova (NoCopyrightSounds), utilizada bajo licencia.', 'Soundtrack: Ahrix - Nova (NoCopyrightSounds), unter Lizenz verwendet.', 'サウンドトラック：Ahrix - Nova (NoCopyrightSounds)、ライセンスに基づき使用。', 'Саундтрек: Ahrix - Nova (NoCopyrightSounds), используется по лицензии.', 'Bande originale : Ahrix - Nova (NoCopyrightSounds), utilisée sous licence.', 'Colonna sonora: Ahrix - Nova (NoCopyrightSounds), utilizzata su licenza.'],
        ['Foto borrada de uma personalidade famosa', 'Blurred photo of a famous person', 'Foto borrosa de una personalidad famosa', 'Verschwommenes Foto einer berühmten Persönlichkeit', '有名人のぼやけた写真', 'Размытое фото знаменитости', 'Photo floue d’une personnalité célèbre', 'Foto sfocata di una personalità famosa'],
        ['Bandeira misteriosa', 'Mysterious flag', 'Bandera misteriosa', 'Geheimnisvolle Flagge', '謎の国旗', 'Таинственный флаг', 'Drapeau mystérieux', 'Bandiera misteriosa'],
        ['Música', 'Music', 'Música', 'Musik', '音楽', 'Музыка', 'Musique', 'Musica'],
        ['Ativar/Desativar música', 'Turn music on/off', 'Activar/desactivar música', 'Musik ein-/ausschalten', '音楽のオン/オフ', 'Включить/выключить музыку', 'Activer/désactiver la musique', 'Attiva/disattiva musica'],
        ['Música indisponível', 'Music unavailable', 'Música no disponible', 'Musik nicht verfügbar', '音楽を利用できません', 'Музыка недоступна', 'Musique indisponible', 'Musica non disponibile'],
        ['Escolha uma resposta.', 'Choose an answer.', 'Elige una respuesta.', 'Wähle eine Antwort.', '答えを選んでください。', 'Выберите ответ.', 'Choisissez une réponse.', 'Scegli una risposta.'],
        ['Correto! Avançando para a próxima pergunta...', 'Correct! Moving to the next question...', '¡Correcto! Pasando a la siguiente pregunta...', 'Richtig! Weiter zur nächsten Frage...', '正解！次の問題に進みます...', 'Верно! Переходим к следующему вопросу...', 'Correct ! Passage à la question suivante...', 'Corretto! Passaggio alla prossima domanda...'],
        ['Errado! A resposta correta era "{answer}". Final do jogo.', 'Wrong! The correct answer was "{answer}". Game over.', '¡Incorrecto! La respuesta correcta era «{answer}». Fin del juego.', 'Falsch! Die richtige Antwort war „{answer}“. Spiel vorbei.', '不正解！正解は「{answer}」でした。ゲーム終了。', 'Неверно! Правильный ответ: «{answer}». Игра окончена.', 'Faux ! La bonne réponse était « {answer} ». Fin de la partie.', 'Sbagliato! La risposta corretta era «{answer}». Fine del gioco.'],
        ['50/50 usado. Duas opções foram removidas.', '50/50 used. Two options were removed.', 'Comodín 50/50 usado. Se eliminaron dos opciones.', '50/50 verwendet. Zwei Optionen wurden entfernt.', '50/50を使用。選択肢を2つ削除しました。', 'Использовано 50/50. Удалены два варианта.', '50/50 utilisé. Deux réponses ont été éliminées.', '50/50 usato. Sono state rimosse due opzioni.'],
        ['Pergunta pulada. Boa sorte na próxima!', 'Question skipped. Good luck with the next one!', 'Pregunta saltada. ¡Suerte en la siguiente!', 'Frage übersprungen. Viel Glück bei der nächsten!', '問題をスキップしました。次も頑張りましょう！', 'Вопрос пропущен. Удачи со следующим!', 'Question passée. Bonne chance pour la suivante !', 'Domanda saltata. Buona fortuna con la prossima!'],
        ['Parabéns! Você venceu o Jogo do Bilhão e conquistou {prize}!', 'Congratulations! You won the Billionaire Quiz and earned {prize}!', '¡Felicidades! Ganaste el Quiz del millonario y obtuviste {prize}.', 'Glückwunsch! Du hast das Quiz gewonnen und {prize} erspielt!', 'おめでとうございます！クイズに勝利し、賞金{prize}を獲得しました！', 'Поздравляем! Вы выиграли викторину и получили {prize}!', 'Félicitations ! Vous avez gagné le quiz et remporté {prize} !', 'Congratulazioni! Hai vinto il quiz e ottenuto {prize}!'],
        ['Prêmio final: {prize}', 'Final prize: {prize}', 'Premio final: {prize}', 'Hauptgewinn: {prize}', '最終賞金：{prize}', 'Главный приз: {prize}', 'Prix final : {prize}', 'Premio finale: {prize}'],
        ['Resposta correta: {answer}', 'Correct answer: {answer}', 'Respuesta correcta: {answer}', 'Richtige Antwort: {answer}', '正解：{answer}', 'Правильный ответ: {answer}', 'Bonne réponse : {answer}', 'Risposta corretta: {answer}'],
        ['Escolha uma resposta.', 'Choose an answer.', 'Elige una respuesta.', 'Wähle eine Antwort.', '答えを選んでください。', 'Выберите ответ.', 'Choisissez une réponse.', 'Scegli una risposta.'],
        ['🎮 Como Jogar?', '🎮 How to Play?', '🎮 ¿Cómo jugar?', '🎮 Wie wird gespielt?', '🎮 遊び方', '🎮 Как играть?', '🎮 Comment jouer ?', '🎮 Come si gioca?'],
        ['O jogo é disputado entre dois jogadores:', 'The game is played between two players:', 'El juego se disputa entre dos jugadores:', 'Das Spiel wird von zwei Spielern gespielt:', 'このゲームは2人で対戦します：', 'В игре участвуют два игрока:', 'Le jeu se joue à deux :', 'La partita si gioca tra due giocatori:'],
        ['No modo Contra o Robô, você joga como', 'In Robot mode, you play as', 'En el modo contra el robot, juegas como', 'Im Robotermodus spielst du als', 'ロボット対戦では、あなたは', 'В режиме против робота вы играете за', 'En mode Robot, vous jouez en tant que', 'Nella modalità contro il robot, giochi come'],
        ['Clique em qualquer quadrado vazio do tabuleiro para fazer a sua jogada.', 'Click any empty square on the board to make your move.', 'Haz clic en cualquier casilla vacía del tablero para jugar.', 'Klicke auf ein leeres Feld, um deinen Zug zu machen.', '空いているマスをクリックして打ちましょう。', 'Нажмите на любую пустую клетку, чтобы сделать ход.', 'Cliquez sur une case vide pour jouer.', 'Clicca su una casella vuota per fare la tua mossa.'],
        ['Fileirar 3 símbolos iguais primeiro (na horizontal, vertical ou diagonal).', 'Be the first to line up 3 matching symbols (horizontally, vertically, or diagonally).', 'Alinea primero 3 símbolos iguales (en horizontal, vertical o diagonal).', 'Bringe zuerst 3 gleiche Symbole in eine Reihe (horizontal, vertikal oder diagonal).', '縦・横・斜めのいずれかに同じ記号を3つ並べると勝ちです。', 'Первым расположите 3 одинаковых символа в ряд (по горизонтали, вертикали или диагонали).', 'Alignez 3 symboles identiques en premier (horizontalement, verticalement ou en diagonale).', 'Allinea per primo 3 simboli uguali (in orizzontale, verticale o diagonale).'],
        ['O tabuleiro simula um teclado numérico (posições 7, 8, 9 no topo e 1, 2, 3 na base).', 'The board mirrors a numeric keypad (7, 8, 9 at the top and 1, 2, 3 at the bottom).', 'El tablero simula un teclado numérico (7, 8, 9 arriba y 1, 2, 3 abajo).', 'Das Spielfeld entspricht einem Ziffernblock (7, 8, 9 oben und 1, 2, 3 unten).', '盤面はテンキーの配置です（上段が7、8、9、下段が1、2、3）。', 'Поле повторяет цифровую клавиатуру (7, 8, 9 сверху и 1, 2, 3 снизу).', 'Le plateau reprend un pavé numérique (7, 8, 9 en haut et 1, 2, 3 en bas).', 'Il tabellone riproduce il tastierino numerico (7, 8, 9 in alto e 1, 2, 3 in basso).'],
        ['Turno do {player}', '{player}’s turn', 'Turno de {player}', 'Spieler {player} ist dran', ' {player}の番です', 'Ход игрока {player}', 'Au tour de {player}', 'Turno di {player}'],
        ['{player} é o vencedor!!!', '{player} is the winner!!!', '¡¡¡{player} es el ganador!!!', '{player} hat gewonnen!!!', '{player}の勝ちです！！！', '{player} победил!!!', '{player} est le gagnant !!!', '{player} è il vincitore!!!'],
        ['EMPATE!!!', 'DRAW!!!', '¡¡¡EMPATE!!!', 'UNENTSCHIEDEN!!!', '引き分け！！！', 'НИЧЬЯ!!!', 'ÉGALITÉ !!!', 'PAREGGIO!!!'],
        ['Vire para a esquerda', 'Move left', 'Mover a la izquierda', 'Nach links bewegen', '左に移動', 'Двигаться влево', 'Déplacer à gauche', 'Sposta a sinistra'],
        ['Tiro na água... Vez do inimigo.', 'Splash... Enemy’s turn.', 'Agua... Turno del enemigo.', 'Wasser... Der Gegner ist dran.', '海に命中... 敵の番です。', 'Мимо... Ход противника.', 'À l’eau... Au tour de l’ennemi.', 'Acqua... Turno del nemico.'],
        ['🎯 Acertou um navio inimigo! Jogue novamente.', '🎯 You hit an enemy ship! Play again.', '🎯 ¡Has acertado un barco enemigo! Juega otra vez.', '🎯 Du hast ein gegnerisches Schiff getroffen! Du bist erneut dran.', '🎯 敵の船に命中！もう一度プレイ。', '🎯 Вы попали во вражеский корабль! Ваш ход.', '🎯 Vous avez touché un navire ennemi ! Rejouez.', '🎯 Hai colpito una nave nemica! Gioca ancora.'],
        ['🎯 Você afundou o {ship} inimigo! Jogue novamente.', '🎯 You sank the enemy {ship}! Play again.', '🎯 ¡Has hundido el {ship} enemigo! Juega otra vez.', '🎯 Du hast das feindliche Schiff {ship} versenkt! Du bist erneut dran.', '🎯 敵の{ship}を撃沈！もう一度プレイ。', '🎯 Вы потопили вражеский корабль «{ship}»! Ваш ход.', '🎯 Vous avez coulé le {ship} ennemi ! Rejouez.', '🎯 Hai affondato la {ship} nemica! Gioca ancora.'],
        ['🌊 Tiro na água... Vez do inimigo.', '🌊 Splash... Enemy’s turn.', '🌊 Agua... Turno del enemigo.', '🌊 Wasser... Der Gegner ist dran.', '🌊 海に命中... 敵の番です。', '🌊 Мимо... Ход противника.', '🌊 À l’eau... Au tour de l’ennemi.', '🌊 Acqua... Turno del nemico.'],
        ['🔥 O inimigo acertou um navio e joga novamente!', '🔥 The enemy hit a ship and gets another turn!', '🔥 ¡El enemigo ha acertado un barco y vuelve a jugar!', '🔥 Der Gegner hat ein Schiff getroffen und ist erneut dran!', '🔥 敵が船に命中。もう一度攻撃します！', '🔥 Противник попал в корабль и ходит снова!', '🔥 L’ennemi a touché un navire et rejoue !', '🔥 Il nemico ha colpito una nave e gioca ancora!'],
        ['🔥 O inimigo afundou seu {ship} e joga novamente!', '🔥 The enemy sank your {ship} and gets another turn!', '🔥 ¡El enemigo hundió tu {ship} y vuelve a jugar!', '🔥 Der Gegner hat dein Schiff {ship} versenkt und ist erneut dran!', '🔥 敵があなたの{ship}を撃沈。もう一度攻撃します！', '🔥 Противник потопил ваш корабль «{ship}» и ходит снова!', '🔥 L’ennemi a coulé votre {ship} et rejoue !', '🔥 Il nemico ha affondato la tua {ship} e gioca ancora!'],
        ['💨 O inimigo errou! Sua vez.', '💨 The enemy missed! Your turn.', '💨 ¡El enemigo falló! Tu turno.', '💨 Der Gegner hat verfehlt! Du bist dran.', '💨 敵のミス！あなたの番です。', '💨 Противник промахнулся! Ваш ход.', '💨 L’ennemi a raté ! À vous de jouer.', '💨 Il nemico ha mancato! Tocca a te.'],
        ['🏆 Vitória! Você afundou toda a frota inimiga!', '🏆 Victory! You sank the entire enemy fleet!', '🏆 ¡Victoria! ¡Has hundido toda la flota enemiga!', '🏆 Sieg! Du hast die gesamte feindliche Flotte versenkt!', '🏆 勝利！敵艦隊をすべて撃沈しました！', '🏆 Победа! Вы потопили весь вражеский флот!', '🏆 Victoire ! Vous avez coulé toute la flotte ennemie !', '🏆 Vittoria! Hai affondato tutta la flotta nemica!'],
        ['🏆 Você venceu! O computador não tem mais alvos.', '🏆 You won! The computer has no more targets.', '🏆 ¡Ganaste! El ordenador ya no tiene objetivos.', '🏆 Du hast gewonnen! Der Computer hat keine Ziele mehr.', '🏆 勝利！コンピューターに攻撃目標がありません。', '🏆 Вы победили! У компьютера больше нет целей.', '🏆 Vous avez gagné ! L’ordinateur n’a plus de cibles.', '🏆 Hai vinto! Il computer non ha più bersagli.'],
        ['💀 Fim de jogo! O computador afundou sua frota.', '💀 Game over! The computer sank your fleet.', '💀 ¡Fin del juego! El ordenador hundió tu flota.', '💀 Spiel vorbei! Der Computer hat deine Flotte versenkt.', '💀 ゲーム終了！コンピューターに艦隊を撃沈されました。', '💀 Игра окончена! Компьютер потопил ваш флот.', '💀 Fin de la partie ! L’ordinateur a coulé votre flotte.', '💀 Fine del gioco! Il computer ha affondato la tua flotta.'],
        ['Sua vez! Escolha uma célula nas águas inimigas.', 'Your turn! Choose a cell in enemy waters.', '¡Tu turno! Elige una casilla en aguas enemigas.', 'Du bist dran! Wähle ein Feld in den feindlichen Gewässern.', 'あなたの番です！敵の海域のマスを選んでください。', 'Ваш ход! Выберите клетку во вражеских водах.', 'À vous de jouer ! Choisissez une case dans les eaux ennemies.', 'È il tuo turno! Scegli una casella nelle acque nemiche.'],
        ['Porta-aviões', 'Aircraft carrier', 'Portaaviones', 'Flugzeugträger', '航空母艦', 'Авианосец', 'Porte-avions', 'Portaerei'],
        ['Encouraçado', 'Battleship', 'Acorazado', 'Schlachtschiff', '戦艦', 'Линкор', 'Cuirassé', 'Corazzata'],
        ['Destroyer', 'Destroyer', 'Destructor', 'Zerstörer', '駆逐艦', 'Эсминец', 'Destroyer', 'Cacciatorpediniere'],
        ['Submarino', 'Submarine', 'Submarino', 'U-Boot', '潜水艦', 'Подводная лодка', 'Sous-marin', 'Sottomarino'],
        ['Patrulha', 'Patrol boat', 'Patrullera', 'Patrouillenboot', '哨戒艇', 'Патрульный катер', 'Patrouilleur', 'Motovedetta'],
        ['Porta-aviões, afundado', 'Aircraft carrier, sunk', 'Portaaviones, hundido', 'Flugzeugträger, versenkt', '航空母艦、撃沈', 'Авианосец, потоплен', 'Porte-avions, coulé', 'Portaerei, affondata'],
        ['Encouraçado, afundado', 'Battleship, sunk', 'Acorazado, hundido', 'Schlachtschiff, versenkt', '戦艦、撃沈', 'Линкор, потоплен', 'Cuirassé, coulé', 'Corazzata, affondata'],
        ['Destroyer, afundado', 'Destroyer, sunk', 'Destructor, hundido', 'Zerstörer, versenkt', '駆逐艦、撃沈', 'Эсминец, потоплен', 'Destroyer, coulé', 'Cacciatorpediniere, affondato'],
        ['Submarino, afundado', 'Submarine, sunk', 'Submarino, hundido', 'U-Boot, versenkt', '潜水艦、撃沈', 'Подводная лодка, потоплена', 'Sous-marin, coulé', 'Sottomarino, affondato'],
        ['Patrulha, afundado', 'Patrol boat, sunk', 'Patrullera, hundida', 'Patrouillenboot, versenkt', '哨戒艇、撃沈', 'Патрульный катер, потоплен', 'Patrouilleur, coulé', 'Motovedetta, affondata'],
        ['Você errou! Veja onde estava a moeda. A partida vai voltar para a fase 1.', 'Wrong! See where the coin was. The game will return to round 1.', '¡Fallaste! Mira dónde estaba la moneda. La partida volverá a la ronda 1.', 'Falsch! Sieh nach, wo die Münze war. Das Spiel beginnt wieder in Runde 1.', '不正解！コインの位置を確認しましょう。ラウンド1に戻ります。', 'Неверно! Посмотрите, где была монета. Игра вернётся к раунду 1.', 'Raté ! Regardez où se trouvait la pièce. La partie reprend à la manche 1.', 'Hai sbagliato! Guarda dov’era la moneta. La partita ripartirà dal round 1.'],
        ['Acertou! A moeda estava nesse copo. +100 pontos.', 'Correct! The coin was under that cup. +100 points.', '¡Correcto! La moneda estaba bajo ese vaso. +100 puntos.', 'Richtig! Die Münze war unter diesem Becher. +100 Punkte.', '正解！コインはそのカップの下でした。+100ポイント。', 'Верно! Монета была под этим стаканом. +100 очков.', 'Bravo ! La pièce était sous ce gobelet. +100 points.', 'Corretto! La moneta era sotto quel bicchiere. +100 punti.'],
        ['A moeda estava nesse copo', 'The coin was under this cup', 'La moneda estaba bajo este vaso', 'Die Münze war unter diesem Becher', 'コインはこのカップの下でした', 'Монета была под этим стаканом', 'La pièce était sous ce gobelet', 'La moneta era sotto questo bicchiere'],
        ['Trilha:', 'Soundtrack:', 'Banda sonora:', 'Soundtrack:', 'サウンドトラック：', 'Саундтрек:', 'Bande originale :', 'Colonna sonora:'],
        ['Erros cometidos:', 'Mistakes made:', 'Errores cometidos:', 'Begangene Fehler:', 'ミスの回数：', 'Количество ошибок:', 'Erreurs commises :', 'Errori commessi:'],
        ['Vitória épica! Você memorizou o banquete inteiro!\nTempo total: {time}\nErros cometidos: {errors}', 'Epic victory! You memorized the entire feast!\nTotal time: {time}\nMistakes made: {errors}', '¡Victoria épica! ¡Memorizaste todo el banquete!\nTiempo total: {time}\nErrores cometidos: {errors}', 'Epischer Sieg! Du hast das ganze Festmahl auswendig gelernt!\nGesamtzeit: {time}\nBegangene Fehler: {errors}', '大勝利！ごちそうをすべて覚えました！\n合計時間：{time}\nミスの回数：{errors}', 'Эпическая победа! Вы запомнили весь пир!\nОбщее время: {time}\nКоличество ошибок: {errors}', 'Victoire épique ! Vous avez mémorisé tout le festin !\nTemps total : {time}\nErreurs commises : {errors}', 'Vittoria epica! Hai memorizzato tutto il banchetto!\nTempo totale: {time}\nErrori commessi: {errors}'],
        ['Turnos:', 'Turns:', 'Turnos:', 'Züge:', '手数：', 'Ходы:', 'Coups :', 'Turni:'],
        ['Sua vez! Escolha uma célula nas águas inimigas.', 'Your turn! Choose a cell in enemy waters.', '¡Tu turno! Elige una casilla en aguas enemigas.', 'Du bist dran! Wähle ein Feld in den feindlichen Gewässern.', 'あなたの番です！敵の海域のマスを選んでください。', 'Ваш ход! Выберите клетку во вражеских водах.', 'À vous de jouer ! Choisissez une case dans les eaux ennemies.', 'È il tuo turno! Scegli una casella nelle acque nemiche.'],
        ['Você acertou {correct} de {total} perguntas.', 'You answered {correct} out of {total} questions correctly.', 'Acertaste {correct} de {total} preguntas.', 'Du hast {correct} von {total} Fragen richtig beantwortet.', '{total}問中{correct}問正解しました。', 'Правильных ответов: {correct} из {total}.', 'Vous avez trouvé {correct} réponses sur {total}.', 'Hai indovinato {correct} domande su {total}.'],
        ['Você acertou {correct} de {total} bandeiras.', 'You guessed {correct} out of {total} flags correctly.', 'Adivinaste {correct} de {total} banderas.', 'Du hast {correct} von {total} Flaggen richtig erraten.', '{total}問中{correct}問の国旗を当てました。', 'Вы угадали {correct} из {total} флагов.', 'Vous avez deviné {correct} drapeaux sur {total}.', 'Hai indovinato {correct} bandiere su {total}.'],
        ['Qual é a capital {article} {country}?', 'What is the capital of {country}?', '¿Cuál es la capital de {country}?', 'Was ist die Hauptstadt von {country}?', '{country}の首都はどこですか？', 'Какая столица у страны {country}?', 'Quelle est la capitale de {country} ?', 'Qual è la capitale di {country}?'],
        ['Vitória épica! Você memorizou o banquete inteiro!', 'Epic victory! You memorized the entire feast!', '¡Victoria épica! ¡Memorizaste todo el banquete!', 'Epischer Sieg! Du hast das ganze Festmahl auswendig gelernt!', '大勝利！ごちそうをすべて覚えました！', 'Эпическая победа! Вы запомнили весь пир!', 'Victoire épique ! Vous avez mémorisé tout le festin !', 'Vittoria epica! Hai memorizzato tutto il banchetto!'],
        ['Sua vez! Escolha uma célula nas águas inimigas.', 'Your turn! Choose a cell in enemy waters.', '¡Tu turno! Elige una casilla en aguas enemigas.', 'Du bist dran! Wähle ein Feld in den feindlichen Gewässern.', 'あなたの番です！敵の海域のマスを選んでください。', 'Ваш ход! Выберите клетку во вражеских водах.', 'À vous de jouer ! Choisissez une case dans les eaux ennemies.', 'È il tuo turno! Scegli una casella nelle acque nemiche.'],
        ['Pontuação:', 'Score:', 'Puntuación:', 'Punktzahl:', 'スコア：', 'Счёт:', 'Score :', 'Punteggio:'],
        ['Tempo restante:', 'Time remaining:', 'Tiempo restante:', 'Verbleibende Zeit:', '残り時間：', 'Осталось времени:', 'Temps restant :', 'Tempo rimanente:'],
        ['Tempo', 'Time', 'Tiempo', 'Zeit', '時間', 'Время', 'Temps', 'Tempo'],
        ['Linhas', 'Lines', 'Líneas', 'Reihen', 'ライン', 'Линии', 'Lignes', 'Linee'],
        ['Dica', 'Hint', 'Pista', 'Hinweis', 'ヒント', 'Подсказка', 'Indice', 'Suggerimento'],
        ['O navegador não suporta HTML5 Audio.', 'Your browser does not support HTML5 audio.', 'Tu navegador no admite audio HTML5.', 'Dein Browser unterstützt kein HTML5-Audio.', 'お使いのブラウザーはHTML5オーディオに対応していません。', 'Ваш браузер не поддерживает HTML5 Audio.', 'Votre navigateur ne prend pas en charge l’audio HTML5.', 'Il browser non supporta l’audio HTML5.'],
        ['Célula', 'Cell', 'Casilla', 'Zelle', 'マス', 'Клетка', 'Case', 'Casella'],
        ['Navio', 'Ship', 'Barco', 'Schiff', '船', 'Корабль', 'Navire', 'Nave'],
        ['Acerto', 'Hit', 'Acierto', 'Treffer', '命中', 'Попадание', 'Touché', 'Colpito'],
        ['Água', 'Water', 'Agua', 'Wasser', '水', 'Вода', 'Eau', 'Acqua'],
        ['Afundado', 'Sunk', 'Hundido', 'Versenkt', '撃沈', 'Потоплен', 'Coulé', 'Affondato'],
        ['Trilha sonora original ativada.', 'Original soundtrack enabled.', 'Banda sonora original activada.', 'Original-Soundtrack aktiviert.', 'オリジナルサウンドトラックを有効にしました。', 'Оригинальный саундтрек включён.', 'Bande originale activée.', 'Colonna sonora originale attivata.'],
        ['Este navegador não oferece suporte à trilha sonora.', 'This browser does not support the soundtrack.', 'Este navegador no admite la banda sonora.', 'Dieser Browser unterstützt den Soundtrack nicht.', 'このブラウザーはサウンドトラックに対応していません。', 'Этот браузер не поддерживает саундтрек.', 'Ce navigateur ne prend pas en charge la bande originale.', 'Questo browser non supporta la colonna sonora.'],
        ['Fim de Jogo!', 'Game Over!', '¡Fin del juego!', 'Spiel vorbei!', 'ゲームオーバー！', 'Игра окончена!', 'Fin de la partie !', 'Fine del gioco!'],
        ['Marmota!', 'Mole!', '¡Topo!', 'Maulwurf!', 'モグラ！', 'Крот!', 'Taupe !', 'Talpa!'],
        ['Título', 'Title', 'Título', 'Titel', 'タイトル', 'Название', 'Titre', 'Titolo'],
        ['Reiniciar', 'Restart', 'Reiniciar', 'Neustart', '再開', 'Перезапустить', 'Recommencer', 'Riavvia'],
        ['Trilha sonora', 'Soundtrack', 'Banda sonora', 'Soundtrack', 'サウンドトラック', 'Саундтрек', 'Bande originale', 'Colonna sonora'],
        ['Como Jogar? 🎮', 'How to Play? 🎮', '¿Cómo jugar? 🎮', 'Wie wird gespielt? 🎮', '遊び方 🎮', 'Как играть? 🎮', 'Comment jouer ? 🎮', 'Come si gioca? 🎮'],
        ['{cell}, navio', '{cell}, ship', '{cell}, barco', '{cell}, Schiff', '{cell}、船', '{cell}, корабль', '{cell}, navire', '{cell}, nave'],
        ['{cell}, acerto', '{cell}, hit', '{cell}, acierto', '{cell}, Treffer', '{cell}、命中', '{cell}, попадание', '{cell}, touché', '{cell}, colpito'],
        ['{cell}, água', '{cell}, water', '{cell}, agua', '{cell}, Wasser', '{cell}、水', '{cell}, вода', '{cell}, eau', '{cell}, acqua'],
        ['Sair antes do fim cancela os pontos desta partida.', 'Leaving before the end cancels this game’s points.', 'Salir antes del final anula los puntos de esta partida.', 'Wenn du vor dem Ende gehst, verfallen die Punkte dieser Partie.', '終了前に退出すると、このゲームのポイントは無効になります。', 'Выход до конца отменит очки за эту игру.', 'Quitter avant la fin annule les points de cette partie.', 'Uscire prima della fine annulla i punti di questa partita.'],
        ['Acompanhe a moeda enquanto os copos trocam de lugar. Depois, escolha o copo que esconde a moeda!', 'Follow the coin as the cups switch places. Then choose the cup hiding the coin!', 'Sigue la moneda mientras los vasos cambian de lugar. Después, elige el vaso que esconde la moneda.', 'Verfolge die Münze, während die Becher ihre Plätze tauschen. Wähle anschließend den Becher mit der Münze!', 'カップが入れ替わる間コインを追いましょう。その後、コインが隠れているカップを選びます！', 'Следите за монетой, пока стаканы меняются местами. Затем выберите стакан с монетой!', 'Suivez la pièce lorsque les gobelets changent de place. Choisissez ensuite celui qui la cache !', 'Segui la moneta mentre i bicchieri si scambiano. Poi scegli quello che la nasconde!'],
        ['Tempo de jogo:', 'Game time:', 'Tiempo de juego:', 'Spielzeit:', 'プレイ時間：', 'Время игры:', 'Temps de jeu :', 'Tempo di gioco:'],
        ['Tentativas restantes:', 'Attempts remaining:', 'Intentos restantes:', 'Verbleibende Versuche:', '残り回数：', 'Осталось попыток:', 'Tentatives restantes :', 'Tentativi rimasti:'],
        ['A dica é:', 'The hint is:', 'La pista es:', 'Der Hinweis lautet:', 'ヒント：', 'Подсказка:', 'L’indice est :', 'Il suggerimento è:'],
        ['Vencedor:', 'Winner:', 'Ganador:', 'Gewinner:', '勝者：', 'Победитель:', 'Gagnant :', 'Vincitore:'],
        ['Turno do {player}', '{player}’s turn', 'Turno de {player}', 'Spieler {player} ist dran', '{player}の番です', 'Ход игрока {player}', 'Au tour de {player}', 'Turno di {player}'],
        ['{player} é o vencedor!!!', '{player} is the winner!!!', '¡¡¡{player} es el ganador!!!', '{player} hat gewonnen!!!', '{player}の勝ちです！！！', '{player} победил!!!', '{player} est le gagnant !!!', '{player} è il vincitore!!!'],
        ['A marmota vai aparecer em diferentes buracos. Acerte nela antes que se esconda!', 'The groundhog will appear in different holes. Hit it before it hides!', 'La marmota aparecerá en distintos agujeros. ¡Golpéala antes de que se esconda!', 'Das Murmeltier erscheint in verschiedenen Löchern. Triff es, bevor es sich versteckt!', 'モグラがいろいろな穴から現れます。隠れる前に叩きましょう！', 'Сурок будет появляться в разных норках. Попадите в него, пока он не спрятался!', 'La marmotte apparaîtra dans différents trous. Tapez-la avant qu’elle ne se cache !', 'La marmotta apparirà in buche diverse. Colpiscila prima che si nasconda!'],
        ['Jogo da memória', 'Memory game', 'Juego de memoria', 'Gedächtnisspiel', '記憶ゲーム', 'Игра на память', 'Jeu de mémoire', 'Gioco di memoria'],
        ['Tempo total:', 'Total time:', 'Tiempo total:', 'Gesamtzeit:', '合計時間：', 'Общее время:', 'Temps total :', 'Tempo totale:'],
        ['O vídeo de água não carregou; exibindo uma animação alternativa.', 'The water video could not be loaded; showing an alternative animation.', 'No se pudo cargar el vídeo del agua; se muestra una animación alternativa.', 'Das Wasservideo konnte nicht geladen werden; eine alternative Animation wird angezeigt.', '水の動画を読み込めませんでした。代わりのアニメーションを表示します。', 'Не удалось загрузить видео воды; показана альтернативная анимация.', 'La vidéo de l’eau n’a pas pu être chargée ; une animation de remplacement est affichée.', 'Impossibile caricare il video dell’acqua; viene mostrata un’animazione alternativa.'],
        ['🎯 Acertou! +{score} pontos.', '🎯 Correct! +{score} points.', '🎯 ¡Correcto! +{score} puntos.', '🎯 Richtig! +{score} Punkte.', '🎯 正解！+{score}ポイント。', '🎯 Верно! +{score} очков.', '🎯 Bonne réponse ! +{score} points.', '🎯 Corretto! +{score} punti.'],
        ['🏅 Conquista desbloqueada: {name} — {description}', '🏅 Achievement unlocked: {name} — {description}', '🏅 Logro desbloqueado: {name} — {description}', '🏅 Erfolg freigeschaltet: {name} — {description}', '🏅 実績解除：{name} — {description}', '🏅 Достижение открыто: {name} — {description}', '🏅 Succès débloqué : {name} — {description}', '🏅 Obiettivo sbloccato: {name} — {description}'],
        ['Quiz', 'Quiz', 'Cuestionario', 'Quiz', 'クイズ', 'Викторина', 'Quiz', 'Quiz'],
        ['Regras', 'Rules', 'Reglas', 'Regeln', 'ルール', 'Правила', 'Règles', 'Regole'],
        ['Pontos:', 'Points:', 'Puntos:', 'Punkte:', 'ポイント：', 'Очки:', 'Points :', 'Punti:'],
        ['Houve um erro ao carregar a imagem.', 'There was an error loading the image.', 'Hubo un error al cargar la imagen.', 'Beim Laden des Bildes ist ein Fehler aufgetreten.', '画像の読み込み中にエラーが発生しました。', 'Ошибка при загрузке изображения.', 'Une erreur est survenue lors du chargement de l’image.', 'Si è verificato un errore durante il caricamento dell’immagine.'],
        ['Modo:', 'Mode:', 'Modo:', 'Modus:', 'モード：', 'Режим:', 'Mode :', 'Modalità:'],
        ['2 jogadores', '2 players', '2 jugadores', '2 Spieler', '2人プレイ', '2 игрока', '2 joueurs', '2 giocatori'],
        ['Contra o bot', 'Against the bot', 'Contra el bot', 'Gegen den Bot', 'ボットと対戦', 'Против бота', 'Contre le bot', 'Contro il bot'],
        ['Jogador 1', 'Player 1', 'Jugador 1', 'Spieler 1', 'プレイヤー1', 'Игрок 1', 'Joueur 1', 'Giocatore 1'],
        ['Jogador 2', 'Player 2', 'Jugador 2', 'Spieler 2', 'プレイヤー2', 'Игрок 2', 'Joueur 2', 'Giocatore 2'],
        ['Iniciar jogo', 'Start game', 'Iniciar juego', 'Spiel starten', 'ゲーム開始', 'Начать игру', 'Démarrer le jeu', 'Inizia il gioco'],
        ['Rodada:', 'Round:', 'Ronda:', 'Runde:', 'ラウンド：', 'Раунд:', 'Manche :', 'Round:'],
        ['🔊 Música', '🔊 Music', '🔊 Música', '🔊 Musik', '🔊 音楽', '🔊 Музыка', '🔊 Musique', '🔊 Musica'],
        ['Começar', 'Start', 'Comenzar', 'Starten', '開始', 'Начать', 'Commencer', 'Inizia'],
        ['“Conhece-te a ti mesmo.” — Sócrates', '“Know thyself.” — Socrates', '«Conócete a ti mismo». — Sócrates', '„Erkenne dich selbst.“ — Sokrates', '「汝自身を知れ」— ソクラテス', '«Познай самого себя». — Сократ', '« Connais-toi toi-même. » — Socrate', '“Conosci te stesso.” — Socrate'],
        ['Aperte “Iniciar jogo” para começar.', 'Press “Start game” to begin.', 'Pulsa «Iniciar juego» para empezar.', 'Drücke auf „Spiel starten“, um zu beginnen.', '「ゲーム開始」を押して始めましょう。', 'Нажмите «Начать игру», чтобы начать.', 'Appuyez sur « Démarrer le jeu » pour commencer.', 'Premi «Inizia il gioco» per iniziare.'],
        ['Qual é a capital {article} {country}?', 'What is the capital of {country}?', '¿Cuál es la capital de {country}?', 'Was ist die Hauptstadt von {country}?', '{country}の首都はどこですか？', 'Какая столица у страны {country}?', 'Quelle est la capitale de {country} ?', 'Qual è la capitale di {country}?'],
        ['{cell}, navio', '{cell}, ship', '{cell}, barco', '{cell}, Schiff', '{cell}、船', '{cell}, корабль', '{cell}, navire', '{cell}, nave'],
        ['{cell}, acerto', '{cell}, hit', '{cell}, acierto', '{cell}, Treffer', '{cell}、命中', '{cell}, попадание', '{cell}, touché', '{cell}, colpito'],
        ['{cell}, água', '{cell}, water', '{cell}, agua', '{cell}, Wasser', '{cell}、水', '{cell}, вода', '{cell}, eau', '{cell}, acqua'],
        ['Clique em começar para jogar!', 'Click Start to play!', '¡Haz clic en comenzar para jugar!', 'Klicke auf Start, um zu spielen!', '開始をクリックしてプレイしましょう！', 'Нажмите «Начать», чтобы играть!', 'Cliquez sur commencer pour jouer !', 'Fai clic su inizia per giocare!'],
        ['Clique em "Começar Quiz" para iniciar o Jogo do Bilhão.', 'Click “Start Quiz” to begin the Billionaire Quiz.', 'Haz clic en «Empezar el quiz» para iniciar el Quiz del millonario.', 'Klicke auf „Quiz starten“, um das Quiz zu beginnen.', '「クイズを開始」をクリックして億万長者クイズを始めましょう。', 'Нажмите «Начать викторину», чтобы начать игру.', 'Cliquez sur « Commencer le quiz » pour démarrer le quiz.', 'Fai clic su «Inizia il quiz» per iniziare il quiz.'],
        ['Vez de Jogador 1', 'Player 1’s turn', 'Turno del jugador 1', 'Spieler 1 ist dran', 'プレイヤー1の番です', 'Ход игрока 1', 'Au tour du joueur 1', 'Turno del giocatore 1'],
        ['Vez de Jogador 2', 'Player 2’s turn', 'Turno del jugador 2', 'Spieler 2 ist dran', 'プレイヤー2の番です', 'Ход игрока 2', 'Au tour du joueur 2', 'Turno del giocatore 2'],
        ['TOCAR MÚSICA', 'PLAY MUSIC', 'REPRODUCIR MÚSICA', 'MUSIK ABSPIELEN', '音楽を再生', 'ВКЛЮЧИТЬ МУЗЫКУ', 'LIRE LA MUSIQUE', 'RIPRODUCI MUSICA'],
        ['PAUSAR MÚSICA', 'PAUSE MUSIC', 'PAUSAR MÚSICA', 'MUSIK PAUSIEREN', '音楽を一時停止', 'ПРИОСТАНОВИТЬ МУЗЫКУ', 'METTRE EN PAUSE', 'METTI IN PAUSA'],
        ['Total:', 'Total:', 'Total:', 'Gesamt:', '合計：', 'Итого:', 'Total :', 'Totale:'],
        ['Pontos:', 'Points:', 'Puntos:', 'Punkte:', 'ポイント：', 'Очки:', 'Points :', 'Punti:'],
        ['TRILHA SONORA', 'SOUNDTRACK', 'BANDA SONORA', 'SOUNDTRACK', 'サウンドトラック', 'САУНДТРЕК', 'BANDE ORIGINALE', 'COLONNA SONORA'],
        ['Escolha uma resposta.', 'Choose an answer.', 'Elige una respuesta.', 'Wähle eine Antwort.', '答えを選んでください。', 'Выберите ответ.', 'Choisissez une réponse.', 'Scegli una risposta.'],
        ['Tocar música', 'Play music', 'Reproducir música', 'Musik abspielen', '音楽を再生', 'Включить музыку', 'Lire la musique', 'Riproduci musica'],
        ['Pausar música', 'Pause music', 'Pausar música', 'Musik pausieren', '音楽を一時停止', 'Приостановить музыку', 'Mettre la musique en pause', 'Metti in pausa la musica'],
        ['| Total:', '| Total:', '| Total:', '| Gesamt:', '| 合計：', '| Итого:', '| Total :', '| Totale:'],
        ['Clique em começar para jogar!', 'Click Start to play!', '¡Haz clic en comenzar para jugar!', 'Klicke auf Start, um zu spielen!', '開始をクリックしてプレイしましょう！', 'Нажмите «Начать», чтобы играть!', 'Cliquez sur commencer pour jouer !', 'Fai clic su inizia per giocare!'],
        ['✨ Correto! + {score} pts', '✨ Correct! + {score} pts', '✨ ¡Correcto! + {score} pts', '✨ Richtig! + {score} Punkte', '✨ 正解！+{score}ポイント', '✨ Верно! + {score} очков', '✨ Correct ! + {score} pts', '✨ Corretto! + {score} punti'],
        ['Dica: Começa com "{letter}"', 'Hint: Starts with "{letter}"', 'Pista: Empieza por "{letter}"', 'Hinweis: Beginnt mit „{letter}“', 'ヒント：「{letter}」から始まります', 'Подсказка: начинается на «{letter}»', 'Indice : commence par « {letter} »', 'Suggerimento: inizia con "{letter}"'],
        ['Resposta incorreta! A resposta era: {answer}', 'Wrong answer! The answer was: {answer}', '¡Respuesta incorrecta! La respuesta era: {answer}', 'Falsche Antwort! Die Antwort war: {answer}', '不正解！答えは{answer}でした', 'Неверный ответ! Правильный ответ: {answer}', 'Mauvaise réponse ! La réponse était : {answer}', 'Risposta errata! La risposta era: {answer}'],
        ['Tempo esgotado! A resposta era: {answer}', 'Time is up! The answer was: {answer}', '¡Se acabó el tiempo! La respuesta era: {answer}', 'Die Zeit ist abgelaufen! Die Antwort war: {answer}', '時間切れ！答えは{answer}でした', 'Время вышло! Правильный ответ: {answer}', 'Temps écoulé ! La réponse était : {answer}', 'Tempo scaduto! La risposta era: {answer}'],
        ['← → mover · ↑ girar · ↓ descer · Espaço: queda rápida · P: pausar', '← → move · ↑ rotate · ↓ move down · Space: hard drop · P: pause', '← → mover · ↑ girar · ↓ bajar · Espacio: caída rápida · P: pausar', '← → bewegen · ↑ drehen · ↓ absenken · Leertaste: Schnellabwurf · P: Pause', '← → 移動 · ↑ 回転 · ↓ 下げる · スペース：高速落下 · P：一時停止', '← → движение · ↑ поворот · ↓ вниз · Пробел: сброс · P: пауза', '← → déplacer · ↑ tourner · ↓ descendre · Espace : chute rapide · P : pause', '← → muovi · ↑ ruota · ↓ scendi · Spazio: caduta rapida · P: pausa'],
        ['Clique em "Começar Quiz" para iniciar o Jogo do Bilhão.', 'Click “Start Quiz” to begin the Billionaire Quiz.', 'Haz clic en «Empezar el quiz» para iniciar el Quiz del millonario.', 'Klicke auf „Quiz starten“, um das Quiz zu beginnen.', '「クイズを開始」をクリックして億万長者クイズを始めましょう。', 'Нажмите «Начать викторину», чтобы начать игру.', 'Cliquez sur « Commencer le quiz » pour démarrer le quiz.', 'Fai clic su «Inizia il quiz» per iniziare il quiz.'],
    ];

    const dictionaries = new Map(languages.map((language, index) => [
        language,
        new Map(messages.map((row) => [row[0], row[index]]))
    ]));
    const templateRows = messages.filter((row) => /\{\w+\}/.test(row[0]));
    const templates = templateRows.map((row) => {
        const names = [];
        const pattern = new RegExp(`^${row[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\\{(\w+)\\\}/g, (_, name) => {
            names.push(name);
            return '(.+?)';
        })}$`);
        return { row, names, pattern };
    });
    const textState = new WeakMap();
    const attributeState = new WeakMap();
    let currentLanguage = 'pt-BR';

    function readLanguage() {
        try {
            const language = localStorage.getItem(storageKey);
            return dictionaries.has(language) ? language : 'pt-BR';
        } catch (error) {
            console.error('Não foi possível carregar o idioma dos jogos.', error);
            return 'pt-BR';
        }
    }

    function translate(source) {
        const content = source.trim();
        if (!content) return source;

        const start = source.indexOf(content);
        const leadingWhitespace = source.slice(0, start);
        const trailingWhitespace = source.slice(start + content.length);
        const dictionary = dictionaries.get(currentLanguage);
        const exact = dictionary.get(content);
        if (exact !== undefined) return `${leadingWhitespace}${exact}${trailingWhitespace}`;

        for (const template of templates) {
            const match = content.match(template.pattern);
            if (!match) continue;
            const translated = template.row[languages.indexOf(currentLanguage)].replace(/\{(\w+)\}/g, (_, name) => {
                const index = template.names.indexOf(name);
                return index === -1 ? `{${name}}` : match[index + 1];
            });
            return `${leadingWhitespace}${translated}${trailingWhitespace}`;
        }
        return source;
    }

    function translateTextNode(node) {
        const state = textState.get(node);
        const source = state && node.nodeValue === state.rendered ? state.source : node.nodeValue;
        const rendered = translate(source);
        textState.set(node, { source, rendered });
        if (node.nodeValue !== rendered) node.nodeValue = rendered;
    }

    function translateAttribute(element, attribute) {
        const current = element.getAttribute(attribute);
        if (current === null) return;

        let states = attributeState.get(element);
        if (!states) {
            states = new Map();
            attributeState.set(element, states);
        }
        const state = states.get(attribute);
        const source = state && current === state.rendered ? state.source : current;
        const rendered = translate(source);
        states.set(attribute, { source, rendered });
        if (current !== rendered) element.setAttribute(attribute, rendered);
    }

    function translateNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            translateTextNode(node);
            return;
        }
        if (node.nodeType !== Node.ELEMENT_NODE && node.nodeType !== Node.DOCUMENT_NODE) return;

        if (node.nodeType === Node.ELEMENT_NODE) {
            ['title', 'aria-label', 'placeholder', 'alt'].forEach((attribute) => translateAttribute(node, attribute));
        }
        node.childNodes.forEach(translateNode);
    }

    function applyLanguage() {
        currentLanguage = readLanguage();
        document.documentElement.lang = currentLanguage;
        if (document.body) translateNode(document.body);
        if (document.head) translateNode(document.head);
        window.dispatchEvent(new Event('buuro-language-applied'));
    }

    applyLanguage();

    const observer = new MutationObserver((records) => {
        records.forEach((record) => {
            if (record.type === 'characterData') {
                translateTextNode(record.target);
            } else if (record.type === 'attributes') {
                translateAttribute(record.target, record.attributeName);
            } else {
                record.addedNodes.forEach(translateNode);
            }
        });
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['title', 'aria-label', 'placeholder', 'alt'],
        characterData: true,
        childList: true,
        subtree: true
    });

    window.addEventListener('buuro-language-changed', applyLanguage);
    window.addEventListener('storage', (event) => {
        if (event.key === storageKey || event.key === null) applyLanguage();
    });

    window.BuuroGameLanguage = Object.freeze({
        get language() {
            return currentLanguage;
        },
        translate,
        capitalQuestion(country) {
            const questions = {
                'pt-BR': `Qual é a capital de ${country}?`,
                en: `What is the capital of ${country}?`,
                es: `¿Cuál es la capital de ${country}?`,
                de: `Was ist die Hauptstadt von ${country}?`,
                ja: `${country}の首都はどこですか？`,
                ru: `Какова столица страны ${country}?`,
                fr: `Quelle est la capitale de ${country} ?`,
                it: `Qual è la capitale di ${country}?`
            };
            return questions[currentLanguage];
        },
        regionName(code, fallback) {
            if (typeof Intl.DisplayNames !== 'function') return fallback;
            const region = new Intl.DisplayNames([currentLanguage], { type: 'region' }).of(code.toUpperCase());
            return region && region !== code.toUpperCase() ? region : fallback;
        }
    });

    const showAlert = window.alert.bind(window);
    window.alert = (message) => showAlert(translate(String(message)));
})();
