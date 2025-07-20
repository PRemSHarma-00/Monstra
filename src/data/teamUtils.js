import MonsterRoster from "./monsters";
import  generateMonsterInstance  from "./monsterUtils";

function getRandomTeam(){
    const shuffled = [...MonsterRoster].sort(() => 0.5 -Math.random());

    const playerTeam = [
        generateMonsterInstance(shuffled[0]),
        generateMonsterInstance(shuffled[1])
    ];

    const opponentTeam =[
        generateMonsterInstance(shuffled[2]),
        generateMonsterInstance(shuffled[3])
    ];

    return {playerTeam, opponentTeam};
}
export default getRandomTeam;