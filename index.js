
const fetch = require('node-fetch');

// Tu token de API de Trefle
const token = 'BBn9M1HSgN-RkhTi2o6oSc2NcCae61IR5_QvPaiW94Q'; // Reemplaza 'TU_TOKEN_DE_API' con tu token real

// URL del endpoint de la API de Trefle
const url = 'https://trefle.io/api/v1/plants';

// Función para obtener datos de plantas
async function getPlants() {
  try {
    // Hacer una solicitud GET a la API de Trefle
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    // Convertir la respuesta a JSON
    const data = await response.json();

    // Imprimir los datos en la consola
    console.log(data);
  } catch (error) {
    // Manejar errores
    console.error('Error:', error.message);
  }
}

// Llamar a la función para obtener datos de plantas
getPlants();
