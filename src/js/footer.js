
document.addEventListener("DOMContentLoaded", () => {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('idFooter').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el footer:', error));
});