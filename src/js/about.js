const team =[
    {
        id: 1,
        name1:"Mateo Rueda",
        position: "Desarrollador Frontend",
        img: "../public/img/aboutImg/Mateo_Photo.webp",
        description: "Apasionado por la tecnología y la innovación. En sus tiempos libres realiza actividades al aire libre."
    },
    {
        id: 2,
        name1:"Karla González",
        position: "Product Owner",
        img:"../public/img/aboutImg/karla_Img.png",
        description: "Persona creativa, innovadora, que gestiona soluciones y disfruta de la naturaleza."
    },
    {
        id: 3,
        name1:"Valentina Ramírez",
        position: "Team Leader",
        img:"../public/img/aboutImg/foto valentina.webp",
        description: "Desarrolladora en busca de soluciones tecnológicas innovadoras para crear experiencias de usuario intuitivas y atractivas."
    },
    {
        id: 4,
        name1:"Lina Mora",
        position: "Desarrollador Backend",
        img:"../public/img/aboutImg/Lina_Photo.webp",
        description: "Desarrolladora Fullstack apasionada por el diseño web, con sólidos conocimientos en lenguajes de programación."
    },
    {
        id: 5,
        name1:"Francy Bejarano",
        position: "Scrum Master",
        img:"../public/img/aboutImg/Francy_Photo.webp",
        description: "Apasionada por la naturaleza y las manualidades, trabajando día a día por mejorar el medio ambiente"
    }

];

const postContainer = document.querySelector('.container-team');

const postMethods= () =>{
    team.map((postData)=>{
        const postElement = document.createElement('div')
        postElement.classList.add('card-team');
        postElement.innerHTML= 
    `<div class="card-team">
        
        <div class="card-descrip-front">
            <img src="${postData.img}" alt="${postData.name1}Photo " class="img-team"/>
            <h5 class="card-name">${postData.position}</h5>
          <h4 class="card-name">${postData.name1}</h4>
        </div>

        <div class="card-descrip-back">
        <p class="text-description">${postData.description}</p>
        </div>
          
    </div>`
      
        postContainer.appendChild(postElement);

    })
}
postMethods()