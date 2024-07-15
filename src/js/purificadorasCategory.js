//Lista productos categoria plantas purificadoras

let products = [ 
    {
      id: 1,
      name: "Lengua de suegra",
      price: 30000,
      img: "../public/img/imgCategories/purifyingCategory/Lengua de suegra/1.webp",
      img2:"../public/img/imgCategories/purifyingCategory/Lengua de suegra/2.webp", 
      img3: "../public/img/imgCategories/purifyingCategory/Lengua de suegra/3.webp",
      img4:"../public/img/imgCategories/purifyingCategory/Lengua de suegra/4.webp",
      img5: "../public/img/imgCategories/purifyingCategory/Lengua de suegra/5.webp",
      description: "Planta resistente que purifica el aire."
    },
    {
      id: 2,
      name:"Pothos",
      price: 25000,
      img: "../public/img/imgCategories/purifyingCategory/Pothos/1.webp",
      img2:"../public/img/imgCategories/purifyingCategory/Pothos/5.webp", 
      img3: "../public/img/imgCategories/purifyingCategory/Pothos/2.webp",
      img4:"../public/img/imgCategories/purifyingCategory/Pothos/3.webp",
      img5: "../public/img/imgCategories/purifyingCategory/Pothos/4.webp",

      description: "Planta colgante que elimina toxinas del aire."
    },
    {
        id: 3,
        name:"Palma Areca",
        price:40000,
        img:"../public/img/imgCategories/purifyingCategory/Palma areca/1.webp",
        img2:"../public/img/imgCategories/purifyingCategory/Palma areca/5.webp", 
        img3: "../public/img/imgCategories/purifyingCategory/Palma areca/2.webp",
        img4:"../public/img/imgCategories/purifyingCategory/Palma areca/3.webp",
        img5: "../public/img/imgCategories/purifyingCategory/Palma areca/4.webp",
        description: "Planta elegante que mejora la calidad del aire."
    },
    {
        id: 4,
        name:"Helecho de Boston",
        price: 28000,
        img: "../public/img/imgCategories/purifyingCategory/Helecho/1.webp",
        img2:"../public/img/imgCategories/purifyingCategory/Helecho/5.webp", 
        img3: "../public/img/imgCategories/purifyingCategory/Helecho/2.webp",
        img4:"../public/img/imgCategories/purifyingCategory/Helecho/3.webp",
        img5: "../public/img/imgCategories/purifyingCategory/Helecho/4.webp",
        description: "Planta frondosa que purifica el aire."
    },
    {
        id: 5,
        name: "Lirio de paz",
        price: 35000,
        img: "../public/img/imgCategories/purifyingCategory/Lirio de paz/1.webp",
        img2:"../public/img/imgCategories/purifyingCategory/Lirio de paz/5.webp", 
        img3: "../public/img/imgCategories/purifyingCategory/Lirio de paz/2.webp",
        img4:"../public/img/imgCategories/purifyingCategory/Lirio de paz/3.webp",
        img5: "../public/img/imgCategories/purifyingCategory/Lirio de paz/4.webp",
        description: "Planta con flores blancas que limpia el aire."
    },
    {
        id: 6,
        name: "Ficus Elástica",
        price: 42000,
        img: "../public/img/imgCategories/purifyingCategory/Ficus elastica/1.webp",
        img2:"../public/img/imgCategories/purifyingCategory/Ficus elastica/5.webp", 
        img3: "../public/img/imgCategories/purifyingCategory/Ficus elastica/2.webp",
        img4:"../public/img/imgCategories/purifyingCategory/Ficus elastica/3.webp",
        img5: "../public/img/imgCategories/purifyingCategory/Ficus elastica/4.webp",
        description: "Planta de hojas grandes que purifica el aire."
    },
    {
        id:7,
        name:"Palma de bambú",
        price: 39000,
        img: "../public/img/imgCategories/purifyingCategory/Palma bambú/1.webp",
        img2:"../public/img/imgCategories/purifyingCategory/Palma bambú/5.webp", 
        img3: "../public/img/imgCategories/purifyingCategory/Palma bambú/2.webp",
        img4:"../public/img/imgCategories/purifyingCategory/Palma bambú/3.webp",
        img5: "../public/img/imgCategories/purifyingCategory/Palma bambú/4.webp",
        description: "Planta que elimina toxinas del aire."
    },
    {
        id:8,
        name:"Dracena",
        price: 32000,
        img: "../public/img/imgCategories/purifyingCategory/Dracena/1.webp",
        img2:"../public/img/imgCategories/purifyingCategory/Dracena/5.webp", 
        img3: "../public/img/imgCategories/purifyingCategory/Dracena/2.webp",
        img4:"../public/img/imgCategories/purifyingCategory/Dracena/3.webp",
        img5: "../public/img/imgCategories/purifyingCategory/Dracena/4.webp",
        description: "Planta que mejora la calidad del aire."
    },
    {   
        id:9,
        name:"Aloe Vera",
        price:25000,
        img:"../public/img/imgCategories/purifyingCategory/Aloe vera/1.webp",
        img2:"../public/img/imgCategories/purifyingCategory/Aloe vera/5.webp", 
        img3: "../public/img/imgCategories/purifyingCategory/Aloe vera/2.webp",
        img4:"../public/img/imgCategories/purifyingCategory/Aloe vera/3.webp",
        img5: "../public/img/imgCategories/purifyingCategory/Aloe vera/4.webp",
        description: "Planta suculenta que purifica el aire y trata heridas."
    }, 
    {   
        id:10,
        name: "Filodendro",
        price: 27000,
        img:"../public/img/imgCategories/purifyingCategory/Filodendro/1.webp",
        img2:"../public/img/imgCategories/purifyingCategory/Filodendro/5.webp", 
        img3: "../public/img/imgCategories/purifyingCategory/Filodendro/2.webp",
        img4:"../public/img/imgCategories/purifyingCategory/Filodendro/3.webp",
        img5: "../public/img/imgCategories/purifyingCategory/Filodendro/4.webp",
        description: "Planta de interior que limpia el aire." 
    }
]

const container = document.getElementById('puriCategory');
let puriCategoryHTML = '';

for (let i = 0; i < products.length; i++) {
    puriCategoryHTML += `
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

container.innerHTML = puriCategoryHTML;

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
