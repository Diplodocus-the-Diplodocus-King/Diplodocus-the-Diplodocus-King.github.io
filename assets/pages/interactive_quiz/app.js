const correctAnswers = ['B', 'C', 'A', 'C', 'B'];

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const resultSpan = document.querySelector('.result span');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];  // NOTE - here value will return the value of the checked radio button

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 20;
        }
    });

    // show result
    scrollTo(0,0); // parameters are (x,y) (window object method)
    
    result.classList.remove('d-none');

    // animate score to increase up to percentage achieved
    let output = 0;
    const timer = setInterval(() => {
        resultSpan.textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else{
            output++;
        }
    }, 30);

});

// window object (global object) - reset to top of the page on submit
// NOTE - we dealing with the window object we do not need to state it as it's automatically inferred e.g. window.console.log() can be called with console.log()
// another example would be window.document.querySelector() which is the same as document.querySelector()

