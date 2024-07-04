let course=[
    {
        id: 1,
        name: 'Introducción al cuidado de plantas de interior',
        price: 20000,
        img: "../public/img/plantsImg/suculenta.webp"
    },
    {
        id: 2,
        name: 'Jardinería básica: Cómo empezar tu propio huerto',
        price: 25000,
        img: "../public/img/plantsImg/suculenta.webp"
    },
    {
        id: 3,
        name: 'Taller práctico de poda de rosales',
        price: 35000,
        img: "../public/img/plantsImg/suculenta.webp"
    },
    {
        id: 4,
        name: 'Cuidado avanzado de plantas suculentas',
        price: 20000,
        img: "../public/img/plantsImg/suculenta.webp"
    },
    {
        id: 5,
        name: 'Taller de diseño de jardines pequeños',
        price: 40000,
        img: "../public/img/plantsImg/suculenta.webp"
    },
    {
        id: 6,
        name: 'Técnicas de propagación de plantas',
        price: 15000,
        img: "../public/img/plantsImg/suculenta.webp"
    },
    {
        id: 7,
        name: 'Cuidado de plantas carnívoras',
        price: 45000,
        img: "../public/img/plantsImg/suculenta.webp"
    },
    {
        id: 8,
        name: 'Taller de bonsái para principiantes',
        price: 55000,
        img: "../public/img/plantsImg/suculenta.webp"
    },
    {
        id: 9,
        name: 'Técnicas de riego eficiente para macetas',
        price: 20000,
        img: "../public/img/plantsImg/suculenta.webp"
    },
    {
        id: 10,
        name: 'Taller de herbolaria: Cultivo y usos medicinales',
        price: 25000,
        img: "../public/img/plantsImg/suculenta.webp"
    }
]

const container = document.getElementById('courses');

let learnHTML = '';

for (let i = 0; i < course.length; i++) {
    learnHTML += `
    <div class="learn-card">
      <img src="${course[i].img}" alt="${course[i].name}" class="learnImg">
      <h2>${course[i].name}</h2>
      <p>Precio: $${course[i].price}</p>
      <div class="car">
      <img src="../public/img/greenCar.webp" alt="car" class="carImg">
      </div>
    </div>
    `;
    
}
  container.innerHTML = learnHTML;