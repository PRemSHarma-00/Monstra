import { useState } from 'react';
import MonsterRoster from '../data/monsters';
import { worldLore, monsterLore } from '../data/lore';

// ─────────────────────────────────────────────────────────────────────────────
// Shared helpers
// ─────────────────────────────────────────────────────────────────────────────

const TYPE_COLORS = {
  Fire:     { bg: 'bg-orange-900', text: 'text-orange-300', border: 'border-orange-700' },
  Water:    { bg: 'bg-blue-900',   text: 'text-blue-300',   border: 'border-blue-700'   },
  Grass:    { bg: 'bg-green-900',  text: 'text-green-300',  border: 'border-green-700'  },
  Electric: { bg: 'bg-yellow-900', text: 'text-yellow-300', border: 'border-yellow-700' },
  Ice:      { bg: 'bg-cyan-900',   text: 'text-cyan-300',   border: 'border-cyan-700'   },
  Poison:   { bg: 'bg-purple-900', text: 'text-purple-300', border: 'border-purple-700' },
  Flying:   { bg: 'bg-sky-900',    text: 'text-sky-300',    border: 'border-sky-700'    },
  Rock:     { bg: 'bg-stone-800',  text: 'text-stone-300',  border: 'border-stone-600'  },
  Ground:   { bg: 'bg-amber-900',  text: 'text-amber-300',  border: 'border-amber-700'  },
  Psychic:  { bg: 'bg-pink-900',   text: 'text-pink-300',   border: 'border-pink-700'   },
  Ghost:    { bg: 'bg-indigo-900', text: 'text-indigo-300', border: 'border-indigo-700' },
};

