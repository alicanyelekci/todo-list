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
    projectName.id = `${this.title}`;
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
      console.log(key);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjs7QUFFQTtBQUNBOztBQUVBLHlCQUF5QixPQUFPO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLFdBQVc7QUFDeEMsaUNBQWlDLHlCQUF5QjtBQUMxRDtBQUNBLDBCQUEwQixXQUFXO0FBQ3JDOztBQUVBO0FBQ0EsK0JBQStCLHlCQUF5QjtBQUN4RDtBQUNBLHdCQUF3QixXQUFXO0FBQ25DOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsV0FBVztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MsYUFBYTtBQUMvQztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxxQkFBcUI7QUFDNUU7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1IsdURBQXVELFVBQVU7QUFDakU7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscURBQXFELFVBQVU7QUFDL0Q7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzIHtcbiAgc3RhdGljIGxpc3QgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcblxuICAgIFByb2plY3RzLmxpc3QucHVzaCh7IHRpdGxlIH0pO1xuICB9XG5cbiAgZ2VuZXJhdGVQcm9qZWN0RG9tKCkge1xuICAgIGNvbnN0IHByb2plY3RTZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xuICAgIGNvbnN0IHNpZGViYXJQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lc1wiKTtcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBQcm9qZWN0cy5saXN0O1xuXG4gICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IGAke3RoaXMudGl0bGV9YDtcbiAgICBwcm9qZWN0T3B0aW9uLmlubmVyVGV4dCA9IGAke3RoaXMudGl0bGUudG9VcHBlckNhc2UoKX1gO1xuICAgIHByb2plY3RPcHRpb24uY2xhc3NOYW1lID0gXCJwcm9qZWN0LW9wdGlvblwiO1xuICAgIHByb2plY3RPcHRpb24uaWQgPSBgJHt0aGlzLnRpdGxlfWA7XG4gICAgcHJvamVjdFNlbGVjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHByb2plY3ROYW1lLmlubmVyVGV4dCA9IGAke3RoaXMudGl0bGUudG9VcHBlckNhc2UoKX1gO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTmFtZSA9IFwicHJvamVjdC1vcHRpb25cIjtcbiAgICBwcm9qZWN0TmFtZS5pZCA9IGAke3RoaXMudGl0bGV9YDtcbiAgICBzaWRlYmFyUHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gICAgY29uc3QgcHJvamVjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RQYWdlLmNsYXNzTmFtZSA9IFwicHJvamVjdC1wYWdlXCI7XG4gICAgcHJvamVjdFBhZ2UuaWQgPSBgJHt0aGlzLnRpdGxlfWA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXBhZ2VzXCIpLmFwcGVuZENoaWxkKHByb2plY3RQYWdlKTtcblxuICAgIHByb2plY3RzTGlzdC5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIFByb2plY3RzLmZpbHRlckJ5UHJvamVjdChrZXkudGl0bGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlUHJvamVjdChkZWxldGVkVGl0bGUpIHtcbiAgICBjb25zdCBpbmRleCA9IFByb2plY3RzLmxpc3QuZmluZEluZGV4KChrZXkpID0+IGtleS50aXRsZSA9PT0gZGVsZXRlZFRpdGxlKTtcbiAgICBQcm9qZWN0cy5saXN0LnNwbGljZShpbmRleCwgMSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtkZWxldGVkVGl0bGV9YCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhrZXkpO1xuICAgICAga2V5LnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZpbHRlckJ5UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RzID0gUHJvamVjdHMubGlzdDtcblxuICAgIHByb2plY3RzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGtleS50aXRsZSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtrZXkudGl0bGUudG9TdHJpbmcoKX1gKTtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtrZXkudGl0bGV9YCk7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzaG93QWxsKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gUHJvamVjdHMubGlzdDtcblxuICAgIHByb2plY3RzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtrZXkudGl0bGV9YCk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVBbGwoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3Qtb3B0aW9uXCIpO1xuICAgIHByb2plY3RzLmZvckVhY2goKGtleSkgPT4ga2V5LnJlbW92ZSgpKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9