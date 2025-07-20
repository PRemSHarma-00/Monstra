const GroundMoves = [
  { name: "Mudburst", power: 70, accuracy: 100, type: "Ground", category: "Special" },
  { name: "Quake Stomp", power: 90, accuracy: 85, type: "Ground", category: "Physical" },
  { name: "Sand Armor", power: 0, accuracy: 100, type: "Ground", category: "Status", effect: { chance: 100, type: "stat", stat: "defense", change: 2, target: "self" } },
  { name: "Burrow", power: 0, accuracy: 100, type: "Ground", category: "Status", effect: { chance: 100, type: "custom", status: "evadeNextTurn", target: "self" } },
  { name: "Tectonic Slam", power: 100, accuracy: 80, type: "Ground", category: "Physical" },
  { name: "Dust Vortex", power: 65, accuracy: 90, type: "Ground", category: "Special", effect: { chance: 20, type: "stat", stat: "accuracy", change: -1, target: "opponent" } },
  { name: "Mud Trap", power: 35, accuracy: 85, type: "Ground", category: "Special", effect: { chance: 100, type: "trap", duration: 4, target: "opponent" } },
  { name: "Crumble", power: 50, accuracy: 100, type: "Ground", category: "Physical", effect: { chance: 30, type: "stat", stat: "defense", change: -1, target: "opponent" } }
];
export default GroundMoves;