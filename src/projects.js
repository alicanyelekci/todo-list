import Todos from './todos.js';

export default class Projects {

    static list = [{title: 'MAIN'}];

    constructor(title) {
        this.title = title;

        Projects.list.push({title});
    }

    static addProjectDom() {
        Projects.removeAll();

        const projectSelection = document.getElementById('projects');
        const sidebarProjects = document.querySelector('.project-names');
        const projectsList = Projects.list;

        projectsList.forEach(key => {
            const projectOption = document.createElement('option');
            projectOption.value = `${key.title}`;
            projectOption.innerText = `${key.title.toUpperCase()}`;
            projectOption.className = 'project-option';
            projectSelection.appendChild(projectOption);

            const projectName = document.createElement('li');
            projectName.innerText = `${key.title.toUpperCase()}`;
            projectName.className = 'project-option';
            sidebarProjects.appendChild(projectName);

            projectName.addEventListener('click', () => {
                Projects.filterByProject(key.title);
            });

            const projectPage = document.createElement('div');
            projectPage.className = 'project-page';
            projectPage.id = `${key.title}`;
            document.querySelector('.project-pages').appendChild(projectPage);
        });
    }

    static filterByProject(projectName) {
        const projects = Projects.list;

        projects.forEach(key => {
            if(key.title === projectName) {
                const elements = document.querySelectorAll(`#${key.title.toString()}`);
                elements.forEach(key => key.style.display = 'flex');
            }
            else {
                const elements = document.querySelectorAll(`#${key.title}`);
                elements.forEach(key => key.style.display = 'none');
            }
        })
    }

    static showAll() {
        const projects = Projects.list;
        
        projects.forEach(key => {
            const elements = document.querySelectorAll(`#${key.title}`);
            elements.forEach(key => key.style.display = 'flex');
        })
    }
    
    static removeAll() {
        const projects = document.querySelectorAll('.project-option');
        projects.forEach(key => key.remove());
    }
    
    static removeEmptyProject() {
        const projectNames = Projects.list;
        const todos = Todos.list;
        let count = 0;
        
        projectNames.forEach(key => {
            todos.forEach(todo => {
                if(todo.project === key.title) count++;
            })

            if(count === 0 && key.title !== 'MAIN') {          
                projectNames.splice(projectNames.indexOf(key), 1);

                Projects.list = projectNames;
            }

            count = 0;
        })

        Projects.addProjectDom();
    }
}