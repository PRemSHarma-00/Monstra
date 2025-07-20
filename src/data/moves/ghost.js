const GhostMoves = [
  { name: "Phantom Lash", power: 80, accuracy: 100, type: "Ghost", category: "Physical" },
  { name: "Ghoul Pulse", power: 70, accuracy: 100, type: "Ghost", category: "Special" },
  { name: "Haunt", power: 0, accuracy: 100, type: "Ghost", category: "Status", effect: { chance: 100, type: "status", status: "curse", target: "opponent" } },
  { name: "Shadow Drift", power: 0, accuracy: 100, type: "Ghost", category: "Status", effect: { chance: 100, type: "stat", stat: "evasion", change: 1, target: "self" } },
  { name: "Specter Claw", power: 90, accuracy: 90, type: "Ghost", category: "Physical" },
  { name: "Wail of Dread", power: 65, accuracy: 95, type: "Ghost", category: "Special", effect: { chance: 30, type: "flinch", target: "opponent" } },
  { name: "Ethereal Grasp", power: 0, accuracy: 100, type: "Ghost", category: "Status", effect: { chance: 100, type: "trap", duration: 3, target: "opponent" } },
  { name: "Netherbolt", power: 100, accuracy: 80, type: "Ghost", category: "Special" }
];
export default GhostMoves;