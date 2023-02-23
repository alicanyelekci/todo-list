import Todos from "./todos.js";
import Projects from "./projects.js";
import Notes from "./notes.js";
import "./style.css";

const domManipulator = () => {
  const start = () => {
    Projects.getStorageData();
    Todos.getStorageData();
    Notes.getStorageData();
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
      document.getElementById("priority").value,
      false
    );

    return todo;
  };

  const generateNote = () => {
    const note = new Notes(
      document.getElementById("note-title").value,
      document.getElementById("note-text").value
    );

    return note;
  };

  const generateProject = () => {
    const project = new Projects(
      document.getElementById("project-title").value
    );

    return project;
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

window.addEventListener("load", () => {
  page.start();
  todoPageBtn.click();
});
todayBtn.addEventListener("click", () => {
  todoPageBtn.classList.remove("selected");
  todayBtn.classList.add("selected");
  notePageBtn.classList.remove("selected");
  const projects = document.querySelectorAll(".project-option");
  projects.forEach((key) => {
    key.classList.remove("selected");
  });

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
  newTodoBtn.classList.add("selected");
  newProjectBtn.classList.remove("selected");
  newNoteBtn.classList.remove("selected");

  document.querySelector(".add-todo-form").style.display = "grid";
  document.querySelector(".add-project-form").style.display = "none";
  document.querySelector(".add-note-form").style.display = "none";
  page.clearForms();
});
newProjectBtn.addEventListener("click", () => {
  newTodoBtn.classList.remove("selected");
  newProjectBtn.classList.add("selected");
  newNoteBtn.classList.remove("selected");

  document.querySelector(".add-todo-form").style.display = "none";
  document.querySelector(".add-project-form").style.display = "grid";
  document.querySelector(".add-note-form").style.display = "none";
  page.clearForms();
});
newNoteBtn.addEventListener("click", () => {
  newTodoBtn.classList.remove("selected");
  newProjectBtn.classList.remove("selected");
  newNoteBtn.classList.add("selected");

  document.querySelector(".add-todo-form").style.display = "none";
  document.querySelector(".add-project-form").style.display = "none";
  document.querySelector(".add-note-form").style.display = "grid";
  page.clearForms();
});
addBtn.addEventListener("click", () => {
  newTodoBtn.click();
  document.querySelector(".add-window").style.display = "grid";
});
closeBtn.addEventListener("click", () => {
  document.querySelector(".add-window").style.display = "none";
  page.clearForms();
});
todoPageBtn.addEventListener("click", () => {
  todoPageBtn.classList.add("selected");
  todayBtn.classList.remove("selected");
  notePageBtn.classList.remove("selected");
  const projects = document.querySelectorAll(".project-option");
  projects.forEach((key) => {
    key.classList.remove("selected");
  });

  document.querySelector(".todos-page").style.display = "flex";
  document.querySelector(".notes-page").style.display = "none";
  document.querySelector(".add-window").style.display = "none";
  Projects.showAll();
  page.clearForms();
});
notePageBtn.addEventListener("click", () => {
  todoPageBtn.classList.remove("selected");
  todayBtn.classList.remove("selected");
  notePageBtn.classList.add("selected");
  const projects = document.querySelectorAll(".project-option");
  projects.forEach((key) => {
    key.classList.remove("selected");
  });

  document.querySelector(".todos-page").style.display = "none";
  document.querySelector(".notes-page").style.display = "flex";
  document.querySelector(".add-window").style.display = "none";
  page.clearForms();
});

// Delete
document.querySelector(".header-title").addEventListener("click", () => {
  localStorage.clear();
});
