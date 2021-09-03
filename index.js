let btn = document.getElementsByClassName('smileyface');

function mouseOver(e){
    btn[e.target.dataset.name].style.opacity='1'; 
    btn[e.target.dataset.name].style.transition= 'all .8s ease-in-out';
}


function mouseLeave(e){
    btn[e.target.dataset.name].style.opacity='0'; 
    btn[e.target.dataset.name].style.transition= 'all 3s ease-in-out';
}



//it takes whole html == document means 
document.addEventListener('mouseover',function(e){

    for(let i=0;i<btn.length;i++){
        btn[i].addEventListener('mouseover',mouseOver);
        btn[i].addEventListener('mouseleave',mouseLeave);
        // console.log(btn[i])
    }
})


//dynamic HTML 
let parent = document.getElementById('parent');
function innerCode() {
    for (let i=0; i<35; i++) {
        if (i%2 !== 0){
            parent.innerHTML += `<div data-id="smile"  class="smileyface  div${i+1}" data-name=${i}>
        <p class="eyes lefteye"></p>
        <p class="eyes righteye"></p>
        <div data-id="smile"  class="smile">
            <div class="corner"></div>
            <div class="corner right"></div>
        </div>
    </div>`

        }else {
            parent.innerHTML += `<div data-id="smile"  class="smileyface smallSmileyFace div${i+1}" data-name=${i}>
        <p class="eyes1 lefteye1"></p>
        <p class="eyes1 righteye1"></p>
        <div data-id="smile1"  class="smile1">
            <div class="corner1"></div>
            <div class="corner1 right1"></div>
        </div>
    </div>`
        }
        
    }
}
innerCode();

