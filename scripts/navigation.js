const menuButton = document.querySelector('#menu-button');
const nav = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuButton.textContent = nav.classList.contains('show') ? 'X' : '☰';
});

nav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        nav.classList.remove('show');
        menuButton.textContent = '☰';
    }
});
