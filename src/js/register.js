const formLogin = document.getElementById("formRegister");
const fullName = document.getElementById("fullName");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const errName = document.getElementById("nameError");
const errPhone = document.getElementById("phoneError");

fullName.addEventListener("change", (event) => {
  longitudInput(event);
});
function longitudInput(event) {
  let valorInput = event.target.value;
  let longitudInputNombre = valorInput.length;
  if (longitudInputNombre < 3) {
    Swal.fire({
      title: "Ingresa mas caracteres",
      showConfirmButton: false,
      background: "#52c096",
      icon: "info",
      timer: "3000",
      position: "center",
      backdrop: true,
       color: "yellow",
      allowOutsideClick: true,
      toost: true,
      showConfirmButton: false,
      customClass: {
        title: "titulo-password-re",
      },
    });
  } else {
    errName.textContent = "✔";
  }
}

phone.addEventListener("change", (event) => {
  tipoDato(event);
});

function tipoDato(event) {
  let tipoDate = event.target.value;
  if (isNaN(tipoDate)) {
    Swal.fire({
      title: "Ingresa campo valido",
      showConfirmButton: false,
      background: "#52c096",
      icon: "info",
      timer: "1000",
      position: "center",
      backdrop: true,
      color: "#939535",
      allowOutsideClick: true,
      toost: true,
      showConfirmButton: false,
      customClass: {
        title: "titulo-password-re",
      },
    });
  } else {
    errPhone.textContent = "✔";
  }
}

// Array para guardar los usuarios registrados
const userRegistered = [];
let id = 0;

formLogin.addEventListener("submit", RegisterUser);

function RegisterUser(event) {
  event.preventDefault();

  // Obtener los valores de los campos de entrada
  const fullNameValue = fullName.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  // Validar que los campos no estén vacíos
  if (
    fullNameValue === "" ||
    phoneValue === "" ||
    emailValue === "" ||
    passwordValue === "" ||
    confirmPasswordValue === ""
  ) {
      Swal.fire({
        title: "Ingresar todos los campos",
        showConfirmButton: false,
        background: "#52c096",
        icon: "info",
        timer: "1000",
        position: "center",
        backdrop: true,
        color: "#939535",
        allowOutsideClick: true,
        toost: true,
        showConfirmButton: false,
        customClass: {
          title: "titulo-password-re",
        },
      });
    return; // Salir de la función si hay campos vacíos
  }

  // Validar que las contraseñas coincidan
  if (passwordValue !== confirmPasswordValue) {
    Swal.fire({
      title: "Las contraseñas no coinciden",
      showConfirmButton: false,
      background: "#52c096",
      icon: "info",
      timer: "1000",
      position: "center",
      backdrop: true,
      color: "#939535",
      allowOutsideClick: true,
      toost: true,
      showConfirmButton: false,
      customClass: {
        title: "titulo-password-re",
      },
    });
    return; // Salir de la función si las contraseñas no coinciden
  }

  // Validar que el usuario no exista
  if (userRegistered.find((user) => user.email === emailValue)) {
    Swal.fire({
      title: "El usuario ya exíste",
      showConfirmButton: false,
      background: "#52c096",
      icon: "info",
      timer: "1000",
      position: "center",
      backdrop: true,
      color: "#939535",
      allowOutsideClick: true,
      toost: true,
      showConfirmButton: false,
      customClass: {
        title: "titulo-password-re",
      },
    });
    return; // Salir de la función si el usuario ya existe
  }

  // Se agrega automáticamente un ID
  id++;

  // Crear el objeto usuario
  const user = {
    id: id,
    nombre: fullNameValue,
    phone: phoneValue,
    email: emailValue,
    password: passwordValue,
  };

  // Agregar usuario
  userRegistered.push(user);

  // Guardar Array en el LocalStorage
  localStorage.setItem("user", JSON.stringify(userRegistered));
  Swal.fire({
    title: "Registro exitoso",
    showConfirmButton: false,
    background: "#52c096",
    icon: "info",
    timer: "1000",
    position: "center",
    backdrop: true,
    color: "#939535",
    allowOutsideClick: true,
    toost: true,
    showConfirmButton: false,
    customClass: {
      title: "titulo-password-re",
    },
  });

  // Limpiar los campos
  fullName.value = "";
  phone.value = "";
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
  errName.textContent = "";
  errPhone.textContent = "";
}
