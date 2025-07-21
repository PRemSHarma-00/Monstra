import { useEffect, useState } from 'react';
import getRandomTeam from '../data/teamUtils';

const BattleScreen = ({onBattleEnd}) => {
  const [playerTeamState, setPlayerTeamState] = useState([]);
  const [enemyTeamState, setEnemyTeamState] = useState([]);
  const [playerIndex, setPlayerIndex] = useState(0);
  const [enemyIndex, setEnemyIndex] = useState(0);
  const [message, setMessage] = useState("A wild enemy appeared!");
  const [battleOver, setBattleOver] = useState(false);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [didWin,setDidWin] = useState(null);

  useEffect(() => {
    const { playerTeam, opponentTeam } = getRandomTeam();
    setPlayerTeamState(playerTeam);
    setEnemyTeamState(opponentTeam);
  }, []);

  const player = playerTeamState[playerIndex];
  const enemy = enemyTeamState[enemyIndex];

  if (!player || !enemy) return <div className="text-white">Loading...</div>;

  const handleMove = (move) => {
    if (battleOver || !isPlayerTurn) return;

    const damage = move.power;
    const newHp = Math.max(0, enemy.hp - damage);

    setEnemyTeamState((prev) => {
      const updated = [...prev];
      updated[enemyIndex] = { ...updated[enemyIndex], hp: newHp };
      return updated;
    });

    setMessage(`${player.name} used ${move.name}! It dealt ${damage} damage`);
    setIsPlayerTurn(false);

    if (newHp === 0) {
      setTimeout(() => {
        if (enemyIndex === 0 && enemyTeamState[1].hp > 0) {
          setEnemyIndex(1);
          setMessage(`${enemy.name} fainted! ${enemyTeamState[1].name} enters the battle!`);
        } else {
          setBattleOver(true);
          setDidWin(true);
          setMessage(`${enemy.name} fainted! You win the 2v2 battle!`);
        }
        setIsPlayerTurn(true);
      }, 1000);
      return;
    }

    // Enemy counterattack
    setTimeout(() => {
      const enemyMove = enemy.moves[Math.floor(Math.random() * enemy.moves.length)];
      const enemyDamage = enemyMove.power;
      const newPlayerHp = Math.max(0, player.hp - enemyDamage);

      setPlayerTeamState((prev) => {
        const updated = [...prev];
        updated[playerIndex] = { ...updated[playerIndex], hp: newPlayerHp };
        return updated;
      });

      setMessage(`${enemy.name} used ${enemyMove.name}! It dealt ${enemyDamage} damage`);

      if (newPlayerHp === 0) {
        if (playerIndex === 0 && playerTeamState[1].hp > 0) {
          setPlayerIndex(1);
          setMessage(`${player.name} fainted! ${playerTeamState[1].name} enters the battle!`);
        } else {
          setBattleOver(true);
          setDidWin(false);
          setMessage(`${player.name} fainted! You lost the 2v2 battle.`);
        }
      }

      setIsPlayerTurn(true);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen w-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white p-4">
      {/* Enemy */}
      <div className="w-full flex justify-between items-center px-8">
        <div className="text-left">
          <h2 className="text-xl font-bold">{enemy.name}</h2>
          <div className="w-40 h-3 bg-gray-700 rounded-full overflow-hidden mt-1">
            <div
              className="h-full bg-green-400 rounded-full transition-all duration-300"
              style={{ width: `${(enemy.hp / enemy.maxHp) * 100}%` }}
            />
          </div>
        </div>
        <img
          src={enemy.sprite.front}
          alt={enemy.name}
          className="h-38 max-w-[30%] object-contain"
        />
      </div>

      {/* Player */}
      <div className="w-full flex justify-between items-center px-8 mt-12">
        <img
          src={player.sprite.back}
          alt={player.name}
          className="h-32 object-contain"
        />
        <div className="text-right">
          <h2 className="text-xl font-bold">{player.name}</h2>
          <div className="w-40 h-3 bg-gray-700 rounded-full overflow-hidden mt-1">
            <div
              className="h-full bg-green-400 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${(player.hp / player.maxHp) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Message Box */}
      <div className="mt-6 text-lg font-mono min-h-[2rem]">{message}</div>

      {/* Move Buttons */}
      {!battleOver ?( 
      <div className="grid grid-cols-2 gap-4 w-full max-w-md mt-16">
        {player.moves.map((move, idx) => (
          <button
            key={idx}
            onClick={() => handleMove(move)}
            className={`bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-xl transition-all ${
              !isPlayerTurn || battleOver ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!isPlayerTurn || battleOver}
          >
            {move.name}
          </button>
        ))}
      </div>) :(
        <div className="mt-12 flex-col items-center gap-4">
          <h2 className='text-2xl font-bold text-center'>
            {didWin?"Get some training before thinking of fighting again":"I'll be back stronger"}
          </h2>
          <button 
          onClick={onBattleEnd}
          className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl'>
            Return to Main Menu
          </button>
        </div>
      )}
    </div>
  );
};

export default BattleScreen;
