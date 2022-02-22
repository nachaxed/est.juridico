var slide1 = document.querySelectorAll('.slide1');
var btns1 = document.querySelectorAll('.btn1');
let currentSlide1 = 1;

//js para imagen manual nav
var manualNav1 = function(manual){
    slide1.forEach((slide1) =>{
        slide1.classList.remove('active1');

        btns1.forEach((btn1)=>{
            btn1.classList.remove('active1');
        });
    });

    slide1[manual].classList.add('active1');
    btns1[manual].classList.add('active1');

}
btns1.forEach((btn1,i) =>{
    btn1.addEventListener("click",()=>{
            manualNav1(i);
            currentSlide1 = i;
        });
});
//auto´play nav
var repeat = function(){
    let active1 = document.getElementsByClassName('active1');
    let i= 1;

    var repeater = () =>{
        setTimeout(function(){
            [...active1].forEach((activeClass) =>{
                activeClass.classList.remove('active1')
            });
            slide1[i].classList.add('active1');
            btns1[i].classList.add('active1');
            i++;

            if(slide1.length == i )
            {
                i =0;
            }
            if ( i >= slide1.length){
                return;
            }
            repeater();
        },7000);
        }
        repeater();
    }
    repeat();