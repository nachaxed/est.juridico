const menubtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links')

menubtn.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu')
})
var slidesTestimonio = document.querySelectorAll('.testimonio');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;
//js para imagen manual

var manualNav = function(manual){
    slidesTestimonio.forEach((slide)=> {
        slide.classList.remove('active');

        btns.forEach((btn) =>{
            btn.classList.remove('active');
        });
    });

    slidesTestimonio[manual].classList.add('active');
    btns[manual].classList.add('active');

    
}
btns.forEach((btn, i) =>{
    btn.addEventListener("click", ()=>{
        manualNav(i);
        currentSlide = i;
    })
})
//autoplay de slider nav
var repeat = function(){
    let active = document.getElementsByClassName('active');
    let posTestimonio = 1;
    
    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) =>{
                activeSlide.classList.remove('active');
            });
            slidesTestimonio[posTestimonio].classList.add('active');
            btns[i].classList.add('active');
            i++;
            console.log(i)
            if(slidesTestimonio.length == posTestimonio)
            {
                posTestimonio = 0;
            }
            if(i >= slidesTestimonio.length){
                return;
            }
            repeater();
        },3000);
    }
    repeater();
}
repeat();

//segundo carrusel

const menubtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links')

menubtn.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu')
})

var slidesPreguntas = document.querySelectorAll('.preguntas');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;
//js para imagen manual

var manualNav = function(manual){
slidesPreguntas.forEach((slide)=> {
    slide.classList.remove('active');

    btns.forEach((btn) =>{
        btn.classList.remove('active');
    });
});

slidesPreguntas[manual].classList.add('active');
btns[manual].classList.add('active');

btns.forEach((btn, i) =>{
    btn.addEventListener("click", ()=>{
        manualNav(i);
        currentSlide = i;
    })
})
//autoplay de slider nav
var repeat = function(){
    let active = document.getElementsByClassName('active');
    let posPreguntas = 1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) =>{
                activeSlide.classList.remove('active');
            });
            slidesPreguntas[posPreguntas].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slidesPreguntas.length == posPreguntas)
            {
                posPreguntas = 0;
            }
            if(i >= slidesPreguntas.length){
                return;
            }
            repeater();
        },3000);
    }
    repeater();
}}
repeat();