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
    Swal.fire({
      title: "Ingrese mas caracteres",
      showConfirmButton: false,
      background: '#005c39',
      icon: 'info',
      timer: '1000',
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
// errName.textContent = ("Ingresa mas caracteres")
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
    Swal.fire({
      title: "Ingrese campo valido",
      showConfirmButton: false,
      background: '#52c096',
      icon: 'warning',
      timer: '7000',
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
  } else {
      errPhone.textContent = "✔";
  }
}


