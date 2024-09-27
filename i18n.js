const i18nStrings = {
    en: {
        selectMolecule: "Select Molecule:",
        speed: "Speed:",
        scale: "Scale:",
        start: "Start",
        stop: "Stop",
        realisticMode: "Realistic Mode",
        H2O: "H₂O (Water)",
        NH3: "NH₃ (Ammonia)",
        CH4: "CH₄ (Methane)",
        CO2: "CO₂ (Carbon Dioxide)",
        N2: "N₂ (Nitrogen)"
    },
    ru: {
        selectMolecule: "Выберите молекулу:",
        speed: "Скорость:",
        scale: "Масштаб:",
        start: "Старт",
        stop: "Стоп",
        realisticMode: "Реалистичный режим",
        H2O: "H₂O (Вода)",
        NH3: "NH₃ (Аммиак)",
        CH4: "CH₄ (Метан)",
        CO2: "CO₂ (Углекислый газ)",
        N2: "N₂ (Азот)"
    }
};

let currentLanguage = 'ru';  // По умолчанию русский

function updateLanguage(language) {
    currentLanguage = language;
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        element.textContent = i18nStrings[language][key];
    });

    // Обновление текста кнопки переключения языка
    const languageToggle = document.getElementById('languageToggle');
    languageToggle.textContent = language === 'en' ? "Switch to Russian" : "Переключить на английский";
}

// Обработчик кнопки переключения языка
document.getElementById('languageToggle').addEventListener('click', () => {
    const newLanguage = currentLanguage === 'en' ? 'ru' : 'en';
    updateLanguage(newLanguage);
});

// Инициализация языка по умолчанию
updateLanguage(currentLanguage);
