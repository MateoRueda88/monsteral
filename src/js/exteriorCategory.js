//Lista productos categoria plantas exteriores

let products = [ 
    {
      id: 1,
      name: "Rosa",
      price: 45000,
      img:"../public/img/imgCategories/exteriorCategory/rosa.webp",
      img2:"../public/img/imgCategories/exteriorCategory/rosa.webp", 
      img3: "../public/img/imgCategories/exteriorCategory/rosa.JPG",
      img4:"../public/img/imgCategories/exteriorCategory/rosa.webp",
      img5: "../public/img/imgCategories/exteriorCategory/rosa.webp",
      description: "Planta de flores hermosas y fragantes."
    },
    {
      id: 2,
      name:"Hortensia",
      price: 60000,
      img:"../public/img/imgCategories/exteriorCategory/hortensia.webp",
      img2:"../public/img/imgCategories/exteriorCategory/hortensia.webp", 
      img3: "../public/img/imgCategories/exteriorCategory/hortensia.JPG",
      img4:"../public/img/imgCategories/exteriorCategory/hortensia.webp",
      img5: "../public/img/imgCategories/exteriorCategory/hortensia.webp",
      description: "Planta con grandes racimos de flores."
    },
    {
        id: 3,
        name:"Lavanda",
        price:30000,
        img:"../public/img/imgCategories/exteriorCategory/lavanda.webp",
        img2:"../public/img/imgCategories/exteriorCategory/lavanda.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/lavanda.JPG",
        img4:"../public/img/imgCategories/exteriorCategory/lavanda.webp",
        img5: "../public/img/imgCategories/exteriorCategory/lavanda.webp",
        description: "Planta aromartica con flores purpuras."
    },
    {
        id: 4,
        name:"Jazmín",
        price: 50000,
        img:"../public/img/imgCategories/exteriorCategory/jazmín.webp",
        img2:"../public/img/imgCategories/exteriorCategory/jazmín.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/jazmín.JPG",
        img4:"../public/img/imgCategories/exteriorCategory/jazmín.webp",
        img5: "../public/img/imgCategories/exteriorCategory/jazmín.webp",
        description: "Planta trepadora con flores fragantes."
    },
    {
        id: 5,
        name: "Geranio",
        price: 35000,
        img:"../public/img/imgCategories/exteriorCategory/geranio.webp",
        img2:"../public/img/imgCategories/exteriorCategory/geranio.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/geranio.JPG",
        img4:"../public/img/imgCategories/exteriorCategory/geranio.webp",
        img5: "../public/img/imgCategories/exteriorCategory/geranio.webp",
        description: "Planta de flores coloridas y duraderas."
    },
    {
        id: 6,
        name: "Buganvilla",
        price: 55000,
        img:"../public/img/imgCategories/exteriorCategory/buganvilla.webp",
        img2:"../public/img/imgCategories/exteriorCategory/buganvilla.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/buganvilla.JPG",
        img4:"../public/img/imgCategories/exteriorCategory/buganvilla.webp",
        img5: "../public/img/imgCategories/exteriorCategory/buganvilla.webp",
        description: "Planta trepadora con flores brillantes."
    },
    {
        id:7,
        name:"Girasol",
        price: 20000,
        img:"../public/img/imgCategories/exteriorCategory/girasol.webp",
        img2:"../public/img/imgCategories/exteriorCategory/girasol.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/girasol.JPG",
        img4:"../public/img/imgCategories/exteriorCategory/girasol.webp",
        img5: "../public/img/imgCategories/exteriorCategory/girasol.webp",
        description: "Planta alta con flores amarillas grandes."
    },
    {
        id:8,
        name:"Margarita",
        price: 25000,
        img:"../public/img/imgCategories/exteriorCategory/margarita.webp",
        img2:"../public/img/imgCategories/exteriorCategory/margarita.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/margarita.JPG",
        img4:"../public/img/imgCategories/exteriorCategory/margarita.webp",
        img5: "../public/img/imgCategories/exteriorCategory/margarita.webp",
        description: "Planta con flores blancas y centro amarillo."
    },
    {   
        id:9,
        name:"Crisantemo",
        price:40000,
        img:"../public/img/imgCategories/exteriorCategory/crisantemo.webp",
        img2:"../public/img/imgCategories/exteriorCategory/crisantemo.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/crisantemo.JPG",
        img4:"../public/img/imgCategories/exteriorCategory/crisantemo.webp",
        img5: "../public/img/imgCategories/exteriorCategory/crisantemo.webp",
        description: "Planta con una gran variedad de flores."
    }, 
    {   
        id:10,
        name: "Azalea",
        price: 45000,
        img:"../public/img/imgCategories/exteriorCategory/azalea.webp",
        img2:"../public/img/imgCategories/exteriorCategory/azalea.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/azalea.JPG",
        img4:"../public/img/imgCategories/exteriorCategory/azalea.webp",
        img5: "../public/img/imgCategories/exteriorCategory/azalea.webp",
        description: "Planta de arbusto con flores brillantes." 
    }
]

const container = document.getElementById('extCategory');
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
