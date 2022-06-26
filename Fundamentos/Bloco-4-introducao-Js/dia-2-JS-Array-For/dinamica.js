// 1. Faça um algoritmo que calcule a soma de 35 a 105 usando a estrutura “for” e retorne no formato:
// A soma de 35 a 105 é: X.

let soma = 0;
for ( let index = 35; index <= 105; index += 1) {
    soma += index
}
console.log(" A soma de 35 a 105 é " + soma);


// 2. Crie um algoritmo que conte quantos números do intervalo entre 15 e 155 são divisíveis por 3.
// Caso a quantidade de números impares seja igual ou maior que 50, exiba uma mensagem secreta a sua escolha.

let numerosDivisiveisPor3Impares = [];
for ( let index = 15; index <= 155; index += 1) {
    if ( index % 3 === 0 && index % 2 !== 0 ) {
        numerosDivisiveisPor3Impares.push(index)
    }
    console.log(numerosDivisiveisPor3Impares)
   }
   if ( numerosDivisiveisPor3Impares.length >= 50) {
    console.log ("top secret")
   }
  



// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração  que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.


let j1 = "tesoura"
let j2 = "pedra"
let j3 = "papel"

let jogador1 = j3;
let jogador2 = j2;

if ( jogador1 == jogador2 ) {
    console.log( "empate")
} else if ( jogador1 == j1 && jogador2 == j3 || jogador1 == j2 && jogador2 == j1 || jogador1 == j3 && jogador2 == j2 ) {
    console.log ("Jogador 1 vence")
} else { console.log ("Jogador 2 vence")}

////////RESOLUÇÃO COM FUNÇÃO//////


// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade” ou “A pessoa é menor de idade”.
// Bônus: Crie a condição utilizando operador ternário.
// A estrutura de um operador ternário é compreendida da seguinte forma:
// condição? valor se for verdareiro : valor se for falso

function eMaiorDeIdadae (name, age) {

let maioridade = age > 18 ? true : false  
if (maioridade == true) {
console.log (name + " é maior de idade")
} else { 
    console.log (name + " não é maior de idade")
}
}

eMaiorDeIdadae ("Amanda",10)

// 5. Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.  

// let pessoas = {
//     nome: ["Ademar", "Adriana", "Julia"],
//     idades: [31,43,15]
// }   a resolução que me vem a cabeça é com if, mas quero tentar desenvolver uma resolução com objeto











