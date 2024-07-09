//Lista productos categoria plantas bonsai

let products = [ 
    {
      id: 1,
      name: "Bonsái de Pino ",
      price: 150000,
      img: "../public/img/bonsaiCategory/bonsaiPino.webp",
      description: "Pequeño árbol de pino cultivado en maceta."
    },
    {
      id: 2,
      name:"Bonsái de Arce Japonés",
      price: 200000,
      img: "../public/img/bonsaiCategory/bonsaiJapones.webp",
      description: "Árbol de arce con hojas rojas cultivado en maceta."
    },
    {
        id: 3,
        name:"Bonsái de Ficus",
        price:130000,
        img:"../public/img/bonsaiCategory/bonsaiFicus.webp",
        description: "Planta aromática utilizada para problemas digestivos."
    },
    {
        id: 4,
        name:"Bonsái de Olmo Chino",
        price: 170000,
        img: "../public/img/bonsaiCategory/bonsaiOlmoChino.webp",
        description: "Planta aromática con propiedades antiinflamatorias."
    },
    {
        id: 5,
        name: "Bonsái de Junípero",
        price: 140000,
        img: "../public/img/bonsaiCategory/bonsaiJunipero.webp",
        description: "Árbol de junípero en miniatura."
    },
    {
        id: 6,
        name: "Bonsái de Azalea",
        price: 180000,
        img: "../public/img/bonsaiCategory/bonsaiAzalea.webp",
        description: "Árbol de azalea con flores cultivado en maceta."
    },
    {
        id:7,
        name:"Bonsái de Ciprés",
        price: 160000,
        img: "../public/img/bonsaiCategory/bonsaiCipres.webp",
        description: "Pequeño árbol de ciprés cultivado en maceta."
    },
    {
        id:8,
        name:"Bonsái de Granado",
        price: 190000,
        img: "../public/img/bonsaiCategory/bonsaiGranado.webp",
        description: "Árbol de granado en miniatura."
    },
    {   
        id:9,
        name:"Bonsái de Cerezo",
        price:210000,
        img:"../public/img/bonsaiCategory/bonsaiCerezo.webp",
        description: "Árbol de cerezo con flores cultivado en maceta."
    }, 
    {   
        id:10,
        name: "Bonsái de Ginkgo",
        price: 220000,
        img:"../public/img/bonsaiCategory/bonsaiGinkgo.webp",
        description: "Árbol de ginkgo biloba cultivado en forma de bonsái." 
    }
]

const container = document.getElementById('bonCategory');
let bonCategoryHTML = '';

for (let i = 0; i < products.length; i++) {
    bonCategoryHTML += `
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
    container.innerHTML = bonCategoryHTML;
    // <p>Descripción: ${products[i].description}</p>

