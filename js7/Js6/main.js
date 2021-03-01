const btn = document.querySelector('.btn');
const modal = document.querySelector('#modal');
const screen = document.querySelector('.screen');

btn.addEventListener('click', function(e) {
    e.stopPropagation();
    modal.classList.add('active');
    screen.style.display = 'block';
})


document.addEventListener('click', function(e){
    modal.classList.remove('active');
    screen.style.display = 'none';
})


document.addEventListener('keydown', function(e){
    if(e.key == 'Escape') {
       modal.classList.remove('active');
       screen.style.display = 'none';
    }
})

modal.addEventListener('click', function(e){
    if(e.target.tagName == 'BUTTON'){
        console.log(e.target.closest('.data').getAttrubte('data-id'));
    }
})

//----------------------------------------------------------

const sections = document.querySelectorAll('.section');
const next = document.querySelector('#next');
let curentSection = 0;

function showSetion(idx) {
    sections[curentSection].classList.remove('opened');
    sections[idx].classList.add('opened');
    curentSection = idx;
    }

next.addEventListener('click', function(){
        showSetion((curentSection + 1 < sections.length) ? curentSection + 1 :0)
})

showSetion(0);
