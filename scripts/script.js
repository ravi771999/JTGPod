let slidePosition = 0;
const slides = document.getElementsByClassName('card');
const count_slides=slides.length;

console.log(count_slides);
console.log(slides);

document.getElementById('arrow-next').addEventListener("click",function(){
    moveToNextSlide();
});

document.getElementById('arrow-prev').addEventListener("click",function(){
    moveToPrevSlide();
})

function moveToNextSlide(){
    slides[(slidePosition+3)%count_slides].classList.add('card--visible');
    slides[slidePosition%count_slides].classList.add('card--hidden');
    slides[(slidePosition+3)%count_slides].classList.remove('card--hidden');
    slides[slidePosition%count_slides].classList.remove('card--visible');
    
    slidePosition=(slidePosition+1)%count_slides;
}

function moveToPrevSlide(){
    slides[(slidePosition-1+count_slides)%count_slides].classList.add('card--visible');
    slides[(slidePosition+2)%count_slides].classList.add('card--hidden');
    slides[(slidePosition-1+count_slides)%count_slides].classList.remove('card--hidden');
    slides[(slidePosition+2)%count_slides].classList.remove('card--visible');

    slidePosition=(slidePosition-1+count_slides)%count_slides;
}