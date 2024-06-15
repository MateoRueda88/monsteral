const formLogin = document.getElementById('formRegister');
const fullName = document.getElementById('fullName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

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
        alert("Por favor llene todos los campos");
        return;  // Salir de la función si hay campos vacíos
    }
    
    // Validar que las contraseñas coincidan
    if (passwordValue !== confirmPasswordValue) {
        alert("Las contraseñas no coinciden");
        return;  // Salir de la función si las contraseñas no coinciden
    }
    
    // Validar que el usuario no exista
    if (userRegistered.find(user => user.email === emailValue)) {
        alert("El usuario ya existe");
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
    alert("Usuario registrado con éxito");

    // Limpiar los campos
    fullName.value = "";
    phone.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
}



