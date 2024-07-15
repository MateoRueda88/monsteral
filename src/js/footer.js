
async function fetchFooter() {
    return fetch('../views/footer')
    .then(response => response.text())
    .then(menu => { return menu });
}