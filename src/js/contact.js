const formulario = document.getElementById('form')
const nombre = document.getElementById('nameError')
formulario.addEventListener('click', (event) =>{
  let valorInput = event.target.value;
  console.log(valorInput)
})

//  document.getElementById('form').addEventListener('submit', function(event) {
//    event.preventDefault(); // Previene el envío del formulario

//    const email = document.getElementById('email');


// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity(
//       "¡Se esperaba una dirección de correo electrónico!",
//     );
//   } else {
//     email.setCustomValidity("");
//   }
// });


//  });