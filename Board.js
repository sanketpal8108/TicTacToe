const Cell = require("./Cell")

class Board{
    constructor(){
        this.cells = [new Cell() ,new Cell() ,new Cell() ,new Cell() ,new Cell() ,new Cell() ,new Cell() ,
            new Cell() ,new Cell() ]
    }
    isCellEmpty(cellNumber){
        if((!this.cells[cellNumber].isCellEmpty())){
            return  false
        }
        return true
    }
     markCell(cellNumber , symbol){
        
        this.cells[cellNumber].markCell(symbol)
        
        
    }
    //WinningOrDraw Conditions
    isWon(){
        if(this.cells[0].getMark()==this.cells[1].getMark() && this.cells[0].getMark()==this.cells[2].getMark() && !this.cells[0].isCellEmpty()){
            return true
        }
        if(this.cells[3].getMark()==this.cells[4].getMark() && this.cells[3].getMark()==this.cells[5].getMark() && !this.cells[3].isCellEmpty()){
            return true
        }
        if(this.cells[6].getMark()==this.cells[7].getMark() && this.cells[6].getMark()==this.cells[8].getMark() && !this.cells[6].isCellEmpty()){
            return true
        }
        if(this.cells[0].getMark()==this.cells[3].getMark() && this.cells[0].getMark()==this.cells[6].getMark() && !this.cells[0].isCellEmpty()){
            return true
        }
        if(this.cells[4].getMark()==this.cells[1].getMark() && this.cells[1].getMark()==this.cells[7].getMark() && !this.cells[7].isCellEmpty()){
            return true
        }
        if(this.cells[3].getMark()==this.cells[5].getMark() && this.cells[3].getMark()==this.cells[8].getMark() && !this.cells[3].isCellEmpty()){
            return true
        }
        if(this.cells[4].getMark()==this.cells[0].getMark() && this.cells[0].getMark()==this.cells[8].getMark() && !this.cells[0].isCellEmpty()){
            return true
        }
        if(this.cells[4].getMark()==this.cells[2].getMark() && this.cells[4].getMark()==this.cells[6].getMark() && !this.cells[4].isCellEmpty()){
            return true
        }
        return false
    }
    isDraw(){
        
        for(let i =0 ; i<this.cells.length ; i++){
            if(this.cells[i].isCellEmpty()){
                return false
            } 

        }
        return true
    }
    printBoard(){
        let cellsMark = new Array(9)
        for(let i =0 ; i<this.cells.length ; i++){
            cellsMark[i] = this.cells[i].getMark()
        }
        let firstLine = cellsMark.slice(0,3)    
        let secondLine = cellsMark.slice(3,6)
        let thirdLine = cellsMark.slice(6,9)
        
        console.log(firstLine);
        console.log(secondLine);
        console.log(thirdLine);
    }
}

module.exports = Board