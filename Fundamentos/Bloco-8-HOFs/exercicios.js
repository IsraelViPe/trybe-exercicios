// 1
// const createEmployee = (nome) => {
//     return {
//         nomeCompleto: nome,
//         email: `${nome.toLowerCase().split(' ').join('')}@trybe.com`
//     }
// }

// const newEmployees = () => {
//     const employees = {
//       id1: createEmployee('Pedro'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: createEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: createEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

//   console.log(newEmployees());

//   2
// const functionCheck = (numberBet, luckyNumber) => {
//     if( numberBet === luckyNumber ) {
//         return 'Parabéns você ganhou !'
//     } else {
//         return 'Tente novamente'
//     }
// };


// const getLucky = (numberBet, callback) => {
//     const luckyNumber = Math.floor((Math.random() * 5) + 1);
  
//    return callback(numberBet,luckyNumber);
// }
// ;

// console.log(getLucky(2, functionCheck));

// 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const createObj = (key,value) => {
    const newOjb = {};
    Object.assign(newOjb,key);
    Object.assign(newOjb,value);
    return newOjb;
    console.log(newObj);
}
console.log(createObj(RIGHT_ANSWERS,STUDENT_ANSWERS));
// const points = (RIGHT_ANSWERS,STUDENT_ANSWERS) => {
//     let total = 0;
    

// }

// const test = (RIGHT_ANSWERS,STUDENT_ANSWERS,callback) => {

// }