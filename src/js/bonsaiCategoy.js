const bonCategory = document.getElementById("bonCategory");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

//Lista productos categoria plantas bonsai
let products = [ 
    {
      id: 1,
      name: "Bonsái de Pino ",
      price: 150000,
      img: "../public/img/imgCategories/bonsaiCategory/bonsaiPino.webp",
      img2:"../public/img/imgCategories/bonsaiCategory/bonsaiPino.webp", 
      img3: "../public/img/imgCategories/bonsaiCategory/hojaBonsaiPino.webp",
      img4:"../public/img/imgCategories/bonsaiCategory/escritorioBonsaiPino.webp",
      img5: "../public/img/imgCategories/bonsaiCategory/arribaBonsaiPino.webp",
      description: "Pequeño árbol de pino cultivado en maceta.",
      cantidad: 1,
    },
    {
      id: 2,
      name:"Bonsái de Arce Japonés",
      price: 200000,
      img: "../public/img/imgCategories/bonsaiCategory/bonsaiJapones.webp",
      img2:"../public/img/imgCategories/bonsaiCategory/bonsaiJapones.webp", 
      img3: "../public/img/imgCategories/bonsaiCategory/hojabonsaiJapones.webp",
      img4:"../public/img/imgCategories/bonsaiCategory/arribaBonsaiJapones.webp",
      img5: "../public/img/imgCategories/bonsaiCategory/escritorioBonsaiJapones.webp",
      description: "Árbol de arce con hojas rojas cultivado en maceta.",
      cantidad: 1,
    },
    {
        id: 3,
        name:"Bonsái de Ficus",
        price:130000,
        img:"../public/img/imgCategories/bonsaiCategory/bonsaiFicus.webp",
        img2:"../public/img/imgCategories/bonsaiCategory/bonsaiFicus.webp", 
        img3: "../public/img/imgCategories/bonsaiCategory/hojabonsaiFicus.webp",
        img4:"../public/img/imgCategories/bonsaiCategory/escritoriobonsaiFicus.webp",
        img5: "../public/img/imgCategories/bonsaiCategory/bonsaiFicus.webp",
        description: "Planta aromática utilizada para problemas digestivos.",
        cantidad: 1,
    },
    {
        id: 4,
        name:"Bonsái de Olmo Chino",
        price: 170000,
        img:"../public/img/imgCategories/bonsaiCategory/bonsaiOlmoChino.webp",
        img2:"../public/img/imgCategories/bonsaiCategory/bonsaiOlmoChino.webp", 
        img3: "../public/img/imgCategories/bonsaiCategory/hojasbonsaiOlmoChino.webp",
        img4:"../public/img/imgCategories/bonsaiCategory/escritorioBosaiOlmoChino.webp",
        img5: "../public/img/imgCategories/bonsaiCategory/bonsaiFicus.webp",
        description: "Planta aromática con propiedades antiinflamatorias.",
        cantidad: 1,
    },
    {
        id: 5,
        name: "Bonsái de Junípero",
        price: 140000,
        img:"../public/img/imgCategories/bonsaiCategory/bonsaiJunipero.webp",
        img2:"../public/img/imgCategories/bonsaiCategory/bonsaiJunipero.webp", 
        img3: "../public/img/imgCategories/bonsaiCategory/hojabonsaiJunipero.webp",
        img4:"../public/img/imgCategories/bonsaiCategory/escritorioBonsaiJunipero.webp",
        img5: "../public/img/imgCategories/bonsaiCategory/arribaBonsaiJunipero.webp",
        description: "Árbol de junípero en miniatura.",
        cantidad: 1,
    },
    {
        id: 6,
        name: "Bonsái de Azalea",
        price: 180000,
        img:"../public/img/imgCategories/bonsaiCategory/bonsaiAzaela.webp",
        img2:"../public/img/imgCategories/bonsaiCategory/bonsaiAzaela.webp", 
        img3: "../public/img/imgCategories/bonsaiCategory/hojaBonsaiAzalea.webp",
        img4:"../public/img/imgCategories/bonsaiCategory/arribaBonsaiAzalea.webp",
        img5: "../public/img/imgCategories/bonsaiCategory/escritorioBonsaiAzalea.webp",
        description: "Árbol de azalea con flores cultivado en maceta.",
        cantidad: 1,
    },
    {
        id:7,
        name:"Bonsái de Ciprés",
        price: 160000,
        img:"../public/img/imgCategories/bonsaiCategory/bonsaiCipres.webp",
        img2:"../public/img/imgCategories/bonsaiCategory/bonsaiCipres.webp", 
        img3: "../public/img/imgCategories/bonsaiCategory/hojabonsaiCipres.webp",
        img4:"../public/img/imgCategories/bonsaiCategory/arribaBonsaiCipres.webp",
        img5: "../public/img/imgCategories/bonsaiCategory/escritorioBonsaiCipres.webp",
        description: "Pequeño árbol de ciprés cultivado en maceta.",
        cantidad: 1,
    },
    {
        id:8,
        name:"Bonsái de Granado",
        price: 190000,
        img:"../public/img/imgCategories/bonsaiCategory/bonsaiGranado.webp",
        img2:"../public/img/imgCategories/bonsaiCategory/bonsaiGranado.webp", 
        img3: "../public/img/imgCategories/bonsaiCategory/hojaBonsaiGranado.JPG",
        img4:"../public/img/imgCategories/bonsaiCategory/arribaBonsaiGranado.webp",
        img5: "../public/img/imgCategories/bonsaiCategory/escritorioBonsaiGranado.webp",
        description: "Árbol de granado en miniatura.",
        cantidad: 1,
    },
    {   
        id:9,
        name:"Bonsái de Cerezo",
        price:210000,
        img:"../public/img/imgCategories/bonsaiCategory/bonsaiCerezo.webp",
        img2:"../public/img/imgCategories/bonsaiCategory/bonsaiCerezo.webp", 
        img3: "../public/img/imgCategories/bonsaiCategory/hojaBonsaiAzalea.webp",
        img4:"../public/img/imgCategories/bonsaiCategory/arribaBonsaiCerezo.webp",
        img5: "../public/img/imgCategories/bonsaiCategory/escritorioBonsaiAzalea.webp",
        description: "Árbol de cerezo con flores cultivado en maceta.",
        cantidad: 1,
    }, 
    {   
        id:10,
        name: "Bonsái de Ginkgo",
        price: 220000,
        img:"../public/img/imgCategories/bonsaiCategory/bonsaiGinkgo.webp",
        img2:"../public/img/imgCategories/bonsaiCategory/bonsaiGinkgo.webp", 
        img3: "../public/img/imgCategories/bonsaiCategory/escritorioBonsaiGinkgo.webp",
        img4:"../public/img/imgCategories/bonsaiCategory/arribaBonsaiGinkgo.webp",
        img5: "../public/img/imgCategories/bonsaiCategory/hojaBonsaiGinkgo.webp",
        description: "Árbol de ginkgo biloba cultivado en forma de bonsái.",
        cantidad: 1,
    }
]

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Generar HTML para los productos y agregar al contenedor
let bonCategoryHTML = '';

products.forEach((product) => {
    bonCategoryHTML += `
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

bonCategory.innerHTML = bonCategoryHTML;

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