const TypeBadge = ({ type }) => {
  const c = TYPE_COLORS[type] || { bg: 'bg-gray-800', text: 'text-gray-300', border: 'border-gray-600' };
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-pixel border ${c.bg} ${c.text} ${c.border}`}>
      {type}
    </span>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Stat bar — animated fill on mount
// ─────────────────────────────────────────────────────────────────────────────

const STAT_MAX = 120; // normalise all stats to this ceiling

const statColor = (label) => {
  switch (label) {
    case 'HP':  return 'bg-blue-500';
    case 'ATK': return 'bg-orange-500';
    case 'DEF': return 'bg-green-500';
    case 'SPD': return 'bg-yellow-400';
    default:    return 'bg-slate-500';
  }
};

const StatBar = ({ label, value }) => {
  const pct = Math.min(100, (value / STAT_MAX) * 100);
  return (
    <div className="flex items-center gap-3">
      <span className="text-[10px] font-bold text-slate-500 tracking-widest w-8 flex-shrink-0">{label}</span>
      <div className="flex-1 h-2 bg-[#080c14] rounded-full overflow-hidden border border-blue-950">
        <div
          className={`h-full rounded-full ${statColor(label)} transition-all duration-700`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-[11px] font-bold text-slate-300 w-8 text-right">{value}</span>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Monster card (grid item)
// ─────────────────────────────────────────────────────────────────────────────

const MonsterCard = ({ monster, onClick }) => (
  <button
    onClick={onClick}
    className="group bg-[#0d1628] border border-blue-900 hover:border-blue-500 rounded-lg p-4 flex flex-col items-center gap-2 transition-all duration-200 hover:scale-[1.03] hover:bg-[#122040] text-left w-full"
  >
    <div className="h-20 flex items-center justify-center">
      <img
        src={monster.sprite.front}
        alt={monster.name}
        className="h-20 object-contain group-hover:scale-110 transition-transform duration-200"
      />
    </div>
    <span className="font-bold text-sm text-white tracking-wide">{monster.name}</span>
    <div className="flex gap-1 flex-wrap justify-center">
      {monster.type.map(t => <TypeBadge key={t} type={t} />)}
    </div>
  </button>
);

// ─────────────────────────────────────────────────────────────────────────────
// Monster detail panel (full overlay, slides in from right)
// ─────────────────────────────────────────────────────────────────────────────

const MonsterDetail = ({ monster, onClose }) => {
  const description = monsterLore[monster.id] || 'No records found.';

  return (
    <div className="absolute inset-0 bg-[#080c14] z-50 flex flex-col animate-slideInRight overflow-y-auto">

      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-blue-950 flex-shrink-0">
        <button
          onClick={onClose}
          className="text-blue-400 hover:text-white font-bold text-sm transition-colors flex items-center gap-1"
        >
          &lsaquo; Back
        </button>
        <div className="flex-1" />
        <div className="flex gap-1">
          {monster.type.map(t => <TypeBadge key={t} type={t} />)}
        </div>
      </div>

      {/* Sprite + name */}
      <div className="flex flex-col items-center px-6 pt-8 pb-4">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-500 opacity-5 blur-2xl scale-150" />
          <img
            src={monster.sprite.front}
            alt={monster.name}
            className="relative h-40 object-contain animate-float"
          />
        </div>
        <h2 className="font-bold text-2xl text-white mt-4 tracking-wide">{monster.name}</h2>
        <div className="flex gap-1.5 mt-2">
          {monster.type.map(t => <TypeBadge key={t} type={t} />)}
        </div>
      </div>

      {/* Flavor text */}
      <div className="mx-4 border border-blue-900 bg-[#0d1628] rounded-lg px-5 py-4 mb-4">
        <p className="text-[10px] font-bold tracking-widest text-blue-500 mb-2">FIELD NOTES</p>
        <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Stats */}
      <div className="mx-4 border border-blue-900 bg-[#0d1628] rounded-lg px-5 py-4 mb-4">
        <p className="text-[10px] font-bold tracking-widest text-blue-500 mb-4">BASE STATS</p>
        <div className="space-y-3">
          <StatBar label="HP"  value={monster.hp}      />
          <StatBar label="ATK" value={monster.attack}   />
          <StatBar label="DEF" value={monster.defense}  />
          <StatBar label="SPD" value={monster.speed}    />
        </div>
        {/* Stat total */}
        <div className="mt-4 pt-3 border-t border-blue-950 flex justify-between items-center">
          <span className="text-[10px] font-bold tracking-widest text-slate-500">TOTAL</span>
          <span className="font-bold text-white text-sm">
            {monster.hp + monster.attack + monster.defense + monster.speed}
          </span>
        </div>
      </div>

      {/* Back sprite (bonus — show the back sprite too) */}
      <div className="mx-4 border border-blue-900 bg-[#0d1628] rounded-lg px-5 py-4 mb-6 flex items-center gap-4">
        <img
          src={monster.sprite.back}
          alt={`${monster.name} back`}
          className="h-16 object-contain opacity-70"
        />
        <div>
          <p className="text-[10px] font-bold tracking-widest text-blue-500 mb-1">BATTLE SPRITE</p>
          <p className="text-xs text-slate-400">Back-facing sprite used in battle.</p>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// World lore tab
// ─────────────────────────────────────────────────────────────────────────────

const WorldTab = () => (
  <div className="h-full overflow-y-auto px-4 py-5 space-y-4">
    {/* Banner */}
    <div className="border border-blue-900 bg-[#0d1628] rounded-lg px-5 py-5 text-center mb-2">
      <p className="font-pixel text-blue-500 text-[9px] tracking-widest mb-2">MONSTRA</p>
      <h2 className="font-bold text-xl text-white mb-1 tracking-wide">World Lore</h2>
      <p className="text-slate-500 text-xs">The history of the Arena and its creatures</p>
    </div>

    {/* Chapters */}
    {worldLore.map((section, i) => (
      <div key={i} className="border border-blue-900 bg-[#0d1628] rounded-lg px-5 py-4 animate-fadeInUp" style={{ animationDelay: `${i * 60}ms` }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1 h-4 bg-blue-500 rounded-full flex-shrink-0" />
          <h3 className="font-bold text-blue-400 text-sm tracking-wide">{section.chapter}</h3>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed">{section.text}</p>
      </div>
    ))}
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Monstadex tab
// ─────────────────────────────────────────────────────────────────────────────

const MonstadexTab = ({ onSelectMon }) => (
  <div className="h-full overflow-y-auto px-4 py-5">
    <p className="text-slate-500 text-xs text-center tracking-widest mb-4">
      {MonsterRoster.length} SPECIES CATALOGUED — SELECT TO INSPECT
    </p>
    <div className="grid grid-cols-2 gap-3">
      {MonsterRoster.map(mon => (
        <MonsterCard key={mon.id} monster={mon} onClick={() => onSelectMon(mon)} />
      ))}
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// LoreScreen — root component
// ─────────────────────────────────────────────────────────────────────────────

const TABS = ['World', 'Monstadex'];

const LoreScreen = ({ onBack }) => {
  const [activeTab, setActiveTab]     = useState('World');
  const [selectedMon, setSelectedMon] = useState(null);

  return (
    <div className="relative flex flex-col h-screen w-screen bg-[#080c14] text-white overflow-hidden">

      {/* Scanlines */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-20"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 6px)',
        }}
      />

      {/* ── Header ── */}
      <div className="relative z-20 flex items-center justify-between px-4 py-3 border-b border-blue-950 bg-[#080c14] flex-shrink-0">
        <button
          onClick={onBack}
          className="text-blue-400 hover:text-white font-bold text-sm transition-colors flex items-center gap-1"
        >
          &lsaquo; Menu
        </button>
        <span className="font-pixel text-blue-500 text-[9px] tracking-widest">MONSTRA</span>
        <span className="font-bold text-white text-sm tracking-wide">Lore &amp; Info</span>
      </div>

      {/* ── Tab switcher ── */}
      <div className="relative z-20 flex border-b border-blue-950 flex-shrink-0">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => { setActiveTab(tab); setSelectedMon(null); }}
            className={`flex-1 py-3 text-sm font-bold tracking-wide transition-colors ${
              activeTab === tab
                ? 'text-blue-400 border-b-2 border-blue-500 bg-[#0d1628]'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── Content area ── */}
      <div className="relative z-20 flex-1 overflow-hidden">
        {activeTab === 'World'     && <WorldTab />}
        {activeTab === 'Monstadex' && <MonstadexTab onSelectMon={setSelectedMon} />}

        {/* Monster detail overlay */}
        {selectedMon && (
          <MonsterDetail
            monster={selectedMon}
            onClose={() => setSelectedMon(null)}
          />
        )}
      </div>
    </div>
  );
};

export default LoreScreen;
