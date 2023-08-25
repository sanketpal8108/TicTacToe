const Game = require("./Game");

let g1 = Game.newGame('sanket' , 'Shreyash')

//Winning Situation 
console.log(g1.play(1)); //x
console.log(g1.play(5));//o
console.log(g1.play(0)); 
console.log(g1.play(4));
console.log(g1.play(8));
console.log(g1.play(3));


//Draw Situation
// console.log(g1.play(0)); //x
// console.log(g1.play(1)); //o
// console.log(g1.play(2));
// console.log(g1.play(4));
// console.log(g1.play(3));
// console.log(g1.play(5));
// console.log(g1.play(7));
// console.log(g1.play(6));
// console.log(g1.play(8));
