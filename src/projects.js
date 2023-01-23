export default class Projects {
  static list = [{ title: "MAIN" }];

  constructor(title) {
    this.title = title;

    Projects.list.push({ title });
  }

  static addProjectDom() {
    Projects.removeAll();

    const projectSelection = document.getElementById("projects");
    const sidebarProjects = document.querySelector(".project-names");
    const projectsList = Projects.list;

    projectsList.forEach((key) => {
      const projectOption = document.createElement("option");
      projectOption.value = `${key.title}`;
      projectOption.innerText = `${key.title.toUpperCase()}`;
      projectOption.className = "project-option";
      projectSelection.appendChild(projectOption);

      const projectName = document.createElement("li");
      projectName.innerText = `${key.title.toUpperCase()}`;
      projectName.className = "project-option";
      sidebarProjects.appendChild(projectName);

      projectName.addEventListener("click", () => {
        Projects.filterByProject(key.title);
      });

      const projectPage = document.createElement("div");
      projectPage.className = "project-page";
      projectPage.id = `${key.title}`;
      document.querySelector(".project-pages").appendChild(projectPage);
    });
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
