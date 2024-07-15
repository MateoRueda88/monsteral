const medCategory = document.getElementById("medCategory");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

//Lista productos categoria plantas medicinales

let products = [ 
    {
      id: 1,
      name: "Aloe Vera",
      price: 25000,
      img: "../public/img/medicinalCategory/aloeVera.webp",
      description: "Planta suculenta utilizada para tratar quemaduras y heridas.",
      cantidad: 1,
    },
    {
      id: 2,
      name:"Manzanilla",
      price: 15000,
      img: "../public/img/medicinalCategory/manzanilla.webp",
      description: "Planta con flores blancas usada para infusiones relajantes.",
      cantidad: 1,
    },
    {
        id: 3,
        name:"Menta",
        price:12000,
        img:"../public/img/medicinalCategory/menta.webp",
        description: "Planta aromática utilizada para problemas digestivos.",
        cantidad: 1,
    },
    {
        id: 4,
        name:"Romero",
        price: 18000,
        img: "../public/img/medicinalCategory/romero.webp",
        description: "Planta aromática con propiedades antiinflamatorias.",
        cantidad: 1,
    },
    {
        id: 5,
        name: "Lavanda",
        price: 20000,
        img: "../public/img/medicinalCategory/aloeVera.webp",
        description: "Planta aromática utilizada para aliviar el estrés.",
        cantidad: 1,
    },
    {
        id: 6,
        name: "Eucalipto",
        price: 22000,
        img: "../public/img/medicinalCategory/eucalipto.webp",
        description: "Planta trepadora con flores brillantes.",
        cantidad: 1,
    },
    {
        id:7,
        name:"Salvia",
        price: 17000,
        img: "../public/img/medicinalCategory/salvia.webp",
        description: "Planta alta con flores amarillas grandes.",
        cantidad: 1,
    },
    {
        id:8,
        name:"Hierbabuena",
        price: 13000,
        img: "../public/img/medicinalCategory/hierbabuena.webp",
        description: "Planta con flores blancas y centro amarillo.",
        cantidad: 1,
    },
    {   
        id:9,
        name:"Calendula",
        price:19000,
        img:"../public/img/medicinalCategory/calendula.webp",
        description: "Planta con una gran variedad de flores.",
        cantidad: 1,
    }, 
    {   
        id:10,
        name: "Jengibre",
        price: 25000,
        img:"../public/img/medicinalCategory/jengibre.webp",
        description: "Planta de arbusto con flores brillantes.",
        cantidad: 1,
    }
]
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Generar HTML para los productos y agregar al contenedor
let medCategoryHTML = '';

products.forEach((product) => {
    medCategoryHTML += `
        <div class="plant-card">
            <div>
                <div class="container">
                    <div class="imgContainer">
                        <img src="${product.img}" alt="" class="mainIMG">
                    </div>
                    <div class="xContainer">
                        <img src="${product.img2}" alt="" class="xContainerx active">
                        <img src="${product.img3}" alt="" class="xContainerx">
                        <img src="${product.img4}" alt="" class="xContainerx">
                        <img src="${product.img5}" alt="" class="xContainerx">
                    </div>
                </div>
            </div>
            <h2>${product.name}</h2>
            <p>Precio: $${product.price}</p>
            <p>Cantidad: ${product.cantidad}</p>
            <button class="comprar" data-id="${product.id}">Agregar</button>  
        </div>
    `;
});

medCategory.innerHTML = medCategoryHTML;

// Funcionalidad de cambiar imágenes
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
// Manejo del carrito
document.querySelectorAll('.comprar').forEach(button => {
    button.addEventListener('click', (event) => {
        const productId = event.target.getAttribute('data-id');
        const product = products.find(p => p.id == productId);
        
        //Buscar producto repetido
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        if(repeat){
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        }else{
        carrito.push({
            id: product.id,
            img: product.img,
            name: product.name,
            price: product.price,
            cantidad: product.cantidad,
        });
        console.log(carrito);
        console.log(carrito.length);
        carritoCounter();
        saveLocal();
    }
    
    });
});

//Local storage
//SETITEMS
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};
