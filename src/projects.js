import Todos from "./todos";

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

            const projectPage = document.createElement('div');
            projectPage.className = 'project-page';
            projectPage.id = `${key.title}`;
            document.querySelector('.project-pages').appendChild(projectPage);
        });

        // const projectOptions = document.querySelectorAll('.project-option');

        // projectOptions.forEach(key => {
        //     key.addEventListener('click', () => {
        //         document.querySelector('.add-window').style.display = 'none';
        //         document.querySelector('.todos-page').style.display = 'none';
        //         document.querySelector('.notes-page').style.display = 'none';
        //         document.getElementById(`${key.title}`).style.display = 'block';
        //     })
        // });
    }

    generateProjectPage() {

    }

    removeProject() {

    }

    static removeAll() {
        const projects = document.querySelectorAll('.project-option');
        projects.forEach(key => key.remove());
    }
}