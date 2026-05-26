/* MenuButton — no icon prop, no emojis */
const MenuButton = ({ onClick, disabled, label, sub }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`group w-full flex items-center gap-4 px-5 py-4 rounded-lg border transition-all duration-200 text-left
      ${disabled
        ? "bg-[#0d1628] border-blue-950 text-slate-600 cursor-not-allowed opacity-50"
        : "bg-[#0d1628] border-blue-900 hover:border-blue-500 hover:bg-[#122040] text-white cursor-pointer"
      }`}
  >
    <div className="flex-1 min-w-0">
      <div className="font-bold text-sm tracking-wide">{label}</div>
      {sub && <div className="text-xs text-slate-500 mt-0.5">{sub}</div>}
    </div>
    {!disabled && (
      <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity font-bold text-sm">
        &rsaquo;
      </span>
    )}
    {disabled && (
      <span className="text-slate-600 text-xs font-bold tracking-widest">LOCKED</span>
    )}
  </button>
);

const MainMenu = ({ onStartBattle, onLore }) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-[#080c14] text-white px-6 py-12 overflow-hidden">
      {/* Corner accents */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-blue-500 opacity-40" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-500 opacity-40" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-blue-500 opacity-40" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-blue-500 opacity-40" />

      {/* Scanlines */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 6px)",
        }}
      />

      <div className="relative z-10 w-full max-w-sm">
        {/* Title — font-pixel only here */}
        <div className="text-center mb-10 animate-fadeInUp">
          <p className="font-pixel text-blue-500 text-xs tracking-[0.3em] mb-3">MONSTRA</p>
          <h1 className="font-pixel text-white text-3xl md:text-4xl tracking-wider leading-tight">
            BATTLE<br />
            <span className="text-blue-400">ARENA</span>
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-px w-16 bg-blue-800" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <div className="h-px w-16 bg-blue-800" />
          </div>
          <p className="text-slate-500 text-xs mt-3 tracking-widest">SELECT AN OPTION</p>
        </div>

        {/* Menu Buttons */}
        <div className="space-y-3 animate-fadeInUp">
          <MenuButton
            onClick={onStartBattle}
            label="Quick Battle"
            sub="Fight a random opponent team"
          />
          <MenuButton
            disabled
            label="Boss Battle"
            sub="Face the arena champion"
          />
          <MenuButton
            disabled
            label="Monstadex"
            sub="Browse all known monsters"
          />
          <MenuButton
            onClick={onLore}
            label="Lore & Info"
            sub="The story of Monstra"
          />
        </div>

        {/* Footer */}
        <p className="text-center text-slate-700 text-xs mt-10 tracking-widest">
          V 0.1.0 — ALPHA
        </p>
      </div>
    </div>
  );
};

export default MainMenu;
