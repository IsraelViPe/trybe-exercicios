// 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

// 2
let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let index = 0; index < numbers1.length; index += 1) {
    resultado += numbers1[index]; 
}
    console.log (resultado);

// 3 & 4 
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let mediaArit = 0;

for (let index = 0; index < numbers2.length; index += 1) {
    mediaArit += numbers2[index]/numbers2.length;
} 
if (mediaArit > 20) {
    console.log( mediaArit + " valor maior que 20 " );
} else if (mediaArit <= 20) {
    console.log ( mediaArit + " valor menor ou igual a 20 " );
}

// 5 

let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = [0];


for (let index = 0; index < numbers3.length; index += 1) {
    if (numbers3[index] > maior) {
        maior = numbers3[index]
    }
} 
console.log (maior)

// 6 
let numbers4 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numerosImpares = [];

for ( let index = 0; index < numbers4.length; index += 1) {
    if (numbers4[index] % 2 !== 0) {
        numerosImpares.push(numbers4[index])
    }
}

if (numerosImpares.length > 0) {
    console.log (numerosImpares.length)
} else {
    console.log ("nenhum valor ímpar encontrado")
}

// 7 
let numeroMenor = []
let numbers5 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for ( let index =0; index < numbers5.length; index += 1) {
    if ( numbers5[index])

// 8 
let umA25 = [];
for ( let index = 1; index <= 25; index += 1) {
    umA25.push(index * 1)
    
};
console.log (umA25);

// 9 
let umA25DivPor2 = [];

for ( let index = 0; index < umA25.length; index += 1) {
    umA25DivPor2.push( umA25[index] / 2)

}
console.log (umA25DivPor2);





