const next_button = document.getElementById('next');
const prev_button = document.getElementById('prev');
const dots = document.querySelectorAll('.circle .dot');
const line = document.querySelector('.line');
const lineActive = document.querySelectorAll('.progress');

let click = -1;

next_button.addEventListener('click', () => {
    click++;
    if(click > 2){
        click = 2;
    }else{
        line_width=8;  
        lineActive[click].style.width = line_width + 'rem';
        dots[click].classList.add('active');
    }
    if(click == 2){
        next_button.classList.remove('next');
        next_button.style.cursor = 'not-allowed';
    }
    if(click > -1){
        prev_button.classList.add('next');
        prev_button.style.cursor = 'pointer';
    }
});

prev_button.addEventListener('click', () => {
    click--;
    if(click < -1){
        click = -1;
    }else{
        backline_width=0;
        lineActive[click+1].style.width = backline_width + 'rem';
        dots[click+1].classList.remove('active');
        next_button.style.cursor = 'pointer';
        next_button.classList.add('next');
    };
    if(click == -1){
        prev_button.classList.remove('next');
        prev_button.style.cursor = 'not-allowed';
    }
});