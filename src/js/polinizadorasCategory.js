//Lista productos categoria plantas polinizadoras

let products = [ 
    {
      id: 1,
      name: "Lavanda",
      price: 20000,
      img: "../public/img/polinizadorasCategory/lavanda.webp",
      description: "Planta aromática con flores púrpuras que atraen polinizadores."
    },
    {
      id: 2,
      name:"Girasol",
      price: 18000,
      img: "../public/img/polinizadorasCategory/girasol.webp",
      description: "Planta alta con flores amarillas grandes que atraen abejas."
    },
    {
        id: 3,
        name:"Rosa",
        price:25000,
        img:"../public/img/polinizadorasCategory/rosa.webp",
        description: "Planta de flores hermosas y fragantes que atraen abejas."
    },
    {
        id: 4,
        name:"Salvia",
        price: 22000,
        img: "../public/img/polinizadorasCategory/salvia.webp",
        description: "Planta con flores coloridas que atraen mariposas."
    },
    {
        id: 5,
        name: "Margarita",
        price: 15000,
        img: "../public/img/polinizadorasCategory/margarita.webp",
        description: "Planta con flores blancas y centro amarillo que atraen abejas."
    },
    {
        id: 6,
        name: "Buganvilla",
        price: 30000,
        img: "../public/img/polinizadorasCategory/buganvilla.webp",
        description: "Planta trepadora con flores brillantes que atraen colibríes."
    },
    {
        id:7,
        name:"Hortensia",
        price: 28000,
        img: "../public/img/polinizadorasCategory/hortensia.webp",
        description: "Planta con grandes racimos de flores que atraen abejas."
    },
    {
        id:8,
        name:"Manzanilla",
        price: 15000,
        img: "../public/img/polinizadorasCategory/manzanilla.webp",
        description: "Planta con flores blancas usada para infusiones relajantes y que atraen abejas."
    },
    {   
        id:9,
        name:"Geranio",
        price:17000,
        img:"../public/img/polinizadorasCategory/geranio.webp",
        description: "Planta de flores coloridas y duraderas que atraen abejas."
    }, 
    {   
        id:10,
        name: "Jazmín",
        price: 22000,
        img:"../public/img/polinizadorasCategory/jazmin.webp",
        description: "Planta trepadora con flores fragantes que atraen mariposas." 
    }
]

const container = document.getElementById('poliCategory');
let poliCategoryHTML = '';

for (let i = 0; i < products.length; i++) {
    poliCategoryHTML += `
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
    container.innerHTML = poliCategoryHTML;
    // <p>Descripción: ${products[i].description}</p>

