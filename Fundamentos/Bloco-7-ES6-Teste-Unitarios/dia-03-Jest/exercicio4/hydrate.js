const hydrate = (quantasBebidas) => {
  let contador = 0;
  let array = quantasBebidas.split(" ");

  for (let i in array) {
    if (isNaN(Number(array[i])) === false) {
       contador += Number(array[i]) 
    }
  }
  if ( contador > 1) {
  return `${contador} copos de água`
  } else {
    return `${contador} copo de água`
  }
};

module.exports = hydrate;
