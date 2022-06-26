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

// são doi jogadores com 3 opçoes
// vence ou empata



// let jogada1 = "pedra"
// let jogada2 = "papel"
// let jogada3 = "tesoura"

// let jogador1 =[jogada1,jogada2,jogada3];
// let jogador2 =[jogada1,jogada2,jogada3];



// console.log (jogador1);

// for ( let index2= 0; index2 < jogador2.length; index2 +=1) {
   
  
// }
// let jogo = ['Pedra', 'Papel', 'Tesoura'];
// let jogador1 = jogo[Math.floor(Math.random() * 2)];
// let jogador2 = jogo[Math.floor(Math.random() * 2)];

// console.log (jogador1, jogador2);




// const n = 9

// let result = 100;

// for ( let i =0; i <= n; i += 1){
//     result -= i 
//     console.log(i);
// }
// console.log (result);


























// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade” ou “A pessoa é menor de idade”.
// Bônus: Crie a condição utilizando operador ternário.
// 5. Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.  










