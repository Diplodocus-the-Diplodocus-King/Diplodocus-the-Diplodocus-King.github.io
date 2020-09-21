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
    navLogo.style.transition = 'transform 1.5s';
    navLogo.style.transform = 'rotateZ(360deg)';
});
});

