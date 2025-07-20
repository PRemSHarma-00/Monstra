import FireMoves from "./moves/fireMoves";
import WaterMoves from "./moves/waterMoves";
import GhostMoves from "./moves/ghost";
import ElectricMoves from "./moves/electric";
import GrassMoves from "./moves/grassMoves";
import GroundMoves from "./moves/ground";
import RockMoves from "./moves/rock";
import IceMoves from "./moves/ice";
import FlyingMoves from "./moves/flying";
import PoisonMoves from "./moves/poison";
import PsychicMoves from "./moves/psychic";

export const TypeToMoves ={
 Fire: FireMoves,
  Water: WaterMoves,
  Grass: GrassMoves,
  Electric: ElectricMoves,
  Ice: IceMoves,
  Poison: PoisonMoves,
  Flying: FlyingMoves,
  Rock: RockMoves,
  Ground: GroundMoves,
  Psychic: PsychicMoves,
  Ghost: GhostMoves,
}
export const allMoves = Object.values(TypeToMoves).flat();

function getRandomMoves(types=[], count =4){
  const typeMoves = types.flatMap(type => TypeToMoves[type] || []);
  const allMovesShuffled = [...allMoves].sort(() => 0.5-Math.random());

  const usedNames = new Set();
  const selectedTypeMoves =[];
  for(let move of [...typeMoves].sort(() => 0.5 - Math.random())){
    if(!usedNames.has(move.name)){
      selectedTypeMoves.push(move);
      usedNames.add(move.name);
      if( selectedTypeMoves.length === count -1) break;
    }
  }
    const oneRandom = allMovesShuffled.find(m => !usedNames.has(m.name));
  if (oneRandom) selectedTypeMoves.push(oneRandom);

  return selectedTypeMoves;
}
export default getRandomMoves;