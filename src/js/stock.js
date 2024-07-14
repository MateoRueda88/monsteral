
document.addEventListener("DOMContentLoaded", function() {
    const plantsContainer = document.getElementById("plants");
    const cartContainer = document.getElementById("cart-items");
    const emptyCartButton = document.getElementById("empty-cart");
    const cartQuantity = document.querySelector(".quantity");
    const cartTotal = document.getElementById("cart-total");
    const showCartButton = document.getElementById("verCarrito");
    const closeCartButton = document.getElementById("close-cart");

//Lista productos
 let products = [ 
    {
      id: 1,
      name: "Suculenta",
      price: 20000,
      img: "../public/img/plantsImg/suculenta.webp",
      description: "Las suculentas son plantas con hojas, tallos o raíces engrosados que almacenan agua. Son resistentes a la sequía, tienen formas variadas y son populares por su fácil cuidado y atractiva apariencia."
    },
    {
      id: 2,
      name:"Margarita",
      price: 14000,
      img: "../public/img/plantsImg/margarita.webp",
      description: "La margarita es una planta perenne con flores blancas y un centro amarillo. Simboliza pureza e inocencia, crece en diversos climas y es conocida por su belleza simple y facilidad de cultivo."
    },
    {
        id: 3,
        name:"Pino de agujas",
        price:32000,
        img:"../public/img/plantsImg/pinoDeAgujas.webp",
        description: "El pino de agujas es un árbol perenne con hojas delgadas y aciculares. Conocido por su durabilidad y altura, es común en climas templados y fríos, y se utiliza en la industria maderera y decorativa."
    },
    {
        id: 4,
        name:"Aspidistra",
        price: 25000,
        img: "../public/img/plantsImg/aspidistra.webp",
        description: "Ideal para entornos con poca luz, no requiere de muchos cuidados. Toma en cuenta si hace mucha calor dale abundante agua."
    },
    {
        id: 5,
        name: "Planta del dinero",
        price: 32000,
        img: "../public/img/plantsImg/plantaDelDinero.webp",
        description: "Se dice que si cuidas esta planta y se mantiene sana, nunca faltara dinero en tu casa. Para ello, debes darle agua una vez a la semana y evitar que esten expuestas de manera directa al sol, y agregale fertilizante cada 15 días."
    },
    {
        id: 6,
        name: "El Caballero de la Noche",
        price: 45000,
        img: "../public/img/plantsImg/caballeroDeLaNoche.webp",
        description: "Es un arbusto tropical con flores blancas verdosas que emiten una fragancia intensa y dulce por la noche. Es conocido por su perfume nocturno y hojas perennes."
    },
    {
        id:7,
        name:"Monstera obliqua",
        price: 15000,
        img: "../public/img/plantsImg/monstera.webp",
        description: "Originaria de pero iene alta demanda hidrica y necesita menor luz."
    },
    {
        id:8,
        name:"Monstera adasonii",
        price: 18000,
        img: "../public/img/plantsImg/monsteraAdansonii.webp",
        description: "Es trepadora y tiene en las hojas muchos agujeros de tamaño mediano y forma redondeada."
    },
    {   
        id:9,
        name:"Venus Atrapa Moscas",
        price:50000,
        img:"../public/img/plantsImg/venusAtrapaMoscas.webp",
        description: "La Venus atrapamoscas es una planta carnívora con trampas de hojas dentadas que se cierran rápidamente al contacto. Captura insectos para suplir nutrientes en suelos pobres. Es nativa de Carolina del Norte y del Sur, EE. UU."
    }, 
    {   
        id:10,
        name: "Gardenia",
        price: 48000,
        img:"../public/img/plantsImg/gardenia.webp",
        description: "Es un arbusto de hojas perennes con flores blancas, fragantes y cerosas. Es popular en jardines y arreglos florales por su aroma dulce y belleza elegante." 
    }
];
 
let carrito = [];

 // Función para actualizar la visualización del carrito
 function updateCartDisplay() {
    cartContainer.innerHTML = '';

      // Crear la fila de encabezado del carrito
      const headerRow = document.createElement("li");
    headerRow.innerHTML = `
        <span>Imagen</span>
        <span>Nombre</span>
        <span>Precio</span>
        <span>Cantidad</span>
    `;
    cartContainer.appendChild(headerRow);

      // Mostrar los productos en el carrito
      carrito.forEach(product => {
        let cartItem = document.createElement("li");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <span><img src="${product.img}" alt="${product.name}" class="cart-item-img"></span>
            <span>${product.name}</span>
            <span>$${product.price.toFixed(2)}</span>
            <span>${product.quantity}</span>
        `;
        cartContainer.appendChild(cartItem);
    });

     // Actualizar la cantidad total en el carrito
     cartQuantity.innerText = carrito.reduce((total, item) => total + item.quantity, 0);
     
     // Actualizar el total del carrito
     cartTotal.innerText = `Total: $${carrito.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}`;
}

  // Función para agregar un producto al carrito
  function addToCart(product) {
    console.log('Agregando al carrito:', product);
    let existingItem = carrito.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        carrito.push({
            id: product.id,
            img: product.img,
            name: product.name,
            price: product.price,
            quantity: 1
        });
        
    }

    console.log('Carrito actualizado:', carrito); 

     // Actualizar la visualización del carrito
     updateCartDisplay();
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

 // Crear tarjetas de productos
  function createProductCard(product) {
    let content = document.createElement("div");
    content.classList.add("plant-card");
    content.innerHTML = `
        <img src="${product.img}" alt="${product.name}" class="plantImg">
        <h2>${product.name}</h2>
        <p>Precio: $${product.price}</p>
        <button class="add-to-cart">🪴 Agregar 🛒</button>
    `;
    plantsContainer.appendChild(content);

     // Añadir evento para agregar al carrito
     content.querySelector('.add-to-cart').addEventListener('click', () => {
        addToCart(product);
    });
}

    // Crear tarjetas de productos
    products.forEach(createProductCard);

 // Event listener para vaciar el carrito
 emptyCartButton.addEventListener('click', () => {
    carrito = [];
    updateCartDisplay();
    localStorage.removeItem('carrito');
});

 // Event listener para mostrar/ocultar el carrito
 showCartButton.addEventListener('click', () => {
    document.querySelector('.buy-card').classList.toggle('show');
});

closeCartButton.addEventListener('click', () => {
    document.querySelector('.buy-card').classList.remove('show');
});

let savedCart = localStorage.getItem('carrito');
if (savedCart) {
    carrito = JSON.parse(savedCart);
    updateCartDisplay();
}
});