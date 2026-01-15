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

//--------------------------------------------------------------------------------------------------------------------------------------------------
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