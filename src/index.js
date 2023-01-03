import Todos from './todos.js';
import Projects from './projects.js';
import Notes from './notes.js';

import './style.css';

const domManipulator = () => {
    const start = () => {
        Projects.addProjectDom();
    };

    const clearForms = () => {
        document.querySelector('.add-todo-form').reset();
        document.querySelector('.add-project-form').reset();
        document.querySelector('.add-note-form').reset();
    };

    const generateTodo = () => {
        const todo = new Todos(
            document.getElementById('todo-title').value,
            document.getElementById('todo-text').value,
            document.getElementById('due-date').value,
            document.getElementById('projects').value,
            document.getElementById('priority').value,
        );

        todo.generateDom();
    };

    const generateProject = () => {
        const project = new Projects(document.getElementById('project-title').value);
        
        Projects.addProjectDom();
    };
    
    const generateNote = () => {
        const note = new Notes(
            document.getElementById('note-title').value,
            document.getElementById('note-text').value
        );

        note.generateNoteDom();
    };

    // const updateTodoFormProjectOptions = () => {
    //     const projectSelection = document.getElementById('projects');
    //     const projectsList = Projects.list;
    //     projectsList.forEach(key => {
    //         const projectOption = document.createElement('option');
    //         projectOption.value = `${key.title.toUpperCase()}`;
    //         projectOption.innerText = `${key.title.toUpperCase()}`;
    //         projectOption.className = 'project-option';
    //         projectSelection.appendChild(projectOption);
    //     });
    //     updateSidebarProjectNames();
    // };

    // const updateSidebarProjectNames = () => {
    //     const sidebarProjects = document.querySelector('.project-names');
    //     const projectsList = Projects.list;
    //     projectsList.forEach(key => {
    //         const projectName = document.createElement('li');
    //         projectName.innerText = `${key.title.toUpperCase()}`;
    //         projectName.className = 'project-option';
    //         sidebarProjects.appendChild(projectName);
    //     });
    // };

    return {start, clearForms, generateTodo, generateProject, generateNote};
};

const page = domManipulator();
page.start();

const addTodoBtn = document.querySelector('.submit-todo');
const addProjectBtn = document.querySelector('.submit-project');
const addNoteBtn = document.querySelector('.submit-note');
const addBtn = document.querySelector('.add-button');
const newTodoBtn = document.querySelector('.new-todo');
const newProjectBtn = document.querySelector('.new-project');
const newNoteBtn = document.querySelector('.new-note');
const closeBtn = document.querySelector('.close');
const todoPageBtn = document.querySelector('.home');
const notePageBtn = document.querySelector('.notes');
const closeEditBtn = document.querySelector('.close-edit');

closeEditBtn.addEventListener('click', () => {
    document.querySelector('.edit-todo-window').style.display = 'none';
    document.querySelector('.edit-note-window').style.display = 'none';
});
addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault(); //prevents sending the form and refreshing the page
    page.generateTodo();
    page.clearForms();
});
addProjectBtn.addEventListener('click', (e) => {
    e.preventDefault(); //prevents sending the form and refreshing the page
    page.generateProject();
    page.clearForms();
});
addNoteBtn.addEventListener('click', (e) => {
    e.preventDefault(); //prevents sending the form and refreshing the page
    page.generateNote();
    page.clearForms();
});
newTodoBtn.addEventListener('click', () => {
    document.querySelector('.add-todo-form').style.display = 'block';
    document.querySelector('.add-project-form').style.display = 'none';
    document.querySelector('.add-note-form').style.display = 'none';
    page.clearForms();
});
newProjectBtn.addEventListener('click', () => {
    document.querySelector('.add-todo-form').style.display = 'none';
    document.querySelector('.add-project-form').style.display = 'block';
    document.querySelector('.add-note-form').style.display = 'none';
    page.clearForms();
});
newNoteBtn.addEventListener('click', () => {
    document.querySelector('.add-todo-form').style.display = 'none';
    document.querySelector('.add-project-form').style.display = 'none';
    document.querySelector('.add-note-form').style.display = 'block';
    page.clearForms();
});
addBtn.addEventListener('click', () => {
    document.querySelector('.add-window').style.display = 'grid';
});
closeBtn.addEventListener('click', () => {
    document.querySelector('.add-window').style.display = 'none';
    page.clearForms();
});
todoPageBtn.addEventListener('click', () => {
    document.querySelector('.todos-page').style.display = 'block';
    document.querySelector('.notes-page').style.display = 'none';
    document.querySelector('.add-window').style.display = 'none';
    page.clearForms();
})
notePageBtn.addEventListener('click', () => {
    document.querySelector('.todos-page').style.display = 'none';
    document.querySelector('.notes-page').style.display = 'block';
    document.querySelector('.add-window').style.display = 'none';
    page.clearForms();
})