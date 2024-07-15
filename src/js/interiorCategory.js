//Lista productos categoria interiores

let products = [ 
    {
      id: 1,
      name: "Crisantemo",
      price: 60000,
      img:"../public/img/imgCategories/interiorCategory/crisantemo1.webp",
      img2:"../public/img/imgCategories/interiorCategory/crisantemo2.webp", 
      img3: "../public/img/imgCategories/interiorCategory/crisantemo3.webp",
      img4:"../public/img/imgCategories/interiorCategory/crisantemo4.webp",
      img5: "../public/img/imgCategories/interiorCategory/crisantemo1.webp",
      description: "PLanta con flores variadas."
    },
    {
      id: 2,
      name:"Helecho Boston",
      price: 50000,
      img:"../public/img/imgCategories/interiorCategory/helechoBoston1.webp",
      img2:"../public/img/imgCategories/interiorCategory/helechoBoston1.webp", 
      img3: "../public/img/imgCategories/interiorCategory/helechoBoston2.jpeg",
      img4:"../public/img/imgCategories/interiorCategory/helechoBoston3.webp",
      img5: "../public/img/imgCategories/interiorCategory/helechoBoston4.webp",
      description: "Planta de follaje verde y frondoso."
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
        description: "Planta con hojas verdes y flores blancas."
    },
    {
        id: 4,
        name:"Sansevieria",
        price: 45000,
        img:"../public/img/imgCategories/interiorCategory/sansevieria1.webp",
        img2:"../public/img/imgCategories/interiorCategory/sansevieria2.webp", 
        img3: "../public/img/imgCategories/interiorCategory/sansevieria3.webp",
        img4:"../public/img/imgCategories/interiorCategory/sansevieria4.webp",
        img5: "../public/img/imgCategories/interiorCategory/sansevieria1.webp",
        description: "Planta resistente que purfica el aire."
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
        description: "Planta con hojas largas y elegantes."
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
        description: "Planta colgante facil de cuidar y decorativa."
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
        description: "Arbol de hojas grandes y brillantes."
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
        description: "Planta colgante con hojas rayadas."
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
        description: "Planta con hojas grandes y perforadas."
    }, 
    {   
        id:10,
        name: "Pilea peperomioides",
        price: 60000,
        img:"../public/img/imgCategories/interiorCategory/pileaPeperomioides1.webp",
        img2:"../public/img/imgCategories/interiorCategory/pileaPeperomioides2.webp", 
        img3: "../public/img/imgCategories/interiorCategory/pileaPeperomioides3.webp",
        img4:"../public/img/imgCategories/interiorCategory/pileaPeperomioides4.webp",
        img5: "../public/img/imgCategories/interiorCategory/pileaPeperomioides1.webp",
        description: "Planta de aspecto unico con hojas redondas." 
    }
]

const container = document.getElementById('intCategory');
let intCategoryHTML = '';

for (let i = 0; i < products.length; i++) {
    intCategoryHTML += `
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

container.innerHTML = intCategoryHTML;

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
    

