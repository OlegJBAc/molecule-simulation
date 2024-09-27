import * as THREE from 'https://esm.sh/three@0.152.2';

export function createSphere(radius, color, emissive) {
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const material = new THREE.MeshStandardMaterial({
        color: color,
        emissive: emissive,
        emissiveIntensity: 1
    });
    const sphere = new THREE.Mesh(geometry, material);
    return sphere;
}

export function createOrbit(radius, color = 0xffffff) {
    const curve = new THREE.EllipseCurve(
        0, 0,
        radius, radius,
        0, 2 * Math.PI,
        false,
        0
    );
    const points = curve.getPoints(100);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: color });
    const orbit = new THREE.LineLoop(geometry, material);
    orbit.rotation.x = Math.PI / 2;
    return orbit;
}

export function createAtom({ protonCount, neutronCount, electronCount, protonColor, neutronColor, electronColor, position }) {
    const atomGroup = new THREE.Group();
    const nucleusGroup = new THREE.Group();
    const nucleusRadius = 1;

    // Случайное расположение протонов и нейтронов в сфере
    function randomPointInSphere(radius) {
        let u = Math.random();
        let v = Math.random();
        let theta = u * 2.0 * Math.PI;
        let phi = Math.acos(2.0 * v - 1.0);
        let r = Math.cbrt(Math.random()) * radius;
        let sinPhi = Math.sin(phi);
        let x = r * sinPhi * Math.cos(theta);
        let y = r * sinPhi * Math.sin(theta);
        let z = r * Math.cos(phi);
        return new THREE.Vector3(x, y, z);
    }

    // Добавляем протоны
    for (let i = 0; i < protonCount; i++) {
        const proton = createSphere(0.3, protonColor, protonColor);
        const pos = randomPointInSphere(nucleusRadius);
        proton.position.copy(pos);
        nucleusGroup.add(proton);
    }

    // Добавляем нейтроны
    for (let i = 0; i < neutronCount; i++) {
        const neutron = createSphere(0.3, neutronColor, neutronColor);
        const pos = randomPointInSphere(nucleusRadius);
        neutron.position.copy(pos);
        nucleusGroup.add(neutron);
    }

    atomGroup.add(nucleusGroup);

    // Орбиты и электроны
    const orbitRadiusStart = 2;
    const orbitRadiusStep = 1.5;
    for (let i = 0; i < electronCount; i++) {
        const orbitRadius = orbitRadiusStart + i * orbitRadiusStep;
        const orbit = createOrbit(orbitRadius, 0xffffff);
        atomGroup.add(orbit);

        const electron = createSphere(0.2, electronColor, electronColor);
        const electronPivot = new THREE.Object3D();
        electronPivot.add(electron);
        electron.position.set(orbitRadius, 0, 0);
        electronPivot.rotation.y = (i / electronCount) * Math.PI * 2 / electronCount;
        atomGroup.add(electronPivot);

        atomGroup[`electronPivot${i}`] = electronPivot;
    }

    atomGroup.position.set(...position);
    return atomGroup;
}

export function createWaterMolecule() {
    const moleculeGroup = new THREE.Group();

    const oxygenParams = {
        protonCount: 8,
        neutronCount: 8,
        electronCount: 8,
        protonColor: 0xff0000,
        neutronColor: 0xaaaaaa,
        electronColor: 0x00ff00,
        position: [0, 0, 0]
    };

    const hydrogenAngle = 104.5 * (Math.PI / 180);
    const bondLength = 5;

    const hydrogenParams1 = {
        protonCount: 1,
        neutronCount: 0,
        electronCount: 1,
        protonColor: 0x0000ff,
        neutronColor: 0xffffff,
        electronColor: 0xffff00,
        position: [
            bondLength * Math.sin(hydrogenAngle / 2),
            bondLength * Math.cos(hydrogenAngle / 2),
            0
        ]
    };

    const hydrogenParams2 = {
        protonCount: 1,
        neutronCount: 0,
        electronCount: 1,
        protonColor: 0x0000ff,
        neutronColor: 0xffffff,
        electronColor: 0xffff00,
        position: [
            -bondLength * Math.sin(hydrogenAngle / 2),
            bondLength * Math.cos(hydrogenAngle / 2),
            0
        ]
    };

    const oxygen = createAtom(oxygenParams);
    moleculeGroup.add(oxygen);

    const hydrogen1 = createAtom(hydrogenParams1);
    moleculeGroup.add(hydrogen1);

    const hydrogen2 = createAtom(hydrogenParams2);
    moleculeGroup.add(hydrogen2);

    return moleculeGroup;
}
