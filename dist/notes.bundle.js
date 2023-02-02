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

      console.log(Notes.list[index]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNma0M7QUFDSjs7QUFFZjtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsYUFBYTtBQUNuQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsc0NBQUk7QUFDbkI7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQix3Q0FBTTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25vdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBSZW1vdmUgZnJvbSBcIi4vcmVtb3ZlLnBuZ1wiO1xuaW1wb3J0IEVkaXQgZnJvbSBcIi4vZWRpdC5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90ZXMge1xuICBzdGF0aWMgbGlzdCA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCB0ZXh0KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG5cbiAgICBOb3Rlcy5saXN0LnB1c2goeyB0aXRsZSwgdGV4dCB9KTtcbiAgICBOb3Rlcy5zdG9yZURhdGEoKTtcblxuICAgIHRoaXMuZ2VuZXJhdGVOb3RlRG9tKCk7XG4gIH1cblxuICBzdGF0aWMgc3RvcmVEYXRhKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibm90ZXNcIiwgSlNPTi5zdHJpbmdpZnkoTm90ZXMubGlzdCkpO1xuICB9XG5cbiAgc3RhdGljIGdldFN0b3JhZ2VEYXRhKCkge1xuICAgIE5vdGVzLmxpc3QgPSBbXTtcblxuICAgIGNvbnN0IG5vdGVzTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJub3Rlc1wiKSk7XG4gICAgaWYgKG5vdGVzTGlzdCAhPT0gbnVsbCkge1xuICAgICAgbm90ZXNMaXN0LmZvckVhY2goKGtleSkgPT4gbmV3IE5vdGVzKGtleS50aXRsZSwga2V5LnRleHQpKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZU5vdGVEb20oKSB7XG4gICAgY29uc3Qgbm90ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbm90ZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm5vdGUtaXRlbVwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZXMtcGFnZVwiKS5hcHBlbmRDaGlsZChub3RlQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS5jbGFzc05hbWUgPSBcInRpdGxlXCI7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gdGhpcy50aXRsZTtcbiAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRleHQuY2xhc3NOYW1lID0gXCJ0ZXh0XCI7XG4gICAgdGV4dC5pbm5lclRleHQgPSB0aGlzLnRleHQ7XG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGVkaXQuY2xhc3NOYW1lID0gXCJlZGl0XCI7XG4gICAgZWRpdC5zcmMgPSBFZGl0O1xuICAgIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdCk7XG5cbiAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHJlbW92ZS5jbGFzc05hbWUgPSBcInJlbW92ZVwiO1xuICAgIHJlbW92ZS5zcmMgPSBSZW1vdmU7XG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmUpO1xuXG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vIHBvcCB1cCB3aW5kb3cgc2hvd3MgZGV0YWlsc1xuICAgIH0pO1xuXG4gICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5lZGl0Rm9ybSh0aXRsZSwgdGV4dCk7XG4gICAgICBOb3Rlcy5zdG9yZURhdGEoKTtcbiAgICB9KTtcblxuICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5kZWxldGVEb20obm90ZUNvbnRhaW5lcik7XG4gICAgICBOb3Rlcy5zdG9yZURhdGEoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGVkaXRGb3JtKHRpdGxlRG9tLCB0ZXh0RG9tKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LW5vdGUtd2luZG93XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtd2luZG93XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIE5vdGVzLmdlbmVyYXRlRm9ybSgpO1xuXG4gICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2F2ZVwiKTtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtZWRpdFwiKTtcbiAgICBjb25zdCB0aXRsZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtdGl0bGVcIik7XG4gICAgY29uc3QgdGV4dEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtdGV4dFwiKTtcbiAgICBjb25zdCBlZGl0ZWRUaXRsZSA9IHRoaXMudGl0bGU7XG5cbiAgICB0aXRsZUZvcm0udmFsdWUgPSB0aGlzLnRpdGxlO1xuICAgIHRleHRGb3JtLnZhbHVlID0gdGhpcy50ZXh0O1xuXG4gICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBOb3Rlcy5saXN0LmZpbmRJbmRleCgoa2V5KSA9PiBrZXkudGl0bGUgPT09IGVkaXRlZFRpdGxlKTtcblxuICAgICAgY29uc29sZS5sb2coTm90ZXMubGlzdFtpbmRleF0pO1xuICAgICAgTm90ZXMubGlzdFtpbmRleF0udGl0bGUgPSB0aXRsZUZvcm0udmFsdWU7XG4gICAgICBOb3Rlcy5saXN0W2luZGV4XS50ZXh0ID0gdGV4dEZvcm0udmFsdWU7XG5cbiAgICAgIHRpdGxlRG9tLmlubmVyVGV4dCA9IHRpdGxlRm9ybS52YWx1ZTtcbiAgICAgIHRleHREb20uaW5uZXJUZXh0ID0gdGV4dEZvcm0udmFsdWU7XG5cbiAgICAgIE5vdGVzLnN0b3JlRGF0YSgpO1xuICAgICAgTm90ZXMucmVtb3ZlRm9ybSgpO1xuICAgIH0pO1xuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIE5vdGVzLnJlbW92ZUZvcm0oKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZW5lcmF0ZUZvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NOYW1lID0gXCJlZGl0LW5vdGUtZm9ybVwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1ub3RlLXdpbmRvd1wiKS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjbG9zZUJ0bi5jbGFzc05hbWUgPSBcImNsb3NlLWVkaXRcIjtcbiAgICBjbG9zZUJ0bi5pbm5lclRleHQgPSBcIlhcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dC5pZCA9IFwiZWRpdC10aXRsZVwiO1xuICAgIGlucHV0Lm5hbWUgPSBcInRpdGxlXCI7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIlRpdGxlXCI7XG4gICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICB0ZXh0Lm5hbWUgPSBcInRleHRcIjtcbiAgICB0ZXh0LmlkID0gXCJlZGl0LXRleHRcIjtcbiAgICB0ZXh0LmNvbHMgPSBcIjMwXCI7XG4gICAgdGV4dC5yb3dzID0gXCI2XCI7XG4gICAgdGV4dC5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2F2ZUJ0bi5jbGFzc05hbWUgPSBcInNhdmVcIjtcbiAgICBzYXZlQnRuLmlubmVyVGV4dCA9IFwiU2F2ZSBDaGFuZ2VzXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzYXZlQnRuKTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVGb3JtKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1ub3RlLWZvcm1cIikucmVtb3ZlKCk7XG4gIH1cblxuICBkZWxldGVEb20oaXRlbSkge1xuICAgIGRlbGV0ZSB0aGlzLnRpdGxlO1xuICAgIGRlbGV0ZSB0aGlzLnRleHQ7XG5cbiAgICBjb25zdCBpbmRleCA9IE5vdGVzLmxpc3QuZmluZEluZGV4KChrZXkpID0+IGtleS50aXRsZSA9PT0gdW5kZWZpbmVkKTtcbiAgICBOb3Rlcy5saXN0LnNwbGljZShpbmRleCwgMSk7XG5cbiAgICBpdGVtLnJlbW92ZSgpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=