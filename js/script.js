//--------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------diensten submenu open en dicht
// Stap 1
const caretD = document.querySelector('.caret-diensten');
const submenuDiensten = document.getElementById('diensten-submenu');
// Stap 2
caretD.addEventListener('click', function(){
    // Stap 3
    submenuDiensten.classList.toggle('hidden');
});

// ---------------------------------overons submenu open en dicht
// Stap 1
const caretO = document.querySelector('.caret-overons');
const submenuOverons = document.getElementById('overons-submenu');
// Stap 2
caretO.addEventListener('click', function(){
    // Stap 3
    submenuOverons.classList.toggle('hidden');
});