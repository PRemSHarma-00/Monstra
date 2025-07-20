

const PoisonMoves = [
  {
    name: "Toxic Spikes",
    power: 0,
    accuracy: 100,
    type: "Poison",
    category: "Status",
    effect: { chance: 100, type: "hazard", hazard: "poisonSpikes", target: "opponent" }
  },
  {
    name: "Venom Slash",
    power: 70,
    accuracy: 100,
    type: "Poison",
    category: "Physical",
    effect: { chance: 30, type: "status", status: "poison", target: "opponent" }
  },
  {
    name: "Corrode",
    power: 80,
    accuracy: 100,
    type: "Poison",
    category: "Special",
    effect: { chance: 20, type: "stat", stat: "def", stage: -1, target: "opponent" }
  },
  {
    name: "Toxic Mist",
    power: 0,
    accuracy: 90,
    type: "Poison",
    category: "Status",
    effect: { chance: 100, type: "status", status: "poison", target: "opponent" }
  },
  {
    name: "Blight Burst",
    power: 95,
    accuracy: 90,
    type: "Poison",
    category: "Special",
    effect: { chance: 10, type: "status", status: "badlyPoison", target: "opponent" }
  },
  {
    name: "Neurotoxin",
    power: 85,
    accuracy: 100,
    type: "Poison",
    category: "Special",
    effect: { chance: 20, type: "stat", stat: "spd", stage: -1, target: "opponent" }
  },
  {
    name: "Venom Vines",
    power: 60,
    accuracy: 95,
    type: "Poison",
    category: "Physical",
    effect: [
      { chance: 20, type: "status", status: "poison", target: "opponent" },
      { chance: 20, type: "trap", duration: 4, target: "opponent" }
    ]
  },
  {
    name: "Spite Spit",
    power: 50,
    accuracy: 100,
    type: "Poison",
    category: "Special",
    effect: { chance: 100, type: "custom", custom: "Lowers target's max HP by 5%" }
  },
  {
    name: "Toxic Howl",
    power: 0,
    accuracy: 100,
    type: "Poison",
    category: "Status",
    effect: { chance: 100, type: "stat", stat: "atk", stage: -1, target: "opponent" }
  },
  {
    name: "Acid Shell",
    power: 75,
    accuracy: 100,
    type: "Poison",
    category: "Physical",
    effect: { chance: 30, type: "stat", stat: "def", stage: -1, target: "opponent" }
  },
  {
    name: "Black Fog",
    power: 0,
    accuracy: 100,
    type: "Poison",
    category: "Status",
    effect: { chance: 100, type: "custom", custom: "Removes all stat changes from both sides" }
  }
];

export default PoisonMoves;
