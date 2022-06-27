// /1///////////////////////////////////////////
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log( "Bem vinda," +
  " " + info.personagem)

//   2/////////////////////

info.recorrente = 'sim';

console.log(info)

// 3/////////////////
for (key in info) {
    console.log(key)
}
// 4//////////////////////////
for (key in info) {
    console.log (info[key])
};
// 5///////////////////////////////////

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente:'sim'
}
console.log (info.personagem + " e " + info2.personagem);
console.log (info.origem + " e " + info2.origem);
console.log (info.nota + " e " + info2.nota);
if (info.recorrente === 'sim' && info2.recorrente === 'sim') {
    console.log("Ambos recorrentes.")
}

// 6////////////////////////////////////
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  
    console.log ("O livro favorito de de " + leitor.nome + 
    " " + leitor.sobrenome + " " + "se chama "+ leitor.livrosFavoritos[0].titulo
    + "  "
    )

    // 7////////////
    leitor.livrosFavoritos.push (
        {
            titulo: "Harry Potter e o Prisioneiro de Azkaban",
            autor: "Jk Rowling",
            editor: 'Rocco',
        },
    );

    console.log(leitor)
// 8 //////////////


    console.log ( leitor.nome + " " +
    "tem" + " "+ leitor.livrosFavoritos.length + " livros favoritos" )

  