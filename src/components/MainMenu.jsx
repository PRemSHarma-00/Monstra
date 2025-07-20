const MainMenu = ({ onStartBattle }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6 py-12">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-16 text-center tracking-wide">
        BATTLE ARENA
      </h1>

      <div className="space-y-6 w-full max-w-xs sm:max-w-sm md:max-w-md">
        <button
          onClick={onStartBattle}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-xl text-xl transition-all duration-200 shadow-lg"
        >
          ⚔️ Quick Battle
        </button>

        <button
          disabled
          className="w-full bg-gray-600 text-white font-bold py-3 px-6 rounded-xl text-xl opacity-50 cursor-not-allowed"
        >
          👑 Boss Battle (Locked)
        </button>

        <button
          disabled
          className="w-full bg-gray-700 text-white font-bold py-3 px-6 rounded-xl text-xl opacity-50 cursor-not-allowed"
        >
          📖 Monstadex (Coming Soon)
        </button>

        <button
          disabled
          className="w-full bg-gray-800 text-white font-bold py-3 px-6 rounded-xl text-xl opacity-50 cursor-not-allowed"
        >
          🧠 Lore & Info (Coming Soon)
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
