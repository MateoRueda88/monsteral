//Lista productos categoria interiores

let products = [ 
    {
      id: 1,
      name: "Crisantemo",
      price: 60000,
      img: "../public/img/interiorCategory/crisantemo.webp",
      description: "PLanta con flores variadas."
    },
    {
      id: 2,
      name:"Helecho Boston",
      price: 50000,
      img: "../public/img/interiorCategory/helechoBoston.webp",
      description: "Planta de follaje verde y frondoso."
    },
    {
        id: 3,
        name:"Espatifilo",
        price:70000,
        img:"../public/img/interiorCategory/espatifilo.webp",
        description: "Planta con hojas verdes y flores blancas."
    },
    {
        id: 4,
        name:"Sansevieria",
        price: 45000,
        img: "../public/img/interiorCategory/sansevieira.webp",
        description: "Planta resistente que purfica el aire."
    },
    {
        id: 5,
        name: "Drácena",
        price: 55000,
        img: "../public/img/interiorCategory/dracena.webp",
        description: "Planta con hojas largas y elegantes."
    },
    {
        id: 6,
        name: "Pothos",
        price: 48000,
        img: "../public/img/interiorCategory/pothos.webp",
        description: "Planta colgante facil de cuidar y decorativa."
    },
    {
        id:7,
        name:"Ficus lyrata",
        price: 80000,
        img: "../public/img/interiorCategory/ficusLyrata.webp",
        description: "Arbol de hojas grandes y brillantes."
    },
    {
        id:8,
        name:"Cinta",
        price: 40000,
        img: "../public/img/interiorCategory/cinta.webp",
        description: "Planta colgante con hojas rayadas."
    },
    {   
        id:9,
        name:"Monstera deliciosa",
        price:75000,
        img:"../public/img/interiorCategory/monsteraDeliciosa.webp",
        description: "Planta con hojas grandes y perforadas."
    }, 
    {   
        id:10,
        name: "Pilea peperomioides",
        price: 60000,
        img:"../public/img/interiorCategory/pileaPeperomioides.webp",
        description: "Planta de aspecto unico con hojas redondas." 
    }
]

const container = document.getElementById('intCategory');
let intCategoryHTML = '';

for (let i = 0; i < products.length; i++) {
    intCategoryHTML += `
      <div class="plant-card">
        <img src="${products[i].img}" alt="${products[i].name}" class="plantImg">
        <h2>${products[i].name}</h2>
        <p>Precio: $${products[i].price}</p>
        <div class="car">
        <img src="../public/img/greenCar.webp" alt="car" class="carImg">
        </div>
      </div>
      `;
}
    container.innerHTML = intCategoryHTML;
    // <p>Descripción: ${products[i].description}</p>

