const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// >>>>por que ela está recebendo a classe .tech

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.

function adicionaTech (event) { 
    const elementAdd = document.querySelector('.tech');
    elementAdd.classList.remove('tech');
    event.target.classList.add('tech');
    input.value = '';
}
firstLi.addEventListener('click', adicionaTech);
secondLi.addEventListener('click', adicionaTech);
thirdLi.addEventListener('clik', adicionaTech);

// fluxo de trabalho com do DOM e Script >>>>>
// >>>>> primeiro eu recupero o elemento que quero trabalhar, atravé de uma variável
// >>>>> depois eu adiciono uma função listener nessa variável.
// >>>>> a função tem no mínimo o parametro de evento, mais um parametro com outra função
// >>>>> essa outra função deve estar declarada no meu código. Ela será responsável por 
//       executar alguma coisa quando o evento acontecer



// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';


input.addEventListener('input', function(event) {
  // é um escutador com uma função sem nome que é declarada junto, ela tem um
  // parametro event. O parametro event possibilita localizar o target, ou seja
  // quem realizou o evento (que no caso é um input de texto)
  // e atribuir o valor desse input a qualquer variável criada
  // no exemplo quem recebeu esse input foi elementText
const elementText = document.querySelector('.tech');
elementText.innerText = event.target.value; 
});


// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
myWebpage.addEventListener('dblclick', function() {
  window.location.replace('https://blog.betrybe.com/'); // é assim que eu redireciono página com DOM
})


// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener("mouseover", function() {
  myWebpage.style.color = "blue";
})
myWebpage.addEventListener("mouseleave", function(){
  myWebpage.style.color = "white";
})

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.