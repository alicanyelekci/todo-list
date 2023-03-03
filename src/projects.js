export default class Projects {
  static list = [];

  constructor(title) {
    this.title = title;

    Projects.list.push({ title });
    Projects.storeData();

    this.generateProjectDom();
  }

  static storeData() {
    localStorage.setItem("projects", JSON.stringify(Projects.list));
  }

  static getStorageData() {
    Projects.list = [];

    const projectsList = JSON.parse(localStorage.getItem("projects"));
    if (projectsList !== null) {
      projectsList.forEach((key) => new Projects(key.title));
    } else {
      // eslint-disable-next-line no-new
      new Projects("MAIN");
    }
  }

  generateProjectDom() {
    const projectSelection = document.getElementById("projects");
    const sidebarProjects = document.querySelector(".project-names");
    const projectsList = Projects.list;

    const projectOption = document.createElement("option");
    projectOption.value = `${this.title}`;
    projectOption.innerText = `${this.title.toUpperCase()}`;
    projectOption.className = "project-option";
    projectOption.id = `${this.title}`;
    projectSelection.appendChild(projectOption);

    const projectName = document.createElement("li");
    projectName.innerText = `${this.title.toUpperCase()}`;
    projectName.className = "project-option";
    projectName.id = `${this.title}-project-page`;
    sidebarProjects.appendChild(projectName);

    projectName.addEventListener("click", () => {
      document.querySelector(".todos-page").style.display = "flex";
      document.querySelector(".notes-page").style.display = "none";
      document
        .querySelectorAll(".remove-project-button")
        .forEach((key) => key.remove());

      const removeBtn = document.createElement("button");
      removeBtn.className = "remove-project-button";
      removeBtn.innerText = `Remove ${this.title.toUpperCase()} Project`;
      document.querySelector(".todos-page").appendChild(removeBtn);

      document.querySelector(".home").classList.remove("selected");
      document.querySelector(".due-today").classList.remove("selected");
      document.querySelector(".notes").classList.remove("selected");
      projectName.classList.add("selected");

      const projects = document.querySelectorAll(".project-option");
      projects.forEach((key) => {
        if (key.id !== `${this.title}-project-page`) {
          key.classList.remove("selected");
        }
      });
    });

    const projectPage = document.createElement("div");
    projectPage.className = "project-page";
    projectPage.id = `${this.title}`;
    document.querySelector(".project-pages").appendChild(projectPage);

    projectsList.forEach((key) => {
      projectName.addEventListener("click", () => {
        Projects.filterByProject(key.title);
      });
    });
  }

  static removeProject(deletedTitle) {
    const index = Projects.list.findIndex((key) => key.title === deletedTitle);
    Projects.list.splice(index, 1);

    document.querySelectorAll(`#${deletedTitle}`).forEach((key) => {
      key.remove();
    });
    document
      .querySelectorAll(`#${deletedTitle}-project-page`)
      .forEach((key) => {
        key.remove();
      });

    Projects.storeData();
  }

  static filterByProject(projectName) {
    const projects = Projects.list;

    projects.forEach((key) => {
      if (key.title === projectName) {
        const elements = document.querySelectorAll(`#${key.title.toString()}`);
        elements.forEach((el) => {
          el.style.display = "flex";
        });
      } else {
        const elements = document.querySelectorAll(`#${key.title}`);
        elements.forEach((el) => {
          el.style.display = "none";
        });
      }
    });
  }

  static showAll() {
    const projects = Projects.list;

    projects.forEach((key) => {
      const elements = document.querySelectorAll(`#${key.title}`);
      elements.forEach((el) => {
        el.style.display = "flex";
      });
    });
  }

  static removeAll() {
    const projects = document.querySelectorAll(".project-option");
    projects.forEach((key) => key.remove());
  }
}
