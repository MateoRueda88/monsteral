const foormLogin = document.getElementById('formLogin');
const email = document.getElementById('email');
const password = document.getElementById('password');

formLogin.addEventListener("submit", LoginEmail);
formLogin.addEventListener("submit", LoginEmail);

function LoginEmail(event) {
    //  Prevenir los eventos precargados
    event.preventDefault();


    // Obtener los valores de los campos de entrada
    const getLocal = localStorage.getItem("user");

    if (!getLocal) {
        alert("No hay usuarios registrados");
        return;
    }


    if (!getLocal) {
        alert("No hay usuarios registrados");
        return;
    }

    const validateUser = JSON.parse(getLocal);

    // Validar que validateUser sea un array
    if (!Array.isArray(validateUser)) {
        alert("Datos de usuario no válidos");
        return;
    }

    // Validar que validateUser sea un array
    if (!Array.isArray(validateUser)) {
        alert("Datos de usuario no válidos");
        return;
    }

    // Validar que los campos no estén vacíos
    if (email.value === "" || password.value === "") {
        alert("Por favor llene todos los campos");
        return;
    }


    // Validar que el usuario exista
    const user = validateUser.find(user => user.email === email.value);
    if (!user) {
    const user = validateUser.find(user => user.email === email.value);
    if (!user) {
        alert("El email ingresado no existe");
        return;
    }


    // Validar que la contraseña coincida
    if (user.password !== password.value) {
        alert("La contraseña ingresada no coincide");
        return;
    }

    // Usuario logueado con éxito
    alert("Usuario logueado con éxito");
    // Ir a otra página desde js
    window.location.href = "../views/about.html";
    if (user.password !== password.value) {
        alert("La contraseña ingresada no coincide");
        return;
    }

    // Usuario logueado con éxito
    alert("Usuario logueado con éxito");
    // Ir a otra página desde js
    window.location.href = "../views/about.html";
}

}