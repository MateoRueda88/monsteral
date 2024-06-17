const frmLogin = document.getElementById('formLogin');
const email = document.getElementById('email');
const password = document.getElementById('password');

frmLogin.addEventListener("submit", LoginEmail);

function LoginEmail(event) {
    //Prevenir los eventos precargados
    event.preventDefault();
    // Obtener los valores de los campos de entrada
    const getLocal = localStorage.getItem("user");
    const validateUser = JSON.parse(getLocal);

    // Validar que los campos no estén vacíos
    if (email.value === "" || password.value === "") {
        alert("Por favor llene todos los campos")         
    }
    // Validar que el usuario exista
    else if(!validateUser.find(user =>user.user === email.value)){
        alert("El email ingresado no existe");
    }
    // Validar que la contraseña coincida
    else if (
        validateUser.find(user =>user.user === email.value).password !== password.value){
            alert("La contraseña ingresada no coincide");
        }else{
            alert("Usuario logueado con éxito");
            //ir a otra pagina desde js
            window.location.href = "src\views\about.html";
        }
}



