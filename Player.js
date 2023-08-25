
const Cell = require("./Cell")

class Player{
    constructor (name , symbol ){
        this.name =name
        this.symbol = symbol
        //this.board = new Board()
    }
    getSymbol(){
        return this.symbol
    }

     
}

module.exports = Player
