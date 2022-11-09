const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

//  1 Crie uma função para adicionar o turno da noite na lesson2.
// Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado,
// a chave que deverá ser adicionada e o valor dela.

const altObj = (obj, chave, valor) => {
  obj[chave] = valor;
  return obj;
};

console.log(altObj(lesson2, "turno", "noite"));

// 2 Crie uma função para listar as keys de um objeto.
// Essa função deve receber um objeto como parâmetro.

const listKey = (obj) => Object.keys(obj);

console.log(listKey(lesson3));

// 3 Crie uma função para mostrar o tamanho de um objeto.
// Essa função deve receber um objeto como parâmetro.

const tamanhoObj = (obj) => Object.keys(obj).length;

console.log(tamanhoObj(lesson3));

// 4Crie uma função para listar os valores de um objeto.
// Essa função deve receber um objeto como parâmetro.

const objValues = (obj) => Object.values(obj);

console.log(objValues(lesson1));

// 5 Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.
// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.
//  Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons = Object.assign({ lesson1, lesson2, lesson3 });
console.log(allLessons);

//6  Usando o objeto criado no exercício 5, crie uma função que
// retorne o número total de estudantes em todas as aulas.

const totalEstudantes = (obj) => {
  let total = 0;
  for (let i in obj) {
    total += obj[i].numeroEstudantes;
  }
  return `o numero total de estudantes é ${total}`;
};

console.log(totalEstudantes(allLessons));

// 7 Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto. Por exemplo:

const getValueByNumber = (obj, iChave) => Object.values(obj)[iChave];

console.log(getValueByNumber(lesson1, 2));

// 8 Crie uma função que verifique se o par (chave / valor) existe na função. 
// Essa função deve possuir três parâmetros, 
// sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

// const verifyPair = (obj,chave,valor) => {
//    for(index in obj) {
//     if(obj[chave]=== valor) {
//         console.log(obj[chave])
//         return true 
//     } else {return false}
//    }
// }

// console.log(verifyPair(lesson3, 'professor', 'noite'));
// eu resolvi assim, mas eu seu que eles querem outra coisa 
// algo com o objct.entries
const verifyPair = (obj,chave,valor) => {
    const arrObj = Object.entries(obj)
    for (i in arrObj) {
        console.log(arrObj[i], [chave,valor])
        if(arrObj[i] === [chave,valor]){
            
            return true
        } else {
            return false
        }
    }
}



console.log(verifyPair(lesson3, 'materia', 'Matemática'));
// // Output: false
// let indice = Object.keys(lesson1)[0]

// console.log(Object.entries(lesson1)[0])
// console.log(Object.keys(lesson1)[0])

