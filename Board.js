const Cell = require("./Cell")

class Board{
    constructor(){
        this.cells = [new Cell() ,new Cell() ,new Cell() ,new Cell() ,new Cell() ,new Cell() ,new Cell() ,
            new Cell() ,new Cell() ]
    }
    // markCell(cellNumber , symbol){
    //     if(!this.cells[cellNumber].isCellEmpty()){
            
    //         return  'Cell is Not Empty'
    //     }
    //     this.cells[cellNumber].markCell(Symbol)
    //     return 'Cell Marked'
        
    // }
    //WinningOrDraw Conditions
    gameState(){
        if(this.cells[0].mark==this.cells[1].mark && this.cells[0].mark==this.cells[2].mark && !this.cells[0].isCellEmpty()){
            return [this.cells[0].mark , 'Won']
        }
        if(this.cells[3].mark==this.cells[4].mark && this.cells[3].mark==this.cells[5].mark && !this.cells[3].isCellEmpty()){
            return [this.cells[0].mark , 'Won']
        }
        if(this.cells[6].mark==this.cells[7].mark && this.cells[6].mark==this.cells[8].mark && !this.cells[6].isCellEmpty()){
            return [this.cells[0].mark , 'Won']
        }
        if(this.cells[0].mark==this.cells[3].mark && this.cells[0].mark==this.cells[6].mark && !this.cells[0].isCellEmpty()){
            return [this.cells[0].mark , 'Won']
        }
        if(this.cells[4].mark==this.cells[1].mark && this.cells[1].mark==this.cells[7].mark && !this.cells[7].isCellEmpty()){
            return [this.cells[0].mark , 'Won']
        }
        if(this.cells[3].mark==this.cells[5].mark && this.cells[3].mark==this.cells[8].mark && !this.cells[3].isCellEmpty()){
            return [this.cells[0].mark , 'Won']
        }
        if(this.cells[4].mark==this.cells[0].mark && this.cells[0].mark==this.cells[8].mark && !this.cells[0].isCellEmpty()){
            return [this.cells[0].mark , 'Won']
        }
        if(this.cells[4].mark==this.cells[2].mark && this.cells[4].mark==this.cells[6].mark && !this.cells[4].isCellEmpty()){
            return [this.cells[0].mark , 'Won']
        }
        for(let i =0 ; i<this.cells.length ; i++){
            if(this.cells[i].isCellEmpty){
                return['','Continue']
            }

        }
        return['','Draw']
    }
    printBoard(){
        let temp 
        
        for(let i =0 ; i<this.cells.length ; i++){
            console.log(this.cells[i].mark)
        }
    }
}

module.exports = Board