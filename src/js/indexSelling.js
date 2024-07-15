let products = [ 
    {
      id: 1,
      name:"Rosa",
        price:25000,
        img:"../public/img/imgCategories/polinizadorasCategory/rosa1.webp",
        img2:"../public/img/imgCategories/polinizadorasCategory/rosa1.webp",
        img3:"../public/img/imgCategories/polinizadorasCategory/rosa2.webp",
        img4:"../public/img/imgCategories/polinizadorasCategory/rosa3.webp",
        img5:"../public/img/imgCategories/polinizadorasCategory/rosa4.webp",
        description: "Planta de flores hermosas y fragantes que atraen abejas.",
        cantidad: 1
    },
    {
      id: 2,
      name:"Salvia",
        price: 17000,
        img:"../public/img/imgCategories/medicalCategory/salvia/1.webp",
      img2:"../public/img/imgCategories/medicalCategory/salvia/1.webp", 
      img3: "../public/img/imgCategories/medicalCategory/salvia/2.webp",
      img4:"../public/img/imgCategories/medicalCategory/salvia/3.webp",
      img5: "../public/img/imgCategories/medicalCategory/salvia/4.webp",
        description: "Planta alta con flores amarillas grandes.",
        cantidad: 1
    },
    {
        id: 3,
        name: "Bonsái de Pino ",
        price: 150000,
        img: "../public/img/imgCategories/bonsaiCategory/bonsaiPino.webp",
        img2:"../public/img/imgCategories/bonsaiCategory/bonsaiPino.webp", 
        img3: "../public/img/imgCategories/bonsaiCategory/hojaBonsaiPino.webp",
        img4:"../public/img/imgCategories/bonsaiCategory/escritorioBonsaiPino.webp",
        img5: "../public/img/imgCategories/bonsaiCategory/arribaBonsaiPino.webp",
        description: "Pequeño árbol de pino cultivado en maceta."
      },
      {
        id: 4,
        
        name: "Lengua de suegra",
      price: 30000,
      img: "../public/img/imgCategories/purifyingCategory/Lengua de suegra/1.webp",
      img2:"../public/img/imgCategories/purifyingCategory/Lengua de suegra/1.webp", 
      img3: "../public/img/imgCategories/purifyingCategory/Lengua de suegra/3.webp",
      img4:"../public/img/imgCategories/purifyingCategory/Lengua de suegra/2.webp",
      img5: "../public/img/imgCategories/purifyingCategory/Lengua de suegra/4.webp",
      description: "Planta resistente que purifica el aire.",
      cantidad: 1
      },
      {
          id:5,
          name:"Cinta",
          price: 40000,
          img:"../public/img/imgCategories/interiorCategory/cinta2.webp",
          img2:"../public/img/imgCategories/interiorCategory/cinta2.webp", 
          img3: "../public/img/imgCategories/interiorCategory/cinta3.webp",
          img4:"../public/img/imgCategories/interiorCategory/cinta4.webp",
          img5: "../public/img/imgCategories/interiorCategory/cinta1.webp",
          description: "Planta colgante con hojas rayadas.",
          cantidad: 1
      },
      {
          id:6,
          name:"Sedum",
      price: 12000,
      img:"../public/img/imgCategories/suculentasCategory/sedum.webp",
      img2:"../public/img/imgCategories/suculentasCategory/sedum.webp", 
      img3: "../public/img/imgCategories/suculentasCategory/arribaSedum.webp",
      img4:"../public/img/imgCategories/suculentasCategory/generalSedum.webp",
      img5: "../public/img/imgCategories/suculentasCategory/usoSedum.webp",
      description: "Planta suculenta con pequeñas hojas sedum.",
      cantidad: 1
      }
    ]

    const container = document.getElementById('sellingProducts');
    let indexHTML = '';
    
    for (let i = 0; i < products.length; i++) {
        indexHTML += `
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
    
    container.innerHTML = indexHTML;
    
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
    





