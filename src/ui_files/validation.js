class FormValidation{
    constructor(){
        this.contactForm = document.querySelector('#contact-form');
    }
    init(){
        // create event listener on submit
        this.contactForm.addEventListener('submit', () => {
                
            // grab form input values
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;
        
            // name checks
            if (name.length > 50){
                alert('Name input is too long, please enter a shorthand version.');
                return false;
            } else if (name.match(/(<script>)/g) || name.match(/(<\/script>)/g)){
                alert('ah ah ah what\'s the magic word?');
                return false;
            }
        
            // email checks
            if (email.length > 320){
                alert('Email input is too long, please enter a valid email.');
                return false;
            } else if (email.match(/(<script>)/g) || email.match(/(<\/script>)/g)){
                alert('ah ah ah what\'s the magic word?');
                return false;
            }
        
            // message checks
            if (message.match(/(<script>)/g) || message.match(/(<\/script>)/g)){
                alert('ah ah ah what\'s the magic word?');
                return false;
            }

            return true;
        });
    }
}

export {FormValidation as default};