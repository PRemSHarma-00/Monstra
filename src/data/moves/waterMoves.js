
const WaterMoves = [
  {
    name: "Aqua Shard",
    power: 40,
    accuracy: 100,
    type: "Water",
    category: "Physical",
    effect: { chance: 10, type: "status", status: "freeze", target: "opponent" }
  },
  {
    name: "Torrent Beam",
    power: 90,
    accuracy: 100,
    type: "Water",
    category: "Special",
    effect: { chance: 20, type: "status", status: "freeze", target: "opponent" }
  },
  {
    name: "Hydro Lash",
    power: 75,
    accuracy: 95,
    type: "Water",
    category: "Physical"
  },
  {
    name: "Mist Veil",
    power: 0,
    accuracy: 100,
    type: "Water",
    category: "Status",
    effect: { chance: 100, type: "stat", stat: "evasion", stage: 1, target: "self" }
  },
  {
    name: "Soakstorm",
    power: 100,
    accuracy: 80,
    type: "Water",
    category: "Special",
    effect: { chance: 30, type: "status", status: "freeze", target: "opponent" }
  },
  {
    name: "Abyssal Pull",
    power: 0,
    accuracy: 100,
    type: "Water",
    category: "Status",
    effect: { chance: 100, type: "custom", effect: "trap", duration: 4, target: "opponent" }
  },
  {
    name: "Geyser Shot",
    power: 85,
    accuracy: 90,
    type: "Water",
    category: "Special"
  },
  {
    name: "Chill Current",
    power: 65,
    accuracy: 100,
    type: "Water",
    category: "Special",
    effect: [
      { chance: 10, type: "status", status: "freeze", target: "opponent" },
      { chance: 10, type: "stat", stat: "speed", stage: -1, target: "opponent" }
    ]
  },
  {
    name: "Bubble Guard",
    power: 0,
    accuracy: 100,
    type: "Water",
    category: "Status",
    effect: { chance: 100, type: "stat", stat: "defense", stage: 1, target: "self" }
  },
  {
    name: "Drizzle Blade",
    power: 100,
    accuracy: 100,
    type: "Water",
    category: "Physical",
    effect: { chance: 100, type: "custom", effect: "lowerFirePower", target: "field", duration: 3 }
  }
];

export default WaterMoves;
