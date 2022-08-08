const lesson1 = {
    materia: "Matemática",
    numeroEstudantes: 20,
    professor: "Maria Clara",
    turno: "manhã",
  };

  const verifyPair = (obj,chave,valor) => {
    const arrObj = Object.entries(obj)
    for (i in arrObj) {
        console.log(arrObj[i], [chave,valor])
        if(arrObj[i].includes(chave) && (arrObj[i].includes(valor))){
            
            return true
        } else {
            return false
        }
    }
}



console.log(verifyPair(lesson1, 'turno', 'manhã'));