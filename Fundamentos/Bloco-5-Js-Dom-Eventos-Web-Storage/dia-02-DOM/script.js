// Exercícios de fixação
// 1 e 2
document.getElementById("elementoOndeVoceEsta").parentElement.style.color = "red"
// 3
document.getElementById("elementoOndeVoceEsta").firstElementChild.innerHTML = "OLà tudo bem ?"
// 4
console.log(document.getElementById("pai").firstElementChild)
// 5
console.log(document.getElementById("elementoOndeVoceEsta").previousElementSibling)
// 6
console.log(document.getElementById("elementoOndeVoceEsta").parentElement.parentElement.innerText)
7
console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling)
// 8 
console.log(document.getElementById("pai").lastElementChild.previousElementSibling)



// //////////////////////////// PARTE 2 ////////////////


// 1
let recebeIrmao = document.getElementById("pai");
let novoIrmao = document.createElement("section");

recebeIrmao.appendChild(novoIrmao);
console.log(document.getElementById("pai"))

document.getElementById("pai").lastElementChild.innerText = "eu sou o novo elemento criado com js, utilizando as funções createElement() e appendChild()"

// 2
let novoTexto = document.getElementById("elementoOndeVoceEsta");
let novoFilho = document.createElement("p");
novoTexto.appendChild(novoFilho);

document.getElementById("elementoOndeVoceEsta").lastElementChild.innerText = "eu sou a nova tag p filha"

3
let array = [
    'item', 'item', 'item', 'item'
];


;let novaLista = document.getElementById("primeiroFilhoDoFilho");

for ( let index = 0; index < array.length; index += 1) {
let item = array[index];

let lista = document.createElement("li");
lista.innerText = item;
lista.className = "itens-lista"
novaLista.appendChild (lista);

}
// 4/

console.log(document.getElementsByClassName("itens-lista").nextElementSibling)

// remover itens
// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.


console.log(document.getElementById('paiDoPai'))
let localItensAremover = document.getElementById("paiDoPai");
let itemAremover = document.getElementsByName("primeiroFilho");
localItensAremover.removeChild(itemAremover)

