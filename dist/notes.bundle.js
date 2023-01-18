/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/notes.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Notes)
/* harmony export */ });
/* harmony import */ var _remove_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove.png */ "./src/remove.png");
/* harmony import */ var _edit_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.png */ "./src/edit.png");



class Notes {

    static list = [];

    constructor(title, text) {
        this.title = title;
        this.text = text;

        Notes.list.push({title, text});
    }

    generateNoteDom() {
        const noteContainer = document.createElement('div');
        noteContainer.className = 'note-item';
        document.querySelector('.notes-page').appendChild(noteContainer);

        const title = document.createElement('div');
        title.className = 'title';
        title.innerText = this.title;
        noteContainer.appendChild(title);

        const text = document.createElement('div');
        text.className = 'text';
        text.innerText = this.text;
        noteContainer.appendChild(text);

        const edit = document.createElement('img');
        edit.className = 'edit';
        edit.src = _edit_png__WEBPACK_IMPORTED_MODULE_1__;
        noteContainer.appendChild(edit);

        const remove = document.createElement('img');
        remove.className = 'remove';
        remove.src = _remove_png__WEBPACK_IMPORTED_MODULE_0__;
        noteContainer.appendChild(remove);
        
        title.addEventListener('click', () => {
            // pop up window shows details
        });
        
        edit.addEventListener('click', () => {
            this.editForm(title, text);
        });
        
        remove.addEventListener('click', () => {
            this.deleteDom(noteContainer);
        });        
    }

    editForm(titleDom, textDom) {
        document.querySelector('.edit-note-window').style.display = 'block';
        document.querySelector('.add-window').style.display = 'none';

        this.generateForm();

        const saveBtn = document.querySelector('.save');
        const closeBtn = document.querySelector('.close-edit');
        const titleForm = document.getElementById('edit-title');
        const textForm = document.getElementById('edit-text');

        titleForm.value = this.title;
        textForm.value = this.text;
        
        saveBtn.addEventListener('click', () => {
            this.title = titleForm.value;
            this.text = textForm.value;
            
            titleDom.innerText = this.title;
            textDom.innerText = this.text;

            this.removeForm();
            document.querySelector('.edit-note-window').style.display = 'none';
        });

        closeBtn.addEventListener('click', () => {
            this.removeForm();
            document.querySelector('.edit-note-window').style.display = 'none';
        });
    }

    generateForm() {
        const form = document.createElement('form');
        form.className = 'edit-note-form';
        document.querySelector('.edit-note-window').appendChild(form);

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

        const saveBtn = document.createElement('div');
        saveBtn.className = 'save';
        saveBtn.innerText = 'Save Changes';
        form.appendChild(saveBtn);
    }

    removeForm() {
        document.querySelector('.edit-note-form').remove();
    }
    
