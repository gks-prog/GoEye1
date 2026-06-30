
window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},800)

},1200)

});


const cards=document.querySelectorAll(".glass,.hero-glass");

cards.forEach(card=>{

card.addEventListener("mousemove",e=>{

let x=(e.offsetX-card.offsetWidth/2)/30;
let y=(e.offsetY-card.offsetHeight/2)/30;

card.style.transform=`rotateX(${-y}deg) rotateY(${x}deg)`;

});


card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});
