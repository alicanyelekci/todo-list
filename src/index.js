import Todos from "./todos.js";
import Projects from "./projects.js";
import Notes from "./notes.js";
import "./style.css";

const domManipulator = () => {
  const start = () => {
    const project = new Projects("MAIN");
    project.generateProjectDom();
  };

  const clearForms = () => {
    document.querySelector(".add-todo-form").reset();
    document.querySelector(".add-project-form").reset();
    document.querySelector(".add-note-form").reset();
  };

  const generateTodo = () => {
    const todo = new Todos(
      document.getElementById("todo-title").value,
      document.getElementById("todo-text").value,
      document.getElementById("due-date").value,
      document.getElementById("projects").value,
      document.getElementById("priority").value
    );

    todo.generateDom();
  };

  const generateNote = () => {
    const note = new Notes(
      document.getElementById("note-title").value,
      document.getElementById("note-text").value
    );

    note.generateNoteDom();
  };

  const generateProject = () => {
    const project = new Projects(
      document.getElementById("project-title").value
    );

    project.generateProjectDom();
  };

  const checkAvailability = (obj) => {
    let available = true;
    if (obj === "todo") {
      Todos.list.forEach((key) => {
        if (
          key.title.toLowerCase() ===
          document.getElementById("todo-title").value.toLowerCase()
        ) {
          available = false;
        }
      });
    } else if (obj === "project") {
      Projects.list.forEach((key) => {
        if (
          key.title.toLowerCase() ===
          document.getElementById("project-title").value.toLowerCase()
        ) {
          available = false;
        }
      });
    } else if (obj === "note") {
      Notes.list.forEach((key) => {
        if (
          key.title.toLowerCase() ===
          document.getElementById("note-title").value.toLowerCase()
        ) {
          available = false;
        }
      });
    }
    return available;
  };

  return {
    start,
    clearForms,
    generateTodo,
    generateNote,
    generateProject,
    checkAvailability,
  };
};

const page = domManipulator();
page.start();

const addTodoBtn = document.querySelector(".submit-todo");
const addProjectBtn = document.querySelector(".submit-project");
const addNoteBtn = document.querySelector(".submit-note");
const addBtn = document.querySelector(".add-button");
const newTodoBtn = document.querySelector(".new-todo");
const newProjectBtn = document.querySelector(".new-project");
const newNoteBtn = document.querySelector(".new-note");
const closeBtn = document.querySelector(".close");
const todoPageBtn = document.querySelector(".home");
const notePageBtn = document.querySelector(".notes");
const todayBtn = document.querySelector(".due-today");

todayBtn.addEventListener("click", () => {
  Todos.filterByDueDate();
});
addTodoBtn.addEventListener("click", (e) => {
  e.preventDefault(); // prevents sending the form and refreshing the page
  if (
    document.getElementById("todo-title").value !== "" &&
    document.getElementById("due-date").value !== ""
  ) {
    page.generateTodo();
    page.clearForms();
  }
});
addProjectBtn.addEventListener("click", (e) => {
  e.preventDefault(); // prevents sending the form and refreshing the page
  if (
    document.getElementById("project-title").value !== "" &&
    page.checkAvailability("project")
  ) {
    page.generateProject();
    page.clearForms();
  }
});
addNoteBtn.addEventListener("click", (e) => {
  e.preventDefault(); // prevents sending the form and refreshing the page
  if (
    document.getElementById("note-title").value !== "" &&
    page.checkAvailability("note")
  ) {
    page.generateNote();
    page.clearForms();
  }
});
newTodoBtn.addEventListener("click", () => {
  document.querySelector(".add-todo-form").style.display = "block";
  document.querySelector(".add-project-form").style.display = "none";
  document.querySelector(".add-note-form").style.display = "none";
  page.clearForms();
});
newProjectBtn.addEventListener("click", () => {
  document.querySelector(".add-todo-form").style.display = "none";
  document.querySelector(".add-project-form").style.display = "block";
  document.querySelector(".add-note-form").style.display = "none";
  page.clearForms();
});
newNoteBtn.addEventListener("click", () => {
  document.querySelector(".add-todo-form").style.display = "none";
  document.querySelector(".add-project-form").style.display = "none";
  document.querySelector(".add-note-form").style.display = "block";
  page.clearForms();
});
addBtn.addEventListener("click", () => {
  document.querySelector(".add-window").style.display = "grid";
});
closeBtn.addEventListener("click", () => {
  document.querySelector(".add-window").style.display = "none";
  page.clearForms();
});
todoPageBtn.addEventListener("click", () => {
  document.querySelector(".todos-page").style.display = "block";
  document.querySelector(".notes-page").style.display = "none";
  document.querySelector(".add-window").style.display = "none";
  Projects.showAll();
  page.clearForms();
});
notePageBtn.addEventListener("click", () => {
  document.querySelector(".todos-page").style.display = "none";
  document.querySelector(".notes-page").style.display = "block";
  document.querySelector(".add-window").style.display = "none";
  page.clearForms();
});
