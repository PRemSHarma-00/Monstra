import { useEffect, useState } from 'react';
import getRandomTeam from '../data/teamUtils';
import useSounds from '../engine/useSounds';

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

const PHASE = {
  INIT:        'init',
  PLAYER_TURN: 'player_turn',
  WAITING:     'waiting',
  BATTLE_OVER: 'battle_over',
};

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

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

const TypeBadge = ({ type }) => {
  const c = TYPE_COLORS[type] || { bg: 'bg-gray-800', text: 'text-gray-300', border: 'border-gray-600' };
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-pixel border ${c.bg} ${c.text} ${c.border}`}>
      {type}
    </span>
  );
};

const hpBarColor = (pct) => {
  if (pct > 50) return 'bg-blue-500';
  if (pct > 25) return 'bg-yellow-400';
  return 'bg-red-500';
};

const HPCard = ({ monster, flashing }) => {
  if (!monster) return null;
  const pct = Math.max(0, (monster.hp / monster.maxHp) * 100);
  return (
    <div
      className={`bg-[#0d1628] border rounded-lg p-3 min-w-[180px] transition-colors duration-150 ${
        flashing ? 'border-white' : 'border-blue-900'
      }`}
    >
      <div className="flex items-center justify-between mb-1.5 gap-2">
        <span className="font-bold text-sm text-white tracking-wide truncate">{monster.name}</span>
        <div className="flex gap-1 flex-wrap justify-end flex-shrink-0">
          {(monster.type || []).map(t => <TypeBadge key={t} type={t} />)}
        </div>
      </div>
      <div className="w-full h-2 bg-[#080c14] rounded-full overflow-hidden border border-blue-950 mb-1.5">
        <div
          className={`h-full rounded-full transition-all duration-500 ${hpBarColor(pct)} ${flashing ? 'animate-hpFlash' : ''}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-bold text-slate-500 tracking-widest">HP</span>
        <span className="text-[11px] font-bold">
          <span className={pct <= 25 ? 'text-red-400' : pct <= 50 ? 'text-yellow-400' : 'text-blue-400'}>
            {monster.hp}
          </span>
          <span className="text-slate-600"> / {monster.maxHp}</span>
        </span>
      </div>
    </div>
  );
};

const RosterPips = ({ team, activeIndex }) =>
  team.length > 0 ? (
    <div className="flex gap-1.5 items-center">
      {team.map((m, i) => (
        <div
          key={i}
          title={m.name}
          className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
            m.hp <= 0
              ? 'bg-slate-700 border-slate-600'
              : i === activeIndex
              ? 'bg-blue-400 border-blue-300 scale-125'
              : 'bg-blue-700 border-blue-600'
          }`}
        />
      ))}
    </div>
  ) : null;

const MoveButton = ({ move, onClick }) => {
  const c = TYPE_COLORS[move.type] || { bg: 'bg-[#0d1628]', text: 'text-slate-300', border: 'border-blue-900' };
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-start px-4 py-3 rounded-lg border transition-all duration-150 text-left
        ${c.bg} ${c.border} ${c.text} hover:brightness-125 hover:scale-[1.02] active:scale-95 cursor-pointer`}
    >
      <span className="font-bold text-sm tracking-wide">{move.name}</span>
      <div className="flex items-center gap-2 mt-1">
        {move.type && <TypeBadge type={move.type} />}
        <span className="text-[10px] font-bold text-slate-400 tracking-wider">PWR {move.power}</span>
      </div>
    </button>
  );
};

