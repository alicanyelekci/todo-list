import Remove from "./remove.png";
import Edit from "./edit.png";

export default class Notes {

    static list = [];

    constructor(title, text) {
        this.title = title;
        this.text = text;

        Notes.list.push({title, text});
    }

    generateNoteDom() {
        const noteContainer = document.createElement('div');
        noteContainer.className = 'note-item';
        document.querySelector('.notes-page').appendChild(noteContainer);

        const title = document.createElement('div');
        title.className = 'title';
        title.innerText = this.title;
        noteContainer.appendChild(title);

        const text = document.createElement('div');
        text.className = 'text';
        text.innerText = this.text;
        noteContainer.appendChild(text);

        const edit = document.createElement('img');
        edit.className = 'edit';
        edit.src = Edit;
        noteContainer.appendChild(edit);

        const remove = document.createElement('img');
        remove.className = 'remove';
        remove.src = Remove;
        noteContainer.appendChild(remove);
        
        title.addEventListener('click', () => {
            // pop up window shows details
        });
        
        edit.addEventListener('click', () => {
            this.editForm(title, text);
        });
        
        remove.addEventListener('click', () => {
            this.deleteDom(noteContainer);
        });        
    }

    editForm(titleDom, textDom) {
        document.querySelector('.edit-note-window').style.display = 'block';
        document.querySelector('.add-window').style.display = 'none';

        this.generateForm();

        const saveBtn = document.querySelector('.save');
        const titleForm = document.getElementById('edit-title');
        const textForm = document.getElementById('edit-text');

        titleForm.value = this.title;
        textForm.value = this.text;
        
        saveBtn.addEventListener('click', () => {
            this.title = titleForm.value;
            this.text = textForm.value;
            
            titleDom.innerText = this.title;
            textDom.innerText = this.text;

            this.removeForm();
            document.querySelector('.edit-note-window').style.display = 'none';
        });
    }

    generateForm() {
        const form = document.createElement('form');
        form.className = 'edit-note-form';
        document.querySelector('.edit-note-window').appendChild(form);
        
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

        const btn = document.createElement('div');
        btn.className = 'save';
        btn.innerText = 'Save Changes';
        form.appendChild(btn);
    }

    removeForm() {
        document.querySelector('.edit-note-form').remove();
    }
    
    deleteDom(item) {
        delete this.title;
        delete this.text;
        
        const index = Notes.list.findIndex(key => key.title === undefined);
        Notes.list.splice(index, 1);
        
        item.remove();
    }
}