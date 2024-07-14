let productsNew = [
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
    name:"Sedum",
    price: 12000,
    img:"../public/img/imgCategories/suculentasCategory/sedum.webp",
    img2:"../public/img/imgCategories/suculentasCategory/sedum.webp", 
    img3: "../public/img/imgCategories/suculentasCategory/sedum.webp",
    img4:"../public/img/imgCategories/suculentasCategory/sedum.webp",
    img5: "../public/img/imgCategories/suculentasCategory/sedum.webp",
    description: "Planta suculenta con pequeñas hojas sedum."
  },
    {
      id: 4,
      name:"Manzanilla",
      price: 15000,
      img: "../public/img/medicinalCategory/manzanilla.webp",
      description: "Planta con flores blancas usada para infusiones relajantes."
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
  