fetchAndBuildMenu()

async function fetchAndBuildMenu() {
    const menu = await this.fetchMenu();
    buildMenu(menu);
}

async function fetchMenu() {
    return fetch('../views/nav-template.html')
    .then(response => response.text())
    .then(menu => { return menu });
}

function buildMenu(menu) {
    document.getElementById('menu-container').innerHTML = menu;
    const nav = document.getElementById('nav');
    document.getElementById('abrir').addEventListener('click', () =>{
        nav.classList.add('visible')
    })
    document.getElementById('cerrar').addEventListener('click', () =>{
        nav.classList.remove('visible')
    })
}



   
   