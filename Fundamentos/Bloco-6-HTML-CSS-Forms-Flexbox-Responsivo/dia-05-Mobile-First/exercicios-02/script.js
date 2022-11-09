const btnChapters = document.getElementById('chapters');
const ulChapter = document.getElementById('ulChapters');
const btnInformation = document.getElementById('information');
const ulInformation = document.getElementById('ulInformation');


btnChapters.addEventListener('click', function () {
    ulChapter.classList.toggle('none');
});

btnInformation.addEventListener('click', function () {
    ulInformation.classList.toggle('none');
});