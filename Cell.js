class Cell{
    constructor(){
        this.mark = 'E'
    }
    isCellEmpty(){
        if(this.mark == 'E'){
            return true
        }
        return false
    }
    markCell(symbol){
        this.mark = symbol
    }
}

module.exports = Cell