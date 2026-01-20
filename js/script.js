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
    menu.classList.toggle('invisable');
    menu.classList.toggle('open');
    svgOpen.classList.toggle('hidden');      
    svgClose.classList.toggle('hidden'); 
    document.body.classList.toggle('menu-open');
});

//--------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------diensten submenu open en dicht
// Stap 1
const caretD = document.querySelector('.diensten .menu-caret svg');
const submenuDiensten = document.getElementById('diensten-submenu');
// Stap 2
caretD.addEventListener('click', function() {
    // Stap 3
    submenuDiensten.classList.toggle('opacity-0');
    submenuDiensten.classList.toggle('open');
    caretD.classList.toggle('flipped');
});

// ---------------------------------overons submenu open en dicht
// Stap 1
const caretO = document.querySelector('.overons .menu-caret svg');
const submenuOverons = document.getElementById('overons-submenu');
// Stap 2
caretO.addEventListener('click', function() { 
    // Stap 3
    submenuOverons.classList.toggle('opacity-0');
    submenuOverons.classList.toggle('open');
    caretO.classList.toggle('flipped');
});

//--------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------- header scroll animatie
// Stap 1



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