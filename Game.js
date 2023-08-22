const Board = require("./Board")
const Player = require("./Player")

class Game{
    constructor(player1Name , player2Name){
        this.players = [new Player(player1Name ) , new Player(player2Name)]
        this.isGameEnded = false
        this.turn =0
        this.board = new Board()
    }
    play(cellNumber){
        if(this.players[0].name==this.players[1].name && typeof this.players[0].name!='string' && typeof player2Name != 'string'){
            return 'Invalid Inputs'
        }
        if(this.isGameEnded){
            return 'Game Ended , Start New Game'
        }
        
        let currentPlayer
        if(this.turn%2==0){
            currentPlayer = this.players[0]
            currentPlayer.setSymbol('X')
        }
        else{
            currentPlayer = this.players[1]
            currentPlayer.setSymbol('O')
        }
        currentPlayer.markCell(this.board.cells[cellNumber] )
        //currentPlayer.
        this.turn++
        let gameState = this.board.gameState()
        if(gameState[1] == 'Draw'){
            this.isGameEnded=true
            this.board.printBoard()
            return 'Game Draw '
        }
        else if(gameState[1] == 'Won'){
            this.isGameEnded = true
            this.board.printBoard()
            return 'Game Over , Winner is: ' + currentPlayer.name
        }
        this.board.printBoard()
        return 'Continue Playing'
        
    }
}

module.exports = Game