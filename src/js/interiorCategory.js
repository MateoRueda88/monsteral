const intCategory = document.getElementById("intCategory");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

//Lista productos categoria interiores

let products = [ 
    {
        id:1,
        name:"Crisantemo",
        price:40000,
        img:"../public/img/imgCategories/exteriorCategory/crisantemo1.webp",
        img2:"../public/img/imgCategories/exteriorCategory/crisantemo1.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/crisantemo2.webp",
        img4:"../public/img/imgCategories/exteriorCategory/crisantemo3.webp",
        img5: "../public/img/imgCategories/exteriorCategory/crisantemo4.webp",
        description: "Planta con una gran variedad de flores.",
        cantidad: 1,
    },
    {
      id: 2,
      name:"Helecho Boston",
      price: 50000,
      img:"../public/img/imgCategories/interiorCategory/helechoBoston3.webp",
      img2:"../public/img/imgCategories/interiorCategory/helechoBoston3.webp", 
      img3: "../public/img/imgCategories/interiorCategory/helechoBoston2.jpeg",
      img4:"../public/img/imgCategories/interiorCategory/helechoBoston4.webp",
      img5: "../public/img/imgCategories/interiorCategory/helechoBoston1.webp",
      description: "Planta de follaje verde y frondoso.",
      cantidad: 1,
    },
    {
        id: 3,
        name:"Espatifilo",
        price:70000,
        img:"../public/img/imgCategories/interiorCategory/espatifilo1.webp",
        img2:"../public/img/imgCategories/interiorCategory/espatifilo1.webp", 
        img3: "../public/img/imgCategories/interiorCategory/espatifilo2.webp",
        img4:"../public/img/imgCategories/interiorCategory/espatifilo3.webp",
        img5: "../public/img/imgCategories/interiorCategory/espatifilo4.webp",
        description: "Planta con hojas verdes y flores blancas.",
        cantidad: 1,
    },
    {
        id: 4,
        name:"Sansevieria",
        price: 45000,
        img:"../public/img/imgCategories/interiorCategory/sansevieria1.webp",
        img2:"../public/img/imgCategories/interiorCategory/sansevieria1.webp", 
        img3: "../public/img/imgCategories/interiorCategory/sansevieria3.webp",
        img4:"../public/img/imgCategories/interiorCategory/sansevieria4.webp",
        img5: "../public/img/imgCategories/interiorCategory/sansevieria2.webp",
        description: "Planta resistente que purfica el aire.",
        cantidad: 1,
    },
    {
        id: 5,
        name: "Drácena",
        price: 55000,
        img:"../public/img/imgCategories/interiorCategory/dracena1.webp",
        img2:"../public/img/imgCategories/interiorCategory/dracena1.webp", 
        img3: "../public/img/imgCategories/interiorCategory/dracena2.webp",
        img4:"../public/img/imgCategories/interiorCategory/dracena3.webp",
        img5: "../public/img/imgCategories/interiorCategory/dracena4.webp",
        description: "Planta con hojas largas y elegantes.",
        cantidad: 1,
    },
    {
        id: 6,
        name: "Pothos",
        price: 48000,
        img:"../public/img/imgCategories/interiorCategory/pothos1.webp",
        img2:"../public/img/imgCategories/interiorCategory/pothos1.webp", 
        img3: "../public/img/imgCategories/interiorCategory/pothos2.webp",
        img4:"../public/img/imgCategories/interiorCategory/pothos3.webp",
        img5: "../public/img/imgCategories/interiorCategory/pothos4.webp",
        description: "Planta colgante facil de cuidar y decorativa.",
        cantidad: 1,
    },
    {
        id:7,
        name:"Ficus lyrata",
        price: 80000,
        img:"../public/img/imgCategories/interiorCategory/ficusLyrata1.webp",
        img2:"../public/img/imgCategories/interiorCategory/ficusLyrata1.webp", 
        img3: "../public/img/imgCategories/interiorCategory/ficusLyrata2.webp",
        img4:"../public/img/imgCategories/interiorCategory/ficusLyrata3.webp",
        img5: "../public/img/imgCategories/interiorCategory/ficusLyrata4.webp",
        description: "Arbol de hojas grandes y brillantes.",
        cantidad: 1,
    },
    {
        id:8,
        name:"Cinta",
        price: 40000,
        img:"../public/img/imgCategories/interiorCategory/cinta1.webp",
        img2:"../public/img/imgCategories/interiorCategory/cinta2.webp", 
        img3: "../public/img/imgCategories/interiorCategory/cinta3.webp",
        img4:"../public/img/imgCategories/interiorCategory/cinta4.webp",
        img5: "../public/img/imgCategories/interiorCategory/cinta1.webp",
        description: "Planta colgante con hojas rayadas.",
        cantidad: 1,
    },
    {   
        id:9,
        name:"Monstera deliciosa",
        price:75000,
        img:"../public/img/imgCategories/interiorCategory/monsteraDeliciosa1.webp",
        img2:"../public/img/imgCategories/interiorCategory/monsteraDeliciosa1.webp", 
        img3: "../public/img/imgCategories/interiorCategory/monsteraDeliciosa2.webp",
        img4:"../public/img/imgCategories/interiorCategory/monsteraDeliciosa3.webp",
        img5: "../public/img/imgCategories/interiorCategory/monsteraDeliciosa4.webp",
        description: "Planta con hojas grandes y perforadas.",
        cantidad: 1,
    }, 
    {   
        id:10,
        name: "Pilea peperomioides",
        price: 60000,
        img:"../public/img/imgCategories/interiorCategory/pileaPeperomioides1.webp",
        img2:"../public/img/imgCategories/interiorCategory/pileaPeperomioides1.webp", 
        img3: "../public/img/imgCategories/interiorCategory/pileaPeperomioides3.webp",
        img4:"../public/img/imgCategories/interiorCategory/pileaPeperomioides4.webp",
        img5: "../public/img/imgCategories/interiorCategory/pileaPeperomioides2.webp",
        description: "Planta de aspecto unico con hojas redondas.",
        cantidad: 1,
    }
]
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Generar HTML para los productos y agregar al contenedor
let intCategoryHTML = '';

products.forEach((product) => {
    intCategoryHTML += `
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
            <p>${product.description}</p>
            <p>Cantidad: ${product.cantidad}</p>
            <button class="comprar" data-id="${product.id}">Agregar</button>  
        </div>
    `;
});

intCategory.innerHTML = intCategoryHTML;

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


