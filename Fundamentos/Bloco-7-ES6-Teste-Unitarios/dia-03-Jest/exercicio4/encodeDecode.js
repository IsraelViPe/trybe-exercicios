function encode(string) {
  let letras = string.split("");
  for (let index = 0; index < letras.length; index += 1) {
    if (letras[index] === "a") {
      letras[index] = "1";
    }
    if (letras[index] === "e") {
      letras[index] = "2";
    }
    if (letras[index] === "i") {
      letras[index] = "3";
    }
    if (letras[index] === "o") {
      letras[index] = "4";
    }
    if (letras[index] === "u") {
      letras[index] = "5";
    }
  }
  let stringEncode = letras.join("");

  return stringEncode;
}

function decode(string) {
  let arrayDecode = string.split("");

  for (let index = 0; index < arrayDecode.length; index += 1) {
    if (arrayDecode[index] === "1") {
      arrayDecode[index] = "a";
    }
    if (arrayDecode[index] === "2") {
      arrayDecode[index] = "e";
    }
    if (arrayDecode[index] === "3") {
      arrayDecode[index] = "i";
    }
    if (arrayDecode[index] === "4") {
      arrayDecode[index] = "o";
    }
    if (arrayDecode[index] === "5") {
      arrayDecode[index] = "u";
    }
  }
  let stringDecode = arrayDecode.join("");
  return stringDecode;
}

module.exports = {
  encode,
  decode,
};
