//Lista productos categoria plantas purificadoras

let products = [ 
    {
      id: 1,
      name: "Lengua de suegra",
      price: 30000,
      img: "../public/img/purificadorasCategory/purificadorasCategory",
      description: "Planta resistente que purifica el aire."
    },
    {
      id: 2,
      name:"Pothos",
      price: 25000,
      img: "../public/img/purificadorasCategory/pothos.webp",
      description: "Planta colgante que elimina toxinas del aire."
    },
    {
        id: 3,
        name:"Palma Areca",
        price:40000,
        img:"../public/img/purificadorasCategory/palmaAreca.webp",
        description: "Planta elegante que mejora la calidad del aire."
    },
    {
        id: 4,
        name:"Helecho de Boston",
        price: 28000,
        img: "../public/img/purificadorasCategory/helechoBoston.webp",
        description: "Planta frondosa que purifica el aire."
    },
    {
        id: 5,
        name: "Lirio de paz",
        price: 35000,
        img: "../public/img/purificadorasCategory/lirioPaz.webp",
        description: "Planta con flores blancas que limpia el aire."
    },
    {
        id: 6,
        name: "Ficus Elástica",
        price: 42000,
        img: "../public/img/purificadorasCategory/ficusElastica.webp",
        description: "Planta de hojas grandes que purifica el aire."
    },
    {
        id:7,
        name:"Palma de bambú",
        price: 39000,
        img: "../public/img/purificadorasCategory/palmaBambu.webp",
        description: "Planta que elimina toxinas del aire."
    },
    {
        id:8,
        name:"Dracaena",
        price: 32000,
        img: "../public/img/purificadorasCategory/dracaena.webp",
        description: "Planta que mejora la calidad del aire."
    },
    {   
        id:9,
        name:"Aloe Vera",
        price:25000,
        img:"../public/img/purificadorasCategory/calendula.webp",
        description: "Planta suculenta que purifica el aire y trata heridas."
    }, 
    {   
        id:10,
        name: "Filodendro",
        price: 27000,
        img:"../public/img/purificadorasCategory/filodendro.webp",
        description: "Planta de interior que limpia el aire." 
    }
]

const container = document.getElementById('puriCategory');
let puriCategoryHTML = '';

for (let i = 0; i < products.length; i++) {
    puriCategoryHTML += `
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
    container.innerHTML = puriCategoryHTML;
    // <p>Descripción: ${products[i].description}</p>
