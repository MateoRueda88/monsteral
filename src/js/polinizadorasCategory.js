//Lista productos categoria plantas polinizadoras

let products = [ 

    {
        id: 1,
        name: "Lavanda",
        price: 20000,
        img: "../public/img/imgCategories/polinizadorasCategory/lavanda1.webp",
        img2: "../public/img/imgCategories/polinizadorasCategory/lavanda1.webp",
        img3: "../public/img/imgCategories/polinizadorasCategory/lavanda2.webp",
        img4: "../public/img/imgCategories/polinizadorasCategory/lavanda3.webp",
        img5: "../public/img/imgCategories/polinizadorasCategory/lavanda4.webp",
        description: "Planta aromática con flores púrpuras que atraen polinizadores."
      },
    {
      id: 2,
      name:"Girasol",
      price: 18000,
      img: "../public/img/imgCategories/polinizadorasCategory/girasol1.webp",
      img2: "../public/img/imgCategories/polinizadorasCategory/girasol1.webp",
      img3:"../public/img/imgCategories/polinizadorasCategory/girasol2.webp",
      img4: "../public/img/imgCategories/polinizadorasCategory/girasol3.webp",
      img5: "../public/img/imgCategories/polinizadorasCategory/girasol4.webp",
      description: "Planta alta con flores amarillas grandes que atraen abejas."
    },
    {
        id: 3,
        name:"Rosa",
        price:25000,
        img:"../public/img/imgCategories/polinizadorasCategory/rosa1.webp",
        img2:"../public/img/imgCategories/polinizadorasCategory/rosa1.webp",
        img3:"../public/img/imgCategories/polinizadorasCategory/rosa2.webp",
        img4:"../public/img/imgCategories/polinizadorasCategory/rosa3.webp",
        img5:"../public/img/imgCategories/polinizadorasCategory/rosa4.webp",
        description: "Planta de flores hermosas y fragantes que atraen abejas."
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
        description: "Planta con flores coloridas que atraen mariposas."
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
        description: "Planta con flores blancas y centro amarillo que atraen abejas."
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
        description: "Planta trepadora con flores brillantes que atraen colibríes."
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
        description: "Planta con grandes racimos de flores que atraen abejas."
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
        description: "Planta con flores blancas usada para infusiones relajantes y que atraen abejas."
    },
    {   
        id:9,
        name:"Geranio",
        price:17000,
        img:"../public/img/imgCategories/polinizadorasCategory/geranio1.webp",
        img2:  "../public/img/imgCategories/polinizadorasCategory/geranio1.webp",
        img3:  "../public/img/imgCategories/polinizadorasCategory/geranio2.webp",
        img4:  "../public/img/imgCategories/polinizadorasCategory/geranio3.webp",
        img5:  "../public/img/imgCategories/polinizadorasCategory/geranio4.webp",
        description: "Planta de flores coloridas y duraderas que atraen abejas."
    }, 
    {   
        id:10,
        name: "Jazmín",
        price: 22000,
        img:"../public/img/imgCategories/polinizadorasCategory/jazmin1.webp",
        img2:  "../public/img/imgCategories/polinizadorasCategory/jazmin1.webp",
        img3:  "../public/img/imgCategories/polinizadorasCategory/jazmin2.webp",
        img4:  "../public/img/imgCategories/polinizadorasCategory/jazmin3.webp",
        img5:  "../public/img/imgCategories/polinizadorasCategory/jazmin4.webp",
        description: "Planta trepadora con flores fragantes que atraen mariposas." 
    }
]

const container = document.getElementById('poliCategory');
let poliCategoryHTML = '';

for (let i = 0; i < products.length; i++) {
    poliCategoryHTML += `
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

container.innerHTML = poliCategoryHTML;

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