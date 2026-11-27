(() => {
    const preferenceKey = 'buuro-show-explanatory-text-v1';
    const fallbackErrorMessage = 'Não foi possível salvar essa preferência neste navegador.';
    let storageError = null;

    function errorMessage() {
        return window.BuuroLanguage
            ? window.BuuroLanguage.translate('preferenceSaveError')
            : fallbackErrorMessage;
    }

    function reportStorageError(error) {
        storageError = error;
        console.error('Não foi possível acessar a preferência de textos explicativos.', error);
        const status = document.getElementById('explanatory-text-status');
        if (status) status.textContent = errorMessage();
    }

    function readPreference() {
        try {
            return localStorage.getItem(preferenceKey) !== 'false';
        } catch (error) {
            reportStorageError(error);
            return true;
        }
    }

    function applyPreference(showExplanatoryText) {
        document.documentElement.classList.toggle('hide-explanatory-text', !showExplanatoryText);
        const toggle = document.getElementById('show-explanatory-text');
        if (toggle) toggle.checked = showExplanatoryText;
    }

    applyPreference(readPreference());

    document.addEventListener('DOMContentLoaded', () => {
        applyPreference(readPreference());
        const toggle = document.getElementById('show-explanatory-text');
        const status = document.getElementById('explanatory-text-status');
        if (storageError && status) status.textContent = errorMessage();
        if (!toggle) return;

        toggle.addEventListener('change', () => {
            const showExplanatoryText = toggle.checked;
            try {
                localStorage.setItem(preferenceKey, String(showExplanatoryText));
            } catch (error) {
                reportStorageError(error);
            }
            applyPreference(showExplanatoryText);
        });
    });

    window.addEventListener('buuro-language-changed', () => {
        if (!storageError) return;
        const status = document.getElementById('explanatory-text-status');
        if (status) status.textContent = errorMessage();
    });

    window.addEventListener('storage', (event) => {
        if (event.key === preferenceKey || event.key === null) {
            applyPreference(readPreference());
        }
    });
})();
