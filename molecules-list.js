import * as THREE from 'https://esm.sh/three@0.152.2';
import { createAtom } from './molecule.js';
import { moleculesData } from './molecules-data.js';

// Универсальная функция для создания молекул
function createMolecule(moleculeData) {
    const moleculeGroup = new THREE.Group();

    // Проходим по каждому атому молекулы
    for (const atomKey in moleculeData) {
        if (moleculeData.hasOwnProperty(atomKey)) {
            const atomData = moleculeData[atomKey];
            const atom = createAtom(atomData);
            moleculeGroup.add(atom);
        }
    }

    return moleculeGroup;
}

// Вода (H₂O)
export function createWaterMolecule() {
    return createMolecule(moleculesData.H2O);
}

// Аммиак (NH₃)
export function createAmmoniaMolecule() {
    return createMolecule(moleculesData.NH3);
}

// Метан (CH₄)
export function createMethaneMolecule() {
    return createMolecule(moleculesData.CH4);  // Предполагаем, что данные для метана находятся в moleculesData.CH4
}

// Метанол (CH₃OH)
export function createMethanolMolecule() {
    return createMolecule(moleculesData.CH30H);
}

// Углекислый газ (CO₂)
export function createCarbonDioxideMolecule() {
    return createMolecule(moleculesData.CO2);
}

// Азот (N₂)
export function createNitrogenMolecule() {
    return createMolecule(moleculesData.N2);
}

// Молекула изопропилового спирта (C₃H₈O)
export function createIsopropylAlcoholMolecule() {
    return createMolecule(moleculesData.isopropylAlcohol);
}
