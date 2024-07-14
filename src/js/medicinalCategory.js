//Lista productos categoria plantas medicinales

let products = [ 
    {
      id: 1,
      name: "Aloe Vera",
      price: 25000,
      img: "../public/img/medicinalCategory/aloeVera.webp",
      description: "Planta suculenta utilizada para tratar quemaduras y heridas."
    },
    {
      id: 2,
      name:"Manzanilla",
      price: 15000,
      img: "../public/img/medicinalCategory/manzanilla.webp",
      description: "Planta con flores blancas usada para infusiones relajantes."
    },
    {
        id: 3,
        name:"Menta",
        price:12000,
        img:"../public/img/medicinalCategory/menta.webp",
        description: "Planta aromática utilizada para problemas digestivos."
    },
    {
        id: 4,
        name:"Romero",
        price: 18000,
        img: "../public/img/medicinalCategory/romero.webp",
        description: "Planta aromática con propiedades antiinflamatorias."
    },
    {
        id: 5,
        name: "Lavanda",
        price: 20000,
        img: "../public/img/medicinalCategory/aloeVera.webp",
        description: "Planta aromática utilizada para aliviar el estrés."
    },
    {
        id: 6,
        name: "Eucalipto",
        price: 22000,
        img: "../public/img/medicinalCategory/eucalipto.webp",
        description: "Planta trepadora con flores brillantes."
    },
    {
        id:7,
        name:"Salvia",
        price: 17000,
        img: "../public/img/medicinalCategory/salvia.webp",
        description: "Planta alta con flores amarillas grandes."
    },
    {
        id:8,
        name:"Hierbabuena",
        price: 13000,
        img: "../public/img/medicinalCategory/hierbabuena.webp",
        description: "Planta con flores blancas y centro amarillo."
    },
    {   
        id:9,
        name:"Calendula",
        price:19000,
        img:"../public/img/medicinalCategory/calendula.webp",
        description: "Planta con una gran variedad de flores."
    }, 
    {   
        id:10,
        name: "Jengibre",
        price: 25000,
        img:"../public/img/medicinalCategory/jengibre.webp",
        description: "Planta de arbusto con flores brillantes." 
    }
]

const container = document.getElementById('medCategory');
let medCategoryHTML = '';

for (let i = 0; i < products.length; i++) {
    medCategoryHTML += `
        <div class="plant-card">
            <div>
                <div class="container">
                    <div class="imgContainer">
                        <img src= "${products[i].img}" alt="" class="mainIMG">
                    </div>
                    <div class="xContainer">
                        <img src="${products[i].img2}" alt="" class="xContainerx active">
                        <img src="${products[i].img3}" alt="" class="xContainerx">
                        <img src="${products[i].img4}" alt="" class="xContainerx">
                        <img src="${products[i].img5}" alt="" class="xContainerx">
                    </div>
                </div>
            </div>
            <h2>${products[i].name}</h2>
            <p>Precio: $${products[i].price}</p>
            <div class="car">
                <img src="../public/img/greenCar.webp" alt="car" class="carImg">
            </div>
        </div>
    `;
}

container.innerHTML = medCategoryHTML;

document.querySelectorAll('.plant-card').forEach(card => {
    const mainIMG = card.querySelector('.mainIMG');
    const xContainerx = card.querySelectorAll('.xContainerx');

    xContainerx.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const active = card.querySelector('.active');
            active.classList.remove('active');
            thumb.classList.add('active');
            mainIMG.src = thumb.src;
        });
    });
});
