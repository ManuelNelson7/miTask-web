function showMenu() {
    document.getElementById('links-menu').classList.toggle('links-show');
    document.getElementById('buttons-menu').classList.remove('buttons-show');
};

function showButtons() {
    document.getElementById('buttons-menu').classList.toggle('buttons-show');
    document.getElementById('links-menu').classList.remove('links-show')
};

const scrollTrigger = 80;
const header = document.querySelector('header');

window.onscroll = () => {
    window.scrollY >= scrollTrigger ?
        header.classList.add('scrolled') :
        header.classList.remove('scrolled');
};