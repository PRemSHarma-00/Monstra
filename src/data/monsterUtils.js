import  getRandomMoves  from "./moves";
function generateMonsterInstance(base){
    return{
        ...base,
        currentHp: base.hp,
        status: null,
        moves: getRandomMoves(base.type,4)

    };
}
export default generateMonsterInstance;