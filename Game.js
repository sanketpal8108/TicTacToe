const Board = require("./Board")
const Player = require("./Player")

class Game {
    #players
    #isGameEnded
    #turn 
    #board
    #winner
    constructor(player1Name, player2Name) {
        this.#players = [new Player(player1Name,'X'), new Player(player2Name,'O')]
        this.#isGameEnded = false
        this.#turn = 0
        this.#board = new Board()
        this.#winner = null
    }
    static newGame(player1Name, player2Name) {
        try {
            if (player1Name == player2Name || typeof player1Name != 'string' || typeof player2Name != 'string') {
                
                throw new Error ('Enter Valid Input')
                
            }
            
            return new Game(player1Name, player2Name)
        } catch (error) {
            console.log(error.message);
        }

       
    }
    play(cellNumber) {
        try {
            if (typeof cellNumber != 'number') {
                
                throw new Error('Invalid Inputs')
            }
            if (this.#isGameEnded) {
                if (this.#winner != null) {
    
                    return `game ended : Winner was ${this.#winner.name}`
                }
                return `game ended : DRAW`
            }
            if (!this.#board.isCellEmpty(cellNumber)) {
                
                throw new Error('Cell is not Empty')
            }
    
            let currentPlayer
            if (this.#turn % 2 == 0) {
                currentPlayer = this.#players[0]
                
            }
            else {
                currentPlayer = this.#players[1]
                
            }
    
            this.#board.markCell(cellNumber, currentPlayer.getSymbol())
            
            this.#turn++
            this.#board.printBoard()
            
            if (this.#board.isDraw()) {
                this.#isGameEnded = true
                return 'Game Draw '
            }
            else if (this.#board.isWon()) {
                this.#isGameEnded = true
               this.#winner = currentPlayer
                return `Game Over , Winner is: ${this.#winner.name}`
            }
    
            return 'Continue Playing'
        } catch (error) {
            console.log(error.message);
        }

    }
}

module.exports = Game
