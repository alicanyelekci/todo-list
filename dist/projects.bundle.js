/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Projects)
/* harmony export */ });
class Projects {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjs7QUFFQTtBQUNBOztBQUVBLHlCQUF5QixPQUFPO0FBQ2hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLFdBQVc7QUFDeEMsaUNBQWlDLHlCQUF5QjtBQUMxRDtBQUNBLDBCQUEwQixXQUFXO0FBQ3JDOztBQUVBO0FBQ0EsK0JBQStCLHlCQUF5QjtBQUN4RDtBQUNBLHdCQUF3QixXQUFXO0FBQ25DOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsV0FBVztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MsYUFBYTtBQUMvQztBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQscUJBQXFCO0FBQzVFO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSLHVEQUF1RCxVQUFVO0FBQ2pFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRCxVQUFVO0FBQy9EO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0cyB7XG4gIHN0YXRpYyBsaXN0ID0gW107XG5cbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG5cbiAgICBQcm9qZWN0cy5saXN0LnB1c2goeyB0aXRsZSB9KTtcbiAgICBQcm9qZWN0cy5zdG9yZURhdGEoKTtcblxuICAgIHRoaXMuZ2VuZXJhdGVQcm9qZWN0RG9tKCk7XG4gIH1cblxuICBzdGF0aWMgc3RvcmVEYXRhKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoUHJvamVjdHMubGlzdCkpO1xuICB9XG5cbiAgc3RhdGljIGdldFN0b3JhZ2VEYXRhKCkge1xuICAgIFByb2plY3RzLmxpc3QgPSBbXTtcblxuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgaWYgKHByb2plY3RzTGlzdCAhPT0gbnVsbCkge1xuICAgICAgcHJvamVjdHNMaXN0LmZvckVhY2goKGtleSkgPT4gbmV3IFByb2plY3RzKGtleS50aXRsZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XG4gICAgICBuZXcgUHJvamVjdHMoXCJNQUlOXCIpO1xuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlUHJvamVjdERvbSgpIHtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKTtcbiAgICBjb25zdCBzaWRlYmFyUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZXNcIik7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gUHJvamVjdHMubGlzdDtcblxuICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBgJHt0aGlzLnRpdGxlfWA7XG4gICAgcHJvamVjdE9wdGlvbi5pbm5lclRleHQgPSBgJHt0aGlzLnRpdGxlLnRvVXBwZXJDYXNlKCl9YDtcbiAgICBwcm9qZWN0T3B0aW9uLmNsYXNzTmFtZSA9IFwicHJvamVjdC1vcHRpb25cIjtcbiAgICBwcm9qZWN0T3B0aW9uLmlkID0gYCR7dGhpcy50aXRsZX1gO1xuICAgIHByb2plY3RTZWxlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBwcm9qZWN0TmFtZS5pbm5lclRleHQgPSBgJHt0aGlzLnRpdGxlLnRvVXBwZXJDYXNlKCl9YDtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc05hbWUgPSBcInByb2plY3Qtb3B0aW9uXCI7XG4gICAgcHJvamVjdE5hbWUuaWQgPSBgJHt0aGlzLnRpdGxlfS1wcm9qZWN0LXBhZ2VgO1xuICAgIHNpZGViYXJQcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgICBjb25zdCBwcm9qZWN0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdFBhZ2UuY2xhc3NOYW1lID0gXCJwcm9qZWN0LXBhZ2VcIjtcbiAgICBwcm9qZWN0UGFnZS5pZCA9IGAke3RoaXMudGl0bGV9YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtcGFnZXNcIikuYXBwZW5kQ2hpbGQocHJvamVjdFBhZ2UpO1xuXG4gICAgcHJvamVjdHNMaXN0LmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgUHJvamVjdHMuZmlsdGVyQnlQcm9qZWN0KGtleS50aXRsZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVQcm9qZWN0KGRlbGV0ZWRUaXRsZSkge1xuICAgIGNvbnN0IGluZGV4ID0gUHJvamVjdHMubGlzdC5maW5kSW5kZXgoKGtleSkgPT4ga2V5LnRpdGxlID09PSBkZWxldGVkVGl0bGUpO1xuICAgIFByb2plY3RzLmxpc3Quc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke2RlbGV0ZWRUaXRsZX1gKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGtleS5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmaWx0ZXJCeVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IFByb2plY3RzLmxpc3Q7XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChrZXkudGl0bGUgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7a2V5LnRpdGxlLnRvU3RyaW5nKCl9YCk7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7a2V5LnRpdGxlfWApO1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgc2hvd0FsbCgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IFByb2plY3RzLmxpc3Q7XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7a2V5LnRpdGxlfWApO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlQWxsKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LW9wdGlvblwiKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChrZXkpID0+IGtleS5yZW1vdmUoKSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==