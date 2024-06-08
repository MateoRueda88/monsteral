//Lista productos

 let products = [ 
    {
      id: 1,
      name: "Suculenta",
      price: 20000,
      img: "suculenta.png",
      description: "Las suculentas son plantas con hojas, tallos o raíces engrosados que almacenan agua. Son resistentes a la sequía, tienen formas variadas y son populares por su fácil cuidado y atractiva apariencia."
    },
    {
      id: 2,
      name:"Margarita",
      price: 14000,
      img: "margarita.jpg",
      description: "La margarita es una planta perenne con flores blancas y un centro amarillo. Simboliza pureza e inocencia, crece en diversos climas y es conocida por su belleza simple y facilidad de cultivo."
    },
    {
        id: 3,
        name:"Pino de agujas",
        price:32000,
        img:"pinoAgujas.jpg",
        description: "El pino de agujas es un árbol perenne con hojas delgadas y aciculares. Conocido por su durabilidad y altura, es común en climas templados y fríos, y se utiliza en la industria maderera y decorativa."
    },
    {
        id: 4,
        name:"Aspidistra",
        price: 25000,
        img: "img_Apspidistra.png",
        description: "Ideal para entornos con poca luz, no requiere de muchos cuidados. Toma en cuenta si hace mucha calor dale abundante agua."
    },
    {
        id: 5,
        name: "Planta del dinero",
        price: 32000,
        img: "img_PlantaDinero",
        description: "Se dice que si cuidas esta planta y se mantiene sana, nunca faltara dinero en tu casa. Para ello, debes darle agua una vez a la semana y evitar que esten expuestas de manera directa al sol, y agregale fertilizante cada 15 días."
    },
    {
        id: 6,
        name: "El Caballero de la Noche (Cestrum nocturnum)",
        price: 45000,
        img: "caballeronoche.jpg",
        description: "Es un arbusto tropical con flores blancas verdosas que emiten una fragancia intensa y dulce por la noche. Es conocido por su perfume nocturno y hojas perennes."
    },
    {
        id:7,
        name:"Monstera obliqua",
        price: 15000,
        img: "obliqua.png",
        description: "Originaria de pero iene alta demanda hidrica y necesita menor luz."
    },
    {
        id:8,
        name:"Monstera adasonii",
        price: 18000,
        img: "adasonii.png",
        description: "Es trepadora y tiene en las hojas muchos agujeros de tamaño mediano y forma redondeada."
    },
    {
        name:"Venus Atrapa Moscas",
        price:50000,
        img:"Venus.jpg",
        description: "La Venus atrapamoscas es una planta carnívora con trampas de hojas dentadas que se cierran rápidamente al contacto. Captura insectos para suplir nutrientes en suelos pobres. Es nativa de Carolina del Norte y del Sur, EE. UU."
    }, 
    {
        name: "La gardenia",
        price: 48000,
        img:"Venus.jpg",
        description: "Es un arbusto de hojas perennes con flores blancas, fragantes y cerosas. Es popular en jardines y arreglos florales por su aroma dulce y belleza elegante." 
    }
]

for (let i = 0; i < products.length; i++){
    console.log(products[i]);
  };
