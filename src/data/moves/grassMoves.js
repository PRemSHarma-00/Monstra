

const GrassMoves = [
  {
    name: "Leaf Burst",
    power: 85,
    accuracy: 100,
    type: "Grass",
    category: "Special",
    effect: { chance: 10, type: "status", status: "burnout", target: "user" } // custom effect
  },
  {
    name: "Thorn Whip",
    power: 60,
    accuracy: 100,
    type: "Grass",
    category: "Physical",
    effect: { chance: 10, type: "status", status: "bleed", target: "opponent" }
  },
  {
    name: "Spore Cloud",
    power: 0,
    accuracy: 85,
    type: "Grass",
    category: "Status",
    effect: { chance: 100, type: "status", status: "sleep", target: "opponent" }
  },
  {
    name: "Verdant Veil",
    power: 0,
    accuracy: 100,
    type: "Grass",
    category: "Status",
    effect: { chance: 100, type: "stat", stat: "def", stage: 1, target: "team" }
  },
  {
    name: "Petal Flare",
    power: 95,
    accuracy: 90,
    type: "Grass",
    category: "Special",
    effect: { chance: 10, type: "status", status: "burn", target: "opponent" }
  },
  {
    name: "Rootgrip",
    power: 20,
    accuracy: 100,
    type: "Grass",
    category: "Physical",
    effect: { chance: 100, type: "trap", duration: 4, target: "opponent" }
  },
  {
    name: "Sap Siphon",
    power: 75,
    accuracy: 100,
    type: "Grass",
    category: "Special",
    effect: { chance: 50, type: "custom", custom: "heal_half_damage", target: "user" }
  },
  {
    name: "Bloom Barrier",
    power: 0,
    accuracy: 100,
    type: "Grass",
    category: "Status",
    effect: { chance: 100, type: "stat", stat: "spdef", stage: 2, target: "self" }
  },
  {
    name: "Vine Slam",
    power: 80,
    accuracy: 95,
    type: "Grass",
    category: "Physical"
  },
  {
    name: "Forest's Wrath",
    power: 110,
    accuracy: 85,
    type: "Grass",
    category: "Special",
    effect: { chance: 100, type: "recoil", percent: 25, target: "user" }
  },
  {
    name: "Sporeshift",
    power: 0,
    accuracy: 100,
    type: "Grass",
    category: "Status",
    effect: { chance: 100, type: "status", status: "paralyze", target: "opponent" }
  }
];

export default GrassMoves;
