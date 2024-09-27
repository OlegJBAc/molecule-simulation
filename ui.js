export function initUIControls(
    getCurrentMolecule, // Функция для получения текущей молекулы
    setSimulationSpeed,
    startAnimation,
    stopAnimation
) {
    const speedSlider = document.getElementById('speed');
    const scaleSlider = document.getElementById('scale');
    const speedValue = document.getElementById('speedValue');
    const scaleValue = document.getElementById('scaleValue');
    const realisticToggle = document.getElementById('realisticToggle');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');

    let isRealistic = false;

    // Управление скоростью симуляции
    speedSlider.addEventListener('input', (event) => {
        const simulationSpeed = parseFloat(event.target.value);
        speedValue.textContent = `${simulationSpeed}x`;
        setSimulationSpeed(simulationSpeed);
    });

    // Управление масштабом молекулы
    scaleSlider.addEventListener('input', (event) => {
        const scale = parseFloat(event.target.value);
        const currentMolecule = getCurrentMolecule(); // Получаем текущую молекулу
        if (currentMolecule) {
            currentMolecule.scale.set(scale, scale, scale);
            scaleValue.textContent = `${scale}x`;
        }
    });

    // Переключение реалистичного режима
    realisticToggle.addEventListener('change', (event) => {
        isRealistic = event.target.checked;
        const currentMolecule = getCurrentMolecule(); // Получаем текущую молекулу
        if (currentMolecule) {
            updateDisplayMode(currentMolecule, isRealistic);
        }
    });

    // Остановка анимации
    stopButton.addEventListener('click', () => {
        stopAnimation();
    });

    // Запуск анимации
    startButton.addEventListener('click', () => {
        startAnimation();
    });
}

function updateDisplayMode(molecule, isRealistic) {
    molecule.traverse((child) => {
        if (child.isMesh) {
            // Масштабируем только частицы (протоны, нейтроны, электроны)
            const scaleValue = isRealistic ? 0.1 : 1;
            child.scale.set(scaleValue, scaleValue, scaleValue);
        }
        if (child.isLine) {
            // Оставляем орбиты неизменными
            const orbitScale = isRealistic ? 1 : 1;
            child.scale.set(orbitScale, orbitScale, orbitScale);
        }
    });
}
