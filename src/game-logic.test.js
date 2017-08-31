import {didPlayerWin, isGameCompleted} from './game-logic';
describe('Test the logic of didPlayerWin', () => {
    it('should work for happy case', () => {
        const playerScore = [2,8,5]
        expect(didPlayerWin(playerScore, 'player1')).toEqual(true);
    });
    it('should fail for failure case', () => {
        const playerScore = [1,4];
        expect(didPlayerWin(playerScore, 'player2')).toEqual(false);
    })
    it('should work when score is > 3', () => {
        const playerScore = [8, 2, 1, 5, 4];
        expect(didPlayerWin(playerScore, 'player1')).toEqual(true);
    })
})

describe('Test game completion', () => {
    it('should work for happy case', () => {
        const playerStack = [{"player":"player1","index":1},{"player":"player2","index":4},{"player":"player1","index":5},{"player":"player2","index":7},{"player":"player1","index":9}];
        expect(isGameCompleted(playerStack, 'player1')).toEqual(true);
    });
    it('should say game not completed', () => {
        const playerStack = [{"player":"player1","index":1},{"player":"player2","index":4},{"player":"player1","index":5},{"player":"player2","index":7}];
        expect(isGameCompleted(playerStack, 'player2')).toEqual(false);
    });
    it('should give undefined which means stalemate', () => {
        const playerStack = [{"player":"player1","index":1},{"player":"player2","index":2},{"player":"player1","index":3},{"player":"player2","index":4},{"player":"player1","index":5},{"player":"player2","index":6},{"player":"player1","index":7},{"player":"player2","index":8},{"player":"player1","index":9}];
        expect(isGameCompleted(playerStack, 'player2')).toEqual(undefined);
    })
})