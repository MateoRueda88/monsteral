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
      description: "Planta suculenta con hojas carnosas en forma de roseta."
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
      description: "Planta suculenta con pequeñas hojas sedum."
    },
    {
        id: 3,
        name:"Aloe Vera",
        price:25000,
        img:"../public/img/imgCategories/suculentasCategory/aloeVera.webp",
        img2:"../public/img/imgCategories/suculentasCategory/aloeVera2.webp", 
        img3: "../public/img/imgCategories/suculentasCategory/aloeVera4.webp",
        img4:"../public/img/imgCategories/suculentasCategory/aloeVera3.webp",
        img5: "../public/img/imgCategories/suculentasCategory/aloeVera.webp",
        description: "Planta suculenta utilizada para tratar quemaduras y heridas."
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
        description: "Planta suculenta con hojas verdes y puntiagudas."
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
        description: "Planta suculenta con hojas gruesas y brillantes."
    },
    {
        id: 6,
        name: "Kalanchoe",
        price: 22000,
        img:"../public/img/imgCategories/suculentasCategory/kalanchoe.webp",
        img2:"../public/img/imgCategories/suculentasCategory/kalanchoe2.webp", 
        img3: "../public/img/imgCategories/suculentasCategory/kalanchoe.webp",
        img4:"../public/img/imgCategories/suculentasCategory/kalanchoe3.webp",
        img5: "../public/img/imgCategories/suculentasCategory/kalanchoe4.webp",
        description: "Planta suculenta con flores pequeñas y coloridas."
    },
    {
        id:7,
        name:"Graptopetalum",
        price: 17000,
        img:"../public/img/imgCategories/suculentasCategory/graptopetalum.webp",
        img2:"../public/img/imgCategories/suculentasCategory/graptopetalum2.webp", 
        img3: "../public/img/imgCategories/suculentasCategory/graptopetalum3.webp",
        img4:"../public/img/imgCategories/suculentasCategory/graptopetalum4.webp",
        img5: "../public/img/imgCategories/suculentasCategory/graptopetalum.webp",
        description: "Planta suculenta con hojas en forma de estrella."
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
        description: "Planta suculenta con hojas largas y puntiagudas."
    },
    {   
        id:9,
        name:"Sempervivum",
        price:16000,
        img:"../public/img/imgCategories/suculentasCategory/sempervivum1.webp",
        img2:"../public/img/imgCategories/suculentasCategory/sempervivum2.webp", 
        img3: "../public/img/imgCategories/suculentasCategory/sempervivum3.webp",
        img4:"../public/img/imgCategories/suculentasCategory/sempervivum2.webp",
        img5: "../public/img/imgCategories/suculentasCategory/sempervivum1.webp",
        description: "Planta suculenta con rosetas de hojas compactas."
    }, 
    {   
        id:10,
        name: "Pachyphytum",
        price: 19000,
        img:"../public/img/imgCategories/suculentasCategory/pachyphytum.webp",
        img2:"../public/img/imgCategories/suculentasCategory/pachyphytum2.webp", 
        img3: "../public/img/imgCategories/suculentasCategory/pachyphytum3.webp",
        img4:"../public/img/imgCategories/suculentasCategory/pachyphytum4.webp",
        img5: "../public/img/imgCategories/suculentasCategory/pachyphytum.webp",
        description: "Planta suculenta con hojas gruesas y redondeada." 
    }
]

const container = document.getElementById('sucuCategory');
let sucuCategoryHTML = '';

for (let i = 0; i < products.length; i++) {
    sucuCategoryHTML += `
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

container.innerHTML = sucuCategoryHTML;

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