let news = [
    {
        id: 1,
        name: "¡Descubren una nueva planta en Japón que desafía las reglas de la naturaleza!",
        date: "(2024)",
        img: "../public/img/news/new1.webp",
        description: "En las profundidades de los bosques de Kyushu, Japón, se ha encontrado una nueva especie de planta que rompe con todo lo que creíamos saber sobre el reino vegetal. Bautizada como Relictithismia kimotsukiensis, esta criatura pálida y sin hojas no realiza la fotosíntesis, sino que obtiene su energía de los hongos que la rodean. <br> Su descubrimiento, anunciado en 2024, ha cautivado a la comunidad científica por su singularidad y lo que representa para nuestra comprensión de la diversidad vegetal.",
        source: "https://acortar.link/2wklwu"
      },
      {
        id: 2,
        name: "Jardines flotantes: ¡El futuro verde de las ciudades ya está aquí!",
        date: "20 de julio del 2024",
        img: "../public/img/news/new2.webp",
        description:"Japón se posiciona a la vanguardia de la innovación urbana con la implementación de jardines flotantes, una iniciativa que busca transformar las azoteas y cuerpos de agua en oasis verdes sostenibles. Estos espacios no solo brindan un refugio natural en medio del bullicio urbano, sino que también contribuyen a reducir el impacto del cambio climático y mejorar la calidad de vida de los ciudadanos. <br>Descubre cómo estas islas de vegetación están floreciendo en el corazón de las ciudades japonesas, ofreciendo un futuro más verde y resiliente." ,
        source:"https://acortar.link/mPxUbW"
      },
      {
        id: 3,
        name: "“Ciudades Esponja: Transformando la Gestión del Agua en Entornos Urbanos” ",
        date: "07 de Mayo del 2024",
        img: "../public/img/news/new3.webp",
        description: "Imagina una ciudad que, en lugar de impermeabilizar sus superficies con asfalto y concreto, adopta un diseño permeable que permite que el agua de lluvia se infiltre en el suelo. Techos verdes, jardines de lluvia, calles bioporosas y canales renaturalizados son algunos de los elementos que caracterizan a este modelo urbano. <br>Las ciudades esponja emergen como un concepto innovador en el ámbito del urbanismo, ofreciendo un enfoque resiliente y sostenible para enfrentar los desafíos ambientales y sociales que aquejan a las metrópolis modernas.",
        source:"https://acortar.link/PozuDT"
      },
      {
        id: 4,
        name: "Inventor Peruano usa plantas como fuente de energía sostenible",
        date: "11 de Enero del 2024",
        img: "../public/img/news/new4.webp",
        description: "Hernán Asto, un inventor peruano que experimentó la falta de electricidad en su infancia, desarrolló un sistema innovador llamado Alinti que aprovecha la fotosíntesis de las plantas para generar electricidad.<br>El sistema Alinti consiste en macetas especiales que contienen plantas específicas y electrodos. Las plantas realizan la fotosíntesis, liberando electrones que son capturados por los electrodos y convertidos en electricidad de bajo voltaje.",
        source:"https://acortar.link/fqN76m"
      },
      {
        id: 5,
        name: "Olas que Electrifican: La Energía del Mar Llega a Nuestras Costas",
        date: "10 de julio de 2024",
        img: "../public/img/news/new5.webp",
        description: "Aprovechando la fuerza inagotable de las olas, la energía undimotriz se posiciona como una fuente renovable prometedora, limpia y sostenible. Conoce cómo funciona y los beneficios que trae para nuestro planeta.<br>Este método innovador utiliza el movimiento ondulante del mar para generar electricidad a través de diversos sistemas, como turbinas submarinas, dispositivos flotantes o cámaras de aire comprimido. ",
        source:"https://acortar.link/fW2xUb"
      },
      {
        id: 6,
        name: "¡Agua del aire! La tecnología que convierte el vapor en gotas de esperanza",
        date: "16 de abril de 2022",
        img: "../public/img/news/new6.webp",
        description: "Olvídate de la escasez y la dependencia de infraestructuras. La innovadora tecnología de conversión de aire en agua abre un mundo de posibilidades para el acceso a agua potable limpia y segura en cualquier lugar del planeta.<br> ¿Cómo funciona? Mediante un proceso de condensación y enfriamiento, el vapor de agua presente en el aire se transforma en gotas de agua líquida. Empresas como Watergen en Israel ya han desarrollado dispositivos que capturan el aire, lo enfrían y lo convierten en agua potable, con capacidades de producción que van desde 30 hasta 900 litros diarios.",
        source:"https://acortar.link/dTwxrb"
      }
]
      const container = document.getElementById('news');

      let newsHTML = '';

      for (let i = 0; i < news.length; i++) {
          newsHTML += `
          <div class="new-card">
            <img src="${news[i].img}" alt="${news[i].name}" class="newImg">
            <h2>${news[i].name}</h2>
            <div class="contentDate"> 
            <div class="date-container"><p class="date">${news[i].date}</p> </div>
            </div>
            <div class="description">
              <p>${news[i].description}</p>
            </div>
            <div class="source"><a href="${news[i].source}" target="_blank">Leer más</a></div>
          </div>
          `;
          
      }
        container.innerHTML = newsHTML;