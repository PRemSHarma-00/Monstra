

const IceMoves = [
  {
    name: "Frostbite Slash",
    power: 75,
    accuracy: 100,
    type: "Ice",
    category: "Physical",
    effect: { chance: 10, type: "status", status: "freeze", target: "opponent" }
  },
  {
    name: "Glacier Ray",
    power: 90,
    accuracy: 95,
    type: "Ice",
    category: "Special",
    effect: { chance: 10, type: "status", status: "freeze", target: "opponent" }
  },
  {
    name: "Snowbind",
    power: 20,
    accuracy: 90,
    type: "Ice",
    category: "Special",
    effect: { chance: 100, type: "trap", duration: 4, target: "opponent" }
  },
  {
    name: "Whiteout",
    power: 0,
    accuracy: 100,
    type: "Ice",
    category: "Status",
    effect: { chance: 100, type: "stat", stat: "accuracy", stage: -1, target: "opponent" }
  },
  {
    name: "Permafrost Beam",
    power: 110,
    accuracy: 80,
    type: "Ice",
    category: "Special",
    effect: { chance: 100, type: "recoil", percent: 25, target: "user" }
  },
  {
    name: "Chill Armor",
    power: 0,
    accuracy: 100,
    type: "Ice",
    category: "Status",
    effect: { chance: 100, type: "stat", stat: "def", stage: 2, target: "self" }
  },
  {
    name: "Shiver Strike",
    power: 65,
    accuracy: 100,
    type: "Ice",
    category: "Physical",
    effect: { chance: 20, type: "flinch", target: "opponent" }
  },
  {
    name: "Cryoblast",
    power: 100,
    accuracy: 85,
    type: "Ice",
    category: "Special"
  },
  {
    name: "Icicle Curtain",
    power: 0,
    accuracy: 100,
    type: "Ice",
    category: "Status",
    effect: { chance: 100, type: "stat", stat: "spd", stage: -1, target: "opponent" }
  },
  {
    name: "Polar Roar",
    power: 0,
    accuracy: 100,
    type: "Ice",
    category: "Status",
    effect: { chance: 100, type: "stat", stat: "atk", stage: -1, target: "opponent" }
  },
  {
    name: "Frozen Storm",
    power: 95,
    accuracy: 90,
    type: "Ice",
    category: "Special",
    effect: { chance: 10, type: "status", status: "freeze", target: "opponent" }
  }
];

export default IceMoves;
