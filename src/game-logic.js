export const Players = {
  P1: 'player1',
  P2: 'player2'
}

let playerScores = {};
Object.keys(Players).map(key => {
    playerScores[Players[key]] = []
})
console.log(playerScores)

const winScenarios = [[1,2,3],[1,4,7],[1,5,9],[2,5,8],[3,6,9],[4,5,6],[7,8,9],[3,5,7]];
export const isGameCompleted = (playStack, player) => {
    playerScores[player] = playStack.filter(info => {
        return info.player === player;
    }).map(info => info.index).sort();
    const playerToWin = winScenarios.reduce((playerFinal, winArr) => {
        const playerOutside = Object.keys(playerScores).reduce((playerToWin, playerKey) => {
            const score = playerScores[playerKey];
            const winLeft = winArr.filter(winScore => {
                return score.indexOf(winScore) === -1;
            })
            if(winLeft.length) return undefined;
            playerToWin = playerToWin ? playerToWin : playerKey;
            console.log(`Inside ${playerToWin}`)
            return playerToWin;
        }, null)
        console.log(`Outside ${playerOutside}`);
        playerFinal = playerFinal? playerFinal : playerOutside;
        return playerFinal
    }, undefined)
    console.log(playerToWin)
    return false;    
}