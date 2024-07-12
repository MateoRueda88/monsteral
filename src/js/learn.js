let course=[
    {
        id: 1,
        name: 'Introducción al cuidado de plantas de interior',
        price: 20000,
        img: "../public/img/learnImg/1.webp",
        place:"Curso virtual",
        description:"Descubre cómo cuidar y mantener tus plantas de interior para que luzcan siempre saludables y vibrantes."
    },
    {
        id: 2,
        name: 'Jardinería básica: Cómo empezar tu propio huerto',
        price: 25000,
        img: "../public/img/learnImg/2.webp",
        place:"Curso presencial",
        description:"Inicia tu propio huerto en casa con técnicas básicas de jardinería y consejos prácticos para principiantes."
    },
    {
        id: 3,
        name: 'Taller práctico de poda de rosales',
        price: 35000,
        img: "../public/img/learnImg/3.webp",
        place:"Curso presencial",
        description:"Aprende a podar rosales de manera correcta para estimular su crecimiento y floración."
    },
    {
        id: 4,
        name: 'Cuidado avanzado de plantas suculentas',
        price: 20000,
        img: "../public/img/learnImg/4.webp",
        place:"Curso virtual",
        description:"Domina las técnicas avanzadas para el cuidado, trasplante y mantenimiento de suculentas."
    },
    {
        id: 5,
        name: 'Taller de diseño de jardines pequeños',
        price: 40000,
        img: "../public/img/learnImg/5.webp",
        place:"Curso presencial",
        description:"Crea hermosos jardines en espacios pequeños con diseño creativo y uso eficiente del espacio."
    },
    {
        id: 6,
        name: 'Técnicas de propagación de plantas',
        price: 15000,
        img: "../public/img/learnImg/6.webp",
        place:"Curso presencial",
        description:"Aprende a multiplicar tus plantas favoritas mediante técnicas efectivas de propagación."
    },
    {
        id: 7,
        name: 'Cuidado de plantas carnívoras',
        price: 45000,
        img: "../public/img/learnImg/7.webp",
        place:"Curso virtual",
        description:"Descubre cómo cuidar y mantener saludables tus plantas carnívoras en casa."
    },
    {
        id: 8,
        name: 'Taller de bonsái para principiantes',
        price: 55000,
        img: "../public/img/learnImg/8.webp",
        place:"Curso presencial",
        description:"Iníciate en el arte del bonsái con técnicas básicas para modelar y cuidar estos árboles en miniatura."
    },
    {
        id: 9,
        name: 'Técnicas de riego eficiente para macetas',
        price: 20000,
        img: "../public/img/learnImg/9.webp",
        place:"Curso presencial",
        description:"Optimiza el riego de tus plantas en macetas con técnicas eficientes y prácticas."
    },
    {
        id: 10,
        name: 'Taller de herbolaria: Cultivo y usos medicinales',
        price: 25000,
        img: "../public/img/learnImg/10.webp",
        place:"Curso presencial",
        description:"Aprende a cultivar y utilizar hierbas medicinales para aprovechar sus beneficios terapéuticos."
    }
]

const container = document.getElementById('courses');

let learnHTML = '';

for (let i = 0; i < course.length; i++) {
    learnHTML += `
    <div class="learn-card">
        
            <img src="${course[i].img}" alt="${course[i].name}" class="learnImg">
            <p class="place">${course[i].place}</p>
            <h2>${course[i].name}</h2>
            <p class="price">Precio: $${course[i].price}</p>
        
        <div class="learn-content">
            <p class="learn-description"> ${course[i].description}</p>
            <button class="learn-button">Comprar</button>
        </div>
        
    </div>
    `;
    
}
  container.innerHTML = learnHTML;