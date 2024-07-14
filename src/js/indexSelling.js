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
        name:"Manzanilla",
        price: 15000,
        img: "../public/img/medicinalCategory/manzanilla.webp",
        description: "Planta con flores blancas usada para infusiones relajantes."
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
    





