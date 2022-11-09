
// 1
// const testingScope = escopo => escopo === true ? `ótimo, fui utilizada no escopo !`
// : `Não devo ser utilizada fora meu escopo (else)'`;
  
// testingScope(false)

// 2  
// const oddsAndEvens = [13, 3, 4, 10, 7, 2,1];

// oddsAndEvens.sort((a,b)=> a-b)
// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente ! `);

// Parte 2 exercício 1
// const fat = num => {
//     let resultado = 1;
// for (let i = num; i >= 1 ; i-=1) {
    
//     resultado = resultado * i
    
// }
// return resultado

// }
// console.log(fat (6))

// exercicio 2


// const maiorPalavra = frase => {
//     let arrayFrase = frase.split(" ");
    
    
//     let palavra = ''
//     for (let i = 0; i < arrayFrase.length; i += 1) {
//         if(palavra.length < arrayFrase[i].length) {
//             palavra = arrayFrase[i] 
            
//         }
        
//     }
//     return `a maior palavra dessa frase é ${ palavra.toString()}`
// }
// console.log(maiorPalavra('Antônio foi ao paralelepipedo'))

// exercicio 3 vou criar a pagina htm e escrever o codigo dela
// aqui 

//////////////////////////////////////////////////////////////////////////////////

// const buttonClick = document.getElementById("buttonClick");
// const informClick = document.getElementById('informClick');
// let clickCount = 0;

// buttonClick.addEventListener('click', () => {
//     clickCount += 1;
//     informClick.textContent = clickCount;
// })

// exercício 4 

const trocaNome = nome => {
    const frase = 'Tryber x aqui!'
    return frase.replace('x',nome)   
}
console.log(trocaNome("Bebeto"))

const stringFunction = parametro =>  {
    const skill = ['Shell', 'DOM', 'CSS']
    
    return `${parametro}
    Minhas três principais habilidades são:
    ${skill.toString()}`

}
console.log(stringFunction(trocaNome('Bebeto')));

