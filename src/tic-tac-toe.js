class TicTacToe {
    constructor() {
	this.board = [[],[],[]];
	this.currentPlayer = 'x';
	this.winner = null;
	this.fields = 0;
    }

    getCurrentPlayerSymbol() {
	return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
	if(this.board[rowIndex][columnIndex] != null) return;
	this.fields++;
	this.board[rowIndex][columnIndex] = this.currentPlayer;
		if( (this.board[0][0]&&this.board[0][0] === this.board[0][1]&&this.board[0][0] === this.board[0][2])
            ||(this.board[1][0]&&this.board[1][0] === this.board[1][1]&&this.board[1][0] === this.board[1][2])
            ||(this.board[2][0]&&this.board[2][0] === this.board[2][1]&&this.board[2][0] === this.board[2][2])
            ||(this.board[0][0]&&this.board[0][0] === this.board[1][1]&&this.board[0][0] === this.board[2][2])
            ||(this.board[0][2]&&this.board[0][2] === this.board[1][1]&&this.board[0][2] === this.board[2][0])
            ||(this.board[0][0]&&this.board[0][0] === this.board[1][0]&&this.board[0][0] === this.board[2][0]) 
            ||(this.board[0][1]&&this.board[0][1] === this.board[1][1]&&this.board[0][1] === this.board[2][1]) 
            ||(this.board[0][2]&&this.board[0][2] === this.board[1][2]&&this.board[0][2] === this.board[2][2])  ){
			this.winner = this.currentPlayer;
		}
	if(this.currentPlayer == 'x') return this.currentPlayer = 'o';
		return this.currentPlayer = 'x';
    }

    isFinished() {
	if(this.isDraw()||this.getWinner()) return true;
        return false;
    }

    getWinner() {
	return this.winner;
    }

    noMoreTurns() {
	if(this.fields === 9) return true;
        return false;
    }

    isDraw() {
	if( this.fields === 9 && !this.winner  ) return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
	if(this.board[rowIndex][colIndex]) return this.board[rowIndex][colIndex];
        return null;
    }
}

module.exports = TicTacToe;
