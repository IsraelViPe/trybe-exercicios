// bonus


// ************ PARA RODAR UM EXERCÍCIOS, COMENTE O
//             O EXERCÍCIO ANTERIOR PARA EVITAR CONFLITOS
//             COM NOMEAÇÃO DE VARIÁVEIS************




// muita dificuldade pra entender essa lógica aqui

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  console.log(numbers)

//  quando faço o debug não entendi porque o secondindex passa do 1 para o zero na
// segunda rodada.

// 2/////////////////////////////////////////////////////////////////////////////////////

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }
//   console.log(numbers)

//   3 ////////////////////////////////////////////

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//   let novoArray = [];
  
//   for(let index = 0; index < numbers.length ; index +=1) {
//     if (index + 1 < numbers.length) {
//         novoArray.push( numbers[index] * numbers[index + 1])
//     } else { novoArray.push ( numbers[index] * 2)}
//   }

// console.log(novoArray);

//  