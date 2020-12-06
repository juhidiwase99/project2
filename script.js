const colorbtn = document.querySelector('.colorbtn');
const bodybcg = document.querySelector('body');

const colors = ['yellow', 'red', 'green', '#3b5998','purple','orange'];

colorbtn.addEventListener('click', changeColor);

function changeColor(){
    // bodybcg.style.backgroundColor = colors[2];
    let random = Math.floor(Math.random() * colors.length)
    bodybcg.style.backgroundColor = colors[random];
}