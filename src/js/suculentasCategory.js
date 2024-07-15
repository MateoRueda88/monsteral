const sucuCategory = document.getElementById("sucuCategory");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

//Lista productos categoria plantas suculentas

let products = [ 
    {
      id: 1,
      name: "Echeveria",
      price: 15000,
      img:"../public/img/imgCategories/suculentasCategory/echeveria.webp",
      img2:"../public/img/imgCategories/suculentasCategory/echeveria.webp", 
      img3: "../public/img/imgCategories/suculentasCategory/todaEcheveria.JPG",
      img4:"../public/img/imgCategories/suculentasCategory/usoEcheveria.jpg",
      img5: "../public/img/imgCategories/suculentasCategory/arribaEcheveria.webp",
      description: "Planta suculenta con hojas carnosas en forma de roseta.",
      cantidad: 1,
    },
    {
      id: 2,
      name:"Sedum",
      price: 12000,
      img:"../public/img/imgCategories/suculentasCategory/sedum.webp",
      img2:"../public/img/imgCategories/suculentasCategory/sedum.webp", 
      img3: "../public/img/imgCategories/suculentasCategory/arribaSedum.webp",
      img4:"../public/img/imgCategories/suculentasCategory/generalSedum.webp",
      img5: "../public/img/imgCategories/suculentasCategory/usoSedum.webp",
      description: "Planta suculenta con pequeñas hojas sedum.",
      cantidad: 1,
    },
    {
        id: 3,
        name:"Aloe Vera",
        price:25000,
        img:"../public/img/imgCategories/suculentasCategory/aloeVera.webp",
        img2:"../public/img/imgCategories/suculentasCategory/aloeVera.webp", 
        img3: "../public/img/imgCategories/suculentasCategory/aloeVera4.webp",
        img4:"../public/img/imgCategories/suculentasCategory/aloeVera3.webp",
        img5: "../public/img/imgCategories/suculentasCategory/aloeVera2.webp",
        description: "Planta suculenta utilizada para tratar quemaduras y heridas.",
        cantidad: 1,
    },
    {
        id: 4,
        name:"Haworthia",
        price: 18000,
        img:"../public/img/imgCategories/suculentasCategory/haworthia.webp",
        img2:"../public/img/imgCategories/suculentasCategory/haworthia.webp", 
        img3: "../public/img/imgCategories/suculentasCategory/haworthia2.webp",
        img4:"../public/img/imgCategories/suculentasCategory/haworthia3.webp",
        img5: "../public/img/imgCategories/suculentasCategory/haworthia4.webp",
        description: "Planta suculenta con hojas verdes y puntiagudas.",
        cantidad: 1,
    },
    {
        id: 5,
        name: "Crassula",
        price: 20000,
        img:"../public/img/imgCategories/suculentasCategory/crassula.webp",
        img2:"../public/img/imgCategories/suculentasCategory/crassula2.webp", 
        img3: "../public/img/imgCategories/suculentasCategory/crassula3.webp",
        img4:"../public/img/imgCategories/suculentasCategory/crassula4.webp",
        img5: "../public/img/imgCategories/suculentasCategory/crassula.webp",
        description: "Planta suculenta con hojas gruesas y brillantes.",
        cantidad: 1,
    },
    {
        id: 6,
        name: "Kalanchoe",
        price: 22000,
        img:"../public/img/imgCategories/suculentasCategory/kalanchoe.webp",
        img2:"../public/img/imgCategories/suculentasCategory/kalanchoe.webp", 
        img3: "../public/img/imgCategories/suculentasCategory/kalanchoe2.webp",
        img4:"../public/img/imgCategories/suculentasCategory/kalanchoe3.webp",
        img5: "../public/img/imgCategories/suculentasCategory/kalanchoe4.webp",
        description: "Planta suculenta con flores pequeñas y coloridas.",
        cantidad: 1,
    },
    {
        id:7,
        name:"Graptopetalum",
        price: 17000,
        img:"../public/img/imgCategories/suculentasCategory/graptopetalum.webp",
        img2:"../public/img/imgCategories/suculentasCategory/graptopetalum.webp", 
        img3: "../public/img/imgCategories/suculentasCategory/graptopetalum3.webp",
        img4:"../public/img/imgCategories/suculentasCategory/graptopetalum4.webp",
        img5: "../public/img/imgCategories/suculentasCategory/graptopetalum2.webp",
        description: "Planta suculenta con hojas en forma de estrella.",
        cantidad: 1,
    },
    {
        id:8,
        name:"Agave",
        price: 30000,
        img:"../public/img/imgCategories/suculentasCategory/agave.webp",
        img2:"../public/img/imgCategories/suculentasCategory/agave.webp", 
        img3: "../public/img/imgCategories/suculentasCategory/agave2.webp",
        img4:"../public/img/imgCategories/suculentasCategory/agave3.webp",
        img5: "../public/img/imgCategories/suculentasCategory/agave4.webp",
        description: "Planta suculenta con hojas largas y puntiagudas.",
        cantidad: 1,
    },
    {   
        id:9,
        name:"Sempervivum",
        price:16000,
        img:"../public/img/imgCategories/suculentasCategory/sempervivum1.webp",
        img2:"../public/img/imgCategories/suculentasCategory/sempervivum1.webp", 
        img3: "../public/img/imgCategories/suculentasCategory/sempervivum3.webp",
        img4:"../public/img/imgCategories/suculentasCategory/sempervivum2.webp",
        img5: "../public/img/imgCategories/suculentasCategory/sempervivum1.webp",
        description: "Planta suculenta con rosetas de hojas compactas.",
        cantidad: 1,
    }, 
    {   
        id:10,
        name: "Pachyphytum",
        price: 19000,
        img:"../public/img/imgCategories/suculentasCategory/pachyphytum.webp",
        img2:"../public/img/imgCategories/suculentasCategory/pachyphytum.webp", 
        img3: "../public/img/imgCategories/suculentasCategory/pachyphytum3.webp",
        img4:"../public/img/imgCategories/suculentasCategory/pachyphytum4.webp",
        img5: "../public/img/imgCategories/suculentasCategory/pachyphytum2.webp",
        description: "Planta suculenta con hojas gruesas y redondeada.",
        cantidad: 1,
    }
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let sucuCategoryHTML = '';

products.forEach((product) => {
    sucuCategoryHTML += `
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

sucuCategory.innerHTML = sucuCategoryHTML;

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