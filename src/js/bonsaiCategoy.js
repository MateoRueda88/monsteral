//Lista productos categoria plantas bonsai
let products = [ 
    {
      id: 1,
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
      id: 2,
      name:"Bonsái de Arce Japonés",
      price: 200000,
      img: "../public/img/imgCategories/bonsaiCategory/bonsaiJapones.webp",
      img2:"../public/img/imgCategories/bonsaiCategory/bonsaiJapones.webp", 
      img3: "../public/img/imgCategories/bonsaiCategory/hojabonsaiJapones.webp",
      img4:"../public/img/imgCategories/bonsaiCategory/arribaBonsaiJapones.webp",
      img5: "../public/img/imgCategories/bonsaiCategory/escritorioBonsaiJapones.webp",
      description: "Árbol de arce con hojas rojas cultivado en maceta."
    },
    {
        id: 3,
        name:"Bonsái de Ficus",
        price:130000,
        img:"../public/img/imgCategories/bonsaiCategory/bonsaiFicus.webp",
        img2:"../public/img/imgCategories/bonsaiCategory/bonsaiFicus.webp", 
        img3: "../public/img/imgCategories/bonsaiCategory/hojabonsaiFicus.webp",
        img4:"../public/img/imgCategories/bonsaiCategory/escritoriobonsaiFicus.webp",
        img5: "../public/img/imgCategories/bonsaiCategory/bonsaiFicus.webp",
        description: "Planta aromática utilizada para problemas digestivos."
    },
    {
        id: 4,
        name:"Bonsái de Olmo Chino",
        price: 170000,
        img:"../public/img/imgCategories/bonsaiCategory/bonsaiOlmoChino.webp",
        img2:"../public/img/imgCategories/bonsaiCategory/bonsaiOlmoChino.webp", 
        img3: "../public/img/imgCategories/bonsaiCategory/hojasbonsaiOlmoChino.webp",
        img4:"../public/img/imgCategories/bonsaiCategory/escritorioBosaiOlmoChino.webp",
        img5: "../public/img/imgCategories/bonsaiCategory/bonsaiFicus.webp",
        description: "Planta aromática con propiedades antiinflamatorias."
    },
    {
        id: 5,
        name: "Bonsái de Junípero",
        price: 140000,
        img:"../public/img/imgCategories/bonsaiCategory/bonsaiJunipero.webp",
        img2:"../public/img/imgCategories/bonsaiCategory/bonsaiJunipero.webp", 
        img3: "../public/img/imgCategories/bonsaiCategory/hojabonsaiJunipero.webp",
        img4:"../public/img/imgCategories/bonsaiCategory/escritorioBonsaiJunipero.webp",
        img5: "../public/img/imgCategories/bonsaiCategory/arribaBonsaiJunipero.webp",
        description: "Árbol de junípero en miniatura."
    },
    {
        id: 6,
        name: "Bonsái de Azalea",
        price: 180000,
        img:"../public/img/imgCategories/bonsaiCategory/bonsaiAzaela.webp",
        img2:"../public/img/imgCategories/bonsaiCategory/bonsaiAzaela.webp", 
        img3: "../public/img/imgCategories/bonsaiCategory/hojaBonsaiAzalea.webp",
        img4:"../public/img/imgCategories/bonsaiCategory/arribaBonsaiAzalea.webp",
        img5: "../public/img/imgCategories/bonsaiCategory/escritorioBonsaiAzalea.webp",
        description: "Árbol de azalea con flores cultivado en maceta."
    },
    {
        id:7,
        name:"Bonsái de Ciprés",
        price: 160000,
        img:"../public/img/imgCategories/bonsaiCategory/bonsaiCipres.webp",
        img2:"../public/img/imgCategories/bonsaiCategory/bonsaiCipres.webp", 
        img3: "../public/img/imgCategories/bonsaiCategory/hojabonsaiCipres.webp",
        img4:"../public/img/imgCategories/bonsaiCategory/arribaBonsaiCipres.webp",
        img5: "../public/img/imgCategories/bonsaiCategory/escritorioBonsaiCipres.webp",
        description: "Pequeño árbol de ciprés cultivado en maceta."
    },
    {
        id:8,
        name:"Bonsái de Granado",
        price: 190000,
        img:"../public/img/imgCategories/bonsaiCategory/bonsaiGranado.webp",
        img2:"../public/img/imgCategories/bonsaiCategory/bonsaiGranado.webp", 
        img3: "../public/img/imgCategories/bonsaiCategory/hojaBonsaiGranado.JPG",
        img4:"../public/img/imgCategories/bonsaiCategory/arribaBonsaiGranado.webp",
        img5: "../public/img/imgCategories/bonsaiCategory/escritorioBonsaiGranado.webp",
        description: "Árbol de granado en miniatura."
    },
    {   
        id:9,
        name:"Bonsái de Cerezo",
        price:210000,
        img:"../public/img/imgCategories/bonsaiCategory/bonsaiCerezo.webp",
        img2:"../public/img/imgCategories/bonsaiCategory/bonsaiCerezo.webp", 
        img3: "../public/img/imgCategories/bonsaiCategory/hojaBonsaiAzalea.webp",
        img4:"../public/img/imgCategories/bonsaiCategory/arribaBonsaiCerezo.webp",
        img5: "../public/img/imgCategories/bonsaiCategory/escritorioBonsaiAzalea.webp",
        description: "Árbol de cerezo con flores cultivado en maceta."
    }, 
    {   
        id:10,
        name: "Bonsái de Ginkgo",
        price: 220000,
        img:"../public/img/imgCategories/bonsaiCategory/bonsaiGinkgo.webp",
        img2:"../public/img/imgCategories/bonsaiCategory/bonsaiGinkgo.webp", 
        img3: "../public/img/imgCategories/bonsaiCategory/escritorioBonsaiGinkgo.webp",
        img4:"../public/img/imgCategories/bonsaiCategory/arribaBonsaiGinkgo.webp",
        img5: "../public/img/imgCategories/bonsaiCategory/hojaBonsaiGinkgo.webp",
        description: "Árbol de ginkgo biloba cultivado en forma de bonsái." 
    }
]

const container = document.getElementById('bonCategory');
let bonCategoryHTML = '';

for (let i = 0; i < products.length; i++) {
    bonCategoryHTML += `
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

container.innerHTML = bonCategoryHTML;

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
