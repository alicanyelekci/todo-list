import Remove from './remove.png';
import Edit from './edit.png';
import Projects from './projects.js';

export default class Todos {

    static list = [];

    constructor(title, text, dueDate, project, priority){
        this.title = title;
        this.text = text;
        this.dueDate = dueDate;
        this.project = project;
        this.priority = priority;

        Todos.list.push({title, text, dueDate, project, priority});
    }

    generateDom() {
        const todoContainer = document.createElement('div');
        todoContainer.className = 'todo-item';
        document.querySelector('.todos-page').appendChild(todoContainer);

        const complete = document.createElement('input');
        complete.className = 'complete';
        complete.type = 'checkbox';
        todoContainer.appendChild(complete);

        const title = document.createElement('div');
        title.className = 'title';
        title.innerText = this.title;
        todoContainer.appendChild(title);

        const date = document.createElement('div');
        date.className = 'date';
        date.innerText = this.getDueDate(this.dueDate);
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
            this.complete(title);
        });
        
        edit.addEventListener('click', () => {
            this.editForm(title, date);
        });
        
        remove.addEventListener('click', () => {
            this.deleteDom(todoContainer);
        });        
    }
    
    complete(title) {
        if(title.style.textDecoration !== 'line-through') title.style.textDecoration = 'line-through';
        else title.style.removeProperty('text-decoration');
    }
    
    editForm(titleDom, dateDom) {
        document.querySelector('.edit-todo-window').style.display = 'block';
        document.querySelector('.add-window').style.display = 'none';

        this.generateForm();

        const saveBtn = document.querySelector('.save');
        const titleForm = document.getElementById('edit-title');
        const textForm = document.getElementById('edit-text');
        const dateForm = document.getElementById('edit-date');
        const projectForm = document.getElementById('edit-projects');
        const priorityForm = document.getElementById('edit-priority');

        titleForm.value = this.title;
        textForm.value = this.text;
        dateForm.value = this.dueDate;
        projectForm.value = this.project;
        priorityForm.value = this.priority;
        
        saveBtn.addEventListener('click', () => {
            this.title = titleForm.value;
            this.text = textForm.value;
            this.dueDate = this.getDueDate(dateForm.value);
            this.project = projectForm.value;
            this.priority = priorityForm.value;
            
            titleDom.innerText = this.title;
            dateDom.innerText = this.dueDate;

            this.removeForm();
            document.querySelector('.edit-todo-window').style.display = 'none';
        });
    }

    getDueDate(dueDate) {
        const date = dueDate.split('-');
        const day = date[2];
        const month = date[1];
        const year = date[0];
        if(year === '') return '';
        return `${day}/${month}/${year}`;
    }

    generateForm() {
        const form = document.createElement('form');
        form.className = 'edit-todo-form';
        document.querySelector('.edit-todo-window').appendChild(form);
        
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'edit-title';
        input.name = 'title';
        input.placeholder = 'Title';
        input.required = true;
        form.appendChild(input);

        const text = document.createElement('textarea');
        text.name = 'text';
        text.id = 'edit-text';
        text.cols = '30';
        text.rows = '6';
        text.placeholder = 'Description';
        form.appendChild(text);

        const dueDate = document.createElement('input');
        dueDate.type = 'date';
        dueDate.id = 'edit-date';
        dueDate.name = 'due-date';
        form.appendChild(dueDate);

        const projects = document.createElement('select');
        projects.id = 'edit-projects';
        projects.name = 'projects';
        projects.required = true;
        form.appendChild(projects);

        const projectOptions = Projects.list;
        projectOptions.forEach(key => {
            const project = document.createElement('option');
            project.value = `${key.title}`;
            project.innerText = `${key.title.toUpperCase()}`;
            projects.appendChild(project);
        });

        const priority = document.createElement('select');
        priority.id = 'edit-priority';
        priority.name = 'priority';
        priority.required = true;
        const low = document.createElement('option');
        low.value = 'low';
        low.innerText = 'Low';
        priority.appendChild(low);
        const medium = document.createElement('option');
        medium.value = 'medium';
        medium.innerText = 'Medium';
        priority.appendChild(medium);
        const high = document.createElement('option');
        high.value = 'high';
        high.innerText = 'High';
        priority.appendChild(high);
        form.appendChild(priority);

        const btn = document.createElement('div');
        btn.className = 'save';
        btn.innerText = 'Save Changes';
        form.appendChild(btn);
    }

    removeForm() {
        document.querySelector('.edit-todo-form').remove();
    }
    
    deleteDom(todoContainer) {
        delete this.title;
        delete this.text;
        delete this.dueDate;
        delete this.project;
        delete this.priority;
        
        const index = Todos.list.findIndex(key => key.title === undefined);
        Todos.list.splice(index, 1);
        
        todoContainer.remove();
    }
}