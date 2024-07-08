//Lista productos categoria plantas suculentas

let products = [ 
    {
      id: 1,
      name: "Echeveria",
      price: 15000,
      img: "../public/img/suculentasCategory/echeveria.webp",
      description: "Planta suculenta con hojas carnosas en forma de roseta."
    },
    {
      id: 2,
      name:"Sedum",
      price: 12000,
      img: "../public/img/suculentasCategory/sedum.webp",
      description: "Planta suculenta con pequeñas hojas redondeadas."
    },
    {
        id: 3,
        name:"Aloe Vera",
        price:25000,
        img:"../public/img/suculentasCategory/haworthia.webp",
        description: "Planta suculenta utilizada para tratar quemaduras y heridas."
    },
    {
        id: 4,
        name:"Haworthia",
        price: 18000,
        img: "../public/img/suculentasCategory/haworthia.webp",
        description: "Planta suculenta con hojas verdes y puntiagudas."
    },
    {
        id: 5,
        name: "Crassula",
        price: 20000,
        img: "../public/img/suculentasCategory/crassula.webp",
        description: "Planta suculenta con hojas gruesas y brillantes."
    },
    {
        id: 6,
        name: "Kalanchoe",
        price: 22000,
        img: "../public/img/suculentasCategory/kalanchoe.webp",
        description: "Planta suculenta con flores pequeñas y coloridas."
    },
    {
        id:7,
        name:"Graptopetalum",
        price: 17000,
        img: "../public/img/suculentasCategory/graptopetalum.webp",
        description: "Planta suculenta con hojas en forma de estrella."
    },
    {
        id:8,
        name:"Agave",
        price: 30000,
        img: "../public/img/suculentasCategory/agave.webp",
        description: "Planta suculenta con hojas largas y puntiagudas."
    },
    {   
        id:9,
        name:"Sempervivum",
        price:16000,
        img:"../public/img/suculentasCategory/sempervivum.webp",
        description: "Planta suculenta con rosetas de hojas compactas."
    }, 
    {   
        id:10,
        name: "Pachyphytum",
        price: 19000,
        img:"../public/img/suculentasCategory/pachyphytum.webp",
        description: "Planta suculenta con hojas gruesas y redondeada." 
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

