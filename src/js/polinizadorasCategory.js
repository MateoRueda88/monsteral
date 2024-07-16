const poliCategory = document.getElementById("poliCategory");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

//Lista productos categoria plantas polinizadoras

let products = [ 

    {
        id: 1,
        name:"Lavanda",
        price:30000,
        img:"../public/img/imgCategories/exteriorCategory/lavanda1.webp",
        img2:"../public/img/imgCategories/exteriorCategory/lavanda1.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/lavanda3.webp",
        img4:"../public/img/imgCategories/exteriorCategory/lavanda4.webp",
        img5: "../public/img/imgCategories/exteriorCategory/lavanda2.webp",
        description: "Planta aromartica con flores purpuras.",
        cantidad: 1,
      },
    {
        id:2,
        name:"Girasol",
        price: 20000,
        img:"../public/img/imgCategories/exteriorCategory/girasol1.webp",
        img2:"../public/img/imgCategories/exteriorCategory/girasol1.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/girasol2.webp",
        img4:"../public/img/imgCategories/exteriorCategory/girasol3.webp",
        img5: "../public/img/imgCategories/exteriorCategory/girasol4.webp",
        description: "Planta alta con flores amarillas grandes.",
        cantidad: 1,
    },
    {
        id: 3,
      name: "Rosa",
      price: 45000,
      img:"../public/img/imgCategories/exteriorCategory/rosa1.webp",
      img2:"../public/img/imgCategories/exteriorCategory/rosa1.webp", 
      img3: "../public/img/imgCategories/exteriorCategory/rosa2.webp",
      img4:"../public/img/imgCategories/exteriorCategory/rosa3.webp",
      img5: "../public/img/imgCategories/exteriorCategory/rosa4.webp",
      description: "Planta de flores hermosas y fragantes.",
      cantidad: 1,
    },
    {
        id: 4,
        name:"Salvia",
        price: 22000,
        img: "../public/img/imgCategories/polinizadorasCategory/salvia1.webp",
        img2: "../public/img/imgCategories/polinizadorasCategory/salvia1.webp",
        img3: "../public/img/imgCategories/polinizadorasCategory/salvia2.png",
        img4: "../public/img/imgCategories/polinizadorasCategory/salvia3.webp",
        img5: "../public/img/imgCategories/polinizadorasCategory/salvia4.webp",
        description: "Planta con flores coloridas que atraen mariposas.",
        cantidad: 1,
    },
    {
        id: 5,
        name: "Margarita",
        price: 15000,
        img: "../public/img/imgCategories/polinizadorasCategory/margarita1.webp",
        img2: "../public/img/imgCategories/polinizadorasCategory/margarita1.webp",
        img3: "../public/img/imgCategories/polinizadorasCategory/margarita2.webp",
        img4: "../public/img/imgCategories/polinizadorasCategory/margarita3.webp",
        img5: "../public/img/imgCategories/polinizadorasCategory/margarita4.webp",
        description: "Planta con flores blancas y centro amarillo que atraen abejas.",
        cantidad: 1,
    },
    {
        id: 6,
        name: "Buganvilla",
        price: 30000,
        img: "../public/img/imgCategories/polinizadorasCategory/buganvilla1.webp",
        img2: "../public/img/imgCategories/polinizadorasCategory/buganvilla1.webp",
        img3: "../public/img/imgCategories/polinizadorasCategory/buganvilla2.webp",
        img4: "../public/img/imgCategories/polinizadorasCategory/buganvilla3.webp",
        img5: "../public/img/imgCategories/polinizadorasCategory/buganvilla4.webp",
        description: "Planta trepadora con flores brillantes que atraen colibríes.",
        cantidad: 1,
    },
    {
        id:7,
        name:"Hortensia",
        price: 28000,
        img:  "../public/img/imgCategories/polinizadorasCategory/hortensia1.webp",
        img2:  "../public/img/imgCategories/polinizadorasCategory/hortensia1.webp",
        img3:  "../public/img/imgCategories/polinizadorasCategory/hortensia2.webp",
        img4:  "../public/img/imgCategories/polinizadorasCategory/hortensia3.webp",
        img5:  "../public/img/imgCategories/polinizadorasCategory/hortensia4.webp",
        description: "Planta con grandes racimos de flores que atraen abejas.",
        cantidad: 1,
    },
    {
        id:8,
        name:"Manzanilla",
        price: 15000,
        img:  "../public/img/imgCategories/polinizadorasCategory/manzanilla1.webp",
        img2:  "../public/img/imgCategories/polinizadorasCategory/manzanilla1.webp",
        img3:  "../public/img/imgCategories/polinizadorasCategory/manzanilla2.webp",
        img4:  "../public/img/imgCategories/polinizadorasCategory/manzanilla3.webp",
        img5:  "../public/img/imgCategories/polinizadorasCategory/manzanilla4.webp",
        description: "Planta con flores blancas usada para infusiones relajantes y que atraen abejas.",
        cantidad: 1,
    },
    {   
        id: 9,
        name: "Geranio",
        price: 35000,
        img:"../public/img/imgCategories/exteriorCategory/geranio1.webp",
        img2:"../public/img/imgCategories/exteriorCategory/geranio1.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/geranio2.webp",
        img4:"../public/img/imgCategories/exteriorCategory/geranio3.webp",
        img5: "../public/img/imgCategories/exteriorCategory/geranio4.webp",
        description: "Planta de flores coloridas y duraderas.",
        cantidad: 1,
     
    }, 
    {   
        id: 10,
        name:"Jazmín",
        price: 50000,
        img:"../public/img/imgCategories/exteriorCategory/jazmín1.webp",
        img2:"../public/img/imgCategories/exteriorCategory/jazmín1.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/jazmín2.webp",
        img4:"../public/img/imgCategories/exteriorCategory/jazmín3.webp",
        img5: "../public/img/imgCategories/exteriorCategory/jazmín4.webp",
        description: "Planta trepadora con flores fragantes.",
        cantidad: 1,
    }
]

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


let poliCategoryHTML = '';

products.forEach((product) => {
    poliCategoryHTML += `
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

poliCategory.innerHTML = poliCategoryHTML;

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
