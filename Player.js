//const Board = require("./Board")
const Cell = require("./Cell")

class Player{
    constructor (name ){
        this.name =name
        this.symbol
        //this.board = new Board()
    }
    getSymbol(){
        return this.symbol
    }
    setSymbol(symbol){
        this.symbol=symbol
    }
     
}

module.exports = Player