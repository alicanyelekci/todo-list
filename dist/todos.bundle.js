/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Projects)
/* harmony export */ });
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");


class Projects {

    static list = [{title: 'MAIN'}];

    constructor(title) {
        this.title = title;

        Projects.list.push({title});
    }

    static addProjectDom() {
        Projects.removeAll();

        const projectSelection = document.getElementById('projects');
        const sidebarProjects = document.querySelector('.project-names');
        const projectsList = Projects.list;

        projectsList.forEach(key => {
            const projectOption = document.createElement('option');
            projectOption.value = `${key.title}`;
            projectOption.innerText = `${key.title.toUpperCase()}`;
            projectOption.className = 'project-option';
            projectSelection.appendChild(projectOption);

            const projectName = document.createElement('li');
            projectName.innerText = `${key.title.toUpperCase()}`;
            projectName.className = 'project-option';
            sidebarProjects.appendChild(projectName);

            projectName.addEventListener('click', () => {
                Projects.filterByProject(key.title);
            });

            const projectPage = document.createElement('div');
            projectPage.className = 'project-page';
            projectPage.id = `${key.title}`;
            document.querySelector('.project-pages').appendChild(projectPage);
        });
    }

    static filterByProject(projectName) {
        const projects = Projects.list;

        projects.forEach(key => {
            if(key.title === projectName) {
                const elements = document.querySelectorAll(`#${key.title.toString()}`);
                elements.forEach(key => key.style.display = 'flex');
            }
            else {
                const elements = document.querySelectorAll(`#${key.title}`);
                elements.forEach(key => key.style.display = 'none');
            }
        })
    }

    static showAll() {
        const projects = Projects.list;
        
        projects.forEach(key => {
            const elements = document.querySelectorAll(`#${key.title}`);
            elements.forEach(key => key.style.display = 'flex');
        })
    }
    
    static removeAll() {
        const projects = document.querySelectorAll('.project-option');
        projects.forEach(key => key.remove());
    }
    
    static removeEmptyProject() {
        const projectNames = Projects.list;
        const todos = _todos_js__WEBPACK_IMPORTED_MODULE_0__["default"].list;
        let count = 0;
        
        projectNames.forEach(key => {
            todos.forEach(todo => {
                if(todo.project === key.title) count++;
            })

            if(count === 0 && key.title !== 'MAIN') {          
                projectNames.splice(projectNames.indexOf(key), 1);

                Projects.list = projectNames;
            }

            count = 0;
        })

        Projects.addProjectDom();
    }
}

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todos)
/* harmony export */ });
/* harmony import */ var _remove_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove.png */ "./src/remove.png");
/* harmony import */ var _edit_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.png */ "./src/edit.png");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");




class Todos {

    static list = [];

    constructor(title, text, dueDate, project, priority){
        this.title = title;
        this.text = text;
        this.dueDate = dueDate;
        this.project = project;
        this.priority = priority;

        Todos.list.push({title, text, dueDate, project, priority});
    }

    static filterByDueDate() {
        const todoItems = document.querySelectorAll('.todo-item');

        todoItems.forEach(key => {
            const date = key.querySelector('.date');

            if(date.innerText === Todos.getCurrentDate()) {
                key.style.display = 'flex';
            }
            else {
                key.style.display = 'none';
            }
        })
    }

    static getCurrentDate() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();

