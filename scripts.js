let dropdown = document.getElementById('dropdown');
let menubtn = document.getElementById('menubtn');
let cancelbtn = document.getElementById('cancelbtn');

function openmenu(){
    menubtn.addEventListener('click', () =>{
        dropdown.style.width = '250px';
    })
}
function closemenu(){
    cancelbtn.addEventListener('click', () =>{
        dropdown.style.width = '0';
    })
}
openmenu();
closemenu();
