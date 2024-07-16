const formLogin = document.getElementById('formLogin');
const email = document.getElementById('email');
const password = document.getElementById('password');

formLogin.addEventListener("submit", LoginEmail);

function LoginEmail(event) {
    // Prevenir los eventos precargados
    event.preventDefault();

    // Obtener los valores de los campos de entrada
    const getLocal = localStorage.getItem("user");

    if (!getLocal) {
        Swal.fire({
            title: "No hay usuarios registrados",
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
              title: "titulo-password-lo",
            },
          });
    return;
    }
    

    const validateUser = JSON.parse(getLocal);

    // Validar que validateUser sea un array
    if (!Array.isArray(validateUser)) {
        Swal.fire({
            title: "Datos de uruario no validos",
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
              title: "titulo-password-lo",
            },
          });
    return;
    }

    // Validar que los campos no estén vacíos
    if (email.value === "" || password.value === "") {
        Swal.fire({
            title: "Campos vacios",
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
              title: "titulo-password-lo",
            },
          });
    return;
    }
    // Validar que el usuario exista
    const user = validateUser.find(user => user.email === email.value);
    if (!user) {
        Swal.fire({
            title: "El email ingresado no existe",
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
              title: "titulo-password-lo",
            },
          });
        return; 
    }

    // Validar que la contraseña coincida
    if (user.password !== password.value) {
        Swal.fire({
            title: "Las constraseñas no coinciden",
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
              title: "titulo-password-lo",
            },
          });
        return; 
    }

    // Usuario logueado con éxito
      Swal.fire({
        title: "Usuario logueado con exíto",
        background: "#52c096",
        icon: "info",
        timer: "3000",
        position: "center",
        backdrop: true,
        color: "#939535",
        confirmButtonText: "ok",
        customClass: {
          title: "titulo-password-lo",
        },

      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "./index.html"; // Cambia esto por la URL a la que quieres redirigir
        }
      });

    // Ir a otra página desde js
    //window.location.href = "../views/about.html";

 }


// Seleccionar los íconos de ojo abierto y cerrado
const eyeOpen = document.getElementById('eye-open');
const eyeClosed = document.getElementById('eye-closed');

// Función para mostrar la contraseña
function showPassword() {
    if (password.type === 'password') {
        password.type = 'text';
        eyeOpen.style.display = 'none';
        eyeClosed.style.display = 'block';
    }
}

// Función para ocultar la contraseña
function hidePassword() {
    if (password.type === 'text') {
        password.type = 'password';
        eyeOpen.style.display = 'block';
        eyeClosed.style.display = 'none';
    }
}

// Agregar eventos de clic a los íconos
eyeOpen.addEventListener('click', showPassword);
eyeClosed.addEventListener('click', hidePassword);
 
 
