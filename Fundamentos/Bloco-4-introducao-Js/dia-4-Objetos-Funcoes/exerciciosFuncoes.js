// 1///////////// obs: meu raciocício estava certo mas realmente precisei olhar o gabarito para correção de sintaxe e etc

// function verificaPalindrome(palavra) {
    

//  for (index in palavra) {
//      if (palavra[index] != palavra [(palavra.length -1) - index]) {
//  return false;
// }
// }
// return true;

// }

// console.log(verificaPalindrome('arara'))

// 2 //// não consegui sem o gabarito....raciocínio correto, mas muito erros de sintaxe e lógica .
let arrayTeste = [2,3,100,0,1]
function maiorValor (array) {
    let indiceMaior = 0;
    for (let index in array) {
        if (array[indiceMaior]< array[index]) {
            indiceMaior = index;
        }
        
    }
    console.log (indiceMaior )
}

maiorValor (arrayTeste)

// 3
// passo 1 : percorrer o array
// passo 2 : salvar o menor valor em uma variável
// passo 3 : retornar o indice do menor valor
array2 = [2, -3, 6, -7, 10, 0, 13]

function menorValor (array) {
    let valorMenor = 0;
    for ( indice in array) {
       if ( array[indice] < array[valorMenor]) {
        valorMenor = indice
    }
}
return valorMenor;
}
console.log(menorValor(array2))