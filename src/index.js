import { Todos, Projects, Notes } from './todos.js';
import './style.css';
import Remove from "./remove.png";
import Edit from "./edit.png";

const domManipulator = () => {
    let todos = [];
    let projects = ['MAIN'];
    let notes = [];

    const generatePage = () => {
        updateTodoFormProjectOptions();
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
            document.getElementById('priority').value
        );
        todos.push(todo);

        const title = document.getElementById('todo-title').value;
        const dueDate = getDueDate(document.getElementById('due-date').value);
        generateTodoItem(title, dueDate);
    };
    const generateProject = () => {
        const project = new Projects(document.getElementById('project-title').value);
        projects.push(project.title.toUpperCase());
        updateTodoFormProjectOptions();
    };
    const generateNote = () => {
        const note = new Notes(
            document.getElementById('note-title').value,
            document.getElementById('note-text').value
        );
        notes.push(note);
        generateDOMElement('.notes-page', 'div', 'note-item', note.title);
    };

    const generateTodoItem = (text, dueDate) => {
        const todoContainer = document.createElement('div');
        todoContainer.className = 'todo-item';
        document.querySelector('.todos-page').appendChild(todoContainer);

        const complete = document.createElement('div');
        complete.className = 'complete';
        complete.innerText = 'X';
        // show a checkbox for complete
        todoContainer.appendChild(complete);
        const title = document.createElement('div');
        title.className = 'title';
        title.innerText = text;
        todoContainer.appendChild(title);
        const date = document.createElement('div');
        date.className = 'date';
        date.innerText = dueDate;
        todoContainer.appendChild(date);
        const edit = document.createElement('img');
        edit.className = 'edit';
        edit.src = Edit;
        todoContainer.appendChild(edit);
        const remove = document.createElement('img');
        remove.className = 'remove';
        remove.src = Remove;
        todoContainer.appendChild(remove);

        complete.addEventListener('click', () => {
            // add a checkbox
            if(title.style.textDecoration !== 'line-through') title.style.textDecoration = 'line-through';
            else title.style.removeProperty('text-decoration');
        });
        title.addEventListener('click', () => {
            //generate and show details window
        });
        edit.addEventListener('click', () => {
            //open the add todo window with the details and allow editing the details
            document.querySelector('.add-window').style.display = 'none';
            const todoForm = document.querySelector('.edit-todo-form');
            todoForm.style.display = 'block';
            const index = todos.findIndex(todo => todo.title === text);
            document.getElementById('edit-todo-title').value = todos[index].title;
            document.getElementById('edit-todo-text').value = todos[index].text;
            document.getElementById('edit-due-date').value = todos[index].dueDate;
            document.getElementById('edit-projects').value = todos[index].project;
            document.getElementById('edit-priority').value = todos[index].priority;
            
        });
        remove.addEventListener('click', () => {
            const index = todos.findIndex(todo => todo.title === text);
            todos.splice(index, 1);
            todoContainer.remove();
        });
    };

    const getDueDate = (dueDate) => {
        const date = dueDate.split('-');
        const day = date[2];
        const month = date[1];
        const year = date[0];
        if(year === '') return '';
        return `${day}/${month}/${year}`;
    };

    const generateNoteItem = (heading, description) => {
        const noteContainer = document.createElement('div');
        noteContainer.className = 'note-item';
        document.querySelector('.notes-page').appendChild(noteContainer);
        const title = document.createElement('div');
        title.className = 'title';
        title.innerText = heading;
        noteContainer.appendChild(title);
        const text = document.createElement('div');
        text.className = 'title';
        text.innerText = description;
        noteContainer.appendChild(text);
        const edit = document.createElement('img');
        edit.className = 'edit';
        edit.src = Edit;
        todoContainer.appendChild(edit);
        const remove = document.createElement('img');
        remove.className = 'remove';
        remove.src = Remove;
        todoContainer.appendChild(remove);
        
    };

    const updateTodoFormProjectOptions = () => {
        const projectsSelection = document.getElementById('projects');
        projects.forEach(key => {
            const projectOption = document.createElement('option');
            projectOption.value = `${key}`;
            projectOption.innerText = `${key}`;
            projectsSelection.appendChild(projectOption);
        });
        updateSidebarProjectNames();
        projects = [];
    };

    const updateSidebarProjectNames = () => {
        const sidebarProjects = document.querySelector('.project-names');
        projects.forEach(key => {
            const projectName = document.createElement('li');
            projectName.innerText = `${key}`;
            sidebarProjects.appendChild(projectName);
        });
    };

    const generateDOMElement = (parentClass, elementType, elementClass, text = '') => {
        const element = document.createElement(elementType);
        element.className = elementClass;
        element.innerText = text;
        if(parentClass === document) {
            document.body.appendChild(element);
        }
        else {
            const parent = document.querySelector(parentClass);
            parent.appendChild(element);
        }
    };

    return {generatePage, generateDOMElement, clearForms, generateTodo, generateProject, generateNote};
};

const page = domManipulator();
page.generatePage();

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