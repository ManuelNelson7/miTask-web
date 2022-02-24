function showMenu() {
    document.getElementById('links-menu').classList.toggle('links-show')
};

function showButtons() {
    document.getElementById('buttons-menu').classList.toggle('buttons-show')
};

const scrollTrigger = 80;
const header = document.querySelector('header');

window.onscroll = () => {
    window.scrollY >= scrollTrigger ?
    header.classList.add('scrolled') :
    header.classList.remove('scrolled');
};

let a = 5
console.log(a++);
console.log(++a);