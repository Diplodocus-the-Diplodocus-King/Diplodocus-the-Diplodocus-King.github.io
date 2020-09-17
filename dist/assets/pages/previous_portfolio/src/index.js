import Navbar from './ui_files/navbar';
import Tabs from './ui_files/tabs';
import Carousel from './ui_files/carousel';
import Tooltip from './ui_files/tooltip';
import Contacts from './ui_files/contact';
import './ui_files/styles/main.css';
import './ui_files/styles/home.css';
import './ui_files/styles/about.css';
import './ui_files/styles/projects.css';
import './ui_files/styles/experience.css';

// create navbar
const navbar = new Navbar();
navbar.init();

// create tabs
const tabs = new Tabs();
tabs.init();

// create about picture carousel
const carousel = new Carousel();
carousel.init();

// create tooltips
const tooltip = new Tooltip();
tooltip.init();

// create contacts tabs
const contacts = new Contacts();
contacts.init();