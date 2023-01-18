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
        const closeBtn = document.querySelector('.close-edit');
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

        closeBtn.addEventListener('click', () => {
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

        const closeBtn = document.createElement('div');
        closeBtn.className = 'close-edit';
        closeBtn.innerText = 'X';
        form.appendChild(closeBtn);
        
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

        const saveBtn = document.createElement('div');
        saveBtn.className = 'save';
        saveBtn.innerText = 'Save Changes';
        form.appendChild(saveBtn);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/projects.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQjs7QUFFaEI7O0FBRWYsb0JBQW9CLGNBQWM7O0FBRWxDO0FBQ0E7O0FBRUEsNEJBQTRCLE1BQU07QUFDbEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DLHlDQUF5Qyx3QkFBd0I7QUFDakU7QUFDQTs7QUFFQTtBQUNBLHVDQUF1Qyx3QkFBd0I7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVU7QUFDMUM7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0RBQStELHFCQUFxQjtBQUNwRjtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsVUFBVTtBQUN6RTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFVBQVU7QUFDckU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNEQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVGa0M7QUFDSjtBQUNPOztBQUV0Qjs7QUFFZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLHdDQUF3QztBQUNqRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLElBQUksR0FBRyxNQUFNLEdBQUcsS0FBSztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsc0NBQUk7QUFDdkI7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQix3Q0FBTTtBQUMzQjs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLElBQUksR0FBRyxNQUFNLEdBQUcsS0FBSztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQix5REFBYTtBQUM1QztBQUNBO0FBQ0EsK0JBQStCLFVBQVU7QUFDekMsbUNBQW1DLHdCQUF3QjtBQUMzRDtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHVFQUEyQjtBQUNuQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2pPQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9kb3MgZnJvbSAnLi90b2Rvcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzIHtcblxuICAgIHN0YXRpYyBsaXN0ID0gW3t0aXRsZTogJ01BSU4nfV07XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG5cbiAgICAgICAgUHJvamVjdHMubGlzdC5wdXNoKHt0aXRsZX0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRQcm9qZWN0RG9tKCkge1xuICAgICAgICBQcm9qZWN0cy5yZW1vdmVBbGwoKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XG4gICAgICAgIGNvbnN0IHNpZGViYXJQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWVzJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IFByb2plY3RzLmxpc3Q7XG5cbiAgICAgICAgcHJvamVjdHNMaXN0LmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBgJHtrZXkudGl0bGV9YDtcbiAgICAgICAgICAgIHByb2plY3RPcHRpb24uaW5uZXJUZXh0ID0gYCR7a2V5LnRpdGxlLnRvVXBwZXJDYXNlKCl9YDtcbiAgICAgICAgICAgIHByb2plY3RPcHRpb24uY2xhc3NOYW1lID0gJ3Byb2plY3Qtb3B0aW9uJztcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lLmlubmVyVGV4dCA9IGAke2tleS50aXRsZS50b1VwcGVyQ2FzZSgpfWA7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc05hbWUgPSAncHJvamVjdC1vcHRpb24nO1xuICAgICAgICAgICAgc2lkZWJhclByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICAgICAgICAgICAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgUHJvamVjdHMuZmlsdGVyQnlQcm9qZWN0KGtleS50aXRsZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RQYWdlLmNsYXNzTmFtZSA9ICdwcm9qZWN0LXBhZ2UnO1xuICAgICAgICAgICAgcHJvamVjdFBhZ2UuaWQgPSBgJHtrZXkudGl0bGV9YDtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXBhZ2VzJykuYXBwZW5kQ2hpbGQocHJvamVjdFBhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZmlsdGVyQnlQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gUHJvamVjdHMubGlzdDtcblxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZihrZXkudGl0bGUgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtrZXkudGl0bGUudG9TdHJpbmcoKX1gKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGtleSA9PiBrZXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke2tleS50aXRsZX1gKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGtleSA9PiBrZXkuc3R5bGUuZGlzcGxheSA9ICdub25lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIHNob3dBbGwoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gUHJvamVjdHMubGlzdDtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7a2V5LnRpdGxlfWApO1xuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChrZXkgPT4ga2V5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCcpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgcmVtb3ZlQWxsKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW9wdGlvbicpO1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKGtleSA9PiBrZXkucmVtb3ZlKCkpO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgcmVtb3ZlRW1wdHlQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZXMgPSBQcm9qZWN0cy5saXN0O1xuICAgICAgICBjb25zdCB0b2RvcyA9IFRvZG9zLmxpc3Q7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0TmFtZXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgICAgICBpZih0b2RvLnByb2plY3QgPT09IGtleS50aXRsZSkgY291bnQrKztcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmKGNvdW50ID09PSAwICYmIGtleS50aXRsZSAhPT0gJ01BSU4nKSB7ICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lcy5zcGxpY2UocHJvamVjdE5hbWVzLmluZGV4T2Yoa2V5KSwgMSk7XG5cbiAgICAgICAgICAgICAgICBQcm9qZWN0cy5saXN0ID0gcHJvamVjdE5hbWVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH0pXG5cbiAgICAgICAgUHJvamVjdHMuYWRkUHJvamVjdERvbSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVtb3ZlIGZyb20gJy4vcmVtb3ZlLnBuZyc7XG5pbXBvcnQgRWRpdCBmcm9tICcuL2VkaXQucG5nJztcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuL3Byb2plY3RzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb3Mge1xuXG4gICAgc3RhdGljIGxpc3QgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCB0ZXh0LCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG4gICAgICAgIFRvZG9zLmxpc3QucHVzaCh7dGl0bGUsIHRleHQsIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5fSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZpbHRlckJ5RHVlRGF0ZSgpIHtcbiAgICAgICAgY29uc3QgdG9kb0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8taXRlbScpO1xuXG4gICAgICAgIHRvZG9JdGVtcy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0ga2V5LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XG5cbiAgICAgICAgICAgIGlmKGRhdGUuaW5uZXJUZXh0ID09PSBUb2Rvcy5nZXRDdXJyZW50RGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAga2V5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBrZXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q3VycmVudERhdGUoKSB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgZGF5ID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgIHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gO1xuICAgICAgICB9XG5cbiAgICBnZW5lcmF0ZURvbSgpIHtcbiAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd0b2RvLWl0ZW0nO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmlkID0gdGhpcy5wcm9qZWN0LnRvU3RyaW5nKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvcy1wYWdlJykuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb21wbGV0ZS5jbGFzc05hbWUgPSAnY29tcGxldGUnO1xuICAgICAgICBjb21wbGV0ZS50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZSk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGUuY2xhc3NOYW1lID0gJ3RpdGxlJztcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gdGhpcy50aXRsZTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXRlLmNsYXNzTmFtZSA9ICdkYXRlJztcbiAgICAgICAgZGF0ZS5pbm5lclRleHQgPSB0aGlzLmdldER1ZURhdGUodGhpcy5kdWVEYXRlKTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGVkaXQuY2xhc3NOYW1lID0gJ2VkaXQnO1xuICAgICAgICBlZGl0LnNyYyA9IEVkaXQ7XG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdCk7XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHJlbW92ZS5jbGFzc05hbWUgPSAncmVtb3ZlJztcbiAgICAgICAgcmVtb3ZlLnNyYyA9IFJlbW92ZTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmUpO1xuXG4gICAgICAgIGNvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSh0aXRsZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWRpdEZvcm0odGl0bGUsIGRhdGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlRG9tKHRvZG9Db250YWluZXIpO1xuICAgICAgICB9KTsgICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBjb21wbGV0ZSh0aXRsZSkge1xuICAgICAgICBpZih0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiAhPT0gJ2xpbmUtdGhyb3VnaCcpIHRpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICAgIGVsc2UgdGl0bGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicpO1xuICAgIH1cbiAgICBcbiAgICBlZGl0Rm9ybSh0aXRsZURvbSwgZGF0ZURvbSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgdGhpcy5nZW5lcmF0ZUZvcm0oKTtcblxuICAgICAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUnKTtcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtZWRpdCcpO1xuICAgICAgICBjb25zdCB0aXRsZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZScpO1xuICAgICAgICBjb25zdCB0ZXh0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRleHQnKTtcbiAgICAgICAgY29uc3QgZGF0ZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kYXRlJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdHMnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJpb3JpdHknKTtcblxuICAgICAgICB0aXRsZUZvcm0udmFsdWUgPSB0aGlzLnRpdGxlO1xuICAgICAgICB0ZXh0Rm9ybS52YWx1ZSA9IHRoaXMudGV4dDtcbiAgICAgICAgZGF0ZUZvcm0udmFsdWUgPSB0aGlzLmR1ZURhdGU7XG4gICAgICAgIHByb2plY3RGb3JtLnZhbHVlID0gdGhpcy5wcm9qZWN0O1xuICAgICAgICBwcmlvcml0eUZvcm0udmFsdWUgPSB0aGlzLnByaW9yaXR5O1xuICAgICAgICBcbiAgICAgICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZUZvcm0udmFsdWU7XG4gICAgICAgICAgICB0aGlzLnRleHQgPSB0ZXh0Rm9ybS52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IHRoaXMuZ2V0RHVlRGF0ZShkYXRlRm9ybS52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0Rm9ybS52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eUZvcm0udmFsdWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRpdGxlRG9tLmlubmVyVGV4dCA9IHRoaXMudGl0bGU7XG4gICAgICAgICAgICBkYXRlRG9tLmlubmVyVGV4dCA9IHRoaXMuZHVlRGF0ZTtcblxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGb3JtKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGb3JtKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldER1ZURhdGUoZHVlRGF0ZSkge1xuICAgICAgICBjb25zdCBkYXRlID0gZHVlRGF0ZS5zcGxpdCgnLScpO1xuICAgICAgICBjb25zdCBkYXkgPSBkYXRlWzJdO1xuICAgICAgICBjb25zdCBtb250aCA9IGRhdGVbMV07XG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlWzBdO1xuXG4gICAgICAgIGlmKHllYXIgPT09ICcnKSByZXR1cm4gJyc7XG4gICAgICAgIHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRm9ybSgpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5jbGFzc05hbWUgPSAnZWRpdC10b2RvLWZvcm0nO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLXdpbmRvdycpLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNsb3NlQnRuLmNsYXNzTmFtZSA9ICdjbG9zZS1lZGl0JztcbiAgICAgICAgY2xvc2VCdG4uaW5uZXJUZXh0ID0gJ1gnO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgaW5wdXQuaWQgPSAnZWRpdC10aXRsZSc7XG4gICAgICAgIGlucHV0Lm5hbWUgPSAndGl0bGUnO1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICdUaXRsZSc7XG4gICAgICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIHRleHQubmFtZSA9ICd0ZXh0JztcbiAgICAgICAgdGV4dC5pZCA9ICdlZGl0LXRleHQnO1xuICAgICAgICB0ZXh0LmNvbHMgPSAnMzAnO1xuICAgICAgICB0ZXh0LnJvd3MgPSAnNic7XG4gICAgICAgIHRleHQucGxhY2Vob2xkZXIgPSAnRGVzY3JpcHRpb24nO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIGR1ZURhdGUuaWQgPSAnZWRpdC1kYXRlJztcbiAgICAgICAgZHVlRGF0ZS5uYW1lID0gJ2R1ZS1kYXRlJztcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcm9qZWN0cy5pZCA9ICdlZGl0LXByb2plY3RzJztcbiAgICAgICAgcHJvamVjdHMubmFtZSA9ICdwcm9qZWN0cyc7XG4gICAgICAgIHByb2plY3RzLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbnMgPSBQcm9qZWN0cy5saXN0O1xuICAgICAgICBwcm9qZWN0T3B0aW9ucy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBwcm9qZWN0LnZhbHVlID0gYCR7a2V5LnRpdGxlfWA7XG4gICAgICAgICAgICBwcm9qZWN0LmlubmVyVGV4dCA9IGAke2tleS50aXRsZS50b1VwcGVyQ2FzZSgpfWA7XG4gICAgICAgICAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgcHJpb3JpdHkuaWQgPSAnZWRpdC1wcmlvcml0eSc7XG4gICAgICAgIHByaW9yaXR5Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgICAgICBwcmlvcml0eS5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBsb3cudmFsdWUgPSAnbG93JztcbiAgICAgICAgbG93LmlubmVyVGV4dCA9ICdMb3cnO1xuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChsb3cpO1xuICAgICAgICBjb25zdCBtZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgbWVkaXVtLnZhbHVlID0gJ21lZGl1bSc7XG4gICAgICAgIG1lZGl1bS5pbm5lclRleHQgPSAnTWVkaXVtJztcbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobWVkaXVtKTtcbiAgICAgICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBoaWdoLnZhbHVlID0gJ2hpZ2gnO1xuICAgICAgICBoaWdoLmlubmVyVGV4dCA9ICdIaWdoJztcbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2F2ZUJ0bi5jbGFzc05hbWUgPSAnc2F2ZSc7XG4gICAgICAgIHNhdmVCdG4uaW5uZXJUZXh0ID0gJ1NhdmUgQ2hhbmdlcyc7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2F2ZUJ0bik7XG4gICAgfVxuXG4gICAgcmVtb3ZlRm9ybSgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdG9kby1mb3JtJykucmVtb3ZlKCk7XG4gICAgfVxuICAgIFxuICAgIGRlbGV0ZURvbSh0b2RvQ29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZWRUaXRsZSA9IHRoaXMudGl0bGU7XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSBUb2Rvcy5saXN0LmZpbmRJbmRleChrZXkgPT4ga2V5LnRpdGxlID09PSBkZWxldGVkVGl0bGUpO1xuICAgICAgICBUb2Rvcy5saXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIFxuICAgICAgICB0b2RvQ29udGFpbmVyLnJlbW92ZSgpO1xuXG4gICAgICAgIFByb2plY3RzLnJlbW92ZUVtcHR5UHJvamVjdCgpO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wcm9qZWN0cy5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==