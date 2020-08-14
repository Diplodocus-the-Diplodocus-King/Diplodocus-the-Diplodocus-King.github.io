import './styles/navbar.css';

class Navbar{
    constructor(){
        this.navLinks = document.querySelectorAll('.navbar li');
        this.profile = document.querySelector('.profile');
        this.profileBack = document.querySelector('.profile-back');
        this.home = document.querySelector('.home');
        this.about = document.querySelector('.about');
        this.projects = document.querySelector('.projects');
        this.experience = document.querySelector('.experience');
        this.contact = document.querySelector('.contact');
        this.scroll = document.querySelector('.scroll-container');
        this.height = document.documentElement.clientHeight;
        this.scrollBar = document.querySelector('.scroll-container');
    }
    init(){
        // create event listeners for each link and set scroll callback function
        this.navLinks.forEach(link => {
            // we dont want this behaviour for the img
            if(link.classList.contains('nav')){
                link.addEventListener('click', () => {
                    const section = document.querySelector(link.getAttribute('data-target'));
                    const scrollOptions = {
                        top: section.offsetTop,
                        left: 0,
                        behavior: 'smooth'
                    };   
                    window.scrollTo(scrollOptions);
                });
                // remove active class
                link.classList.remove('active');

                if(link.innerText === 'HOME'){
                    link.classList.add('active');
                }
            }
        });

        // create event listener for scroll
        document.addEventListener('scroll', e => {
            if(self.pageYOffset < this.about.offsetTop){
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if(link.getAttribute('data-target') === '.home'){
                        link.classList.add('active');
                    }
                });
            } else if(self.pageYOffset < this.projects.offsetTop && self.pageYOffset >= this.about.offsetTop){
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if(link.getAttribute('data-target') === '.about'){
                        link.classList.add('active');
                    }
                });
            } else if(self.pageYOffset < this.experience.offsetTop && self.pageYOffset >= this.projects.offsetTop){
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if(link.getAttribute('data-target') === '.projects'){
                        link.classList.add('active');
                    }
                });
            } else if(self.pageYOffset < this.contact.offsetTop && self.pageYOffset >= this.experience.offsetTop){
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if(link.getAttribute('data-target') === '.experience'){
                        link.classList.add('active');
                    }
                });
            } else if(self.pageYOffset >= this.contact.offsetTop){
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if(link.getAttribute('data-target') === '.contact'){
                        link.classList.add('active');
                    }
                });
            }
            if(self.pageYOffset >= 935){
                this.scrollBar.classList.remove('scroll-active');
            }
        });
  
        // create click event on profile picture
        this.profile.addEventListener('click', () => {
            this.profileBack.classList.remove('spin');
            this.profile.classList.remove('spin-rev');
            this.profile.classList.add('spin');
            this.profileBack.classList.add('spin-rev');
        });
        this.profileBack.addEventListener('click', () => {
            this.profile.classList.remove('spin');
            this.profileBack.classList.remove('spin-rev');
            this.profileBack.classList.add('spin');
            this.profile.classList.add('spin-rev');
        }); 
        
        // position scroll icon
        if(this.height >= 935){
            this.scrollBar.style.top = '430px';
        } else if(this.height <= 570){
            this.scrollBar.style.top = '130px';
        } else{
            const scrollPos = 130 + (300*((this.height-570)/(935-570)));
            this.scrollBar.style.top = `${scrollPos}px`;
        }

        // delay showing of scroll icon
        setTimeout(() => {
            if(self.pageYOffset < 935){
                this.scrollBar.classList.add('scroll-active');
                console.log(self.pageYOffset);
            }
        }, 3000);

        // click event on scroll down animation
        this.scroll.addEventListener('click', () => {
            const scrollOptions = {
                top: this.about.offsetTop,
                left: 0,
                behavior: 'smooth'
            };   
            window.scrollTo(scrollOptions);
            this.scrollBar.classList.remove('scroll-active');
        });
    }
}

export {Navbar as default};