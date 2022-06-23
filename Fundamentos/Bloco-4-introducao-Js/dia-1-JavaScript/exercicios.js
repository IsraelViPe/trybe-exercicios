// 1
const a = 2
const b = 5
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// 2
const num1 = 7;
const num2 = 15;
if (num1 > num2) {
  console.log(num1);
} else if (num2 > num1) {
  console.log(num2);
} else {
  console.log("não há numero maior")
};

// 3
const num3 = 8;
const num4 = 11;
const num5 = 10;
if (num3 > num4 && num3 > num5) {
  console.log(num3);
} else if (num4 > num3 && num4 > num5) {
  console.log(num4);
} else if (num5 > num4 && num5 > num3) {
  console.log(num5);
} else {
  console.log("os números são iguais")
};

// 4
const valor = -5
if (valor < 0) {
  console.log("negative")
} else if (valor > 0) {
  console.log("positive")
} else {
  console.log("zero")
}
// 5
const ang1 = 80
const ang2 = 50
const ang3 = 50
if (ang1 + ang2 + ang3 == 180 && ang1 > 0 && ang2 > 0 && ang3 > 0) {
  console.log("true")
} else if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
  console.log("erro")
} else {
  console.log("false")
}
// 6
let pecaXadrez = "Torre"
switch (pecaXadrez.toLocaleLowerCase()) {
  case "peão":
    console.log("move-se para frente, uma ou duas casas por vez")
    break;
  case "cavalo":
    console.log("move-se em L")
    break;
  case "bispo":
    console.log("move-se na diagonal sem limite de casas por vez")
    break;
  case "torre":
    console.log("move-se em cruz quantas cazas desejar")
    break;
  case "Dama":
    console.log("move-se para todas as direções quantas casas quiser")
    break;
  case "Rei":
    console.log("movese para todas as direções apenas uma casa por vez")
    break
}
// 7
let notaPorcentagem = "-9"

if (notaPorcentagem < 0 || notaPorcentagem > 100) {
  console.log("erro")
} else if (notaPorcentagem >= 90) {
  console.log("A")
} else if (notaPorcentagem >= 80) {
  console.log("B")
} else if (notaPorcentagem >= 70) {
  console.log("C")
} else if (notaPorcentagem >= 60) {
  console.log("D")
} else if (notaPorcentagem >= 50) {
  console.log("E")
} else if (notaPorcentagem < 50) {
  console.log("F")
} else if (notaPorcentagem < 0 || notaPorcentagem > 100) {
  console.log("erro")
}

// 8
const primeiroNum = 3
const segundoNum = 5
const terceiroNum = 7

if (primeiroNum % 2 === 0 || segundoNum % 2 === 0 || terceiroNum % 2 === 0) {
  console.log("true")
} else {
  console.log("false")
}

// 9
const NumA = 1
const NumB = 2
const NumC = 6

if (NumA % 2 !== 0 || NumB % 2 !== 0 || NumC % 2 !== 0 ) {
  console.log("true")
} else {
  console.log("false")
}

// 10
const custoProduto = 80;
const valorVenda = 150;
let custoTotal = custoProduto + (custoProduto * 0.2)
let lucro = valorVenda - custoTotal
console.log(lucro * 1000)

// 11

let bruto = 3000;

if (bruto <= 1556.94) {
  bruto = bruto - (bruto * 0.08)
} else if (bruto > 1556.95 && bruto <= 2594.92) {
  bruto = bruto - (0.09 * bruto);
} else if (bruto > 2594.93 && bruto <= 5189.82) {
  bruto = bruto - (0.11 * bruto);
} else if (bruto > 5189.82) {
  bruto = bruto - 570.88
};

if (bruto > 1903.99 && bruto <= 2826.65) {
  bruto = bruto - ((0.075 * bruto) - 142.80)
} else if (bruto > 2826, 66 && bruto <= 3751.05) {
  bruto = bruto - ((0.15 * bruto) - 354.80)
} else if (bruto > 3751.05 && bruto <= 4664.68) {
  bruto = bruto - ((0.225 * bruto) - 636.13)
} else if (bruto > 4664.68) {
  bruto = bruto - ((0.275 * bruto) - 869.36)
};

console.log(bruto)

// 