//Lista productos categoria plantas exteriores

let products = [ 
    {
      id: 1,
      name: "Rosa",
      price: 45000,
      img: "../public/img/exteriorCategory/rosa.webp",
      description: "Planta de flores hermosas y fragantes."
    },
    {
      id: 2,
      name:"Hortensia",
      price: 60000,
      img: "../public/img/exteriorCategory/hortensia.webp",
      description: "Planta con grandes racimos de flores."
    },
    {
        id: 3,
        name:"Lavanda",
        price:30000,
        img:"../public/img/exteriorCategory/lavanda.webp",
        description: "Planta aromartica con flores purpuras."
    },
    {
        id: 4,
        name:"Jazmín",
        price: 50000,
        img: "../public/img/exteriorCategory/jazmin.webp",
        description: "Planta trepadora con flores fragantes."
    },
    {
        id: 5,
        name: "Geranio",
        price: 35000,
        img: "../public/img/exteriorCategory/geranio.webp",
        description: "Planta de flores coloridas y duraderas."
    },
    {
        id: 6,
        name: "Buganvilla",
        price: 55000,
        img: "../public/img/exteriorCategory/buganvilla.webp",
        description: "Planta trepadora con flores brillantes."
    },
    {
        id:7,
        name:"Girasol",
        price: 20000,
        img: "../public/img/exteriorCategory/girasol.webp",
        description: "Planta alta con flores amarillas grandes."
    },
    {
        id:8,
        name:"Margarita",
        price: 25000,
        img: "../public/img/exteriorCategory/margarita.webp",
        description: "Planta con flores blancas y centro amarillo."
    },
    {   
        id:9,
        name:"Crisantemo",
        price:40000,
        img:"../public/img/exteriorCategory/crisantemo.webp",
        description: "Planta con una gran variedad de flores."
    }, 
    {   
        id:10,
        name: "Azalea",
        price: 45000,
        img:"../public/img/exteriorCategory/azalea.webp",
        description: "Planta de arbusto con flores brillantes." 
    }
]

const container = document.getElementById('extCategory');
let extCategoryHTML = '';

for (let i = 0; i < products.length; i++) {
    extCategoryHTML += `
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
    container.innerHTML = extCategoryHTML;
    // <p>Descripción: ${products[i].description}</p>

