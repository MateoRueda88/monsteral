const extCategory = document.getElementById("extCategory");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

//Lista productos categoria plantas exteriores

let products = [ 
    {
      id: 1,
      name: "Rosa",
      price: 45000,
<<<<<<< HEAD
      img:"../public/img/imgCategories/exteriorCategory/rosa.webp",
      img2:"../public/img/imgCategories/exteriorCategory/rosa.webp", 
      img3: "../public/img/imgCategories/exteriorCategory/rosa.JPG",
      img4:"../public/img/imgCategories/exteriorCategory/rosa.webp",
      img5: "../public/img/imgCategories/exteriorCategory/rosa.webp",
      description: "Planta de flores hermosas y fragantes.",
      cantidad: 1,
=======
      img:"../public/img/imgCategories/exteriorCategory/rosa1.webp",
      img2:"../public/img/imgCategories/exteriorCategory/rosa1.webp", 
      img3: "../public/img/imgCategories/exteriorCategory/rosa2.webp",
      img4:"../public/img/imgCategories/exteriorCategory/rosa3.webp",
      img5: "../public/img/imgCategories/exteriorCategory/rosa4.webp",
      description: "Planta de flores hermosas y fragantes."
>>>>>>> origin
    },
    {
      id: 2,
      name:"Hortensia",
      price: 60000,
      img:"../public/img/imgCategories/exteriorCategory/hortensia1.webp",
      img2:"../public/img/imgCategories/exteriorCategory/hortensia1.webp", 
      img3: "../public/img/imgCategories/exteriorCategory/hortensia2.webp",
      img4:"../public/img/imgCategories/exteriorCategory/hortensia3.webp",
      img5: "../public/img/imgCategories/exteriorCategory/hortensia.webp",
      description: "Planta con grandes racimos de flores.",
      cantidad: 1,
    },
    {
        id: 3,
        name:"Lavanda",
        price:30000,
<<<<<<< HEAD
        img:"../public/img/imgCategories/exteriorCategory/lavanda.webp",
        img2:"../public/img/imgCategories/exteriorCategory/lavanda.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/lavanda.JPG",
        img4:"../public/img/imgCategories/exteriorCategory/lavanda.webp",
        img5: "../public/img/imgCategories/exteriorCategory/lavanda.webp",
        description: "Planta aromartica con flores purpuras.",
        cantidad: 1,
=======
        img:"../public/img/imgCategories/exteriorCategory/lavanda1.webp",
        img2:"../public/img/imgCategories/exteriorCategory/lavanda2.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/lavanda3.webp",
        img4:"../public/img/imgCategories/exteriorCategory/lavanda4.webp",
        img5: "../public/img/imgCategories/exteriorCategory/lavanda1.webp",
        description: "Planta aromartica con flores purpuras."
>>>>>>> origin
    },
    {
        id: 4,
        name:"Jazmín",
        price: 50000,
<<<<<<< HEAD
        img:"../public/img/imgCategories/exteriorCategory/jazmín.webp",
        img2:"../public/img/imgCategories/exteriorCategory/jazmín.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/jazmín.JPG",
        img4:"../public/img/imgCategories/exteriorCategory/jazmín.webp",
        img5: "../public/img/imgCategories/exteriorCategory/jazmín.webp",
        description: "Planta trepadora con flores fragantes.",
        cantidad: 1,
=======
        img:"../public/img/imgCategories/exteriorCategory/jazmín1.webp",
        img2:"../public/img/imgCategories/exteriorCategory/jazmín1.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/jazmín2.webp",
        img4:"../public/img/imgCategories/exteriorCategory/jazmín3.webp",
        img5: "../public/img/imgCategories/exteriorCategory/jazmín4.webp",
        description: "Planta trepadora con flores fragantes."
>>>>>>> origin
    },
    {
        id: 5,
        name: "Geranio",
        price: 35000,
<<<<<<< HEAD
        img:"../public/img/imgCategories/exteriorCategory/geranio.webp",
        img2:"../public/img/imgCategories/exteriorCategory/geranio.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/geranio.JPG",
        img4:"../public/img/imgCategories/exteriorCategory/geranio.webp",
        img5: "../public/img/imgCategories/exteriorCategory/geranio.webp",
        description: "Planta de flores coloridas y duraderas.",
        cantidad: 1,
=======
        img:"../public/img/imgCategories/exteriorCategory/geranio1.webp",
        img2:"../public/img/imgCategories/exteriorCategory/geranio2.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/geranio1.webp",
        img4:"../public/img/imgCategories/exteriorCategory/geranio3.webp",
        img5: "../public/img/imgCategories/exteriorCategory/geranio4.webp",
        description: "Planta de flores coloridas y duraderas."
>>>>>>> origin
    },
    {
        id: 6,
        name: "Buganvilla",
        price: 55000,
<<<<<<< HEAD
        img:"../public/img/imgCategories/exteriorCategory/buganvilla.webp",
        img2:"../public/img/imgCategories/exteriorCategory/buganvilla.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/buganvilla.JPG",
        img4:"../public/img/imgCategories/exteriorCategory/buganvilla.webp",
        img5: "../public/img/imgCategories/exteriorCategory/buganvilla.webp",
        description: "Planta trepadora con flores brillantes.",
        cantidad: 1,
=======
        img:"../public/img/imgCategories/exteriorCategory/buganvilla1.webp",
        img2:"../public/img/imgCategories/exteriorCategory/buganvilla1.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/buganvilla2.webp",
        img4:"../public/img/imgCategories/exteriorCategory/buganvilla3.webp",
        img5: "../public/img/imgCategories/exteriorCategory/buganvilla4.webp",
        description: "Planta trepadora con flores brillantes."
>>>>>>> origin
    },
    {
        id:7,
        name:"Girasol",
        price: 20000,
<<<<<<< HEAD
        img:"../public/img/imgCategories/exteriorCategory/girasol.webp",
        img2:"../public/img/imgCategories/exteriorCategory/girasol.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/girasol.JPG",
        img4:"../public/img/imgCategories/exteriorCategory/girasol.webp",
        img5: "../public/img/imgCategories/exteriorCategory/girasol.webp",
        description: "Planta alta con flores amarillas grandes.",
        cantidad: 1,
=======
        img:"../public/img/imgCategories/exteriorCategory/girasol1.webp",
        img2:"../public/img/imgCategories/exteriorCategory/girasol1.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/girasol2.webp",
        img4:"../public/img/imgCategories/exteriorCategory/girasol3.webp",
        img5: "../public/img/imgCategories/exteriorCategory/girasol4.webp",
        description: "Planta alta con flores amarillas grandes."
>>>>>>> origin
    },
    {
        id:8,
        name:"Margarita",
        price: 25000,
<<<<<<< HEAD
        img:"../public/img/imgCategories/exteriorCategory/margarita.webp",
        img2:"../public/img/imgCategories/exteriorCategory/margarita.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/margarita.JPG",
        img4:"../public/img/imgCategories/exteriorCategory/margarita.webp",
        img5: "../public/img/imgCategories/exteriorCategory/margarita.webp",
        description: "Planta con flores blancas y centro amarillo.",
        cantidad: 1,
=======
        img:"../public/img/imgCategories/exteriorCategory/margarita1.webp",
        img2:"../public/img/imgCategories/exteriorCategory/margarita2.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/margarita1.webp",
        img4:"../public/img/imgCategories/exteriorCategory/margarita3.webp",
        img5: "../public/img/imgCategories/exteriorCategory/margarita4.webp",
        description: "Planta con flores blancas y centro amarillo."
>>>>>>> origin
    },
    {   
        id:9,
        name:"Crisantemo",
        price:40000,
<<<<<<< HEAD
        img:"../public/img/imgCategories/exteriorCategory/crisantemo.webp",
        img2:"../public/img/imgCategories/exteriorCategory/crisantemo.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/crisantemo.JPG",
        img4:"../public/img/imgCategories/exteriorCategory/crisantemo.webp",
        img5: "../public/img/imgCategories/exteriorCategory/crisantemo.webp",
        description: "Planta con una gran variedad de flores.",
        cantidad: 1,
=======
        img:"../public/img/imgCategories/exteriorCategory/crisantemo1.webp",
        img2:"../public/img/imgCategories/exteriorCategory/crisantemo1.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/crisantemo2.webp",
        img4:"../public/img/imgCategories/exteriorCategory/crisantemo3.webp",
        img5: "../public/img/imgCategories/exteriorCategory/crisantemo4.webp",
        description: "Planta con una gran variedad de flores."
>>>>>>> origin
    }, 
    {   
        id:10,
        name: "Azalea",
        price: 45000,
<<<<<<< HEAD
        img:"../public/img/imgCategories/exteriorCategory/azalea.webp",
        img2:"../public/img/imgCategories/exteriorCategory/azalea.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/azalea.JPG",
        img4:"../public/img/imgCategories/exteriorCategory/azalea.webp",
        img5: "../public/img/imgCategories/exteriorCategory/azalea.webp",
        description: "Planta de arbusto con flores brillantes.",
        cantidad: 1,
=======
        img:"../public/img/imgCategories/exteriorCategory/azalea1.webp",
        img2:"../public/img/imgCategories/exteriorCategory/azalea2.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/azalea3.webp",
        img4:"../public/img/imgCategories/exteriorCategory/azalea4.webp",
        img5: "../public/img/imgCategories/exteriorCategory/azalea1.webp",
        description: "Planta de arbusto con flores brillantes." 
>>>>>>> origin
    }
]
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let extCategoryHTML = '';

products.forEach((product) => {
    extCategoryHTML += `
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

extCategory.innerHTML = extCategoryHTML;

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