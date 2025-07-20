const FlyingMoves = [
  { name: "Sky Shredder", power: 85, accuracy: 95, type: "Flying", category: "Physical", effect: { chance: 20, type: "flinch", target: "opponent" } },
  { name: "Aero Cut", power: 70, accuracy: 100, type: "Flying", category: "Physical" },
  { name: "Wind Veil", power: 0, accuracy: 100, type: "Flying", category: "Status", effect: { chance: 100, type: "stat", stat: "evasion", change: 1, target: "self" } },
  { name: "Featherstorm", power: 60, accuracy: 90, type: "Flying", category: "Special", effect: { chance: 30, type: "stat", stat: "speed", change: -1, target: "opponent" } },
  { name: "Gale Rush", power: 90, accuracy: 90, type: "Flying", category: "Special" },
  { name: "Soaring Strike", power: 75, accuracy: 100, type: "Flying", category: "Physical" },
  { name: "Tailwind Burst", power: 0, accuracy: 100, type: "Flying", category: "Status", effect: { chance: 100, type: "stat", stat: "speed", change: 2, target: "team" } },
  { name: "Wingguard", power: 0, accuracy: 100, type: "Flying", category: "Status", effect: { chance: 100, type: "stat", stat: "defense", change: 1, target: "self" } }
];
export default FlyingMoves;