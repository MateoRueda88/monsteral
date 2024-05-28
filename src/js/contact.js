const formulario = document.getElementById('form');
const nombre = document.getElementById('name');
const errName = document.getElementById('nameError');
const phone = document.getElementById('phone');
const errPhone = document.getElementById('namePhone')
   // resetear inputs

nombre.addEventListener('change', (event)=>{
  longitudInput(event)
  tipoDato(event)
})
function longitudInput(event){
  let valorInput = event.target.value;
let longitudInputNombre = valorInput.length;
  if(longitudInputNombre < 3){
errName.textContent = ("Ingresa mas caracteres")
  }else{
    errName.textContent = ("✔")
  }

}

phone.addEventListener('change', (event) => {
  tipoDato(event);
});

function tipoDato(event) {
  let tipoDate = event.target.value;
  if (isNaN(tipoDate)) {
      errPhone.textContent = "Caracter no válido";
  } else {
      errPhone.textContent = "✔";
  }
}
// phone.addEventListener('change', (event)=>{
//   tipoDato(event)
// })
//  function tipoDato(event){
//   let tipoDate = event.target.value
//  if(tipoDate !== Number){
//    errPhone.textContent = ("Caracter no valido")
//    }
//    else{
//      errPhone.textContent = ("✔")
//    }
//  }

 
// verificacion de numero de caracteres en phone











// const errName = document.getElementById('nameError')
// document.getElementById("form").addEventListener("submit",  (event) =>  {
//   //Previene el envío del formulario
//    event.preventDefault();
// // let valorInput = event.target.value;
// // let longitudInput = valorInput.length;
//    // resetear inputs
//    function clear(event) {
//     event.preventDefault();
//     document.getElementById('name').value = '';
//     document.getElementById('email').value = '';
//     document.getElementById('phone').value = '';
//     document.getElementById('message').value = '';
// }
// clear(event)


// // verificacion de numero de caracteres en phone
// const errorPhone = document.getElementById('namePhone')
//   document.getElementById('phone').addEventListener('input', function() {
//     const inputValue = this.value;
//     const maxLength = 10;
//     function mostrarAlerta(){
//       const error = document.createElement('P');
//       error.textContent='Hubo un error...';
//       formulario.appendChild(error)
//       }
//     if (inputValue.length !== maxLength) {
//       // Mostrar un mensaje de error o deshabilitar el botón de envío
//      mostrarAlerta()
//     }
//   });

// });

// document.getElementById('label').addEventListener('click', (event) =>{
//   let valorIn = event.target.value
// })












// console.log(event)
//   // Resetea los mensajes de error
//   document.getElementById("nameError").textContent = "";
//   document.getElementById("emailError").textContent = "";

//   // Obtén los valores de los campos
//   var nombre = document.getElementById("nombre").value;
//   var apellido = document.getElementById("apellido").value;
//   var email = document.getElementById("email").value;

//   // Define los requisitos de longitud
//   var minNombreLength = 2;
//   var maxNombreLength = 50;
//   var minApellidoLength = 2;
//   var maxApellidoLength = 50;
//   var minEmailLength = 5;
//   var maxEmailLength = 100;

//   // Variable para verificar si hay errores
//   var hayErrores = false;

//   // Validación de longitud de nombre
//   if (nombre.length < minNombreLength || nombre.length > maxNombreLength) {
//     document.getElementById(
//       "errorNombre"
//     ).textContent = `El nombre debe tener entre ${minNombreLength} y ${maxNombreLength} caracteres.`;
//     hayErrores = true;
//   }

//   // Validación de longitud de apellido
//   if (
//     apellido.length < minApellidoLength ||
//     apellido.length > maxApellidoLength
//   ) {
//     document.getElementById(
//       "errorApellido"
//     ).textContent = `El apellido debe tener entre ${minApellidoLength} y ${maxApellidoLength} caracteres.`;
//     hayErrores = true;
//   }

//   // Validación de longitud de email
//   if (email.length < minEmailLength || email.length > maxEmailLength) {
//     document.getElementById(
//       "errorEmail"
//     ).textContent = `El email debe tener entre ${minEmailLength} y ${maxEmailLength} caracteres.`;
//     hayErrores = true;
//   }

//   // Si no hay errores, envía el formulario
//   if (!hayErrores) {
//     alert("Formulario enviado con éxito");
//     // Aquí puedes hacer el envío del formulario, por ejemplo, usando:
//     // this.submit();
//   }
// });


// // const formulario = document.getElementById('form');
// // const nombre = document.getElementById('nameError');
// // const mailto = document.getElementById('email');
// // const errorEmail = document.getElementById('emailError');
// // const inputPhone = document.getElementById('phone');
// // formulario.addEventListener('click', (event) =>{
// // event.preventDefault()
// // let valorInput = event.target.value;
// // let longitudInputNombre = valorInput.length;
// // console.log(longitudInputNombre)
// // let tipoDato = typeof valorInput;
// // //console.log(tipoDato)

// // if(longitudInputNombre < 3){
// //   nombre.textContent = ("Ingrese un nombre valido con mas de 3 caracteres")
// // }else{
// //   nombre.textContent = ""
// // }
// // })

// // inputPhone.addEventListener('input', ()=>{
// //   if(this.value.length > 12){
// //     this.value = this.value.slice(0,12);
// //     nombre.textContent = ("Ingresar cantidad de numeros validos")
// //   }
// //   else{
// // nombre.textContent = ""
// //   }
// // })

// //  document.getElementById('form').addEventListener('submit', function(event) {
// //    event.preventDefault(); // Previene el envío del formulario

// //    const email = document.getElementById('email');

// // email.addEventListener("input", function (event) {
// //   if (email.validity.typeMismatch) {
// //     email.setCustomValidity(
// //       "¡Se esperaba una dirección de correo electrónico!",
// //     );
// //   } else {
// //     email.setCustomValidity("");
// //   }
// // });

// //  });
