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
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/todos.js");


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

            const projectPage = document.createElement('div');
            projectPage.className = 'project-page';
            projectPage.id = `${key.title}`;
            document.querySelector('.project-pages').appendChild(projectPage);
        });

        // const projectOptions = document.querySelectorAll('.project-option');

        // projectOptions.forEach(key => {
        //     key.addEventListener('click', () => {
        //         document.querySelector('.add-window').style.display = 'none';
        //         document.querySelector('.todos-page').style.display = 'none';
        //         document.querySelector('.notes-page').style.display = 'none';
        //         document.getElementById(`${key.title}`).style.display = 'block';
        //     })
        // });
    }

    generateProjectPage() {

    }

    removeProject() {

    }

    static removeAll() {
        const projects = document.querySelectorAll('.project-option');
        projects.forEach(key => key.remove());
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

    generateDom() {
        const todoContainer = document.createElement('div');
        todoContainer.className = 'todo-item';
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
        delete this.title;
        delete this.text;
        delete this.dueDate;
        delete this.project;
        delete this.priority;
        
        const index = Todos.list.findIndex(key => key.title === undefined);
        Todos.list.splice(index, 1);
        
        todoContainer.remove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb2RvcyBmcm9tIFwiLi90b2Rvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0cyB7XG5cbiAgICBzdGF0aWMgbGlzdCA9IFt7dGl0bGU6ICdNQUlOJ31dO1xuXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuXG4gICAgICAgIFByb2plY3RzLmxpc3QucHVzaCh7dGl0bGV9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkUHJvamVjdERvbSgpIHtcbiAgICAgICAgUHJvamVjdHMucmVtb3ZlQWxsKCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xuICAgICAgICBjb25zdCBzaWRlYmFyUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lcycpO1xuICAgICAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBQcm9qZWN0cy5saXN0O1xuXG4gICAgICAgIHByb2plY3RzTGlzdC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnZhbHVlID0gYCR7a2V5LnRpdGxlfWA7XG4gICAgICAgICAgICBwcm9qZWN0T3B0aW9uLmlubmVyVGV4dCA9IGAke2tleS50aXRsZS50b1VwcGVyQ2FzZSgpfWA7XG4gICAgICAgICAgICBwcm9qZWN0T3B0aW9uLmNsYXNzTmFtZSA9ICdwcm9qZWN0LW9wdGlvbic7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5pbm5lclRleHQgPSBgJHtrZXkudGl0bGUudG9VcHBlckNhc2UoKX1gO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NOYW1lID0gJ3Byb2plY3Qtb3B0aW9uJztcbiAgICAgICAgICAgIHNpZGViYXJQcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0UGFnZS5jbGFzc05hbWUgPSAncHJvamVjdC1wYWdlJztcbiAgICAgICAgICAgIHByb2plY3RQYWdlLmlkID0gYCR7a2V5LnRpdGxlfWA7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1wYWdlcycpLmFwcGVuZENoaWxkKHByb2plY3RQYWdlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY29uc3QgcHJvamVjdE9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1vcHRpb24nKTtcblxuICAgICAgICAvLyBwcm9qZWN0T3B0aW9ucy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIC8vICAgICBrZXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC13aW5kb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAvLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvcy1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIC8vICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7a2V5LnRpdGxlfWApLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVQcm9qZWN0UGFnZSgpIHtcblxuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3QoKSB7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlQWxsKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW9wdGlvbicpO1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKGtleSA9PiBrZXkucmVtb3ZlKCkpO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVtb3ZlIGZyb20gJy4vcmVtb3ZlLnBuZyc7XG5pbXBvcnQgRWRpdCBmcm9tICcuL2VkaXQucG5nJztcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuL3Byb2plY3RzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb3Mge1xuXG4gICAgc3RhdGljIGxpc3QgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCB0ZXh0LCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG4gICAgICAgIFRvZG9zLmxpc3QucHVzaCh7dGl0bGUsIHRleHQsIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5fSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVEb20oKSB7XG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5jbGFzc05hbWUgPSAndG9kby1pdGVtJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLXBhZ2UnKS5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBjb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbXBsZXRlLmNsYXNzTmFtZSA9ICdjb21wbGV0ZSc7XG4gICAgICAgIGNvbXBsZXRlLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS5jbGFzc05hbWUgPSAndGl0bGUnO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSB0aGlzLnRpdGxlO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGUuY2xhc3NOYW1lID0gJ2RhdGUnO1xuICAgICAgICBkYXRlLmlubmVyVGV4dCA9IHRoaXMuZ2V0RHVlRGF0ZSh0aGlzLmR1ZURhdGUpO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWRpdC5jbGFzc05hbWUgPSAnZWRpdCc7XG4gICAgICAgIGVkaXQuc3JjID0gRWRpdDtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0KTtcblxuICAgICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgcmVtb3ZlLmNsYXNzTmFtZSA9ICdyZW1vdmUnO1xuICAgICAgICByZW1vdmUuc3JjID0gUmVtb3ZlO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZSk7XG5cbiAgICAgICAgY29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlKHRpdGxlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lZGl0Rm9ybSh0aXRsZSwgZGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVEb20odG9kb0NvbnRhaW5lcik7XG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGNvbXBsZXRlKHRpdGxlKSB7XG4gICAgICAgIGlmKHRpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uICE9PSAnbGluZS10aHJvdWdoJykgdGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgICAgZWxzZSB0aXRsZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndGV4dC1kZWNvcmF0aW9uJyk7XG4gICAgfVxuICAgIFxuICAgIGVkaXRGb3JtKHRpdGxlRG9tLCBkYXRlRG9tKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRvZG8td2luZG93Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtd2luZG93Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICB0aGlzLmdlbmVyYXRlRm9ybSgpO1xuXG4gICAgICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZScpO1xuICAgICAgICBjb25zdCB0aXRsZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZScpO1xuICAgICAgICBjb25zdCB0ZXh0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRleHQnKTtcbiAgICAgICAgY29uc3QgZGF0ZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kYXRlJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdHMnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJpb3JpdHknKTtcblxuICAgICAgICB0aXRsZUZvcm0udmFsdWUgPSB0aGlzLnRpdGxlO1xuICAgICAgICB0ZXh0Rm9ybS52YWx1ZSA9IHRoaXMudGV4dDtcbiAgICAgICAgZGF0ZUZvcm0udmFsdWUgPSB0aGlzLmR1ZURhdGU7XG4gICAgICAgIHByb2plY3RGb3JtLnZhbHVlID0gdGhpcy5wcm9qZWN0O1xuICAgICAgICBwcmlvcml0eUZvcm0udmFsdWUgPSB0aGlzLnByaW9yaXR5O1xuICAgICAgICBcbiAgICAgICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZUZvcm0udmFsdWU7XG4gICAgICAgICAgICB0aGlzLnRleHQgPSB0ZXh0Rm9ybS52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IHRoaXMuZ2V0RHVlRGF0ZShkYXRlRm9ybS52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0Rm9ybS52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eUZvcm0udmFsdWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRpdGxlRG9tLmlubmVyVGV4dCA9IHRoaXMudGl0bGU7XG4gICAgICAgICAgICBkYXRlRG9tLmlubmVyVGV4dCA9IHRoaXMuZHVlRGF0ZTtcblxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGb3JtKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldER1ZURhdGUoZHVlRGF0ZSkge1xuICAgICAgICBjb25zdCBkYXRlID0gZHVlRGF0ZS5zcGxpdCgnLScpO1xuICAgICAgICBjb25zdCBkYXkgPSBkYXRlWzJdO1xuICAgICAgICBjb25zdCBtb250aCA9IGRhdGVbMV07XG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlWzBdO1xuICAgICAgICBpZih5ZWFyID09PSAnJykgcmV0dXJuICcnO1xuICAgICAgICByZXR1cm4gYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9YDtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uY2xhc3NOYW1lID0gJ2VkaXQtdG9kby1mb3JtJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdG9kby13aW5kb3cnKS5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgaW5wdXQuaWQgPSAnZWRpdC10aXRsZSc7XG4gICAgICAgIGlucHV0Lm5hbWUgPSAndGl0bGUnO1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICdUaXRsZSc7XG4gICAgICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIHRleHQubmFtZSA9ICd0ZXh0JztcbiAgICAgICAgdGV4dC5pZCA9ICdlZGl0LXRleHQnO1xuICAgICAgICB0ZXh0LmNvbHMgPSAnMzAnO1xuICAgICAgICB0ZXh0LnJvd3MgPSAnNic7XG4gICAgICAgIHRleHQucGxhY2Vob2xkZXIgPSAnRGVzY3JpcHRpb24nO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIGR1ZURhdGUuaWQgPSAnZWRpdC1kYXRlJztcbiAgICAgICAgZHVlRGF0ZS5uYW1lID0gJ2R1ZS1kYXRlJztcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcm9qZWN0cy5pZCA9ICdlZGl0LXByb2plY3RzJztcbiAgICAgICAgcHJvamVjdHMubmFtZSA9ICdwcm9qZWN0cyc7XG4gICAgICAgIHByb2plY3RzLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbnMgPSBQcm9qZWN0cy5saXN0O1xuICAgICAgICBwcm9qZWN0T3B0aW9ucy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBwcm9qZWN0LnZhbHVlID0gYCR7a2V5LnRpdGxlfWA7XG4gICAgICAgICAgICBwcm9qZWN0LmlubmVyVGV4dCA9IGAke2tleS50aXRsZS50b1VwcGVyQ2FzZSgpfWA7XG4gICAgICAgICAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgcHJpb3JpdHkuaWQgPSAnZWRpdC1wcmlvcml0eSc7XG4gICAgICAgIHByaW9yaXR5Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgICAgICBwcmlvcml0eS5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBsb3cudmFsdWUgPSAnbG93JztcbiAgICAgICAgbG93LmlubmVyVGV4dCA9ICdMb3cnO1xuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChsb3cpO1xuICAgICAgICBjb25zdCBtZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgbWVkaXVtLnZhbHVlID0gJ21lZGl1bSc7XG4gICAgICAgIG1lZGl1bS5pbm5lclRleHQgPSAnTWVkaXVtJztcbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobWVkaXVtKTtcbiAgICAgICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBoaWdoLnZhbHVlID0gJ2hpZ2gnO1xuICAgICAgICBoaWdoLmlubmVyVGV4dCA9ICdIaWdoJztcbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidG4uY2xhc3NOYW1lID0gJ3NhdmUnO1xuICAgICAgICBidG4uaW5uZXJUZXh0ID0gJ1NhdmUgQ2hhbmdlcyc7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB9XG5cbiAgICByZW1vdmVGb3JtKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLWZvcm0nKS5yZW1vdmUoKTtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlRG9tKHRvZG9Db250YWluZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMudGl0bGU7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnRleHQ7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmR1ZURhdGU7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnByb2plY3Q7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnByaW9yaXR5O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaW5kZXggPSBUb2Rvcy5saXN0LmZpbmRJbmRleChrZXkgPT4ga2V5LnRpdGxlID09PSB1bmRlZmluZWQpO1xuICAgICAgICBUb2Rvcy5saXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIFxuICAgICAgICB0b2RvQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90b2Rvcy5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==