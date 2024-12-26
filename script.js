const img=document.querySelectorAll('.header-slider ul img');
const prev_btn=document.querySelector('.control-prev');
const nxt_btn=document.querySelector('.control-nxt');

let n=0;

function changeSlide(){
    for (let i=0; i < img.length; i++){
        img[i].style.display='none';
    }
    img[n].style.display='block';
}
changeSlide();

prev_btn.addEventListener('click',() =>{
    if(n > 0){
        n--;
    }
    else{
       n=img.length - 1; 
    }
    changeSlide();
})

nxt_btn.addEventListener('click',(e) =>{
    if(n < img.length - 1){
        n++;
    }
    else{
         n = 0;
    }
    changeSlide();
})

const scrollContainer=document.querySelectorAll('.products');
for (const item of scrollContainer){
    item.addEventListener('wheel', (evt) => {
        EventTarget.preventDefault();
        item.scrollLeft+=evt.deltaY;

    })
}