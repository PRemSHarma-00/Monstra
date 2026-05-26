
const MonsterRoster = [
  // ── Original 7 ───────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Flametail",
    type: ["Fire"],
    hp: 100, maxHp: 100,
    attack: 60, defense: 40, speed: 70,
    sprite: { front: "/sprites/flametail_front.png", back: "/sprites/flametail_back.png" }
  },
  {
    id: 2,
    name: "Shellcrush",
    type: ["Water"],
    hp: 110, maxHp: 110,
    attack: 55, defense: 70, speed: 40,
    sprite: { front: "/sprites/shellcrush_front.png", back: "/sprites/shellcrush_back.png" }
  },
  {
    id: 3,
    name: "Thornava",
    type: ["Grass", "Poison"],
    hp: 95, maxHp: 95,
    attack: 50, defense: 55, speed: 65,
    sprite: { front: "/sprites/thornava_front.png", back: "/sprites/thornava_back.png" }
  },
  {
    id: 4,
    name: "Voltique",
    type: ["Electric"],
    hp: 90, maxHp: 90,
    attack: 65, defense: 50, speed: 85,
    sprite: { front: "/sprites/voltique_front.png", back: "/sprites/voltique_back.png" }
  },
  {
    id: 5,
    name: "Frostwing",
    type: ["Ice", "Flying"],
    hp: 80, maxHp: 80,
    attack: 55, defense: 45, speed: 90,
    sprite: { front: "/sprites/frostwing_front.png", back: "/sprites/frostwing_back.png" }
  },
  {
    id: 6,
    name: "Terrabite",
    type: ["Rock", "Ground"],
    hp: 120, maxHp: 120,
    attack: 70, defense: 75, speed: 30,
    sprite: { front: "/sprites/terrabite_front.png", back: "/sprites/terrabite_back.png" }
  },
  {
    id: 7,
    name: "Spectrobe",
    type: ["Ghost", "Psychic"],
    hp: 85, maxHp: 85,
    attack: 50, defense: 50, speed: 80,
    sprite: { front: "/sprites/spectrobe_front.png", back: "/sprites/spectrobe_back.png" }
  },

  // ── New 8 ─────────────────────────────────────────────────────────────────
  // Row 1: Zyclops | Ragorus | Miraquil | Scalemaw
  // Row 2: Plaguewing | Tanglewood | Ironclad | Granitusk
 /* {
    id: 8,
    name: "Zyclops",
    type: ["Psychic", "Poison"],
    hp: 75, maxHp: 75,
    attack: 55, defense: 45, speed: 80,
    // Small green one-eyed alien with antenna
    sprite: { front: "/sprites/zyclops_front.png", back: "/sprites/zyclops_back.png" }
  },
  {
    id: 9,
    name: "Ragorus",
    type: ["Fire", "Fighting"],
    hp: 105, maxHp: 105,
    attack: 85, defense: 65, speed: 45,
    // Large red bull demon with horns
    sprite: { front: "/sprites/ragorus_front.png", back: "/sprites/ragorus_back.png" }
  },
  {
    id: 10,
    name: "Miraquil",
    type: ["Water", "Psychic"],
    hp: 80, maxHp: 80,
    attack: 60, defense: 55, speed: 95,
    // Blue ethereal water spirit with glowing crown
    sprite: { front: "/sprites/miraquil_front.png", back: "/sprites/miraquil_back.png" }
  },
  {
    id: 11,
    name: "Scalemaw",
    type: ["Ground", "Rock"],
    hp: 115, maxHp: 115,
    attack: 75, defense: 70, speed: 35,
    // Green upright dinosaur / crocodilian
    sprite: { front: "/sprites/scalemaw_front.png", back: "/sprites/scalemaw_back.png" }
  },
  {
    id: 12,
    name: "Plaguewing",
    type: ["Bug", "Poison"],
    hp: 70, maxHp: 70,
    attack: 60, defense: 40, speed: 100,
    // Purple wasp with large wings
    sprite: { front: "/sprites/plaguewing_front.png", back: "/sprites/plaguewing_back.png" }
  },
  {
    id: 13,
    name: "Tanglewood",
    type: ["Grass"],
    hp: 95, maxHp: 95,
    attack: 60, defense: 70, speed: 50,
    // Green vine plant creature with flowers
    sprite: { front: "/sprites/tanglewood_front.png", back: "/sprites/tanglewood_back.png" }
  },
  {
    id: 14,
    name: "Ironclad",
    type: ["Ground", "Fighting"],
    hp: 100, maxHp: 100,
    attack: 80, defense: 90, speed: 30,
    // Armoured mechanical robot with glowing eyes
    sprite: { front: "/sprites/ironclad_front.png", back: "/sprites/ironclad_back.png" }
  },
  {
    id: 15,
    name: "Granitusk",
    type: ["Rock", "Ground"],
    hp: 130, maxHp: 130,
    attack: 75, defense: 85, speed: 20,
    // Massive stone golem humanoid
    sprite: { front: "/sprites/granitusk_front.png", back: "/sprites/granitusk_back.png" }
  }, */
]; 

export default MonsterRoster;