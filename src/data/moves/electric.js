

const ElectricMoves = [
  {
    name: "Volt Lance",
    power: 80,
    accuracy: 100,
    type: "Electric",
    category: "Physical",
    effect: { chance: 10, type: "status", status: "paralyze", target: "opponent" }
  },
  {
    name: "Sparkstream",
    power: 60,
    accuracy: 100,
    type: "Electric",
    category: "Special",
    effect: { chance: 30, type: "status", status: "paralyze", target: "opponent" }
  },
  {
    name: "Thunder Bind",
    power: 20,
    accuracy: 90,
    type: "Electric",
    category: "Special",
    effect: { chance: 100, type: "trap", duration: 4, target: "opponent" }
  },
  {
    name: "Shock Barrier",
    power: 0,
    accuracy: 100,
    type: "Electric",
    category: "Status",
    effect: { chance: 100, type: "stat", stat: "def", stage: 2, target: "self" }
  },
  {
    name: "Electro Pulse",
    power: 90,
    accuracy: 95,
    type: "Electric",
    category: "Special",
    effect: { chance: 10, type: "flinch", target: "opponent" }
  },
  {
    name: "Static Cage",
    power: 0,
    accuracy: 85,
    type: "Electric",
    category: "Status",
    effect: { chance: 100, type: "status", status: "paralyze", target: "opponent" }
  },
  {
    name: "Plasma Flare",
    power: 110,
    accuracy: 80,
    type: "Electric",
    category: "Special",
    effect: { chance: 100, type: "recoil", percent: 30, target: "user" }
  },
  {
    name: "Jolt Strike",
    power: 70,
    accuracy: 100,
    type: "Electric",
    category: "Physical"
  },
  {
    name: "Ion Surge",
    power: 0,
    accuracy: 100,
    type: "Electric",
    category: "Status",
    effect: { chance: 100, type: "stat", stat: "spd", stage: 2, target: "self" }
  },
  {
    name: "Bolt Rain",
    power: 95,
    accuracy: 90,
    type: "Electric",
    category: "Special",
    effect: { chance: 10, type: "status", status: "paralyze", target: "opponent" }
  },
  {
    name: "Charged Howl",
    power: 0,
    accuracy: 100,
    type: "Electric",
    category: "Status",
    effect: { chance: 100, type: "stat", stat: "atk", stage: 1, target: "team" }
  }
];

export default ElectricMoves;
