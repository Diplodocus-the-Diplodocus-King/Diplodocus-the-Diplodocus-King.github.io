class Projects{
    constructor(){
        // connect to database
        this.projects = db.collection('projects');
        this.data = new Array();
        // project list div - projects to be listed here
        this.projectList = document.querySelector('.project-list');
        // project search bar
        this.searchBar = document.querySelector('.search');
        this.searchForm = document.querySelector('.project-search')
        // preview window elements
        this.previewImg = document.querySelector('.preview-img');
        this.projectName = document.querySelector('.project-name');
        this.githubLink = document.querySelector('.github-link');
        this.webpageLink = document.querySelector('.webpage-link');
        this.chipContainer = document.querySelector('.chip-container');
        this.projectInfo = document.querySelector('.project-info');
        // get carousel elements
        this.next = document.querySelector('.carousel-arrow-next');
        this.prev = document.querySelector('.carousel-arrow-prev');
        this.dotContainer = document.querySelector('.dot-container');
        // project selector variables
        this.clicked = false;
        this.counter = 0;
    }
    init(){
        // collect recipes from database and display in list
        this.getProjects();

        this.searchForm.addEventListener('submit', e => {
            e.preventDefault();
        });

        // search functionality
        this.searchBar.addEventListener('keyup', () => {
            let term = this.searchBar.value.trim().toLowerCase();
            this.filterList(term);
        });

    }
    getProjects(){
        this.projects.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type === 'added'){
                    this.data.push(change.doc.data());
                }
            });
            // display recipes
            this.displayList();
        });
    }
    displayList(){
        this.data.forEach(project => {
            this.projectList.innerHTML += 
            `
                <a href="#" class="btn-large transparent grey-text text-darken-4 project-btn">
                    <strong>${project.title}</strong><br>
                    (${project.subtitle})
                </a>
            `;

            this.dotContainer.innerHTML += `<i class="material-icons grey-text text-lighten-4 dot" id="dot-${project.title.replace(/\s/g, '-')}">brightness_1</i>`;
        });
        // once done add listeners
        this.addListeners();
    }
    addListeners(){

        // load initial project view
        const title = this.data[this.counter].title;
        // update dots and project
        this.updateDots(title);
        this.displayProject(title);

        // set up event listeners on hover and click
        const projectBtn = document.querySelectorAll('.project-btn');
        
        projectBtn.forEach(button => {
            button.addEventListener('mouseover', e => {
                // only enable if no project is selected
                if(this.clicked === false){
                // grab title
                const title = e.target.innerText.slice(0, e.target.innerText.indexOf('(')).trim().toLowerCase();
                // display project
                this.displayProject(title);
                }
            });
                
            button.addEventListener('click', e => {
                e.preventDefault();
                
                if(this.clicked === false){
                    // select project
                    button.classList.remove('transparent');
                    button.classList.add('amber', 'darken-3', 'clicked');
                    this.clicked = true;

                    // grab title
                    const title = e.target.innerText.slice(0, e.target.innerText.indexOf('(')).trim().toLowerCase();
                    // display project
                    this.displayProject(title);

                } else if(this.clicked === true && document.querySelector('.clicked') == button){
                    // unselect currently selected to enable hover functionality again
                    button.classList.remove('amber', 'darken-3', 'clicked');
                    button.classList.add('transparent');
                    this.clicked = false;
                } else if (this.clicked === true){
                    // unselect currently selected and select new project
                    const selectedProject = document.querySelector('.clicked');

                    selectedProject.classList.remove('amber', 'darken-3', 'clicked');
                    selectedProject.classList.add('transparent');

                    button.classList.remove('transparent');
                    button.classList.add('amber', 'darken-3', 'clicked');

                    // grab title
                    const title = e.target.innerText.slice(0, e.target.innerText.indexOf('(')).trim().toLowerCase();
                    // display project
                    this.displayProject(title);
                }  
            });
        });
        
        // add project carousel event listeners
        this.next.addEventListener('click', () => {

            // add to counter
            this.counter ++;
            // ensure counter goes round the corner
            if(this.counter > this.data.length -1){
                this.counter = 0;
            }     

            // grab project title corresponding to counter and display project
            const title = this.data[this.counter].title;

            // update dots
            this.updateDots(title);

            // display project
            this.displayProject(title);
        });

        this.prev.addEventListener('click', () => {

            // add to counter
            this.counter --;
            // ensure counter goes round the corner
            if(this.counter < 0){
                this.counter = this.data.length -1;
            }

            // grab project title corresponding to counter and display project
            const title = this.data[this.counter].title;

            // update dots
            this.updateDots(title);

            // display project
            this.displayProject(title);            
        });

        this.dotContainer.addEventListener('click', e => {
            // check if a dot was the target and display relevant dot project
            if(e.target.classList.contains('dot')){
                // grab title
                const title = e.target.getAttribute('id').slice(4, e.target.getAttribute('id').length).replace(/\-/g, ' ');
                
                // update dots
                this.updateDots(title);

                // display project
                this.displayProject(title);  
            }

        });
    }
    displayProject(title){
        this.data.forEach(project => {
            if(project.title === title){
                this.previewImg.setAttribute('src', project.image);
                this.projectName.innerText = project.title;
                this.githubLink.setAttribute('href', project.github);
                this.projectInfo.innerText = project.info;

                if(project.webpage == 'null'){
                    this.webpageLink.classList.add('disabled');
                } else {
                    this.webpageLink.classList.remove('disabled');
                    this.webpageLink.setAttribute('href', project.webpage);
                }

                // reset chip container
                this.chipContainer.innerHTML = "";

                const chipColourArray = [
                    
                    'html', 'blue', 
                    'css', 'orange',
                    'javascript', 'yellow',
                    'api', 'green',
                    'firebase', 'red',
                    'python', 'cyan',
                    'qt', 'pink',
                    'bootstrap', 'purple',
                    'babel', 'brown',
                    'materialize', 'teal'
                ]; 
                
                project.chips.forEach(chip => {
                    
                    const chipColour = chipColourArray[chipColourArray.indexOf(chip)+1];
                    
                    this.chipContainer.innerHTML += `<div class="chip z-depth-1 ${chipColour}">${chip}</div>`;
                });
            }
        });
    }
    filterList(term){

        // filter recipes function
        const projectArray = this.projectList.querySelectorAll('a');
            
        Array.from(projectArray)
            .filter(project => !project.textContent.slice(0, project.textContent.indexOf('(')).toLowerCase().includes(term))
            .forEach(project => project.classList.add('filtered'));
    
        Array.from(projectArray)
            .filter(project => project.textContent.slice(0, project.textContent.indexOf('(')).toLowerCase().includes(term))
            .forEach(project => project.classList.remove('filtered'));
        
    }
    updateDots(title){
        // set active dot
        const dots = document.querySelectorAll('.dot');

        dots.forEach(dot => {
            
            if(dot.getAttribute('id') === `dot-${title.replace(/\s/g, '-')}`){
                dot.classList.remove('grey-text', 'text-lighten-4')
                dot.classList.add('amber-text', 'text-darken-3');
            } else {
                dot.classList.remove('amber-text', 'text-darken-3');
                dot.classList.add('grey-text', 'text-lighten-4')
            }
        });
    }
}

export {Projects as default};