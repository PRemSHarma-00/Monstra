const RockMoves = [
  { name: "Stone Crash", power: 85, accuracy: 95, type: "Rock", category: "Physical" },
  { name: "Pebble Shot", power: 40, accuracy: 100, type: "Rock", category: "Physical" },
  { name: "Rubble Barrage", power: 75, accuracy: 90, type: "Rock", category: "Special" },
  { name: "Granite Wall", power: 0, accuracy: 100, type: "Rock", category: "Status", effect: { chance: 100, type: "stat", stat: "defense", change: 2, target: "self" } },
  { name: "Spirefall", power: 100, accuracy: 80, type: "Rock", category: "Physical", effect: { chance: 10, type: "flinch", target: "opponent" } },
  { name: "Dust Cloak", power: 0, accuracy: 100, type: "Rock", category: "Status", effect: { chance: 100, type: "stat", stat: "accuracy", change: -1, target: "opponent" } },
  { name: "Earth Splinter", power: 60, accuracy: 100, type: "Rock", category: "Physical" },
  { name: "Crystal Spike", power: 90, accuracy: 90, type: "Rock", category: "Special" }
];
export default RockMoves.js;
