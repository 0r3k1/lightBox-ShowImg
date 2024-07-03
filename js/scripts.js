// menu

const hamburger = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-nav');

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('spread');
})

window.addEventListener('click', e => {
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburger){
        menu.classList.toggle('spread');
    }
})

// light box

const img = document.querySelectorAll('.img-galeria');
const imgLight = document.querySelector('.agregar-img');
const contenedorLight = document.querySelector('.image-light');

img.forEach(imagen => {
    imagen.addEventListener('click', () =>{
        mostrarImg(imagen.getAttribute('src'));
    })
})

contenedorLight.addEventListener('click', (e) => {
    if(e.target != imgLight){
        contenedorLight.classList.toggle('show');
        imgLight.classList.toggle('show-img');
        hamburger.style.opacity = '1';
    }
})

const mostrarImg = (src) => {
    imgLight.src = src;
    contenedorLight.classList.toggle('show');
    imgLight.classList.toggle('show-img');
    hamburger.style.opacity = '0';
}