import './styles/tooltip.css';

class Tooltip {
    constructor(){
        this.element = document.querySelectorAll('.tooltip');        
    }
    init(){
        
        this.element.forEach(tooltip => {
            const tip = document.createElement('div');

            tip.classList.add('tip');
            tip.textContent = tooltip.getAttribute('data-message');
            tooltip.appendChild(tip);

            tooltip.addEventListener('mouseenter', () => {
                tip.classList.add('active');
            });

            tooltip.addEventListener('mouseleave', () => {
                tip.classList.remove('active');
            });
        });
    }
}

export {Tooltip as default};