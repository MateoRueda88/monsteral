const pintarCarrito = () =>{

    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
     `; 
     modalContainer.append(modalHeader);

     const modalbutton = document.createElement("h1");
     modalbutton.innerText = "X";
     modalbutton.className = "modal-header-button";
     modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
     });

     modalHeader.append(modalbutton);
     
    carrito.forEach((product) =>{
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${product.img}" class="imgCar" class="imgCarTablet" class="imgCarMovile">
        <h3 class="subTitleCar">${product.name}</h3>
        <p class="subTitleCar">$${product.price}</p> 
        <span class="restar">-</span>
        <p class="subTitleCar">Cantidad:${product.cantidad}</p> 
        <span class="sumar">+</span>
        <p class="subTitleCar">Total:${product.cantidad * product.price}</p> 
        `; 
        modalContainer.append(carritoContent);

        let restar = carritoContent.querySelector(".restar")
        restar.addEventListener("click", () =>{
            if(product.cantidad !== 1){
                product.cantidad--;
            }
            saveLocal();
            pintarCarrito();
        });

        let sumar = carritoContent.querySelector(".sumar")
        sumar.addEventListener("click", () =>{
            product.cantidad++;
            saveLocal();
            pintarCarrito();
        });

        let eliminar = document.createElement("span");
        eliminar.innerText = "X";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    });


    //acc: acomulador, inicia en cero y el: cada uno de los productos 
    const total = carrito.reduce((acc, el) => acc + el.price * el.cantidad, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a pagar: $${total}`; 
    modalContainer.append(totalBuying);
    
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () =>{
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCounter();
    saveLocal();
    pintarCarrito();
    };

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();