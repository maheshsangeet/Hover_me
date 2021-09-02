let btn = document.getElementsByClassName('smileyface');

function mouseOver(e){
    btn[e.target.getAttribute('name')].style.opacity='0'; 
    btn[e.target.getAttribute('name')].style.transition= 'all .8s ease-in-out';
}


function mouseLeave(e){
    btn[e.target.getAttribute('name')].style.opacity='1'; 
    btn[e.target.getAttribute('name')].style.transition= 'all 3s ease-in-out';
}


for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('mouseover',mouseOver);
    btn[i].addEventListener('mouseleave',mouseLeave);
    // console.log(btn[i])
}


