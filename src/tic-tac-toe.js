class TicTacToe {
    constructor() {
    }

    currentPlayer = 'x'
    gameField = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex]) {
            return;
        } else {
            this.gameField[rowIndex][columnIndex] = this.currentPlayer
            this.currentPlayer = this.currentPlayer == 'x' ? 'o' : 'x'
        }
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        for (let i = 0; i < this.gameField.length; i++) {
            if (this.gameField[i][0] && this.gameField[i][0] === this.gameField[i][1] && this.gameField[i][0] === this.gameField[i][2]) {
                return this.gameField[i][0]
            }
        }
        for (let i = 0; i < this.gameField.length; i++) {

            if (this.gameField[0][i] && this.gameField[0][i] === this.gameField[1][i] && this.gameField[0][i] === this.gameField[2][i]) {
                return this.gameField[0][i]
            }
        }

        if (this.gameField[0][0] && this.gameField[0][0] === this.gameField[1][1] && this.gameField[0][0] === this.gameField[2][2]) {
            return this.gameField[1][1]
        }
        if (this.gameField[0][2] && this.gameField[0][2] === this.gameField[1][1] && this.gameField[0][2] === this.gameField[2][0]) {
            return this.gameField[1][1]
        }
        return null;
    }

    noMoreTurns() {
        return this.gameField.every(row => row.every(column => column))
    }

    isDraw() {
        if (!this.getWinner() && this.noMoreTurns()) {
            return true;
        } else {
            return false;

        }
    }


    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;