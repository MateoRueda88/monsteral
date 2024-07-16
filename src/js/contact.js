const formulario = document.getElementById("form");
const nombre = document.getElementById("name");
const errName = document.getElementById("nameError");
const phone = document.getElementById("phone");
const errPhone = document.getElementById("namePhone");
// resetear inputs



phone.addEventListener("change", (event) => {
  tipoDato(event);
  longitudInput(event)
});

function tipoDato(event) {
  let tipoDate = event.target.value;
  if (isNaN(tipoDate)) {
    Swal.fire({
      title: "Ingrese campo valido",
      showConfirmButton: false,
      background: "#52c096",
      icon: "warning",
      timer: "3000",
      position: "center",
      backdrop: true,
      color: "#939535",
      allowOutsideClick: true,
      toost: true,
      showConfirmButton: false,
      customClass: {
        title: "titulo-password",
      },
    });
  } else {
    errPhone.textContent = "✔";
  }
}
