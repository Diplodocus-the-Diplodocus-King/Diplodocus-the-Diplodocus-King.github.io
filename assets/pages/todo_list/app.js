const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// generate html template for new to do
const genTemplate = newTodo => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${newTodo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`;

list.innerHTML += html;
};

// deals with new to do request
addForm.addEventListener('submit', e => {
    e.preventDefault();
    let newTodo = addForm.add.value.trim().toLowerCase(); // trim white spaces just to be clean

    if(newTodo.length){
        newTodo = newTodo.charAt(0).toUpperCase() + newTodo.slice(1);
        genTemplate(newTodo);
        addForm.reset(); // resets the form
    }
});

// delete to do
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

// search matching function
const filterList = (term) => {
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered')); // use ! to flip the boolean output so that it returns an array of to do that don't match the term.

        Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
    };

// search capability
search.addEventListener('keyup', () => {
    let term = search.value.trim().toLowerCase();
    filterList(term);
});