        return `${day}/${month}/${year}`;
        }

    generateDom() {
        const todoContainer = document.createElement('div');
        todoContainer.className = 'todo-item';
        todoContainer.id = this.project.toString();
        document.querySelector('.todos-page').appendChild(todoContainer);

        const complete = document.createElement('input');
        complete.className = 'complete';
        complete.type = 'checkbox';
        todoContainer.appendChild(complete);

        const title = document.createElement('div');
        title.className = 'title';
        title.innerText = this.title;
        todoContainer.appendChild(title);

        const date = document.createElement('div');
        date.className = 'date';
        date.innerText = this.getDueDate(this.dueDate);
        todoContainer.appendChild(date);

        const edit = document.createElement('img');
        edit.className = 'edit';
        edit.src = _edit_png__WEBPACK_IMPORTED_MODULE_1__;
        todoContainer.appendChild(edit);

        const remove = document.createElement('img');
        remove.className = 'remove';
        remove.src = _remove_png__WEBPACK_IMPORTED_MODULE_0__;
        todoContainer.appendChild(remove);

        complete.addEventListener('click', () => {
            this.complete(title);
        });
        
        edit.addEventListener('click', () => {
            this.editForm(title, date);
        });
        
        remove.addEventListener('click', () => {
            this.deleteDom(todoContainer);
        });        
    }
    
    complete(title) {
        if(title.style.textDecoration !== 'line-through') title.style.textDecoration = 'line-through';
        else title.style.removeProperty('text-decoration');
    }
    
    editForm(titleDom, dateDom) {
        document.querySelector('.edit-todo-window').style.display = 'block';
        document.querySelector('.add-window').style.display = 'none';

        this.generateForm();

        const saveBtn = document.querySelector('.save');
        const titleForm = document.getElementById('edit-title');
        const textForm = document.getElementById('edit-text');
        const dateForm = document.getElementById('edit-date');
        const projectForm = document.getElementById('edit-projects');
        const priorityForm = document.getElementById('edit-priority');

        titleForm.value = this.title;
        textForm.value = this.text;
        dateForm.value = this.dueDate;
        projectForm.value = this.project;
        priorityForm.value = this.priority;
        
        saveBtn.addEventListener('click', () => {
            this.title = titleForm.value;
            this.text = textForm.value;
            this.dueDate = this.getDueDate(dateForm.value);
            this.project = projectForm.value;
            this.priority = priorityForm.value;
            
            titleDom.innerText = this.title;
            dateDom.innerText = this.dueDate;

            this.removeForm();
            document.querySelector('.edit-todo-window').style.display = 'none';
        });
    }

    getDueDate(dueDate) {
        const date = dueDate.split('-');
        const day = date[2];
        const month = date[1];
        const year = date[0];

        if(year === '') return '';
        return `${day}/${month}/${year}`;
    }

    generateForm() {
        const form = document.createElement('form');
        form.className = 'edit-todo-form';
        document.querySelector('.edit-todo-window').appendChild(form);
        
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'edit-title';
        input.name = 'title';
        input.placeholder = 'Title';
        input.required = true;
        form.appendChild(input);

        const text = document.createElement('textarea');
        text.name = 'text';
        text.id = 'edit-text';
        text.cols = '30';
        text.rows = '6';
        text.placeholder = 'Description';
        form.appendChild(text);

        const dueDate = document.createElement('input');
        dueDate.type = 'date';
        dueDate.id = 'edit-date';
        dueDate.name = 'due-date';
        form.appendChild(dueDate);

        const projects = document.createElement('select');
        projects.id = 'edit-projects';
        projects.name = 'projects';
        projects.required = true;
        form.appendChild(projects);

        const projectOptions = _projects_js__WEBPACK_IMPORTED_MODULE_2__["default"].list;
        projectOptions.forEach(key => {
            const project = document.createElement('option');
            project.value = `${key.title}`;
            project.innerText = `${key.title.toUpperCase()}`;
            projects.appendChild(project);
        });

        const priority = document.createElement('select');
        priority.id = 'edit-priority';
        priority.name = 'priority';
        priority.required = true;
        const low = document.createElement('option');
        low.value = 'low';
        low.innerText = 'Low';
        priority.appendChild(low);
        const medium = document.createElement('option');
        medium.value = 'medium';
        medium.innerText = 'Medium';
        priority.appendChild(medium);
        const high = document.createElement('option');
        high.value = 'high';
        high.innerText = 'High';
        priority.appendChild(high);
        form.appendChild(priority);

        const btn = document.createElement('div');
        btn.className = 'save';
        btn.innerText = 'Save Changes';
        form.appendChild(btn);
    }

    removeForm() {
        document.querySelector('.edit-todo-form').remove();
    }
    
    deleteDom(todoContainer) {
        const deletedTitle = this.title;

        const index = Todos.list.findIndex(key => key.title === deletedTitle);
        Todos.list.splice(index, 1);
        
        todoContainer.remove();

        _projects_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeEmptyProject();
    }
}

/***/ }),

/***/ "./src/edit.png":
/*!**********************!*\
  !*** ./src/edit.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e42c3c63c6b97a10746d.png";

/***/ }),

