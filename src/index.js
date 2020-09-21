import Tooltip from './ui_files/tooltip';
import Projects from './ui_files/projects';

// display projects
const projects = new Projects();
projects.init();

// create tooltips
const tooltip = new Tooltip();
tooltip.init();

// contact form validation
function validateForm() {

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
}

document.onload(() => {
    const contactForm = document.querySelector('#contact-form');
    contactForm.onsubmit = validateForm();
    console.log(contactForm);
});


// Logo spin
const navLogo = document.querySelector('.nav-logo');
navLogo.addEventListener('click', e => {
    e.preventDefault();
    navLogo.style.transition = 'transform 1.5s';
    navLogo.style.transform = 'rotateZ(360deg)';
});