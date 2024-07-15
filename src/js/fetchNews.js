async function fetchNews() {
    try {
        const response = await fetch('http://127.0.0.1:8080/api/news');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const news = await response.json();
        const container = document.getElementById('news');

        let newsHTML = '';

        for (let i = 0; i < news.length; i++) {
            const date = new Date(news[i].date).toLocaleDateString(); // Formatear la fecha
            newsHTML += `
            <div class="new-card">
              <img src="${news[i].img}" alt="${news[i].name}" class="newImg">
              <h2>${news[i].name}</h2>
              <div class="contentDate"> 
              <div class="date-container"><p class="date">${date}</p> </div>
              </div>
              <div class="description">
                <p>${news[i].description}</p>
              </div>
              <div class="source"><a href="${news[i].source}" target="_blank">Leer más</a></div>
            </div>
            `;
        }
        container.innerHTML = newsHTML;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

fetchNews();


// async function fetchNews() {
//     try {
//         const response = await fetch('http://127.0.0.1:8080/api/news');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const news = await response.json();
//         const container = document.getElementById('news');

//         let newsHTML = '';

//         for (let i = 0; i < news.length; i++) {
//             const date = new Date(news[i].date).toLocaleDateString(); // Formatear la fecha
//             newsHTML += `
//             <div class="new-card">
//               <img src="${news[i].imgUrl}" alt="${news[i].name}" class="newImg">
//               <h2>${news[i].name}</h2>
//               <div class="contentDate"> 
//               <div class="date-container"><p class="date">${date}</p> </div>
//               </div>
//               <div class="description">
//                 <p>${news[i].description}</p>
//               </div>
//               <div class="source"><a href="${news[i].sourceUrl}" target="_blank">Leer más</a></div>
//             </div>
//             `;
//         }
//         container.innerHTML = newsHTML;
//     } catch (error) {
//         console.error('Fetch error:', error);
//     }
// }

// fetchNews();
