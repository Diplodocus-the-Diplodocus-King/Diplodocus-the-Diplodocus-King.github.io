import './styles/carousel.css';

class Carousel {
    constructor(){
        this.index = 1;
        this.slides = document.querySelectorAll('.slides');
        this.next = document.querySelector('.next');
        this.prev = document.querySelector('.prev');
        this.dotContainer = document.querySelector('.dot-container');

    }
    init(){

        // create dots based on number of slides
        let dotN = 1;
        this.slides.forEach(() => {
            this.dotContainer.innerHTML += `<span class="dot" id="${dotN}"></span>`
            dotN ++;
        });

        // ensure index is at default position on init
        this.index = 1;
        this.showSlide();

        // add event listeners
        this.next.addEventListener('click', e => {
            e.preventDefault();
            this.index ++;
            this.showSlide();
        });

        this.prev.addEventListener('click', e => {
            e.preventDefault();
            this.index --;
            this.showSlide();
        });

        this.dotContainer.addEventListener('click', e => {
           if(e.target.classList.contains('dot')){
               this.index = e.target.getAttribute('id');
               this.showSlide();
           }
        });

        setInterval(() => {
            this.index++;
            this.showSlide();
        }, 10000);

    }
    showSlide(){

        // ensure index counter goes round the corner
        if(this.index < 1){this.index = this.slides.length}
        if(this.index > this.slides.length){this.index = 1}

        // ensure the slides are hidden
        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        // same for dot activeness
        this.dot = document.querySelectorAll('.dot');
        this.dot.forEach(dot => {
            dot.classList.remove("active");
        });

        // show current slide
        this.slides[this.index-1].style.display = 'block';
        this.dot[this.index-1].classList.add("active");
    }
}

export {Carousel as default};