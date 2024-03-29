import { format } from "date-fns";
import Remove from "./remove.png";
import Edit from "./edit.png";
import Projects from "./projects.js";

export default class Todos {
  static list = [];

  constructor(title, text, dueDate, project, priority, complete) {
    this.title = title;
    this.text = text;
    this.dueDate = dueDate;
    this.project = project;
    this.priority = priority;
    this.complete = complete;

    Todos.list.push({
      title,
      text,
      dueDate,
      project,
      priority,
      complete,
    });
    Todos.storeData();

    this.generateDom();
  }

  static storeData() {
    localStorage.setItem("todos", JSON.stringify(Todos.list));
  }

  static getStorageData() {
    Todos.list = [];

    const todosList = JSON.parse(localStorage.getItem("todos"));
    if (todosList !== null) {
      todosList.forEach(
        (key) =>
          new Todos(
            key.title,
            key.text,
            key.dueDate,
            key.project,
            key.priority,
            key.complete
          )
      );
    }
  }

  static removeEmptyProject(removedTitle) {
    const todos = Todos.list;
    let count = 0;

    todos.forEach((key) => {
      if (key.project === removedTitle) count += 1;
    });

    if (count === 0 && removedTitle !== "main") {
      document
        .querySelector(".remove-project-button")
        .addEventListener("click", () => {
          Projects.removeProject(removedTitle);
        });
    } else {
      document
        .querySelectorAll(".remove-project-button")
        .forEach((key) => key.remove());
    }
    count = 0;
  }

  static filterByDueDate() {
    const todoItems = document.querySelectorAll(".todo-item");

    todoItems.forEach((key) => {
      const date = key.querySelector(".date");

      if (date.innerText === format(new Date(), "dd/MM/yyyy")) {
        key.style.display = "flex";
      } else {
        key.style.display = "none";
      }
    });
  }

  generateDom() {
    const todoContainer = document.createElement("div");
    todoContainer.className = "todo-item";
    todoContainer.id = this.project.toString();
    document.querySelector(".todos-page").appendChild(todoContainer);

    const priorityIndicator = document.createElement("div");
    priorityIndicator.className = "priority-indicator";
    todoContainer.appendChild(priorityIndicator);

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

    if (this.priority === "low") {
      priorityIndicator.style.backgroundColor = "#22c55e";
    } else if (this.priority === "medium") {
      priorityIndicator.style.backgroundColor = "#eab308";
    } else if (this.priority === "high") {
      priorityIndicator.style.backgroundColor = "#ef4444";
    }

    complete.addEventListener("click", () => {
      Todos.complete(title);
    });

    if (this.complete === true) {
      title.style.textDecoration = "line-through";
      complete.checked = true;
    }

    edit.addEventListener("click", () => {
      if (document.querySelector(".edit-todo-form") !== null) {
        Todos.removeForm();
      }

      this.editForm(title, date, priorityIndicator);
      Todos.storeData();
    });

    remove.addEventListener("click", () => {
      this.deleteDom(todoContainer);
      Todos.storeData();
    });
  }

  static complete(completedTitle) {
    const index = Todos.list.findIndex(
      (key) => key.title === completedTitle.innerText
    );

    if (Todos.list[index].complete !== true) {
      completedTitle.style.textDecoration = "line-through";
      Todos.list[index].complete = true;
    } else {
      completedTitle.style.removeProperty("text-decoration");
      Todos.list[index].complete = false;
    }

    Todos.storeData();
  }

  editForm(titleDom, dateDom, priorityDom) {
    document.querySelector(".edit-todo-window").style.display = "grid";
    document.querySelector(".add-window").style.display = "none";

    Todos.generateForm();

    const saveBtn = document.querySelector(".save");
    const closeBtn = document.querySelector(".close-edit");
    const titleForm = document.getElementById("edit-title");
    const textForm = document.getElementById("edit-text");
    const dateForm = document.getElementById("edit-date");
    const projectForm = document.getElementById("edit-projects");
    const priorityForm = document.getElementById("edit-priority");
    const editedTitle = this.title;

    titleForm.value = this.title;
    textForm.value = this.text;
    dateForm.value = this.dueDate;
    projectForm.value = this.project;
    priorityForm.value = this.priority;

    saveBtn.addEventListener("click", () => {
      const index = Todos.list.findIndex((key) => key.title === editedTitle);

      Todos.list[index].title = titleForm.value;
      Todos.list[index].text = textForm.value;
      Todos.list[index].dueDate = dateForm.value;
      Todos.list[index].project = projectForm.value;
      Todos.list[index].priority = priorityForm.value;

      titleDom.innerText = titleForm.value;
      dateDom.innerText = format(new Date(dateForm.value), "dd/MM/yyyy");

      if (priorityForm.value === "low") {
        priorityDom.style.backgroundColor = "#22c55e";
      } else if (priorityForm.value === "medium") {
        priorityDom.style.backgroundColor = "#eab308";
      } else if (priorityForm.value === "high") {
        priorityDom.style.backgroundColor = "#ef4444";
      }

      Todos.storeData();
      Todos.removeForm();
    });

    closeBtn.addEventListener("click", () => {
      Todos.removeForm();
    });
  }

  static generateForm() {
    const form = document.createElement("form");
    form.className = "edit-todo-form";
    document.querySelector(".edit-todo-window").appendChild(form);

    const closeBtn = document.createElement("div");
    closeBtn.className = "close-edit";
    closeBtn.innerText = "×";
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
    document.querySelector(".edit-todo-window").style = "none";
  }

  deleteDom(todoContainer) {
    const deletedTitle = this.title;

    const index = Todos.list.findIndex((key) => key.title === deletedTitle);
    Todos.list.splice(index, 1);

    todoContainer.remove();

    Todos.removeEmptyProject();
  }
}
