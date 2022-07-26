const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  

//   🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA(arr) {
    const quantidadeDeA = arr.reduce((acc, cur) => {
        for(let i = 0; i < cur.length; i += 1 ) {
            if(cur[i] === "A" || cur[i] === "a") {
                acc += 1;
            }
        }
        return acc
    }, 0)
    return quantidadeDeA
  }

  console.log(containsA(names));

    

