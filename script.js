document.addEventListener("DOMContentLoaded",()=>{



/* ==========================
PRELOADER
========================== */


const loader =
document.getElementById("preloader");


const enterBtn =
document.getElementById("enter-btn");



if(enterBtn){


enterBtn.addEventListener(
"click",
()=>{


loader.style.opacity="0";


setTimeout(()=>{

loader.style.visibility="hidden";


},1000);



}

);

}





window.addEventListener(
"load",
()=>{


setTimeout(()=>{


if(loader){

loader.style.opacity="0";


setTimeout(()=>{


loader.style.display="none";


},1000);


}



},1800);



});








/* ==========================
SCROLL REVEAL
========================== */



const revealElements =
document.querySelectorAll(".reveal");



const revealObserver =

new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"active"
);


revealObserver.unobserve(
entry.target
);


}



});


},

{


threshold:.15

}

);




revealElements.forEach(
(element)=>{


revealObserver.observe(
element
);


}

);








/* ==========================
SMOOTH NAVIGATION
========================== */



document
.querySelectorAll(
".nav-links a"
)

.forEach(link=>{


link.addEventListener(
"click",
(e)=>{


e.preventDefault();



const target =

document.querySelector(

link.getAttribute("href")

);



if(target){


target.scrollIntoView({

behavior:"smooth"

});


}


}


);


});









/* ==========================
CARD TILT EFFECT
========================== */



const cards =

document.querySelectorAll(
".glass-card"
);



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const box =
card.getBoundingClientRect();



const x =

e.clientX -
box.left;



const y =

e.clientY -
box.top;



const rotateX =

(y-box.height/2)/25;



const rotateY =

(box.width/2-x)/25;



card.style.transform =

`
perspective(900px)
rotateX(${-rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;



}

);





card.addEventListener(
"mouseleave",
()=>{


card.style.transform="";


}

);



});









/* ==========================
CURSOR GLOW
========================== */



const glow =
document.createElement("div");



glow.className =
"cursor-glow";



document.body.appendChild(
glow
);



Object.assign(
glow.style,
{

position:"fixed",

width:"250px",

height:"250px",

borderRadius:"50%",

background:
"radial-gradient(circle,rgba(200,169,106,.15),transparent 70%)",

pointerEvents:"none",

transform:"translate(-50%,-50%)",

zIndex:"0",

transition:"0.15s"

}

);






window.addEventListener(
"mousemove",
(e)=>{


glow.style.left =
e.clientX+"px";


glow.style.top =
e.clientY+"px";



});









/* ==========================
HERO PARALLAX
========================== */


const hero =
document.querySelector(".hero");



window.addEventListener(
"scroll",
()=>{


if(hero){


let scroll =
window.scrollY;


hero.style.backgroundPosition =

`
center
${scroll * .25}px
`;



}


});







/* ==========================
ACTIVE NAV STATE
========================== */



const sections =

document.querySelectorAll(
"section"
);



const navLinks =

document.querySelectorAll(
".nav-links a"
);



window.addEventListener(
"scroll",
()=>{


let current="";



sections.forEach(section=>{


let top =
window.scrollY;



let offset =
section.offsetTop - 200;



if(top >= offset){

current =
section.id;


}



});



navLinks.forEach(link=>{


link.style.color="white";



if(
link.getAttribute("href")
===
"#"+current
){


link.style.color =
"#c8a96a";


}



});


});





});
