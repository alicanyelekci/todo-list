export class Todos {
    constructor(title, text, dueDate, project, priority){
        this.title = title;
        this.text = text;
        this.dueDate = dueDate;
        this.project = project;
        this.priority = priority;
    }
}

export class Projects {
    constructor(title) {
        this.title = title;
    }
}

export class Notes {
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }
}