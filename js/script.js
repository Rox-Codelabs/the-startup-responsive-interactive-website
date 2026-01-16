//--------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------- hoofdnavigatie open
// Stap 1
const menu = document.querySelector('.hoofdnavigatie');
const menuBtn = document.querySelector('.hoofdnavigatie-btn');
const svgOpen = document.querySelector('.menu-open-btn');
const svgClose = document.querySelector('.menu-close-btn');
const logo = document.querySelector('.logo');
// Stap 2
menuBtn.addEventListener('click', function(){
    // Stap 3
    menu.classList.toggle('hidden');
    svgOpen.classList.toggle('hidden');      
    svgClose.classList.toggle('hidden'); 
    logo.classList.toggle('hidden');
    document.body.classList.toggle('menu-open');
    window.scrollTo(0, 0);
});

//--------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------diensten submenu open en dicht
// Stap 1
const caretD = document.querySelector('.diensten .menu-caret');
const submenuDiensten = document.getElementById('diensten-submenu');
// Stap 2
caretD.addEventListener('click', function() {
    // Stap 3
    submenuDiensten.classList.toggle('hidden');
    caretD.classList.toggle('flipped');
});

// ---------------------------------overons submenu open en dicht
// Stap 1
const caretO = document.querySelector('.overons .menu-caret');
const submenuOverons = document.getElementById('overons-submenu');
// Stap 2
caretO.addEventListener('click', function() { 
    // Stap 3
    submenuOverons.classList.toggle('hidden');
    caretO.classList.toggle('flipped');
});

//--------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------- header scroll animatie
// Stap 1

const header = document.querySelector('header');
const scrollArea = window;

// Stap 2
scrollArea.addEventListener('scroll', function(){
    // Stap 3
    header.classList.add('hidden-header');
});

// ---------------------------------Als helemaal omhoog is gescrolled
// Stap 1 hoeft niet meer
// Stap 2
window.addEventListener('scroll', function(){
    if (window.scrollY === 0){
        //Stap 3
        header.classList.remove('hidden-header');
    }
});



//--------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------- footer animatie
// Stap 1

const lowerFooter = document.querySelector('.lower-footer');

window.addEventListener('scroll', function(){
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        //Stap 3
        lowerFooter.classList.add('footer-scroll');
    }
    else {
        lowerFooter.classList.remove('footer-scroll');
    }
});