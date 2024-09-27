import * as THREE from 'https://esm.sh/three@0.152.2';
import { OrbitControls } from 'https://esm.sh/three@0.152.2/examples/jsm/controls/OrbitControls.js';
import { createWaterMolecule, createAmmoniaMolecule, createMethaneMolecule, createCarbonDioxideMolecule, createNitrogenMolecule, createIsopropylAlcoholMolecule } from './molecules-list.js';
import { initCameraControls } from './controls.js';
import { initUIControls } from './ui.js';

document.addEventListener("DOMContentLoaded", function () {
    const sceneContainer = document.getElementById('scene-container');
    const scene = new THREE.Scene();

    // Камера
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(20, 20, 20);

    // Рендерер
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneContainer.appendChild(renderer.domElement);

    // Управление камерой
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;

    controls.minDistance = 0.5;  // Позволяет приближаться очень близко
    controls.maxDistance = 200;  // Оставляем большее пространство для отдаления

    // Сетка и оси координат
    const gridHelper = new THREE.GridHelper(100, 100);
    scene.add(gridHelper);

    const axesHelper = new THREE.AxesHelper(50);
    scene.add(axesHelper);

    // Освещение
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(30, 30, 30);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    // Создание начальной молекулы (по умолчанию вода)
    let currentMolecule = createWaterMolecule();
    scene.add(currentMolecule);

    // Массив для хранения вращений электронов
    const electronRotations = [];

    // Функция для инициализации вращений электронов
    function initElectronRotations(atom, electronCount) {
        for (let i = 0; i < electronCount; i++) {
            electronRotations.push({
                pivot: atom[`electronPivot${i}`],
                speed: 0.01 + i * 0.005,
            });
        }
    }

    // Инициализация вращений электронов для молекулы
    function resetElectronRotations(molecule) {
        electronRotations.length = 0; // Очищаем массив
        molecule.children.forEach((atom) => {
            const electronCount = Object.keys(atom).filter(key => key.includes('electronPivot')).length;
            initElectronRotations(atom, electronCount);
        });
    }

    // Инициализация вращений для начальной молекулы
    resetElectronRotations(currentMolecule);

    // Управление камерой (панорамирование и вращение)
    initCameraControls(controls, renderer);

    // Переменные для управления анимацией
    let isAnimating = true;
    let simulationSpeed = 1;

    // Функции для управления анимацией
    function startAnimation() {
        if (!isAnimating) {
            isAnimating = true;
            animate();  // Перезапуск анимации
        }
    }

    function stopAnimation() {
        isAnimating = false;
    }

    // Функция для обновления скорости симуляции
    function setSimulationSpeed(value) {
        simulationSpeed = value;
    }

    // Глобальная функция для смены молекулы
    window.changeMolecule = function (moleculeType) {
        // Удаляем текущую молекулу
        scene.remove(currentMolecule);

        // Создаем новую молекулу в зависимости от выбранного типа
        switch (moleculeType) {
            case 'H₂O':
                currentMolecule = createWaterMolecule();
                break;
            case 'NH₃':
                currentMolecule = createAmmoniaMolecule();
                break;
            case 'CH₄':
                currentMolecule = createMethaneMolecule();
                break;
            case 'CO₂':
                currentMolecule = createCarbonDioxideMolecule();
                break;
            case 'N₂':
                currentMolecule = createNitrogenMolecule();
                break;
            case 'isopropylAlcohol':
                currentMolecule = createIsopropylAlcoholMolecule();
                break;
            default:
                currentMolecule = createWaterMolecule();
        }

        // Добавляем новую молекулу в сцену
        scene.add(currentMolecule);

        // Инициализируем вращение электронов для новой молекулы
        resetElectronRotations(currentMolecule);

        // Перезапуск анимации после смены молекулы
        if (!isAnimating) {
            startAnimation();
        }

        renderer.render(scene, camera);
    }

    // Инициализация UI (ползунки, кнопки)
    initUIControls(() => currentMolecule, setSimulationSpeed, startAnimation, stopAnimation);

    // Функция анимации
    function animate() {
        if (!isAnimating) return;

        requestAnimationFrame(animate);

        electronRotations.forEach((electron) => {
            electron.pivot.rotation.y += electron.speed * simulationSpeed;
        });

        controls.update();
        renderer.render(scene, camera);
    }

    // Запуск начальной анимации
    animate();

    // Обновление размеров при изменении окна
    window.addEventListener('resize', () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
});
