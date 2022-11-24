const menu = document.getElementById('menu');
const header = document.getElementById('navbar');

if (menu) {
    menu.addEventListener('click', () => {
        header.classList.add('active')
    })
}