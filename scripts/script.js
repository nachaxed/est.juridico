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
            btns[posTestimonio].classList.add('active');
            posTestimonio++;

            if(slidesTestimonio.length == posTestimonio)
            {
                posTestimonio = 0;
            }
            if(posTestimonio >= slidesTestimonio.length){
                return;
            }
            repeater();
        },7000);
    }
    repeater();
}
repeat();
