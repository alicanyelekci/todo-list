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

    projectName.addEventListener("click", () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjs7QUFFQTtBQUNBOztBQUVBLHlCQUF5QixPQUFPO0FBQ2hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLFdBQVc7QUFDeEMsaUNBQWlDLHlCQUF5QjtBQUMxRDtBQUNBLDBCQUEwQixXQUFXO0FBQ3JDOztBQUVBO0FBQ0EsK0JBQStCLHlCQUF5QjtBQUN4RDtBQUNBLHdCQUF3QixXQUFXO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixXQUFXO0FBQ3JDO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0Esd0JBQXdCLFdBQVc7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDLGFBQWE7QUFDL0M7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELHFCQUFxQjtBQUM1RTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUix1REFBdUQsVUFBVTtBQUNqRTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQsVUFBVTtBQUMvRDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHMge1xuICBzdGF0aWMgbGlzdCA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuXG4gICAgUHJvamVjdHMubGlzdC5wdXNoKHsgdGl0bGUgfSk7XG4gICAgUHJvamVjdHMuc3RvcmVEYXRhKCk7XG5cbiAgICB0aGlzLmdlbmVyYXRlUHJvamVjdERvbSgpO1xuICB9XG5cbiAgc3RhdGljIHN0b3JlRGF0YSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KFByb2plY3RzLmxpc3QpKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTdG9yYWdlRGF0YSgpIHtcbiAgICBQcm9qZWN0cy5saXN0ID0gW107XG5cbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIGlmIChwcm9qZWN0c0xpc3QgIT09IG51bGwpIHtcbiAgICAgIHByb2plY3RzTGlzdC5mb3JFYWNoKChrZXkpID0+IG5ldyBQcm9qZWN0cyhrZXkudGl0bGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ld1xuICAgICAgbmV3IFByb2plY3RzKFwiTUFJTlwiKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZVByb2plY3REb20oKSB7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG4gICAgY29uc3Qgc2lkZWJhclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWVzXCIpO1xuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IFByb2plY3RzLmxpc3Q7XG5cbiAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcm9qZWN0T3B0aW9uLnZhbHVlID0gYCR7dGhpcy50aXRsZX1gO1xuICAgIHByb2plY3RPcHRpb24uaW5uZXJUZXh0ID0gYCR7dGhpcy50aXRsZS50b1VwcGVyQ2FzZSgpfWA7XG4gICAgcHJvamVjdE9wdGlvbi5jbGFzc05hbWUgPSBcInByb2plY3Qtb3B0aW9uXCI7XG4gICAgcHJvamVjdE9wdGlvbi5pZCA9IGAke3RoaXMudGl0bGV9YDtcbiAgICBwcm9qZWN0U2VsZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgcHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gYCR7dGhpcy50aXRsZS50b1VwcGVyQ2FzZSgpfWA7XG4gICAgcHJvamVjdE5hbWUuY2xhc3NOYW1lID0gXCJwcm9qZWN0LW9wdGlvblwiO1xuICAgIHByb2plY3ROYW1lLmlkID0gYCR7dGhpcy50aXRsZX0tcHJvamVjdC1wYWdlYDtcbiAgICBzaWRlYmFyUHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gICAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR1ZS10b2RheVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVzXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcblxuICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3Qtb3B0aW9uXCIpO1xuICAgICAgcHJvamVjdHMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkuaWQgIT09IGAke3RoaXMudGl0bGV9LXByb2plY3QtcGFnZWApIHtcbiAgICAgICAgICBrZXkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHByb2plY3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0UGFnZS5jbGFzc05hbWUgPSBcInByb2plY3QtcGFnZVwiO1xuICAgIHByb2plY3RQYWdlLmlkID0gYCR7dGhpcy50aXRsZX1gO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1wYWdlc1wiKS5hcHBlbmRDaGlsZChwcm9qZWN0UGFnZSk7XG5cbiAgICBwcm9qZWN0c0xpc3QuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBwcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBQcm9qZWN0cy5maWx0ZXJCeVByb2plY3Qoa2V5LnRpdGxlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZVByb2plY3QoZGVsZXRlZFRpdGxlKSB7XG4gICAgY29uc3QgaW5kZXggPSBQcm9qZWN0cy5saXN0LmZpbmRJbmRleCgoa2V5KSA9PiBrZXkudGl0bGUgPT09IGRlbGV0ZWRUaXRsZSk7XG4gICAgUHJvamVjdHMubGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7ZGVsZXRlZFRpdGxlfWApLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAga2V5LnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZpbHRlckJ5UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RzID0gUHJvamVjdHMubGlzdDtcblxuICAgIHByb2plY3RzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGtleS50aXRsZSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtrZXkudGl0bGUudG9TdHJpbmcoKX1gKTtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtrZXkudGl0bGV9YCk7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzaG93QWxsKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gUHJvamVjdHMubGlzdDtcblxuICAgIHByb2plY3RzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtrZXkudGl0bGV9YCk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVBbGwoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3Qtb3B0aW9uXCIpO1xuICAgIHByb2plY3RzLmZvckVhY2goKGtleSkgPT4ga2V5LnJlbW92ZSgpKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9