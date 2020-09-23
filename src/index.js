import Tooltip from './ui_files/tooltip';
import Projects from './ui_files/projects';
import FormValidation from './ui_files/validation';

document.addEventListener('DOMContentLoaded', () => {

    // display projects
    const projects = new Projects();
    projects.init();

    // create tooltips
    const tooltip = new Tooltip();
    tooltip.init();

    // create form validation
    const formValidation = new FormValidation();
    formValidation.init();

    // Logo spin
    const navLogo = document.querySelector('.nav-logo');
    navLogo.addEventListener('click', e => {
        e.preventDefault();
        if(navLogo.classList.contains('logo-clicked')){
            navLogo.classList.remove('logo-clicked');
            navLogo.classList.add('logo-unclicked');
        } else {
            navLogo.classList.remove('logo-unclicked');
            navLogo.classList.add('logo-clicked');  
        }
    });
});

