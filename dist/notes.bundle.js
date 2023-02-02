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

    Notes.list.push({ title, text });
    Notes.storeData();

    this.generateNoteDom();
  }

  static storeData() {
    localStorage.setItem("notes", JSON.stringify(Notes.list));
  }

  static getStorageData() {
    Notes.list = [];

    const notesList = JSON.parse(localStorage.getItem("notes"));
    if (notesList !== null) {
      notesList.forEach((key) => new Notes(key.title, key.text));
    }
  }

  generateNoteDom() {
    const noteContainer = document.createElement("div");
    noteContainer.className = "note-item";
    document.querySelector(".notes-page").appendChild(noteContainer);

    const title = document.createElement("div");
    title.className = "title";
    title.innerText = this.title;
    noteContainer.appendChild(title);

    const text = document.createElement("div");
    text.className = "text";
    text.innerText = this.text;
    noteContainer.appendChild(text);

    const edit = document.createElement("img");
    edit.className = "edit";
    edit.src = _edit_png__WEBPACK_IMPORTED_MODULE_1__;
    noteContainer.appendChild(edit);

    const remove = document.createElement("img");
    remove.className = "remove";
    remove.src = _remove_png__WEBPACK_IMPORTED_MODULE_0__;
    noteContainer.appendChild(remove);

    title.addEventListener("click", () => {
      // pop up window shows details
    });

    edit.addEventListener("click", () => {
      this.editForm(title, text);
      Notes.storeData();
    });

    remove.addEventListener("click", () => {
      this.deleteDom(noteContainer);
      Notes.storeData();
    });
  }

  editForm(titleDom, textDom) {
    document.querySelector(".edit-note-window").style.display = "block";
    document.querySelector(".add-window").style.display = "none";

    Notes.generateForm();

    const saveBtn = document.querySelector(".save");
    const closeBtn = document.querySelector(".close-edit");
    const titleForm = document.getElementById("edit-title");
    const textForm = document.getElementById("edit-text");
    const editedTitle = this.title;

    titleForm.value = this.title;
    textForm.value = this.text;

    saveBtn.addEventListener("click", () => {
      const index = Notes.list.findIndex((key) => key.title === editedTitle);

      Notes.list[index].title = titleForm.value;
      Notes.list[index].text = textForm.value;

      titleDom.innerText = titleForm.value;
      textDom.innerText = textForm.value;

      Notes.storeData();
      Notes.removeForm();
    });

    closeBtn.addEventListener("click", () => {
      Notes.removeForm();
    });
  }

  static generateForm() {
    const form = document.createElement("form");
    form.className = "edit-note-form";
    document.querySelector(".edit-note-window").appendChild(form);

    const closeBtn = document.createElement("div");
    closeBtn.className = "close-edit";
    closeBtn.innerText = "X";
    form.appendChild(closeBtn);

    const input = document.createElement("input");
    input.type = "text";
    input.id = "edit-title";
    input.name = "title";
    input.placeholder = "Title";
    input.required = true;
    form.appendChild(input);

    const text = document.createElement("textarea");
    text.name = "text";
    text.id = "edit-text";
    text.cols = "30";
    text.rows = "6";
    text.placeholder = "Description";
    form.appendChild(text);

    const saveBtn = document.createElement("div");
    saveBtn.className = "save";
    saveBtn.innerText = "Save Changes";
    form.appendChild(saveBtn);
  }

  static removeForm() {
    document.querySelector(".edit-note-form").remove();
  }

  deleteDom(item) {
    delete this.title;
    delete this.text;

    const index = Notes.list.findIndex((key) => key.title === undefined);
    Notes.list.splice(index, 1);

    item.remove();
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNma0M7QUFDSjs7QUFFZjtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsYUFBYTtBQUNuQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsc0NBQUk7QUFDbkI7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQix3Q0FBTTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ub3Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgUmVtb3ZlIGZyb20gXCIuL3JlbW92ZS5wbmdcIjtcbmltcG9ydCBFZGl0IGZyb20gXCIuL2VkaXQucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGVzIHtcbiAgc3RhdGljIGxpc3QgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgdGV4dCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuXG4gICAgTm90ZXMubGlzdC5wdXNoKHsgdGl0bGUsIHRleHQgfSk7XG4gICAgTm90ZXMuc3RvcmVEYXRhKCk7XG5cbiAgICB0aGlzLmdlbmVyYXRlTm90ZURvbSgpO1xuICB9XG5cbiAgc3RhdGljIHN0b3JlRGF0YSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5vdGVzXCIsIEpTT04uc3RyaW5naWZ5KE5vdGVzLmxpc3QpKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTdG9yYWdlRGF0YSgpIHtcbiAgICBOb3Rlcy5saXN0ID0gW107XG5cbiAgICBjb25zdCBub3Rlc0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibm90ZXNcIikpO1xuICAgIGlmIChub3Rlc0xpc3QgIT09IG51bGwpIHtcbiAgICAgIG5vdGVzTGlzdC5mb3JFYWNoKChrZXkpID0+IG5ldyBOb3RlcyhrZXkudGl0bGUsIGtleS50ZXh0KSk7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVOb3RlRG9tKCkge1xuICAgIGNvbnN0IG5vdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5vdGVDb250YWluZXIuY2xhc3NOYW1lID0gXCJub3RlLWl0ZW1cIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVzLXBhZ2VcIikuYXBwZW5kQ2hpbGQobm90ZUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZVwiO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IHRoaXMudGl0bGU7XG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0ZXh0LmNsYXNzTmFtZSA9IFwidGV4dFwiO1xuICAgIHRleHQuaW5uZXJUZXh0ID0gdGhpcy50ZXh0O1xuICAgIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBlZGl0LmNsYXNzTmFtZSA9IFwiZWRpdFwiO1xuICAgIGVkaXQuc3JjID0gRWRpdDtcbiAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXQpO1xuXG4gICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICByZW1vdmUuY2xhc3NOYW1lID0gXCJyZW1vdmVcIjtcbiAgICByZW1vdmUuc3JjID0gUmVtb3ZlO1xuICAgIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcblxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyBwb3AgdXAgd2luZG93IHNob3dzIGRldGFpbHNcbiAgICB9KTtcblxuICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuZWRpdEZvcm0odGl0bGUsIHRleHQpO1xuICAgICAgTm90ZXMuc3RvcmVEYXRhKCk7XG4gICAgfSk7XG5cbiAgICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuZGVsZXRlRG9tKG5vdGVDb250YWluZXIpO1xuICAgICAgTm90ZXMuc3RvcmVEYXRhKCk7XG4gICAgfSk7XG4gIH1cblxuICBlZGl0Rm9ybSh0aXRsZURvbSwgdGV4dERvbSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1ub3RlLXdpbmRvd1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXdpbmRvd1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICBOb3Rlcy5nZW5lcmF0ZUZvcm0oKTtcblxuICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNhdmVcIik7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWVkaXRcIik7XG4gICAgY29uc3QgdGl0bGVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXRpdGxlXCIpO1xuICAgIGNvbnN0IHRleHRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXRleHRcIik7XG4gICAgY29uc3QgZWRpdGVkVGl0bGUgPSB0aGlzLnRpdGxlO1xuXG4gICAgdGl0bGVGb3JtLnZhbHVlID0gdGhpcy50aXRsZTtcbiAgICB0ZXh0Rm9ybS52YWx1ZSA9IHRoaXMudGV4dDtcblxuICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTm90ZXMubGlzdC5maW5kSW5kZXgoKGtleSkgPT4ga2V5LnRpdGxlID09PSBlZGl0ZWRUaXRsZSk7XG5cbiAgICAgIE5vdGVzLmxpc3RbaW5kZXhdLnRpdGxlID0gdGl0bGVGb3JtLnZhbHVlO1xuICAgICAgTm90ZXMubGlzdFtpbmRleF0udGV4dCA9IHRleHRGb3JtLnZhbHVlO1xuXG4gICAgICB0aXRsZURvbS5pbm5lclRleHQgPSB0aXRsZUZvcm0udmFsdWU7XG4gICAgICB0ZXh0RG9tLmlubmVyVGV4dCA9IHRleHRGb3JtLnZhbHVlO1xuXG4gICAgICBOb3Rlcy5zdG9yZURhdGEoKTtcbiAgICAgIE5vdGVzLnJlbW92ZUZvcm0oKTtcbiAgICB9KTtcblxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBOb3Rlcy5yZW1vdmVGb3JtKCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2VuZXJhdGVGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTmFtZSA9IFwiZWRpdC1ub3RlLWZvcm1cIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtbm90ZS13aW5kb3dcIikuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2xvc2VCdG4uY2xhc3NOYW1lID0gXCJjbG9zZS1lZGl0XCI7XG4gICAgY2xvc2VCdG4uaW5uZXJUZXh0ID0gXCJYXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXQuaWQgPSBcImVkaXQtdGl0bGVcIjtcbiAgICBpbnB1dC5uYW1lID0gXCJ0aXRsZVwiO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJUaXRsZVwiO1xuICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgdGV4dC5uYW1lID0gXCJ0ZXh0XCI7XG4gICAgdGV4dC5pZCA9IFwiZWRpdC10ZXh0XCI7XG4gICAgdGV4dC5jb2xzID0gXCIzMFwiO1xuICAgIHRleHQucm93cyA9IFwiNlwiO1xuICAgIHRleHQucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNhdmVCdG4uY2xhc3NOYW1lID0gXCJzYXZlXCI7XG4gICAgc2F2ZUJ0bi5pbm5lclRleHQgPSBcIlNhdmUgQ2hhbmdlc1wiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2F2ZUJ0bik7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlRm9ybSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtbm90ZS1mb3JtXCIpLnJlbW92ZSgpO1xuICB9XG5cbiAgZGVsZXRlRG9tKGl0ZW0pIHtcbiAgICBkZWxldGUgdGhpcy50aXRsZTtcbiAgICBkZWxldGUgdGhpcy50ZXh0O1xuXG4gICAgY29uc3QgaW5kZXggPSBOb3Rlcy5saXN0LmZpbmRJbmRleCgoa2V5KSA9PiBrZXkudGl0bGUgPT09IHVuZGVmaW5lZCk7XG4gICAgTm90ZXMubGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgaXRlbS5yZW1vdmUoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9