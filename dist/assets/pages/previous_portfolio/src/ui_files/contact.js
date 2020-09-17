import './styles/contact.css';

class Contacts{
    constructor(){
        this.info = document.querySelector('.contact-display');
        this.email = document.querySelector('#email');
        this.phone = document.querySelector('#phone');
        this.location = document.querySelector('#location');
    }
    init(){

        this.email.addEventListener('click', () => {
            this.info.innerHTML = '<p>harry.holden@thediplodocus.co.uk</p>';
        });

        this.phone.addEventListener('click', () => {
            this.info.innerHTML = '<p>+44 (0) 7845635336</p>';
        });

        this.location.addEventListener('click', () => {
            this.info.innerHTML = '<p>Bristol, BS7</p>';
        });
    }
}

export {Contacts as default};