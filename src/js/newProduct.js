let productsNew = [
  {
    id: 1,
    name: "Eucalipto",
        price: 22000,
        img:"../public/img/imgCategories/medicalCategory/eucalipto/1.webp",
      img2:"../public/img/imgCategories/medicalCategory/eucalipto/1.webp", 
      img3: "../public/img/imgCategories/medicalCategory/eucalipto/2.webp",
      img4:"../public/img/imgCategories/medicalCategory/eucalipto/3.webp",
      img5: "../public/img/imgCategories/medicalCategory/eucalipto/4.webp",
        description: "Planta trepadora con flores brillantes.",
        cantidad: 1,
  },
  {
    id: 2,
    name: "Filodendro",
        price: 27000,
        img:"../public/img/imgCategories/purifyingCategory/Filodendro/1.webp",
        img2:"../public/img/imgCategories/purifyingCategory/Filodendro/1.webp", 
        img3: "../public/img/imgCategories/purifyingCategory/Filodendro/2.webp",
        img4:"../public/img/imgCategories/purifyingCategory/Filodendro/3.webp",
        img5: "../public/img/imgCategories/purifyingCategory/Filodendro/4.webp",
        description: "Planta de interior que limpia el aire.",
        cantidad: 1,
  },
  {
    id: 3,
    name:"Bonsái de Ciprés",
        price: 160000,
        img:"../public/img/imgCategories/bonsaiCategory/bonsaiCipres.webp",
        img2:"../public/img/imgCategories/bonsaiCategory/bonsaiCipres.webp", 
        img3: "../public/img/imgCategories/bonsaiCategory/hojabonsaiCipres.webp",
        img4:"../public/img/imgCategories/bonsaiCategory/arribaBonsaiCipres.webp",
        img5: "../public/img/imgCategories/bonsaiCategory/escritorioBonsaiCipres.webp",
        description: "Pequeño árbol de ciprés cultivado en maceta.",
        cantidad: 1,
  },
    {
      id: 4,
      name: "Crassula",
        price: 20000,
        img:"../public/img/imgCategories/suculentasCategory/crassula.webp",
        img2:"../public/img/imgCategories/suculentasCategory/crassula2.webp", 
        img3: "../public/img/imgCategories/suculentasCategory/crassula3.webp",
        img4:"../public/img/imgCategories/suculentasCategory/crassula4.webp",
        img5: "../public/img/imgCategories/suculentasCategory/crassula.webp",
        description: "Planta suculenta con hojas gruesas y brillantes.",
        cantidad: 1,
    },
    {
      id: 5,
      name: "Azalea",
        price: 45000,
        img:"../public/img/imgCategories/exteriorCategory/azalea1.webp",
        img2:"../public/img/imgCategories/exteriorCategory/azalea1.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/azalea3.webp",
        img4:"../public/img/imgCategories/exteriorCategory/azalea4.webp",
        img5: "../public/img/imgCategories/exteriorCategory/azalea2.webp",
        description: "Planta de arbusto con flores brillantes.",
        cantidad: 1,
    },
    {
      id: 6,
      name: "Geranio",
        price: 35000,
        img:"../public/img/imgCategories/exteriorCategory/geranio1.webp",
        img2:"../public/img/imgCategories/exteriorCategory/geranio1.webp", 
        img3: "../public/img/imgCategories/exteriorCategory/geranio2.webp",
        img4:"../public/img/imgCategories/exteriorCategory/geranio3.webp",
        img5: "../public/img/imgCategories/exteriorCategory/geranio4.webp",
        description: "Planta de flores coloridas y duraderas.",
        cantidad: 1,
    }
  ]


  // ....................................fin seccion productos nuevos...................................

    
  const containerNew = document.getElementById('newProducts');
  let indexNewHTML = '';
  
  for (let i = 0; i < productsNew.length; i++) {
      indexNewHTML += `
          <div class="plant-card">
              <div>
                  <div class="container">
                      <div class="imgContainer">
                          <img src= "${productsNew[i].img}" alt="" class="mainIMG">
                      </div>
                      <div class="xContainer">
                          <img src="${productsNew[i].img2}" alt="" class="xContainerx active">
                          <img src="${productsNew[i].img3}" alt="" class="xContainerx">
                          <img src="${productsNew[i].img4}" alt="" class="xContainerx">
                          <img src="${productsNew[i].img5}" alt="" class="xContainerx">
                      </div>
                  </div>
              </div>
              <h2>${productsNew[i].name}</h2>
              <p>Precio: $${productsNew[i].price}</p>
              <div class="car">
                  <img src="../public/img/greenCar.webp" alt="car" class="carImg">
              </div>
          </div>
      `;
  }
  
  containerNew.innerHTML = indexNewHTML;
  
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
  