export const Players = {
  P1: 'player1',
  P2: 'player2'
}

const winScenarios = [[1,2,3],[1,4,7],[1,5,9],[2,5,8],[3,6,9],[4,5,6],[7,8,9],[3,5,7]];
export const isGameCompleted = (playStack, player) => {
    console.log(JSON.stringify(playStack));
    if(playStack.length === 9) return undefined;
    const playerScore = playStack.filter(info => {
        return info.player === player;
    }).map(info => info.index).sort();
    return didPlayerWin(playerScore, player);    
}

export const didPlayerWin = (playerScore, player) => {
    const matchingScore = winScenarios.filter(winScore => {
        const match = playerScore.filter(point => {
            return winScore.indexOf(point) > -1
        })
        return match.length === 3;
    })
    if(matchingScore.length === 1) {
       return true;
    }
    return false
}