    deleteDom(item) {
        delete this.title;
        delete this.text;
        
        const index = Notes.list.findIndex(key => key.title === undefined);
        Notes.list.splice(index, 1);
        
        item.remove();
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNma0M7QUFDSjs7QUFFZjs7QUFFZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLFlBQVk7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixzQ0FBSTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLHdDQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ub3Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgUmVtb3ZlIGZyb20gXCIuL3JlbW92ZS5wbmdcIjtcbmltcG9ydCBFZGl0IGZyb20gXCIuL2VkaXQucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGVzIHtcblxuICAgIHN0YXRpYyBsaXN0ID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgdGV4dCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG5cbiAgICAgICAgTm90ZXMubGlzdC5wdXNoKHt0aXRsZSwgdGV4dH0pO1xuICAgIH1cblxuICAgIGdlbmVyYXRlTm90ZURvbSgpIHtcbiAgICAgICAgY29uc3Qgbm90ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBub3RlQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdub3RlLWl0ZW0nO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtcGFnZScpLmFwcGVuZENoaWxkKG5vdGVDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTmFtZSA9ICd0aXRsZSc7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHRoaXMudGl0bGU7XG4gICAgICAgIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGV4dC5jbGFzc05hbWUgPSAndGV4dCc7XG4gICAgICAgIHRleHQuaW5uZXJUZXh0ID0gdGhpcy50ZXh0O1xuICAgICAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWRpdC5jbGFzc05hbWUgPSAnZWRpdCc7XG4gICAgICAgIGVkaXQuc3JjID0gRWRpdDtcbiAgICAgICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0KTtcblxuICAgICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgcmVtb3ZlLmNsYXNzTmFtZSA9ICdyZW1vdmUnO1xuICAgICAgICByZW1vdmUuc3JjID0gUmVtb3ZlO1xuICAgICAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZSk7XG4gICAgICAgIFxuICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIHBvcCB1cCB3aW5kb3cgc2hvd3MgZGV0YWlsc1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVkaXRGb3JtKHRpdGxlLCB0ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZURvbShub3RlQ29udGFpbmVyKTtcbiAgICAgICAgfSk7ICAgICAgICBcbiAgICB9XG5cbiAgICBlZGl0Rm9ybSh0aXRsZURvbSwgdGV4dERvbSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1ub3RlLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgdGhpcy5nZW5lcmF0ZUZvcm0oKTtcblxuICAgICAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUnKTtcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtZWRpdCcpO1xuICAgICAgICBjb25zdCB0aXRsZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZScpO1xuICAgICAgICBjb25zdCB0ZXh0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRleHQnKTtcblxuICAgICAgICB0aXRsZUZvcm0udmFsdWUgPSB0aGlzLnRpdGxlO1xuICAgICAgICB0ZXh0Rm9ybS52YWx1ZSA9IHRoaXMudGV4dDtcbiAgICAgICAgXG4gICAgICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVGb3JtLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gdGV4dEZvcm0udmFsdWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRpdGxlRG9tLmlubmVyVGV4dCA9IHRoaXMudGl0bGU7XG4gICAgICAgICAgICB0ZXh0RG9tLmlubmVyVGV4dCA9IHRoaXMudGV4dDtcblxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGb3JtKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1ub3RlLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGb3JtKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1ub3RlLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRm9ybSgpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5jbGFzc05hbWUgPSAnZWRpdC1ub3RlLWZvcm0nO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1ub3RlLXdpbmRvdycpLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNsb3NlQnRuLmNsYXNzTmFtZSA9ICdjbG9zZS1lZGl0JztcbiAgICAgICAgY2xvc2VCdG4uaW5uZXJUZXh0ID0gJ1gnO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgaW5wdXQuaWQgPSAnZWRpdC10aXRsZSc7XG4gICAgICAgIGlucHV0Lm5hbWUgPSAndGl0bGUnO1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICdUaXRsZSc7XG4gICAgICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIHRleHQubmFtZSA9ICd0ZXh0JztcbiAgICAgICAgdGV4dC5pZCA9ICdlZGl0LXRleHQnO1xuICAgICAgICB0ZXh0LmNvbHMgPSAnMzAnO1xuICAgICAgICB0ZXh0LnJvd3MgPSAnNic7XG4gICAgICAgIHRleHQucGxhY2Vob2xkZXIgPSAnRGVzY3JpcHRpb24nO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2F2ZUJ0bi5jbGFzc05hbWUgPSAnc2F2ZSc7XG4gICAgICAgIHNhdmVCdG4uaW5uZXJUZXh0ID0gJ1NhdmUgQ2hhbmdlcyc7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2F2ZUJ0bik7XG4gICAgfVxuXG4gICAgcmVtb3ZlRm9ybSgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtbm90ZS1mb3JtJykucmVtb3ZlKCk7XG4gICAgfVxuICAgIFxuICAgIGRlbGV0ZURvbShpdGVtKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnRpdGxlO1xuICAgICAgICBkZWxldGUgdGhpcy50ZXh0O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaW5kZXggPSBOb3Rlcy5saXN0LmZpbmRJbmRleChrZXkgPT4ga2V5LnRpdGxlID09PSB1bmRlZmluZWQpO1xuICAgICAgICBOb3Rlcy5saXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIFxuICAgICAgICBpdGVtLnJlbW92ZSgpO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=