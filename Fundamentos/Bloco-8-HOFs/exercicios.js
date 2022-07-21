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
const functionCheck = (numberBet, luckyNumber) => {
    if( numberBet === luckyNumber ) {
        return 'Parabéns você ganhou !'
    } else {
        return 'Tente novamente'
    }
};


const getLucky = (numberBet, callback) => {
    const luckyNumber = Math.floor((Math.random() * 5) + 1);
  
   return callback(numberBet,luckyNumber);
}
;

console.log(getLucky(2, functionCheck));