// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
    setTimeout(() => {
     return callback(str.toUpperCase()); 
    }, 500);
  };
// function uper(string) {
//     console.log(string);
// }

module.exports = uppercase