const MessageBox = ({ message }) => (
  <div className="border border-blue-900 bg-[#0d1628] rounded-lg px-5 py-4 min-h-[88px] flex items-center animate-msgSlideUp">
    <div className="flex items-start gap-3 w-full">
      <span className="text-blue-500 font-bold text-base mt-0.5 flex-shrink-0 leading-none animate-pulse">&#9658;</span>
      <p className="text-white text-sm leading-relaxed">{message}</p>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Sprite animation helper
// ─────────────────────────────────────────────────────────────────────────────

const spriteClass = (anim, isEnemy) => {
  if (anim === 'fainting') return 'animate-spriteFaint pointer-events-none';
  if (anim === 'entering')  return isEnemy ? 'animate-spriteEnterEnemy' : 'animate-spriteEnterPlayer';
  if (anim === 'hidden')    return 'opacity-0 pointer-events-none';
  return isEnemy ? 'animate-float' : '';
};

// ─────────────────────────────────────────────────────────────────────────────
// Mute button
// ─────────────────────────────────────────────────────────────────────────────

const MuteButton = ({ muted, onToggle }) => (
  <button
    onClick={onToggle}
    title={muted ? 'Unmute sounds' : 'Mute sounds'}
    className="flex items-center gap-1.5 px-3 py-1 rounded border border-blue-950 bg-[#0d1628] hover:border-blue-700 transition-colors"
  >
    <span className="text-[10px] font-bold tracking-widest text-slate-400">
      SFX {muted ? 'OFF' : 'ON'}
    </span>
    <span className={`w-1.5 h-1.5 rounded-full ${muted ? 'bg-slate-600' : 'bg-blue-400'}`} />
  </button>
);

// ─────────────────────────────────────────────────────────────────────────────
// BattleScreen
// ─────────────────────────────────────────────────────────────────────────────

const BattleScreen = ({ onBattleEnd }) => {
  const [playerTeamState, setPlayerTeamState] = useState([]);
  const [enemyTeamState,  setEnemyTeamState]  = useState([]);
  const [playerIndex, setPlayerIndex] = useState(0);
  const [enemyIndex,  setEnemyIndex]  = useState(0);
  const [displayMsg,  setDisplayMsg]  = useState('Preparing battle...');
  const [phase,       setPhase]       = useState(PHASE.INIT);
  const [didWin,      setDidWin]      = useState(null);
  const [playerAnim,  setPlayerAnim]  = useState('entering');
  const [enemyAnim,   setEnemyAnim]   = useState('entering');
  const [flashPlayer, setFlashPlayer] = useState(false);
  const [flashEnemy,  setFlashEnemy]  = useState(false);

  // Sound hook — all play* functions are no-ops when muted
  const {
    muted, toggleMute,
    startBgMusic, stopBgMusic,
    playSelect, playHit, playFaint,
    playEnter, playVictory, playDefeat, playBattleStart,
  } = useSounds();

  // ── Load teams ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const { playerTeam, opponentTeam } = getRandomTeam();
    setPlayerTeamState(playerTeam);
    setEnemyTeamState(opponentTeam);
    setTimeout(() => {
      playBattleStart();            // 🎵 Battle start jingle
      startBgMusic();               // 🎵 Begin looping bg music
      setPlayerAnim('normal');
      setEnemyAnim('normal');
      setDisplayMsg('');
      setPhase(PHASE.PLAYER_TURN);
    }, 900);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Flash HP bar ───────────────────────────────────────────────────────────
  const triggerFlash = (target) => {
    if (target === 'enemy') {
      setFlashEnemy(true);
      setTimeout(() => setFlashEnemy(false), 450);
    } else {
      setFlashPlayer(true);
      setTimeout(() => setFlashPlayer(false), 450);
    }
  };

  // ── Faint → swap → enter sequence ─────────────────────────────────────────
  /**
   * Handles the full animation sequence when a monster faints:
   *   400 ms  → show faint message + start faint animation + play faint sound
   *   1750 ms → hide sprite; if replacement exists: swap index, play enter, resume
   *                          if no replacement: end battle
   */
  const playFaintSequence = (side, faintedName, nextIndex, nextName, onNoMore, onResume) => {
    const setAnim = side === 'enemy' ? setEnemyAnim : setPlayerAnim;
    const setIdx  = side === 'enemy' ? setEnemyIndex : setPlayerIndex;

    setTimeout(() => {
      playFaint();                          // 🎵 Faint sound
      setDisplayMsg(`${faintedName} fainted!`);
      setAnim('fainting');
    }, 400);

    setTimeout(() => {
      if (nextIndex < 0 || !nextName) {
        setAnim('hidden');
        onNoMore();
        return;
      }
      setDisplayMsg(`Go, ${nextName}!`);
      setAnim('hidden');
      setTimeout(() => {
        setIdx(nextIndex);
        setTimeout(() => {
          playEnter();                      // 🎵 Enter sound
          setAnim('entering');
          setTimeout(() => {
            setAnim('normal');
            onResume();
          }, 700);
        }, 60);
      }, 500);
    }, 400 + 1350);
  };

  // ── Active monsters ────────────────────────────────────────────────────────
  const player = playerTeamState[playerIndex];
  const enemy  = enemyTeamState[enemyIndex];

  if (!player || !enemy) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#080c14] text-white font-pixel text-sm">
        LOADING...
      </div>
    );
  }

  // ── Handle move selection ──────────────────────────────────────────────────
  const handleMove = (move) => {
    if (phase !== PHASE.PLAYER_TURN) return;

    playSelect();                           // 🎵 Click sound
    setPhase(PHASE.WAITING);

    const damage     = move.power;
    const newEnemyHp = Math.max(0, enemy.hp - damage);

    setDisplayMsg(`${player.name} used ${move.name}!`);
    setEnemyTeamState(prev => {
      const u = [...prev];
      u[enemyIndex] = { ...u[enemyIndex], hp: newEnemyHp };
      return u;
    });

    setTimeout(() => {
      playHit();                            // 🎵 Hit sound
      triggerFlash('enemy');
    }, 250);

    // ── Enemy fainted ──────────────────────────────────────────────────────
    if (newEnemyHp <= 0) {
      const nextEIdx  = enemyIndex + 1;
      const nextEName = enemyTeamState[nextEIdx]?.hp > 0 ? enemyTeamState[nextEIdx]?.name : null;

      playFaintSequence(
        'enemy', enemy.name,
        nextEName ? nextEIdx : -1, nextEName,
        () => {
          stopBgMusic(1500);                // 🎵 Fade out bg music
          playVictory();                    // 🎵 Victory fanfare
          setDidWin(true);
          setDisplayMsg('You won the battle!');
          setPhase(PHASE.BATTLE_OVER);
        },
        () => {
          setDisplayMsg('');
          setPhase(PHASE.PLAYER_TURN);
        }
      );
      return;
    }

    // ── Enemy counterattacks ───────────────────────────────────────────────
    setTimeout(() => {
      const eMove       = enemy.moves[Math.floor(Math.random() * enemy.moves.length)];
      const eDamage     = eMove.power;
      const newPlayerHp = Math.max(0, player.hp - eDamage);

      setDisplayMsg(`${enemy.name} used ${eMove.name}!`);
      setPlayerTeamState(prev => {
        const u = [...prev];
        u[playerIndex] = { ...u[playerIndex], hp: newPlayerHp };
        return u;
      });

      setTimeout(() => {
        playHit();                          // 🎵 Hit sound
        triggerFlash('player');
      }, 250);

      // ── Player fainted ───────────────────────────────────────────────────
      if (newPlayerHp <= 0) {
        const nextPIdx  = playerIndex + 1;
        const nextPName = playerTeamState[nextPIdx]?.hp > 0 ? playerTeamState[nextPIdx]?.name : null;

        playFaintSequence(
          'player', player.name,
          nextPName ? nextPIdx : -1, nextPName,
          () => {
            stopBgMusic(1500);              // 🎵 Fade out bg music
            playDefeat();                   // 🎵 Defeat sound
            setDidWin(false);
            setDisplayMsg('You lost the battle...');
            setPhase(PHASE.BATTLE_OVER);
          },
          () => {
            setDisplayMsg('');
            setPhase(PHASE.PLAYER_TURN);
          }
        );
        return;
      }

      // ── Both alive → back to player's turn ────────────────────────────
      setTimeout(() => {
        setDisplayMsg('');
        setPhase(PHASE.PLAYER_TURN);
      }, 700);

    }, 850);
  };

  // ─────────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="relative flex flex-col h-screen w-screen bg-[#080c14] text-white overflow-hidden select-none">

      {/* Scanlines */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-25"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 6px)',
        }}
      />

      {/* ── Top bar ── */}
      <div className="relative z-20 flex items-center justify-between px-4 py-2 border-b border-blue-950 bg-[#080c14]">
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              phase === PHASE.PLAYER_TURN ? 'bg-blue-400 animate-pulse' : 'bg-slate-700'
            }`}
          />
          <span className="text-[10px] font-bold tracking-widest text-slate-400">
            {phase === PHASE.BATTLE_OVER ? 'BATTLE OVER'
              : phase === PHASE.PLAYER_TURN ? 'YOUR TURN'
              : 'WAIT...'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold text-blue-500 tracking-widest">2 v 2</span>
          <MuteButton muted={muted} onToggle={toggleMute} />
        </div>
      </div>

      {/* ── Battle field ── */}
      <div className="relative z-20 flex flex-col flex-1 overflow-hidden">

        {/* Enemy side */}
        <div className="flex justify-between items-start px-4 pt-3">
          <div className="flex flex-col gap-2 items-start">
            <RosterPips team={enemyTeamState} activeIndex={enemyIndex} />
            <HPCard monster={enemy} flashing={flashEnemy} />
          </div>
          <div className="flex items-end pr-4">
            <img
              src={enemy.sprite?.front || ''}
              alt={enemy.name}
              className={`h-28 md:h-36 object-contain ${spriteClass(enemyAnim, true)}`}
            />
          </div>
        </div>

        {/* Player side */}
        <div className="flex justify-between items-end px-4 pb-2 mt-1">
          <div className="flex items-start pl-4">
            <img
              src={player.sprite?.back || ''}
              alt={player.name}
              className={`h-24 md:h-32 object-contain ${spriteClass(playerAnim, false)}`}
            />
          </div>
          <div className="flex flex-col gap-2 items-end">
            <HPCard monster={player} flashing={flashPlayer} />
            <RosterPips team={playerTeamState} activeIndex={playerIndex} />
          </div>
        </div>

        {/* Divider */}
        <div className="mx-4 h-px bg-blue-950" />

        {/* ── Bottom panel (moves ↔ message ↔ result) ── */}
        <div className="px-4 py-3 flex-shrink-0" style={{ minHeight: '120px' }}>

          {phase === PHASE.INIT && (
            <MessageBox message="Preparing battle..." />
          )}

          {phase === PHASE.PLAYER_TURN && (
            <div className="grid grid-cols-2 gap-2 animate-fadeInUp">
              {player.moves.map((move, idx) => (
                <MoveButton key={idx} move={move} onClick={() => handleMove(move)} />
              ))}
            </div>
          )}

          {phase === PHASE.WAITING && (
            <MessageBox message={displayMsg} />
          )}

          {phase === PHASE.BATTLE_OVER && (
            <div className="animate-fadeInUp">
              <div className="border border-blue-900 bg-[#0d1628] rounded-lg px-5 py-4 min-h-[88px] flex flex-col justify-center">
                <p className={`font-black text-lg mb-1 tracking-wide ${didWin ? 'text-blue-400' : 'text-red-400'}`}>
                  {didWin ? 'Glorious victory!' : 'Better luck next time.'}
                </p>
                <p className="text-slate-400 text-sm mb-4">
                  {didWin ? 'The enemy team has fallen.' : 'Your team has been defeated.'}
                </p>
                <button
                  onClick={onBattleEnd}
                  className="self-start px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-widest rounded transition-all"
                >
                  Main Menu
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BattleScreen;
