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