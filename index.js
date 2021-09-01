// let box1 = document.getElementById('first');
// box1.addEventListener('mouseover',mouseOver);
// box1.addEventListener('mouseleave',mouseLeave);

// function mouseOver () {
//     box1.style.opacity='0'; 
// }
// function mouseLeave () {
//     box1.style.opacity='1'; 
// }


// let box2 = document.getElementById('second');
// box2.addEventListener('mouseover',mouseOver);
// box2.addEventListener('mouseleave',mouseLeave);

// function mouseOver () {
//     box2.style.opacity='0'; 
// }
// function mouseLeave () {
//     box2.style.opacity='1'; 
// }


// let box3 = document.getElementById('third');
// box3.addEventListener('mouseover',mouseOver);
// box3.addEventListener('mouseleave',mouseLeave);

// function mouseOver () {
//     box3.style.opacity='0'; 
// }
// function mouseLeave () {
//     box3.style.opacity='1'; 
// }




let btn = document.getElementsByClassName('box');
function mouseOver(e){
    btn[e.target.getAttribute('name')].style.opacity='0'; 
}


for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('mouseover',mouseOver);
    // console.log(btn[i])
}