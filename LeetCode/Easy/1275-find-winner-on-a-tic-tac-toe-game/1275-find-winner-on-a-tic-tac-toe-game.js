/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {

    const board = Array(3).fill().map(() => Array(3).fill(0));
    
    const PLAYER = {
        "A" : "O",
        "B" : "X",
    }
    
    let player = PLAYER.A;
    for(let [row, col] of moves){
        board[row][col] = player;
        player = player === PLAYER.A ? PLAYER.B : PLAYER.A;
    }
        
    function getWinner(board){
     
        for(let i=0; i<3; i++){
            // row 방향 확인
            if(board[i][0] !==0 && board[i][0] === board[i][1] && board[i][0] === board[i][2]) return board[i][0];
            // col 방향 확인
            if(board[0][i] !==0 && board[0][i] === board[1][i] && board[1][i] === board[2][i]) return board[0][i];
        }
        // 왼->오 대각방향 확인
        if(board[1][1] !== 0){
            if(board[0][0] === board[1][1] && board[1][1] === board[2][2]) return board[0][0];
            // 오->왼 대각 방향 확인
            if(board[2][0] === board[1][1] && board[1][1] === board[0][2]) return board[2][0];
        }

        return null;
    }
        
    const winner = getWinner(board);
    if(winner){
        return winner === PLAYER.A ? "A" : "B" 
    }

    return moves.length === 9 ? "Draw" : "Pending";
    
};