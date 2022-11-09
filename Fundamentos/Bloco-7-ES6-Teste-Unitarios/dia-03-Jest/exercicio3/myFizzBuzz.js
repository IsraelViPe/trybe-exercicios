function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }
const sum = (a, b) => {
  try {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Parameters should be of type number.');
    }

    return a + b;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { myFizzBuzz, sum};