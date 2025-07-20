const PsychicMoves = [
  { name: "Mind Pulse", power: 80, accuracy: 100, type: "Psychic", category: "Special" },
  { name: "Psychoshock", power: 90, accuracy: 100, type: "Psychic", category: "Special" },
  { name: "Brainstorm", power: 0, accuracy: 100, type: "Psychic", category: "Status", effect: { chance: 100, type: "stat", stat: "spAttack", change: 2, target: "self" } },
  { name: "Calm Thought", power: 0, accuracy: 100, type: "Psychic", category: "Status", effect: { chance: 100, type: "stat", stat: "spDefense", change: 1, target: "self" } },
  { name: "Dream Snare", power: 70, accuracy: 90, type: "Psychic", category: "Special", effect: { chance: 20, type: "status", status: "sleep", target: "opponent" } },
  { name: "Mental Crash", power: 60, accuracy: 100, type: "Psychic", category: "Physical" },
  { name: "Vision Beam", power: 95, accuracy: 95, type: "Psychic", category: "Special" },
  { name: "Sixth Sense", power: 0, accuracy: 100, type: "Psychic", category: "Status", effect: { chance: 100, type: "stat", stat: "accuracy", change: 1, target: "self" } }
];
export default PsychicMoves;