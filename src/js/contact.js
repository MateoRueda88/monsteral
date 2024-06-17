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


