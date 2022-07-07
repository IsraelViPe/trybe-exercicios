const submitButton = document.getElementById("submitButton");

// submitButton.addEventListener('click', function (event) {
//     event.preventDefault();
// })

const inputName = document.getElementById("nameInput");
const inputMail = document.getElementById("emailInput");
const textAreaInput = document.getElementById("winer");
const cederImg = document.getElementById('cederImg');
function validDate() {
  if (
    inputName.value.length >= inputName.minLength &&
    inputName.value.length <= inputName.maxLength &&
    inputMail.value.length >= inputMail.minLength &&
    inputMail.value.length <= inputMail.maxLength &&
    textAreaInput.value.length >= textAreaInput.minLength &&
    textAreaInput.value.length <= textAreaInput.maxLength
  ) {
    alert(
      "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
    );
  } else {
    alert("dados inválidos");
  }
}

// function validPicture () {
//     if (cederImg.checked === false) {
        
//     }

// }

submitButton.addEventListener("click", function(event) {
    
    if (cederImg.checked === false) {
        alert ("participação condicionada à liberação de direitos de imagem")
        event.preventDefault();
    } else {
        validDate();
    }

} );
