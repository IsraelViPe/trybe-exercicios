const allLessons = {
  lesson1: {
    materia: "Matemática",
    numeroEstudantes: 20,
    professor: "Maria Clara",
    turno: "manhã",
  },
  lesson2: {
    materia: "História",
    numeroEstudantes: 20,
    professor: "Carlos",
    turno: "noite",
  },
  lesson3: {
    materia: "Matemática",
    numeroEstudantes: 10,
    professor: "Maria Clara",
    turno: "noite",
  },
};

// 1🚀 Crie uma função para contar quantos
// estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

// vamo pensar
// preciso saber quais objetos tem o valor matemática
// depois preciso somar o valor numero de Estudantes deles

// const frequenciaAula = (obj,materia) => {
//     const arrMat = [];
//     let totalAulas = 0;
//     for (i in obj){
//         if (obj[i].materia === "Matemática"){
//             arrMat.push(obj[i])
//         }
//     }
//     for (i in arrMat) {
//         totalAulas += arrMat[i].numeroEstudantes
//     }
//     return totalAulas
// }
// console.log(frequenciaAula(allLessons,"materia"))

// 🚀 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora,
// as aulas que ele ou ela ministrou e o número total de estudantes.
// Use o objeto criado no exercício 5:

// devo percorrer o objtão e retornar outro objeto no seguinte formato >>>>
// /* {
//   professor: 'Maria Clara',
//   aulas: [ 'Matemática', 'Matemática' ],
//   estudantes: 30
// } */

const relatProf = (obj, prof) => {
  let arrayProfLessons = [];

  let relatorioProf = {};
  let proFessor;
  let aulas = [];
  let estudantes = 0;

  for (i in obj) {
    if (obj[i].professor === prof) {
      arrayProfLessons.push(obj[i]);
    }
  }
  for (const i in Object.values(arrayProfLessons)) {
    proFessor = Object.values(arrayProfLessons)[i].professor;
    aulas.push(Object.values(arrayProfLessons)[i].materia);
    estudantes += Object.values(arrayProfLessons)[i].numeroEstudantes;
  }

  relatorioProf = {
    Professor: proFessor,
    aulas: aulas,
    estudantes: estudantes,
  };

  return relatorioProf;
};

console.log(relatProf(allLessons, "Carlos"));
