// 1 fatorial 10 ////////////////////////////////////////
let n = 10
let resultado = 1
for ( let i = 9; i >= n-9; i -= 1 ) {
    resultado = resultado * (n * i)
    console.log (i);
}
console.log(resultado)

//  2 //////////////////////////////////////////////////
let word = 'tryber';
let palavraAoContrario = "";
for ( index = 5; index >= word.length-6; index -= 1 ) {
    palavraAoContrario += word[index];
}
console.log(palavraAoContrario);

// 3 ///////////////////////////////////////////////
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = 'java'

for (let index = 0; index < array.length; index += 1) {
    
    if (array[index].length > maiorPalavra.length ) {
        maiorPalavra = array[index];
    }
}
console.log(maiorPalavra);

// //////////////////////////////////////////////

let menorPalavra = 'javascript'

for (let index = 0; index < array.length; index += 1) {
    
    if (array[index].length < menorPalavra.length ) {
        menorPalavra = array[index];
    }
}
console.log(menorPalavra);

// 4///////////////////////////////////////////////

// definição de número primo : não consigo achar uma 
// condição que delimite o if para pegar somente os
// números primos



