//Lista productos categoria interiores

let products = [ 
    {
      id: 1,
      name: "Crisantemo",
      price: 60000,
      img:"../public/img/imgCategories/interiorCategory/crisantemo/1.webp",
      img2:"../public/img/imgCategories/interiorCategory/crisantemo/2.webp", 
      img3: "../public/img/imgCategories/interiorCategory/crisantemo/3.webp",
      img4:"../public/img/imgCategories/interiorCategory/crisantemo/4.webp",
      img5: "../public/img/imgCategories/interiorCategory/crisantemo/5.webp",
      description: "PLanta con flores variadas."
    },
    {
      id: 2,
      name:"Helecho Boston",
      price: 50000,
      img: "../public/img/imgCategories/purifyingCategory/Helecho/1.webp",
    img2:"../public/img/imgCategories/purifyingCategory/Helecho/5.webp", 
    img3: "../public/img/imgCategories/purifyingCategory/Helecho/2.webp",
    img4:"../public/img/imgCategories/purifyingCategory/Helecho/3.webp",
    img5: "../public/img/imgCategories/purifyingCategory/Helecho/4.webp",
      description: "Planta de follaje verde y frondoso."
    },
    {
        id: 3,
        name:"Espatifilo",
        price:70000,
        img:"../public/img/imgCategories/interiorCategory/espatifilo.webp",
        img2:"../public/img/imgCategories/interiorCategory/espatifilo.webp", 
        img3: "../public/img/imgCategories/interiorCategory/espatifilo.JPG",
        img4:"../public/img/imgCategories/interiorCategory/espatifilo.webp",
        img5: "../public/img/imgCategories/interiorCategory/espatifilo.webp",
        description: "Planta con hojas verdes y flores blancas."
    },
    {
        id: 4,
        name:"Sansevieria",
        price: 45000,
        img:"../public/img/imgCategories/interiorCategory/sansevieria.webp",
        img2:"../public/img/imgCategories/interiorCategory/sansevieria.webp", 
        img3: "../public/img/imgCategories/interiorCategory/sansevieria.JPG",
        img4:"../public/img/imgCategories/interiorCategory/sansevieria.webp",
        img5: "../public/img/imgCategories/interiorCategory/sansevieria.webp",
        description: "Planta resistente que purfica el aire."
    },
    {
        id: 5,
        name: "Drácena",
        price: 55000,
        img: "../public/img/imgCategories/purifyingCategory/Dracena/1.webp",
        img2:"../public/img/imgCategories/purifyingCategory/Dracena/5.webp", 
        img3: "../public/img/imgCategories/purifyingCategory/Dracena/2.webp",
        img4:"../public/img/imgCategories/purifyingCategory/Dracena/3.webp",
        img5: "../public/img/imgCategories/purifyingCategory/Dracena/4.webp",
        description: "Planta con hojas largas y elegantes."
    },
    {
        id: 6,
        name: "Pothos",
        price: 48000,
        img: "../public/img/imgCategories/purifyingCategory/Pothos/1.webp",
      img2:"../public/img/imgCategories/purifyingCategory/Pothos/5.webp", 
      img3: "../public/img/imgCategories/purifyingCategory/Pothos/2.webp",
      img4:"../public/img/imgCategories/purifyingCategory/Pothos/3.webp",
      img5: "../public/img/imgCategories/purifyingCategory/Pothos/4.webp",
        description: "Planta colgante facil de cuidar y decorativa."
    },
    {
        id:7,
        name:"Ficus lyrata",
        price: 80000,
        img:"../public/img/imgCategories/interiorCategory/ficusLyrata.webp",
        img2:"../public/img/imgCategories/interiorCategory/ficusLyrata.webp", 
        img3: "../public/img/imgCategories/interiorCategory/ficusLyrata.webp",
        img4:"../public/img/imgCategories/interiorCategory/ficusLyrata.webp",
        img5: "../public/img/imgCategories/interiorCategory/ficusLyrata.webp",
        description: "Arbol de hojas grandes y brillantes."
    },
    {
        id:8,
        name:"Cinta",
        price: 40000,
        img:"../public/img/imgCategories/interiorCategory/cinta.webp",
        img2:"../public/img/imgCategories/interiorCategory/cinta.webp", 
        img3: "../public/img/imgCategories/interiorCategory/cinta.webp",
        img4:"../public/img/imgCategories/interiorCategory/cinta.webp",
        img5: "../public/img/imgCategories/interiorCategory/cinta.webp",
        description: "Planta colgante con hojas rayadas."
    },
    {   
        id:9,
        name:"Monstera deliciosa",
        price:75000,
        img:"../public/img/imgCategories/interiorCategory/monsteraDeliciosa.webp",
        img2:"../public/img/imgCategories/interiorCategory/monsteraDeliciosa.webp", 
        img3: "../public/img/imgCategories/interiorCategory/monsteraDeliciosa.webp",
        img4:"../public/img/imgCategories/interiorCategory/monsteraDeliciosa.webp",
        img5: "../public/img/imgCategories/interiorCategory/monsteraDeliciosa.webp",
        description: "Planta con hojas grandes y perforadas."
    }, 
    {   
        id:10,
        name: "Pilea peperomioides",
        price: 60000,
        img:"../public/img/imgCategories/interiorCategory/pileaPeperomioides.webp",
        img2:"../public/img/imgCategories/interiorCategory/pileaPeperomioides.webp", 
        img3: "../public/img/imgCategories/interiorCategory/pileaPeperomioides.webp",
        img4:"../public/img/imgCategories/interiorCategory/pileaPeperomioides.webp",
        img5: "../public/img/imgCategories/interiorCategory/pileaPeperomioides.webp",
        description: "Planta de aspecto unico con hojas redondas." 
    }
]

const container = document.getElementById('intCategory');
let extCategoryHTML = '';

for (let i = 0; i < products.length; i++) {
    extCategoryHTML += `
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

container.innerHTML = extCategoryHTML;

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
    