/***/ "./src/remove.png":
/*!************************!*\
  !*** ./src/remove.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee4b58337bd3477db466.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/todos.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdE5BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb2RvcyBmcm9tICcuL3RvZG9zLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHMge1xuXG4gICAgc3RhdGljIGxpc3QgPSBbe3RpdGxlOiAnTUFJTid9XTtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcblxuICAgICAgICBQcm9qZWN0cy5saXN0LnB1c2goe3RpdGxlfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFByb2plY3REb20oKSB7XG4gICAgICAgIFByb2plY3RzLnJlbW92ZUFsbCgpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcbiAgICAgICAgY29uc3Qgc2lkZWJhclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZXMnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHNMaXN0ID0gUHJvamVjdHMubGlzdDtcblxuICAgICAgICBwcm9qZWN0c0xpc3QuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IGAke2tleS50aXRsZX1gO1xuICAgICAgICAgICAgcHJvamVjdE9wdGlvbi5pbm5lclRleHQgPSBgJHtrZXkudGl0bGUudG9VcHBlckNhc2UoKX1gO1xuICAgICAgICAgICAgcHJvamVjdE9wdGlvbi5jbGFzc05hbWUgPSAncHJvamVjdC1vcHRpb24nO1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gYCR7a2V5LnRpdGxlLnRvVXBwZXJDYXNlKCl9YDtcbiAgICAgICAgICAgIHByb2plY3ROYW1lLmNsYXNzTmFtZSA9ICdwcm9qZWN0LW9wdGlvbic7XG4gICAgICAgICAgICBzaWRlYmFyUHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBQcm9qZWN0cy5maWx0ZXJCeVByb2plY3Qoa2V5LnRpdGxlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdFBhZ2UuY2xhc3NOYW1lID0gJ3Byb2plY3QtcGFnZSc7XG4gICAgICAgICAgICBwcm9qZWN0UGFnZS5pZCA9IGAke2tleS50aXRsZX1gO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtcGFnZXMnKS5hcHBlbmRDaGlsZChwcm9qZWN0UGFnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBmaWx0ZXJCeVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBQcm9qZWN0cy5saXN0O1xuXG4gICAgICAgIHByb2plY3RzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmKGtleS50aXRsZSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke2tleS50aXRsZS50b1N0cmluZygpfWApO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goa2V5ID0+IGtleS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7a2V5LnRpdGxlfWApO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goa2V5ID0+IGtleS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvd0FsbCgpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBQcm9qZWN0cy5saXN0O1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtrZXkudGl0bGV9YCk7XG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGtleSA9PiBrZXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jyk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyByZW1vdmVBbGwoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3Qtb3B0aW9uJyk7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goa2V5ID0+IGtleS5yZW1vdmUoKSk7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyByZW1vdmVFbXB0eVByb2plY3QoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lcyA9IFByb2plY3RzLmxpc3Q7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gVG9kb3MubGlzdDtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3ROYW1lcy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgICAgIGlmKHRvZG8ucHJvamVjdCA9PT0ga2V5LnRpdGxlKSBjb3VudCsrO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYoY291bnQgPT09IDAgJiYga2V5LnRpdGxlICE9PSAnTUFJTicpIHsgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWVzLnNwbGljZShwcm9qZWN0TmFtZXMuaW5kZXhPZihrZXkpLCAxKTtcblxuICAgICAgICAgICAgICAgIFByb2plY3RzLmxpc3QgPSBwcm9qZWN0TmFtZXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgfSlcblxuICAgICAgICBQcm9qZWN0cy5hZGRQcm9qZWN0RG9tKCk7XG4gICAgfVxufSIsImltcG9ydCBSZW1vdmUgZnJvbSAnLi9yZW1vdmUucG5nJztcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdC5wbmcnO1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4vcHJvamVjdHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvcyB7XG5cbiAgICBzdGF0aWMgbGlzdCA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IodGl0bGUsIHRleHQsIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5KXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgICAgICAgVG9kb3MubGlzdC5wdXNoKHt0aXRsZSwgdGV4dCwgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHl9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZmlsdGVyQnlEdWVEYXRlKCkge1xuICAgICAgICBjb25zdCB0b2RvSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1pdGVtJyk7XG5cbiAgICAgICAgdG9kb0l0ZW1zLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBrZXkucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcblxuICAgICAgICAgICAgaWYoZGF0ZS5pbm5lclRleHQgPT09IFRvZG9zLmdldEN1cnJlbnREYXRlKCkpIHtcbiAgICAgICAgICAgICAgICBrZXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGtleS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRDdXJyZW50RGF0ZSgpIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBkYXkgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBtb250aCA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgcmV0dXJuIGAke2RheX0vJHttb250aH0vJHt5ZWFyfWA7XG4gICAgICAgIH1cblxuICAgIGdlbmVyYXRlRG9tKCkge1xuICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9Db250YWluZXIuY2xhc3NOYW1lID0gJ3RvZG8taXRlbSc7XG4gICAgICAgIHRvZG9Db250YWluZXIuaWQgPSB0aGlzLnByb2plY3QudG9TdHJpbmcoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLXBhZ2UnKS5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBjb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbXBsZXRlLmNsYXNzTmFtZSA9ICdjb21wbGV0ZSc7XG4gICAgICAgIGNvbXBsZXRlLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS5jbGFzc05hbWUgPSAndGl0bGUnO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSB0aGlzLnRpdGxlO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGUuY2xhc3NOYW1lID0gJ2RhdGUnO1xuICAgICAgICBkYXRlLmlubmVyVGV4dCA9IHRoaXMuZ2V0RHVlRGF0ZSh0aGlzLmR1ZURhdGUpO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWRpdC5jbGFzc05hbWUgPSAnZWRpdCc7XG4gICAgICAgIGVkaXQuc3JjID0gRWRpdDtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0KTtcblxuICAgICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgcmVtb3ZlLmNsYXNzTmFtZSA9ICdyZW1vdmUnO1xuICAgICAgICByZW1vdmUuc3JjID0gUmVtb3ZlO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZSk7XG5cbiAgICAgICAgY29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlKHRpdGxlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lZGl0Rm9ybSh0aXRsZSwgZGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVEb20odG9kb0NvbnRhaW5lcik7XG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGNvbXBsZXRlKHRpdGxlKSB7XG4gICAgICAgIGlmKHRpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uICE9PSAnbGluZS10aHJvdWdoJykgdGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgICAgZWxzZSB0aXRsZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndGV4dC1kZWNvcmF0aW9uJyk7XG4gICAgfVxuICAgIFxuICAgIGVkaXRGb3JtKHRpdGxlRG9tLCBkYXRlRG9tKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRvZG8td2luZG93Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtd2luZG93Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICB0aGlzLmdlbmVyYXRlRm9ybSgpO1xuXG4gICAgICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZScpO1xuICAgICAgICBjb25zdCB0aXRsZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZScpO1xuICAgICAgICBjb25zdCB0ZXh0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRleHQnKTtcbiAgICAgICAgY29uc3QgZGF0ZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kYXRlJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdHMnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJpb3JpdHknKTtcblxuICAgICAgICB0aXRsZUZvcm0udmFsdWUgPSB0aGlzLnRpdGxlO1xuICAgICAgICB0ZXh0Rm9ybS52YWx1ZSA9IHRoaXMudGV4dDtcbiAgICAgICAgZGF0ZUZvcm0udmFsdWUgPSB0aGlzLmR1ZURhdGU7XG4gICAgICAgIHByb2plY3RGb3JtLnZhbHVlID0gdGhpcy5wcm9qZWN0O1xuICAgICAgICBwcmlvcml0eUZvcm0udmFsdWUgPSB0aGlzLnByaW9yaXR5O1xuICAgICAgICBcbiAgICAgICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZUZvcm0udmFsdWU7XG4gICAgICAgICAgICB0aGlzLnRleHQgPSB0ZXh0Rm9ybS52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IHRoaXMuZ2V0RHVlRGF0ZShkYXRlRm9ybS52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0Rm9ybS52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eUZvcm0udmFsdWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRpdGxlRG9tLmlubmVyVGV4dCA9IHRoaXMudGl0bGU7XG4gICAgICAgICAgICBkYXRlRG9tLmlubmVyVGV4dCA9IHRoaXMuZHVlRGF0ZTtcblxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGb3JtKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldER1ZURhdGUoZHVlRGF0ZSkge1xuICAgICAgICBjb25zdCBkYXRlID0gZHVlRGF0ZS5zcGxpdCgnLScpO1xuICAgICAgICBjb25zdCBkYXkgPSBkYXRlWzJdO1xuICAgICAgICBjb25zdCBtb250aCA9IGRhdGVbMV07XG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlWzBdO1xuXG4gICAgICAgIGlmKHllYXIgPT09ICcnKSByZXR1cm4gJyc7XG4gICAgICAgIHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRm9ybSgpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5jbGFzc05hbWUgPSAnZWRpdC10b2RvLWZvcm0nO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLXdpbmRvdycpLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICBpbnB1dC5pZCA9ICdlZGl0LXRpdGxlJztcbiAgICAgICAgaW5wdXQubmFtZSA9ICd0aXRsZSc7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gJ1RpdGxlJztcbiAgICAgICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgdGV4dC5uYW1lID0gJ3RleHQnO1xuICAgICAgICB0ZXh0LmlkID0gJ2VkaXQtdGV4dCc7XG4gICAgICAgIHRleHQuY29scyA9ICczMCc7XG4gICAgICAgIHRleHQucm93cyA9ICc2JztcbiAgICAgICAgdGV4dC5wbGFjZWhvbGRlciA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGR1ZURhdGUudHlwZSA9ICdkYXRlJztcbiAgICAgICAgZHVlRGF0ZS5pZCA9ICdlZGl0LWRhdGUnO1xuICAgICAgICBkdWVEYXRlLm5hbWUgPSAnZHVlLWRhdGUnO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHByb2plY3RzLmlkID0gJ2VkaXQtcHJvamVjdHMnO1xuICAgICAgICBwcm9qZWN0cy5uYW1lID0gJ3Byb2plY3RzJztcbiAgICAgICAgcHJvamVjdHMucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RzKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0T3B0aW9ucyA9IFByb2plY3RzLmxpc3Q7XG4gICAgICAgIHByb2plY3RPcHRpb25zLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIHByb2plY3QudmFsdWUgPSBgJHtrZXkudGl0bGV9YDtcbiAgICAgICAgICAgIHByb2plY3QuaW5uZXJUZXh0ID0gYCR7a2V5LnRpdGxlLnRvVXBwZXJDYXNlKCl9YDtcbiAgICAgICAgICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcmlvcml0eS5pZCA9ICdlZGl0LXByaW9yaXR5JztcbiAgICAgICAgcHJpb3JpdHkubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgICAgIHByaW9yaXR5LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGxvdy52YWx1ZSA9ICdsb3cnO1xuICAgICAgICBsb3cuaW5uZXJUZXh0ID0gJ0xvdyc7XG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKGxvdyk7XG4gICAgICAgIGNvbnN0IG1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBtZWRpdW0udmFsdWUgPSAnbWVkaXVtJztcbiAgICAgICAgbWVkaXVtLmlubmVyVGV4dCA9ICdNZWRpdW0nO1xuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChtZWRpdW0pO1xuICAgICAgICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGhpZ2gudmFsdWUgPSAnaGlnaCc7XG4gICAgICAgIGhpZ2guaW5uZXJUZXh0ID0gJ0hpZ2gnO1xuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ0bi5jbGFzc05hbWUgPSAnc2F2ZSc7XG4gICAgICAgIGJ0bi5pbm5lclRleHQgPSAnU2F2ZSBDaGFuZ2VzJztcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChidG4pO1xuICAgIH1cblxuICAgIHJlbW92ZUZvcm0oKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRvZG8tZm9ybScpLnJlbW92ZSgpO1xuICAgIH1cbiAgICBcbiAgICBkZWxldGVEb20odG9kb0NvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBkZWxldGVkVGl0bGUgPSB0aGlzLnRpdGxlO1xuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gVG9kb3MubGlzdC5maW5kSW5kZXgoa2V5ID0+IGtleS50aXRsZSA9PT0gZGVsZXRlZFRpdGxlKTtcbiAgICAgICAgVG9kb3MubGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBcbiAgICAgICAgdG9kb0NvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgICAgICBQcm9qZWN0cy5yZW1vdmVFbXB0eVByb2plY3QoKTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdG9kb3MuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=