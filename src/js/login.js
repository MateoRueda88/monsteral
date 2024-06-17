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
            background: '#523726',
            icon: 'info',
            timer: '2000',
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
    return;
    }
    

    const validateUser = JSON.parse(getLocal);

    // Validar que validateUser sea un array
    if (!Array.isArray(validateUser)) {
        Swal.fire({
            title: "Datos de usuario no válidos",
            showConfirmButton: false,
            background: '#523726',
            icon: 'info',
            timer: '2000',
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
    return;
    }

    // Validar que los campos no estén vacíos
    if (email.value === "" || password.value === "") {
        Swal.fire({
            title: "Campos vacios",
            showConfirmButton: false,
            background: '#523726',
            icon: 'warning',
            timer: '2000',
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
    return;
    }
    

    // Validar que el usuario exista
    const user = validateUser.find(user => user.email === email.value);
    if (!user) {
        Swal.fire({
            title: "El email ingresado no existe",
            icon: 'warning',
            background: '#523726',
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
        return; 
    }

    // Validar que la contraseña coincida
    if (user.password !== password.value) {
        Swal.fire({
            title: "Las constraseñas no coiciden",
            icon: 'error',
            background: '#523726',
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
        return; 
    }

    // Usuario logueado con éxito
    Swal.fire({
        title: "Usuario logueado con éxito",
        icon: 'success',
        background: '#523726',
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

    // Ir a otra página desde js
    //window.location.href = "../views/about.html";

 }
