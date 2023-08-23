const Board = require("./Board")
const Player = require("./Player")

class Game{
    constructor(player1Name , player2Name){
        this.players = [new Player(player1Name ) , new Player(player2Name)]
        this.isGameEnded = false
        this.turn =0
        this.board = new Board()
    }
    static newGame(player1Name,player2Name){
        
        if(player1Name==player2Name || typeof player1Name !='string' || typeof player2Name != 'string'){
            return ['Enter Valid Input' , null]
        }
        return ['Object Created ' , new Game(player1Name,player2Name)]
    }
    play(cellNumber){
        if(typeof cellNumber != 'number'){
            return 'Invalid Inputs'
        }
        if(this.isGameEnded){
            return 'Game Ended , Start New Game'
        }
        if(!this.board.isCellEmpty(cellNumber)){
            return 'Cell is not Empty'
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
        
        this.board.markCell(cellNumber,currentPlayer.getSymbol())
        //currentPlayer.markCell(this.board.cells[cellNumber] )
        //currentPlayer.
        this.turn++
        this.board.printBoard()
        //let gameState = this.board.gameState()
        if(this.board.isDraw()){
            this.isGameEnded=true           
            return 'Game Draw '
        }
        else if(this.board.isWon()){
            this.isGameEnded = true            
            
            return `Game Over , Winner is: ${currentPlayer.name}`
        }
        
        return 'Continue Playing'
         
    }
}

module.exports = Game