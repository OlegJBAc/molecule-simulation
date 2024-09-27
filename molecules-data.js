export const moleculesData = {
    H2O: {
        oxygen: {
            protonCount: 8,
            neutronCount: 8,
            electronCount: 8,
            protonColor: 0xff0000,
            neutronColor: 0xaaaaaa,
            electronColor: 0x00ff00,
            position: [0, 0, 0],
        },
        hydrogen1: {
            protonCount: 1,
            neutronCount: 0,
            electronCount: 1,
            protonColor: 0x0000ff,
            neutronColor: 0xffffff,
            electronColor: 0xffff00,
            position: [
                5 * Math.sin(104.5 * Math.PI / 360),
                5 * Math.cos(104.5 * Math.PI / 360),
                0,
            ],
        },
        hydrogen2: {
            protonCount: 1,
            neutronCount: 0,
            electronCount: 1,
            protonColor: 0x0000ff,
            neutronColor: 0xffffff,
            electronColor: 0xffff00,
            position: [
                -5 * Math.sin(104.5 * Math.PI / 360),
                5 * Math.cos(104.5 * Math.PI / 360),
                0,
            ],
        },
    },
    NH3: {
        nitrogen: {
            protonCount: 7,
            neutronCount: 7,
            electronCount: 7,
            protonColor: 0x0000ff,
            neutronColor: 0xaaaaaa,
            electronColor: 0xffff00,
            position: [0, 0, 0],
        },
        hydrogen1: {
            protonCount: 1,
            neutronCount: 0,
            electronCount: 1,
            protonColor: 0xff0000,
            neutronColor: 0xffffff,
            electronColor: 0x00ff00,
            position: [5, 0, 0],
        },
        hydrogen2: {
            protonCount: 1,
            neutronCount: 0,
            electronCount: 1,
            protonColor: 0xff0000,
            neutronColor: 0xffffff,
            electronColor: 0x00ff00,
            position: [
                -5 * Math.sin(107 * Math.PI / 180),
                5 * Math.cos(107 * Math.PI / 180),
                0,
            ],
        },
        hydrogen3: {
            protonCount: 1,
            neutronCount: 0,
            electronCount: 1,
            protonColor: 0xff0000,
            neutronColor: 0xffffff,
            electronColor: 0x00ff00,
            position: [
                5 * Math.sin(107 * Math.PI / 180),
                5 * Math.cos(107 * Math.PI / 180),
                0,
            ],
        },
    },
    CH4: {
        carbon: {
            protonCount: 6,
            neutronCount: 6,
            electronCount: 6,
            protonColor: 0x0000ff,
            neutronColor: 0xaaaaaa,
            electronColor: 0xffff00,
            position: [0, 0, 0],
        },
        hydrogen1: {
            protonCount: 1,
            neutronCount: 0,
            electronCount: 1,
            protonColor: 0xff0000,
            neutronColor: 0xffffff,
            electronColor: 0x00ff00,
            position: [5, 0, 0],
        },
        hydrogen2: {
            protonCount: 1,
            neutronCount: 0,
            electronCount: 1,
            protonColor: 0xff0000,
            neutronColor: 0xffffff,
            electronColor: 0x00ff00,
            position: [-5, 0, 0],
        },
        hydrogen3: {
            protonCount: 1,
            neutronCount: 0,
            electronCount: 1,
            protonColor: 0xff0000,
            neutronColor: 0xffffff,
            electronColor: 0x00ff00,
            position: [0, 5, 0],
        },
        hydrogen4: {
            protonCount: 1,
            neutronCount: 0,
            electronCount: 1,
            protonColor: 0xff0000,
            neutronColor: 0xffffff,
            electronColor: 0x00ff00,
            position: [0, -5, 0],
        },
    },

    CO2: {
        carbon: {
            protonCount: 6,
            neutronCount: 6,
            electronCount: 6,
            protonColor: 0x0000ff,
            neutronColor: 0xaaaaaa,
            electronColor: 0xffff00,
            position: [0, 0, 0],
        },
        oxygen1: {
            protonCount: 8,
            neutronCount: 8,
            electronCount: 8,
            protonColor: 0xff0000,
            neutronColor: 0xaaaaaa,
            electronColor: 0x00ff00,
            position: [-5, 0, 0],
        },
        oxygen2: {
            protonCount: 8,
            neutronCount: 8,
            electronCount: 8,
            protonColor: 0xff0000,
            neutronColor: 0xaaaaaa,
            electronColor: 0x00ff00,
            position: [5, 0, 0],
        },
    },
    N2: {
        nitrogen1: {
            protonCount: 7,
            neutronCount: 7,
            electronCount: 7,
            protonColor: 0x0000ff,
            neutronColor: 0xaaaaaa,
            electronColor: 0xffff00,
            position: [-2.5, 0, 0],
        },
        nitrogen2: {
            protonCount: 7,
            neutronCount: 7,
            electronCount: 7,
            protonColor: 0x0000ff,
            neutronColor: 0xaaaaaa,
            electronColor: 0xffff00,
            position: [2.5, 0, 0],
        },
    },
    isopropylAlcohol: {
        carbon1: {
            protonCount: 6,
            neutronCount: 6,
            electronCount: 6,
            protonColor: 0x0000ff,
            neutronColor: 0xaaaaaa,
            electronColor: 0xffff00,
            position: [0, 0, 0],
        },
        carbon2: {
            protonCount: 6,
            neutronCount: 6,
            electronCount: 6,
            protonColor: 0x0000ff,
            neutronColor: 0xaaaaaa,
            electronColor: 0xffff00,
            position: [5, 0, 0],
        },
        carbon3: {
            protonCount: 6,
            neutronCount: 6,
            electronCount: 6,
            protonColor: 0x0000ff,
            neutronColor: 0xaaaaaa,
            electronColor: 0xffff00,
            position: [10, 0, 0],
        },
        oxygen: {
            protonCount: 8,
            neutronCount: 8,
            electronCount: 8,
            protonColor: 0xff0000,
            neutronColor: 0xaaaaaa,
            electronColor: 0x00ff00,
            position: [5, 5, 0],
        },
        hydrogen1: {
            protonCount: 1,
            neutronCount: 0,
            electronCount: 1,
            protonColor: 0xff0000,
            neutronColor: 0xffffff,
            electronColor: 0x00ff00,
            position: [-2, 2, 0],
        },
        hydrogen2: {
            protonCount: 1,
            neutronCount: 0,
            electronCount: 1,
            protonColor: 0xff0000,
            neutronColor: 0xffffff,
            electronColor: 0x00ff00,
            position: [-2, -2, 0],
        },
        hydrogen3: {
            protonCount: 1,
            neutronCount: 0,
            electronCount: 1,
            protonColor: 0xff0000,
            neutronColor: 0xffffff,
            electronColor: 0x00ff00,
            position: [7, 2, 0],
        },
        hydrogen4: {
            protonCount: 1,
            neutronCount: 0,
            electronCount: 1,
            protonColor: 0xff0000,
            neutronColor: 0xffffff,
            electronColor: 0x00ff00,
            position: [7, -2, 0],
        },
        hydrogen5: {
            protonCount: 1,
            neutronCount: 0,
            electronCount: 1,
            protonColor: 0xff0000,
            neutronColor: 0xffffff,
            electronColor: 0x00ff00,
            position: [12, 2, 0],
        },
        hydrogen6: {
            protonCount: 1,
            neutronCount: 0,
            electronCount: 1,
            protonColor: 0xff0000,
            neutronColor: 0xffffff,
            electronColor: 0x00ff00,
            position: [12, -2, 0],
        },
        hydrogen7: {
            protonCount: 1,
            neutronCount: 0,
            electronCount: 1,
            protonColor: 0xff0000,
            neutronColor: 0xffffff,
            electronColor: 0x00ff00,
            position: [5, 10, 0],
        },
        hydrogen8: {
            protonCount: 1,
            neutronCount: 0,
            electronCount: 1,
            protonColor: 0xff0000,
            neutronColor: 0xffffff,
            electronColor: 0x00ff00,
            position: [3, 3, 0],
        },
    },
};