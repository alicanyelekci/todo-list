import { format } from "date-fns";
import Remove from "./remove.png";
import Edit from "./edit.png";
import Projects from "./projects.js";

export default class Todos {
  static list = [];

  constructor(title, text, dueDate, project, priority) {
    this.title = title;
    this.text = text;
    this.dueDate = dueDate;
    this.project = project;
    this.priority = priority;

    Todos.list.push({ title, text, dueDate, project, priority });
  }

  static removeEmptyProject() {
    const projectNames = Projects.list;
    const todos = Todos.list;
    let count = 0;

    projectNames.forEach((key) => {
      todos.forEach((todo) => {
        if (todo.project === key.title) count += 1;
      });

      if (count === 0 && key.title !== "MAIN") {
        projectNames.splice(projectNames.indexOf(key), 1);

        Projects.list = projectNames;
      }

      count = 0;
    });

    Projects.addProjectDom();
  }

  static filterByDueDate() {
    const todoItems = document.querySelectorAll(".todo-item");

    todoItems.forEach((key) => {
      const date = key.querySelector(".date");

      if (date.innerText === Todos.getCurrentDate()) {
        key.style.display = "flex";
      } else {
        key.style.display = "none";
      }
    });
  }

  static getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
  }

  generateDom() {
    const todoContainer = document.createElement("div");
    todoContainer.className = "todo-item";
    todoContainer.id = this.project.toString();
    document.querySelector(".todos-page").appendChild(todoContainer);

    const complete = document.createElement("input");
    complete.className = "complete";
    complete.type = "checkbox";
    todoContainer.appendChild(complete);

    const title = document.createElement("div");
    title.className = "title";
    title.innerText = this.title;
    todoContainer.appendChild(title);

    const date = document.createElement("div");
    date.className = "date";
    date.innerText = format(new Date(this.dueDate), "dd/MM/yyyy");
    todoContainer.appendChild(date);

    const edit = document.createElement("img");
    edit.className = "edit";
    edit.src = Edit;
    todoContainer.appendChild(edit);

    const remove = document.createElement("img");
    remove.className = "remove";
    remove.src = Remove;
    todoContainer.appendChild(remove);

    complete.addEventListener("click", () => {
      Todos.complete(title);
    });

    edit.addEventListener("click", () => {
      this.editForm(title, date);
    });

    remove.addEventListener("click", () => {
      this.deleteDom(todoContainer);
    });
  }

  static complete(title) {
    if (title.style.textDecoration !== "line-through")
      title.style.textDecoration = "line-through";
    else title.style.removeProperty("text-decoration");
  }

  editForm(titleDom, dateDom) {
    document.querySelector(".edit-todo-window").style.display = "block";
    document.querySelector(".add-window").style.display = "none";

    Todos.generateForm();

    const saveBtn = document.querySelector(".save");
    const closeBtn = document.querySelector(".close-edit");
    const titleForm = document.getElementById("edit-title");
    const textForm = document.getElementById("edit-text");
    const dateForm = document.getElementById("edit-date");
    const projectForm = document.getElementById("edit-projects");
    const priorityForm = document.getElementById("edit-priority");

    titleForm.value = this.title;
    textForm.value = this.text;
    dateForm.value = this.dueDate;
    projectForm.value = this.project;
    priorityForm.value = this.priority;

    saveBtn.addEventListener("click", () => {
      this.title = titleForm.value;
      this.text = textForm.value;
      this.dueDate = format(new Date(dateForm.value), "dd/MM/yyyy");
      this.project = projectForm.value;
      this.priority = priorityForm.value;

      titleDom.innerText = this.title;
      dateDom.innerText = this.dueDate;

      Todos.removeForm();
      document.querySelector(".edit-todo-window").style.display = "none";
    });

    closeBtn.addEventListener("click", () => {
      Todos.removeForm();
      document.querySelector(".edit-todo-window").style.display = "none";
    });
  }

  static generateForm() {
    const form = document.createElement("form");
    form.className = "edit-todo-form";
    document.querySelector(".edit-todo-window").appendChild(form);

    const closeBtn = document.createElement("div");
    closeBtn.className = "close-edit";
    closeBtn.innerText = "X";
    form.appendChild(closeBtn);

    const input = document.createElement("input");
    input.type = "text";
    input.id = "edit-title";
    input.name = "title";
    input.placeholder = "Title";
    input.required = true;
    form.appendChild(input);

    const text = document.createElement("textarea");
    text.name = "text";
    text.id = "edit-text";
    text.cols = "30";
    text.rows = "6";
    text.placeholder = "Description";
    form.appendChild(text);

    const dueDate = document.createElement("input");
    dueDate.type = "date";
    dueDate.id = "edit-date";
    dueDate.name = "due-date";
    form.appendChild(dueDate);

    const projects = document.createElement("select");
    projects.id = "edit-projects";
    projects.name = "projects";
    projects.required = true;
    form.appendChild(projects);

    const projectOptions = Projects.list;
    projectOptions.forEach((key) => {
      const project = document.createElement("option");
      project.value = `${key.title}`;
      project.innerText = `${key.title.toUpperCase()}`;
      projects.appendChild(project);
    });

    const priority = document.createElement("select");
    priority.id = "edit-priority";
    priority.name = "priority";
    priority.required = true;
    const low = document.createElement("option");
    low.value = "low";
    low.innerText = "Low";
    priority.appendChild(low);
    const medium = document.createElement("option");
    medium.value = "medium";
    medium.innerText = "Medium";
    priority.appendChild(medium);
    const high = document.createElement("option");
    high.value = "high";
    high.innerText = "High";
    priority.appendChild(high);
    form.appendChild(priority);

    const saveBtn = document.createElement("div");
    saveBtn.className = "save";
    saveBtn.innerText = "Save Changes";
    form.appendChild(saveBtn);
  }

  static removeForm() {
    document.querySelector(".edit-todo-form").remove();
  }

  deleteDom(todoContainer) {
    const deletedTitle = this.title;

    const index = Todos.list.findIndex((key) => key.title === deletedTitle);
    Todos.list.splice(index, 1);

    todoContainer.remove();

    Projects.removeEmptyProject();
  }
}
