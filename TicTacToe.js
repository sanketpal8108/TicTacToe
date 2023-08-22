// let tictacArray = new Array(9)
// const play = (element , position) =>{
//     if(element != 'x' || element != '0'){
//         console.log("Invalid input");
//         return 
//     }
//     if()
//     else if(element == 'x'){
//         forX(position)
//     }
//     else {
//         for0(position)
//     }

const Game = require("./Game");

    
//     for(i =0;i<tictacArray.length ;i++){
//         console.log('Enter position for x');
//         forX()
//         console.log('Enter position for  0');
//     }
// }
// const forX = (position) => {
//     if(tictacArray[position] != undefined){
//         console.log("Element Already existed at position : ",position);
//         return
//     }
//     tictacArray[position] = 'x'
// }
// const for0 = (position) =>{
//     if(tictacArray[position] != undefined){
//         console.log("Element Already existed at position : ",position);
//         return
//     }
//     tictacArray[position] = '0'
// }
// const winningConditionForX = () =>{
//     if (tictacArray[0] == 'x' && tictacArray[1] == 'x' && tictacArray[2] == 'x') {
//         console.log('X Won');
//     }
//     else if (tictacArray[3] == 'x' && tictacArray[4] == 'x' && tictacArray[5] == 'x') {
//         console.log('X  Won');
//     }
//     else if (tictacArray[6] == 'x' && tictacArray[7] == 'x' && tictacArray[8] == 'x') {
//         console.log('X  Won');
//     }
//     else if (tictacArray[0] == 'x' && tictacArray[3] == 'x' && tictacArray[6] == 'x') {
//         console.log('X  Won');
//     }
//     else if (tictacArray[1] == 'x' && tictacArray[4] == 'x' && tictacArray[7] == 'x') {
//         console.log('X Won');
//     }
//     else if (tictacArray[2] == 'x' && tictacArray[5] == 'x' && tictacArray[8] == 'x') {
//         console.log('X Won');
//     }
//     else if (tictacArray[0] == 'x' && tictacArray[4] == 'x' && tictacArray[8] == 'x') {
//         console.log('X Won');
//     }
//     else if (tictacArray[2] == 'x' && tictacArray[4] == 'x' && tictacArray[6] == 'x') {
//         console.log('X Won');
//     }
// }
// const winningConditionFor0 = () =>{
//     if (tictacArray[0] == '0' && tictacArray[1] == '0' && tictacArray[2] == '0') {
//         console.log('0 Won');
//     }
//     else if (tictacArray[3] == '0' && tictacArray[4] == '0' && tictacArray[5] == '0') {
//         console.log('0  Won');
//     }
//     else if (tictacArray[6] == '0' && tictacArray[7] == '0' && tictacArray[8] == '0') {
//         console.log('0  Won');
//     }
//     else if (tictacArray[0] == '0' && tictacArray[3] == '0' && tictacArray[6] == '0') {
//         console.log('0  Won');
//     }
//     else if (tictacArray[1] == '0' && tictacArray[4] == '0' && tictacArray[7] == '0') {
//         console.log('0 Won');
//     }
//     else if (tictacArray[2] == '0' && tictacArray[5] == '0' && tictacArray[8] == '0') {
//         console.log('0 Won');
//     }
//     else if (tictacArray[0] == '0' && tictacArray[4] == '0' && tictacArray[8] == '0') {
//         console.log('0 Won');
//     }
//     else if (tictacArray[2] == '0' && tictacArray[4] == 'x' && tictacArray[6] == 'x') {
//         console.log('X Won');
//     }
// }



let g1 = new Game('Sanket' , 'Yash')

console.log(g1.play(0));
console.log(g1.play(5));
console.log(g1.play(1));
console.log(g1.play(7));
console.log(g1.play(2));