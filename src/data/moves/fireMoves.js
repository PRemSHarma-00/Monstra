const FireMoves = [ 
  {
    name: "Blaze Jet",
    power: 90,
    accuracy: 100,
    type: "Fire",
    category: "Special",
    effect: { chance: 10, type: "status", status: "burn", target: "opponent" }
  },
  {
    name: "Ember",
    power: 40,
    accuracy: 100,
    type: "Fire",
    category: "Special"
  },
  {
    name: "Flare Kick",
    power: 85,
    accuracy: 95,
    type: "Fire",
    category: "Physical",
    effect: { chance: 10, type: "status", status: "burn", target: "opponent" }
  },
  {
    name: "Inferno Spiral",
    power: 100,
    accuracy: 50,
    type: "Fire",
    category: "Special",
    effect: { chance: 100, type: "status", status: "burn", target: "opponent" }
  },
  {
    name: "Smokescreen",
    power: 0,
    accuracy: 100,
    type: "Fire",
    category: "Status",
    effect: { chance: 100, type: "stat", stat: "accuracy", change: -1, target: "opponent" }
  },
  {
    name: "Fire Fangs",
    power: 65,
    accuracy: 95,
    type: "Fire",
    category: "Physical",
    effect: [
      { chance: 10, type: "status", status: "burn", target: "opponent" },
      { chance: 10, type: "flinch", target: "opponent" }
    ]
  },
  {
    name: "Burnout",
    power: 80,
    accuracy: 100,
    type: "Fire",
    category: "Physical",
    effect: { chance: 100, type: "special", custom: "lose_fire_type", target: "self" }
  },
  {
    name: "Scorch Pulse",
    power: 70,
    accuracy: 100,
    type: "Fire",
    category: "Special"
  },
  {
    name: "Ash Veil",
    power: 0,
    accuracy: 100,
    type: "Fire",
    category: "Status",
    effect: { chance: 100, type: "stat", stat: "evasion", change: 1, target: "self" }
  },
  {
    name: "Hellburst",
    power: 120,
    accuracy: 75,
    type: "Fire",
    category: "Special",
    effect: { chance: 100, type: "recoil", percent: 25, target: "self" }
  }
];

export default FireMoves;
