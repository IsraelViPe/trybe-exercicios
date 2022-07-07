const submitButton = document.getElementById("submitButton");

// submitButton.addEventListener('click', function (event) {
//     event.preventDefault();
// })

const inputName = document.getElementById("nameInput");
const inputMail = document.getElementById("emailInput");
const textAreaInput = document.getElementById("winer");
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

submitButton.addEventListener("click", validDate );
