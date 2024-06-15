const formLogin = document.getElementById('formRegister');
const fullName = document.getElementById('fullName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
// const errName = document.getElementById('nameError');
// const errPhones = document.getElementById('phoneError') 

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
    if (fullNameValue === "" || phoneValue === "" || emailValue === "" || passwordValue === "" || confirmPasswordValue === "") {
        Swal.fire({
            title: "Por favor llenar todos los campos",
            showConfirmButton: false,
            background: 'rgb(228, 228, 204)',
            icon: 'warning',
            timer: '3000',
            position: 'center',
            backdrop: true,
            color: '#939535',
            allowOutsideClick: true,
            toost: true,
            showConfirmButton: false,
            customClass:{
                title: 'titulo-password'
            }


    });
        return;  // Salir de la función si hay campos vacíos
    }
    
    // Validar que las contraseñas coincidan
    if (passwordValue !== confirmPasswordValue) {
        Swal.fire({
            title: "Las constraseñas no coiciden",
            icon: 'error',
            background: 'rgb(228, 228, 204)',
            timer: '3000',
            position: 'center',
            backdrop: true,
            color: '#939535',
            allowOutsideClick: true,
            toost: true,
            showConfirmButton: false,
            customClass:{
                title: 'titulo-password'
            }
           
    });
        return;  // Salir de la función si las contraseñas no coinciden
    }
    
    // Validar que el usuario no exista
    if (userRegistered.find(user => user.email === emailValue)) {
        Swal.fire({
            title: "El usuario ya exíste",
            icon: 'info',
            background: 'rgb(228, 228, 204)',
            timer: '3000',
            position: 'center',
            backdrop: true,
            color: '#939535',
            allowOutsideClick: true,
            toost: true,
            showConfirmButton: false,
            customClass:{
                title: 'titulo-password'
            }
           
           
    });
        return;  // Salir de la función si el usuario ya existe
    }

    // Se agrega automáticamente un ID
    id++;
  

    // Crear el objeto usuario
    const user = {
        id: id,
        nombre: fullNameValue,
        phone: phoneValue,
        email: emailValue,
        password: passwordValue
    };

    // Agregar usuario
    userRegistered.push(user);
    
    // Guardar Array en el LocalStorage
    localStorage.setItem("user", JSON.stringify(userRegistered));
    Swal.fire({
        title: "Exitosamente",
        icon: 'success',
        background: 'rgb(228, 228, 204)',
        timer: '3000',
        position: 'center',
        backdrop: true,
        color: '#939535',
        allowOutsideClick: true,
        toost: true,
        showConfirmButton: false
       
});

    // Limpiar los campos
    fullName.value = "";
    phone.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
}



