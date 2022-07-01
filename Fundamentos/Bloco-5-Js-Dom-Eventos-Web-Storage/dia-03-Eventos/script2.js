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
  
  if (tagLiDays.innerText.includes("25")) {
    tagLiDays.className = "day holiday friday";
  } else if (tagLiDays.innerText.includes("24")||tagLiDays.innerText.includes("31")) {
    tagLiDays.className = "day holiday";
  } else if (tagLiDays.innerText.includes("4")||tagLiDays.innerText.includes("11")||tagLiDays.innerText.includes("18")) {
    tagLiDays.className ="day friday"
  } else {
    tagLiDays.className = "day";
  }
  
  
  paiDays.appendChild(tagLiDays);
}