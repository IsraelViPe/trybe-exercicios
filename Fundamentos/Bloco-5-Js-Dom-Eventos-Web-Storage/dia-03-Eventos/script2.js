function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  // exercicio 1
  
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// o pai das minhas lis será a <ul com o id="days">
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day
// ou seja >>> minhas lis serão criadas com createElement
// depois serão inseridas com innerText recebendo os índices do array
// depois receberão a <class="day">/
// restrições do meu if >>> dias 24 25 31 >>>recebem <class = "day holiday">
// dias 4,11,18 e 25 >>>> recebem <class="day friday">

const paiDays = document.getElementById("days"); 
for (let i = 0; i < decemberDaysList.length; i += 1) {
  const daysDezembro = decemberDaysList[i];
  const tagLiDays = document.createElement("li");
  tagLiDays.innerText = daysDezembro;
  
  if (tagLiDays.innerText === "25") {
    tagLiDays.className = "day holiday friday"; 
  } else if (tagLiDays.innerText==="24"||tagLiDays.innerText==="31") {
    tagLiDays.className = "day holiday";
  } else if (tagLiDays.innerText==="4"||tagLiDays.innerText==="11"||tagLiDays.innerText==="18") {
    tagLiDays.className ="day friday"
  } else {
    tagLiDays.className = "day";
  }
  
  paiDays.appendChild(tagLiDays);
}

// exercício 2

// criar função que vai criar uma tag bottom, inserir id nela, inserir innerText
// o appendChild deve ser feito com getElementsByClassName("buttons-container")[];
const paiButton = document.getElementsByClassName("buttons-container")[0];

function criaButtons (id,text) {
  const newbutton = document.createElement("button");
  newbutton.id = id;
  newbutton.innerText = text;
  return newbutton
}
paiButton.appendChild(criaButtons("btn-holiday",'Feriados'));

// exercício 3

// fluxo >>> O que essa função fará objetivamente ? 
//  mudar o background color das tags (li)s que possuem class "holiday";
// eu preciso de um for porque o getElementsByClassName me 
// retornara um HTMLcolection
// a função não necessita de parametro poi será usada em 
// outro contexto, ela só precisa realizar a tarefa

// fluxo da criação do evento
// >>>> primeiro eu recupero o botão por meio do id
// depois eu utilizo o escutador e uso dentro dele um
// evento de "click" associado a função backgroundHoliday

// NÃO CONSEGUI RESOLVER ESSE SOZINHO
// a solução proposta foi uma função que contem todas as variáveis e 
// o addEvent que por sua vez traz outra função, onde entram o for e um
// if para  condicionar a alteração do background color


function backgroundHoliday () {
  
  let feriados = document.getElementsByClassName("holiday");
  let buttonFeriado = document.getElementById("btn-holiday");
  let backgroundColor = 'rgb(238,238,238)';
  let novaCor = "white";

  buttonFeriado.addEventListener('click', function() {
  for (let i = 0; i < feriados.length; i += 1) {
    if ( feriados[i].style.backgroundColor === novaCor) {
      feriados[i].style.backgroundColor = backgroundColor;
    } else {
      feriados[i].style.backgroundColor = novaCor;
    }
  }
});
}

backgroundHoliday ();

//  exercicio 4
// fluxo >>> recupera local e chama função que você já fez

const paiSextaButton = document.getElementsByClassName("buttons-container")[0];

paiSextaButton.appendChild(criaButtons ("btn-friday","Sexta-feira"));

// exercicio 5

// OBS : NÃO CONSEGUI A LÓGICA INVERSA; NO GABARITO NÃO FUNCIONA,
// NÃO ENTENDI  


function alteraTextoSexta () {
  let btnSexta = document.getElementById("btn-friday");
  let sextaDay = document.getElementsByClassName("friday");
  let novoTexto = "sextou";
  btnSexta.addEventListener ('click', function () {
    for (let i = 0; i < sextaDay.length; i += 1) {
   sextaDay[i].innerText = novoTexto;
    
  
  }
   
  });
}

alteraTextoSexta ();

// exercicio 6

// fluxo capturar a ul que contem as li s dos dias
// criar função com parametro event
// depois chamar esse parametro no addEventListener

function mouseEmCima () { 
let ulDias = document.getElementById("days"); 
ulDias.addEventListener('mouseover', function(event) {
  event.target.style.fontSize = '30px';
  event.target.style.fontWeight = "200";
} );
}

function mouseSai () {
  let ulDias = document.getElementById("days"); 
  ulDias.addEventListener('mouseout', function(event){
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "200";
  })
}

 mouseEmCima();
 mouseSai ();

 




