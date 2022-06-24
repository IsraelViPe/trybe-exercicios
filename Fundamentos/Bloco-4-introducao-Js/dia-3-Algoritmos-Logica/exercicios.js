// 1 fatorial 10
// let n = 10
// let resultado = 1
// for ( let i = 9; i >= n-9; i -= 1 ) {
//     resultado = resultado * (n * i)
//     console.log (i);
// }
// console.log(resultado)

// 2 
let word = 'tryber';
let palavraAoContrario = "";
for ( index = 5; index >= word.length-6; index -= 1 ) {
    palavraAoContrario += word[index];
}
console.log(palavraAoContrario);