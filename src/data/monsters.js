
const MonsterRoster = [
     {
    id: 1,
    name: "Flametail",
    type: ["Fire"],
    hp: 100,
    maxHp:100,
    attack: 60,
    defense: 40,
    speed: 70,
    moves: ["Ember", "Growl", "Quick Attack", "Howl"],
    sprite: {
      front: "/sprites/flametail_front.png",
      back: "/sprites/flametail_back.png"
    }
  },
  {
    id: 2,
    name: "Shellcrush",
    type: ["Water"],
    hp: 110,
    maxHp:110,
    attack: 55,
    defense: 70,
    speed: 40,
    moves: ["Bubble", "Harden", "Water Gun", "Roar"],
    sprite: {
      front: "/sprites/shellcrush_front.png",
      back: "/sprites/shellcrush_back.png"
    }
  },
  {
    id: 3,
    name: "Thornava",
    type: ["Grass", "Poison"],
    hp: 95,
    maxHp:95,
    attack: 50,
    defense: 55,
    speed: 65,
    moves: ["Vine Whip", "Poison Powder", "Leech Seed", "Tackle"],
    sprite: {
      front: "/sprites/thornava_front.png",
      back: "/sprites/thornava_back.png"
    }
  },
  {
    id: 4,
    name: "Voltique",
    type: ["Electric"],
    hp: 90,
    maxHp:90,
    attack: 65,
    defense: 50,
    speed: 85,
    moves: ["Spark", "Tail Whip", "Thunder Wave", "Bite"],
    sprite: {
      front: "/sprites/voltique_front.png",
      back: "/sprites/voltique_back.png"
    }
  },
  {
    id: 5,
    name: "Frostwing",
    type: ["Ice", "Flying"],
    hp: 80,
    maxHp:80,
    attack: 55,
    defense: 45,
    speed: 90,
    moves: ["Gust", "Icy Wind", "Haze", "Peck"],
    sprite: {
      front: "/sprites/frostwing_front.png",
      back: "/sprites/frostwing_back.png"
    }
  },
  {
    id: 6,
    name: "Terrabite",
    type: ["Rock", "Ground"],
    hp: 120,
    maxHp:120,
    attack: 70,
    defense: 75,
    speed: 30,
    moves: ["Rock Throw", "Mud-Slap", "Sandstorm", "Growl"],
    sprite: {
      front: "/sprites/terrabite_front.png",
      back: "/sprites/terrabite_back.png"
    }
  },
  {
    id: 7,
    name: "Spectrobe",
    type: ["Ghost", "Psychic"],
    hp: 85,
    maxHp:85,
    attack: 50,
    defense: 50,
    speed: 80,
    moves: ["Shadow Ball", "Confuse Ray", "Disable", "Teleport"],
    sprite: {
      front: "/sprites/spectrobe_front.png",
      back: "/sprites/spectrobe_back.png"
    }
  }
];

export default MonsterRoster;