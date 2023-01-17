/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 8fr 1fr;\n    height: 100vh;\n    width: 90vw;\n}\n\n.header {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    text-decoration: none;\n}\n\n.sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.project-names {\n    display: flex;\n    flex-direction: column;\n}\n\n.content {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\n.footer {\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n}\n\n.add-window {\n    display: grid;\n    grid-template-columns: 2fr 4fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr 5fr;\n\n    height: 350px;\n    width: 500px;\n\n    border: red 2px solid;\n}\n\n.new-todo,\n.new-project,\n.new-note {\n    grid-column: 1 / 2;\n}\n\n.add-todo-form,\n.add-project-form,\n.add-note-form,\n.edit-todo-window,\n.edit-note-window {\n    grid-column: 2 / 3;\n    grid-row: 2 / -1;\n}\n\n.add-window,\n.add-project-form,\n.add-note-form,\n.edit-todo-window,\n.edit-note-window {\n    display: none;\n}\n\n.close {\n    grid-column: 3 / 4;\n    grid-row: 1 / 2;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n.notes-page {\n    display: none;\n}\n\n.todo-item > img,\n.note-item > img {\n    width: 1.5rem;\n    height: auto;\n}\n\n.todo-item,\n.note-item {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,8BAA8B;IAC9B,+BAA+B;IAC/B,aAAa;IACb,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,eAAe;;IAEf,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,uCAAuC;;IAEvC,aAAa;IACb,YAAY;;IAEZ,qBAAqB;AACzB;;AAEA;;;IAGI,kBAAkB;AACtB;;AAEA;;;;;IAKI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;;;;;IAKI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,aAAa;IACb,YAAY;AAChB;;AAEA;;IAEI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC","sourcesContent":["body {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 8fr 1fr;\n    height: 100vh;\n    width: 90vw;\n}\n\n.header {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    text-decoration: none;\n}\n\n.sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.project-names {\n    display: flex;\n    flex-direction: column;\n}\n\n.content {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\n.footer {\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n}\n\n.add-window {\n    display: grid;\n    grid-template-columns: 2fr 4fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr 5fr;\n\n    height: 350px;\n    width: 500px;\n\n    border: red 2px solid;\n}\n\n.new-todo,\n.new-project,\n.new-note {\n    grid-column: 1 / 2;\n}\n\n.add-todo-form,\n.add-project-form,\n.add-note-form,\n.edit-todo-window,\n.edit-note-window {\n    grid-column: 2 / 3;\n    grid-row: 2 / -1;\n}\n\n.add-window,\n.add-project-form,\n.add-note-form,\n.edit-todo-window,\n.edit-note-window {\n    display: none;\n}\n\n.close {\n    grid-column: 3 / 4;\n    grid-row: 1 / 2;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n.notes-page {\n    display: none;\n}\n\n.todo-item > img,\n.note-item > img {\n    width: 1.5rem;\n    height: auto;\n}\n\n.todo-item,\n.note-item {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/notes.js":
/*!**********************!*\
  !*** ./src/notes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    }

    generateForm() {
        const form = document.createElement('form');
        form.className = 'edit-note-form';
        document.querySelector('.edit-note-window').appendChild(form);
        
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

        const btn = document.createElement('div');
        btn.className = 'save';
        btn.innerText = 'Save Changes';
        form.appendChild(btn);
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

/***/ }),

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _notes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notes.js */ "./src/notes.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const domManipulator = () => {
    const start = () => {
        _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].addProjectDom();
    };

    const clearForms = () => {
        document.querySelector('.add-todo-form').reset();
        document.querySelector('.add-project-form').reset();
        document.querySelector('.add-note-form').reset();
    };

    const generateTodo = () => {
        const todo = new _todos_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            document.getElementById('todo-title').value,
            document.getElementById('todo-text').value,
            document.getElementById('due-date').value,
            document.getElementById('projects').value,
            document.getElementById('priority').value,
        );

        todo.generateDom();
    };

    const generateProject = () => {
        const project = new _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"](document.getElementById('project-title').value);
        
        _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].addProjectDom();
    };
    
    const generateNote = () => {
        const note = new _notes_js__WEBPACK_IMPORTED_MODULE_2__["default"](
            document.getElementById('note-title').value,
            document.getElementById('note-text').value
        );

        note.generateNoteDom();
    };

    return {start, clearForms, generateTodo, generateProject, generateNote};
};

const page = domManipulator();
page.start();

const addTodoBtn = document.querySelector('.submit-todo');
const addProjectBtn = document.querySelector('.submit-project');
const addNoteBtn = document.querySelector('.submit-note');
const addBtn = document.querySelector('.add-button');
const newTodoBtn = document.querySelector('.new-todo');
const newProjectBtn = document.querySelector('.new-project');
const newNoteBtn = document.querySelector('.new-note');
const closeBtn = document.querySelector('.close');
const todoPageBtn = document.querySelector('.home');
const notePageBtn = document.querySelector('.notes');
const closeEditBtn = document.querySelector('.close-edit');

closeEditBtn.addEventListener('click', () => {
    document.querySelector('.edit-todo-window').style.display = 'none';
    document.querySelector('.edit-note-window').style.display = 'none';
});
addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault(); //prevents sending the form and refreshing the page
    page.generateTodo();
    page.clearForms();
});
addProjectBtn.addEventListener('click', (e) => {
    e.preventDefault(); //prevents sending the form and refreshing the page
    page.generateProject();
    page.clearForms();
});
addNoteBtn.addEventListener('click', (e) => {
    e.preventDefault(); //prevents sending the form and refreshing the page
    page.generateNote();
    page.clearForms();
});
newTodoBtn.addEventListener('click', () => {
    document.querySelector('.add-todo-form').style.display = 'block';
    document.querySelector('.add-project-form').style.display = 'none';
    document.querySelector('.add-note-form').style.display = 'none';
    page.clearForms();
});
newProjectBtn.addEventListener('click', () => {
    document.querySelector('.add-todo-form').style.display = 'none';
    document.querySelector('.add-project-form').style.display = 'block';
    document.querySelector('.add-note-form').style.display = 'none';
    page.clearForms();
});
newNoteBtn.addEventListener('click', () => {
    document.querySelector('.add-todo-form').style.display = 'none';
    document.querySelector('.add-project-form').style.display = 'none';
    document.querySelector('.add-note-form').style.display = 'block';
    page.clearForms();
});
addBtn.addEventListener('click', () => {
    document.querySelector('.add-window').style.display = 'grid';
});
closeBtn.addEventListener('click', () => {
    document.querySelector('.add-window').style.display = 'none';
    page.clearForms();
});
todoPageBtn.addEventListener('click', () => {
    document.querySelector('.todos-page').style.display = 'block';
    document.querySelector('.notes-page').style.display = 'none';
    document.querySelector('.add-window').style.display = 'none';
    page.clearForms();
})
notePageBtn.addEventListener('click', () => {
    document.querySelector('.todos-page').style.display = 'none';
    document.querySelector('.notes-page').style.display = 'block';
    document.querySelector('.add-window').style.display = 'none';
    page.clearForms();
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQSw0QkFBNEIsb0RBQVE7QUFDcEM7QUFDQSxRQUFRLGtFQUFzQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaURBQUs7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ub3Rlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnIgMWZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogOTB2dztcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnByb2plY3QtbmFtZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5hZGQtd2luZG93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNGZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgNWZyO1xcblxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxuXFxuICAgIGJvcmRlcjogcmVkIDJweCBzb2xpZDtcXG59XFxuXFxuLm5ldy10b2RvLFxcbi5uZXctcHJvamVjdCxcXG4ubmV3LW5vdGUge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi5hZGQtdG9kby1mb3JtLFxcbi5hZGQtcHJvamVjdC1mb3JtLFxcbi5hZGQtbm90ZS1mb3JtLFxcbi5lZGl0LXRvZG8td2luZG93LFxcbi5lZGl0LW5vdGUtd2luZG93IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIC0xO1xcbn1cXG5cXG4uYWRkLXdpbmRvdyxcXG4uYWRkLXByb2plY3QtZm9ybSxcXG4uYWRkLW5vdGUtZm9ybSxcXG4uZWRpdC10b2RvLXdpbmRvdyxcXG4uZWRpdC1ub3RlLXdpbmRvdyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jbG9zZSB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ub3Rlcy1wYWdlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8taXRlbSA+IGltZyxcXG4ubm90ZS1pdGVtID4gaW1nIHtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4udG9kby1pdGVtLFxcbi5ub3RlLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHVDQUF1Qzs7SUFFdkMsYUFBYTtJQUNiLFlBQVk7O0lBRVoscUJBQXFCO0FBQ3pCOztBQUVBOzs7SUFHSSxrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7O0lBS0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTs7Ozs7SUFLSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnIgMWZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogOTB2dztcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnByb2plY3QtbmFtZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5hZGQtd2luZG93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNGZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgNWZyO1xcblxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxuXFxuICAgIGJvcmRlcjogcmVkIDJweCBzb2xpZDtcXG59XFxuXFxuLm5ldy10b2RvLFxcbi5uZXctcHJvamVjdCxcXG4ubmV3LW5vdGUge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi5hZGQtdG9kby1mb3JtLFxcbi5hZGQtcHJvamVjdC1mb3JtLFxcbi5hZGQtbm90ZS1mb3JtLFxcbi5lZGl0LXRvZG8td2luZG93LFxcbi5lZGl0LW5vdGUtd2luZG93IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIC0xO1xcbn1cXG5cXG4uYWRkLXdpbmRvdyxcXG4uYWRkLXByb2plY3QtZm9ybSxcXG4uYWRkLW5vdGUtZm9ybSxcXG4uZWRpdC10b2RvLXdpbmRvdyxcXG4uZWRpdC1ub3RlLXdpbmRvdyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jbG9zZSB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ub3Rlcy1wYWdlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8taXRlbSA+IGltZyxcXG4ubm90ZS1pdGVtID4gaW1nIHtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4udG9kby1pdGVtLFxcbi5ub3RlLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBSZW1vdmUgZnJvbSBcIi4vcmVtb3ZlLnBuZ1wiO1xuaW1wb3J0IEVkaXQgZnJvbSBcIi4vZWRpdC5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90ZXMge1xuXG4gICAgc3RhdGljIGxpc3QgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCB0ZXh0KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcblxuICAgICAgICBOb3Rlcy5saXN0LnB1c2goe3RpdGxlLCB0ZXh0fSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVOb3RlRG9tKCkge1xuICAgICAgICBjb25zdCBub3RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5vdGVDb250YWluZXIuY2xhc3NOYW1lID0gJ25vdGUtaXRlbSc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1wYWdlJykuYXBwZW5kQ2hpbGQobm90ZUNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGUuY2xhc3NOYW1lID0gJ3RpdGxlJztcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gdGhpcy50aXRsZTtcbiAgICAgICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0LmNsYXNzTmFtZSA9ICd0ZXh0JztcbiAgICAgICAgdGV4dC5pbm5lclRleHQgPSB0aGlzLnRleHQ7XG4gICAgICAgIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBlZGl0LmNsYXNzTmFtZSA9ICdlZGl0JztcbiAgICAgICAgZWRpdC5zcmMgPSBFZGl0O1xuICAgICAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXQpO1xuXG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICByZW1vdmUuY2xhc3NOYW1lID0gJ3JlbW92ZSc7XG4gICAgICAgIHJlbW92ZS5zcmMgPSBSZW1vdmU7XG4gICAgICAgIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbiAgICAgICAgXG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gcG9wIHVwIHdpbmRvdyBzaG93cyBkZXRhaWxzXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWRpdEZvcm0odGl0bGUsIHRleHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlRG9tKG5vdGVDb250YWluZXIpO1xuICAgICAgICB9KTsgICAgICAgIFxuICAgIH1cblxuICAgIGVkaXRGb3JtKHRpdGxlRG9tLCB0ZXh0RG9tKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LW5vdGUtd2luZG93Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtd2luZG93Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICB0aGlzLmdlbmVyYXRlRm9ybSgpO1xuXG4gICAgICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZScpO1xuICAgICAgICBjb25zdCB0aXRsZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZScpO1xuICAgICAgICBjb25zdCB0ZXh0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRleHQnKTtcblxuICAgICAgICB0aXRsZUZvcm0udmFsdWUgPSB0aGlzLnRpdGxlO1xuICAgICAgICB0ZXh0Rm9ybS52YWx1ZSA9IHRoaXMudGV4dDtcbiAgICAgICAgXG4gICAgICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVGb3JtLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gdGV4dEZvcm0udmFsdWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRpdGxlRG9tLmlubmVyVGV4dCA9IHRoaXMudGl0bGU7XG4gICAgICAgICAgICB0ZXh0RG9tLmlubmVyVGV4dCA9IHRoaXMudGV4dDtcblxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGb3JtKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1ub3RlLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRm9ybSgpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5jbGFzc05hbWUgPSAnZWRpdC1ub3RlLWZvcm0nO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1ub3RlLXdpbmRvdycpLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICBpbnB1dC5pZCA9ICdlZGl0LXRpdGxlJztcbiAgICAgICAgaW5wdXQubmFtZSA9ICd0aXRsZSc7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gJ1RpdGxlJztcbiAgICAgICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgdGV4dC5uYW1lID0gJ3RleHQnO1xuICAgICAgICB0ZXh0LmlkID0gJ2VkaXQtdGV4dCc7XG4gICAgICAgIHRleHQuY29scyA9ICczMCc7XG4gICAgICAgIHRleHQucm93cyA9ICc2JztcbiAgICAgICAgdGV4dC5wbGFjZWhvbGRlciA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ0bi5jbGFzc05hbWUgPSAnc2F2ZSc7XG4gICAgICAgIGJ0bi5pbm5lclRleHQgPSAnU2F2ZSBDaGFuZ2VzJztcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChidG4pO1xuICAgIH1cblxuICAgIHJlbW92ZUZvcm0oKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LW5vdGUtZm9ybScpLnJlbW92ZSgpO1xuICAgIH1cbiAgICBcbiAgICBkZWxldGVEb20oaXRlbSkge1xuICAgICAgICBkZWxldGUgdGhpcy50aXRsZTtcbiAgICAgICAgZGVsZXRlIHRoaXMudGV4dDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTm90ZXMubGlzdC5maW5kSW5kZXgoa2V5ID0+IGtleS50aXRsZSA9PT0gdW5kZWZpbmVkKTtcbiAgICAgICAgTm90ZXMubGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBcbiAgICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICB9XG59IiwiaW1wb3J0IFRvZG9zIGZyb20gXCIuL3RvZG9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzIHtcblxuICAgIHN0YXRpYyBsaXN0ID0gW3t0aXRsZTogJ01BSU4nfV07XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG5cbiAgICAgICAgUHJvamVjdHMubGlzdC5wdXNoKHt0aXRsZX0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRQcm9qZWN0RG9tKCkge1xuICAgICAgICBQcm9qZWN0cy5yZW1vdmVBbGwoKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XG4gICAgICAgIGNvbnN0IHNpZGViYXJQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWVzJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IFByb2plY3RzLmxpc3Q7XG5cbiAgICAgICAgcHJvamVjdHNMaXN0LmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBgJHtrZXkudGl0bGV9YDtcbiAgICAgICAgICAgIHByb2plY3RPcHRpb24uaW5uZXJUZXh0ID0gYCR7a2V5LnRpdGxlLnRvVXBwZXJDYXNlKCl9YDtcbiAgICAgICAgICAgIHByb2plY3RPcHRpb24uY2xhc3NOYW1lID0gJ3Byb2plY3Qtb3B0aW9uJztcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lLmlubmVyVGV4dCA9IGAke2tleS50aXRsZS50b1VwcGVyQ2FzZSgpfWA7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc05hbWUgPSAncHJvamVjdC1vcHRpb24nO1xuICAgICAgICAgICAgc2lkZWJhclByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RQYWdlLmNsYXNzTmFtZSA9ICdwcm9qZWN0LXBhZ2UnO1xuICAgICAgICAgICAgcHJvamVjdFBhZ2UuaWQgPSBgJHtrZXkudGl0bGV9YDtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXBhZ2VzJykuYXBwZW5kQ2hpbGQocHJvamVjdFBhZ2UpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjb25zdCBwcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW9wdGlvbicpO1xuXG4gICAgICAgIC8vIHByb2plY3RPcHRpb25zLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgLy8gICAgIGtleS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIC8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAvLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtrZXkudGl0bGV9YCkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZVByb2plY3RQYWdlKCkge1xuXG4gICAgfVxuXG4gICAgcmVtb3ZlUHJvamVjdCgpIHtcblxuICAgIH1cblxuICAgIHN0YXRpYyByZW1vdmVBbGwoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3Qtb3B0aW9uJyk7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goa2V5ID0+IGtleS5yZW1vdmUoKSk7XG4gICAgfVxufSIsImltcG9ydCBSZW1vdmUgZnJvbSAnLi9yZW1vdmUucG5nJztcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdC5wbmcnO1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4vcHJvamVjdHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvcyB7XG5cbiAgICBzdGF0aWMgbGlzdCA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IodGl0bGUsIHRleHQsIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5KXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgICAgICAgVG9kb3MubGlzdC5wdXNoKHt0aXRsZSwgdGV4dCwgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHl9KTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZURvbSgpIHtcbiAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd0b2RvLWl0ZW0nO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MtcGFnZScpLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29tcGxldGUuY2xhc3NOYW1lID0gJ2NvbXBsZXRlJztcbiAgICAgICAgY29tcGxldGUudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGUpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTmFtZSA9ICd0aXRsZSc7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHRoaXMudGl0bGU7XG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF0ZS5jbGFzc05hbWUgPSAnZGF0ZSc7XG4gICAgICAgIGRhdGUuaW5uZXJUZXh0ID0gdGhpcy5nZXREdWVEYXRlKHRoaXMuZHVlRGF0ZSk7XG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBlZGl0LmNsYXNzTmFtZSA9ICdlZGl0JztcbiAgICAgICAgZWRpdC5zcmMgPSBFZGl0O1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXQpO1xuXG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICByZW1vdmUuY2xhc3NOYW1lID0gJ3JlbW92ZSc7XG4gICAgICAgIHJlbW92ZS5zcmMgPSBSZW1vdmU7XG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcblxuICAgICAgICBjb21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUodGl0bGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVkaXRGb3JtKHRpdGxlLCBkYXRlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZURvbSh0b2RvQ29udGFpbmVyKTtcbiAgICAgICAgfSk7ICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgY29tcGxldGUodGl0bGUpIHtcbiAgICAgICAgaWYodGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gIT09ICdsaW5lLXRocm91Z2gnKSB0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgICAgICBlbHNlIHRpdGxlLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nKTtcbiAgICB9XG4gICAgXG4gICAgZWRpdEZvcm0odGl0bGVEb20sIGRhdGVEb20pIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdG9kby13aW5kb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC13aW5kb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVGb3JtKCk7XG5cbiAgICAgICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRpdGxlJyk7XG4gICAgICAgIGNvbnN0IHRleHRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGV4dCcpO1xuICAgICAgICBjb25zdCBkYXRlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRhdGUnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1wcm9qZWN0cycpO1xuICAgICAgICBjb25zdCBwcmlvcml0eUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1wcmlvcml0eScpO1xuXG4gICAgICAgIHRpdGxlRm9ybS52YWx1ZSA9IHRoaXMudGl0bGU7XG4gICAgICAgIHRleHRGb3JtLnZhbHVlID0gdGhpcy50ZXh0O1xuICAgICAgICBkYXRlRm9ybS52YWx1ZSA9IHRoaXMuZHVlRGF0ZTtcbiAgICAgICAgcHJvamVjdEZvcm0udmFsdWUgPSB0aGlzLnByb2plY3Q7XG4gICAgICAgIHByaW9yaXR5Rm9ybS52YWx1ZSA9IHRoaXMucHJpb3JpdHk7XG4gICAgICAgIFxuICAgICAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlRm9ybS52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IHRleHRGb3JtLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gdGhpcy5nZXREdWVEYXRlKGRhdGVGb3JtLnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RGb3JtLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5Rm9ybS52YWx1ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGl0bGVEb20uaW5uZXJUZXh0ID0gdGhpcy50aXRsZTtcbiAgICAgICAgICAgIGRhdGVEb20uaW5uZXJUZXh0ID0gdGhpcy5kdWVEYXRlO1xuXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZvcm0oKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRvZG8td2luZG93Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZShkdWVEYXRlKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkdWVEYXRlLnNwbGl0KCctJyk7XG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGVbMl07XG4gICAgICAgIGNvbnN0IG1vbnRoID0gZGF0ZVsxXTtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGVbMF07XG4gICAgICAgIGlmKHllYXIgPT09ICcnKSByZXR1cm4gJyc7XG4gICAgICAgIHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRm9ybSgpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5jbGFzc05hbWUgPSAnZWRpdC10b2RvLWZvcm0nO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLXdpbmRvdycpLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICBpbnB1dC5pZCA9ICdlZGl0LXRpdGxlJztcbiAgICAgICAgaW5wdXQubmFtZSA9ICd0aXRsZSc7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gJ1RpdGxlJztcbiAgICAgICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgdGV4dC5uYW1lID0gJ3RleHQnO1xuICAgICAgICB0ZXh0LmlkID0gJ2VkaXQtdGV4dCc7XG4gICAgICAgIHRleHQuY29scyA9ICczMCc7XG4gICAgICAgIHRleHQucm93cyA9ICc2JztcbiAgICAgICAgdGV4dC5wbGFjZWhvbGRlciA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGR1ZURhdGUudHlwZSA9ICdkYXRlJztcbiAgICAgICAgZHVlRGF0ZS5pZCA9ICdlZGl0LWRhdGUnO1xuICAgICAgICBkdWVEYXRlLm5hbWUgPSAnZHVlLWRhdGUnO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHByb2plY3RzLmlkID0gJ2VkaXQtcHJvamVjdHMnO1xuICAgICAgICBwcm9qZWN0cy5uYW1lID0gJ3Byb2plY3RzJztcbiAgICAgICAgcHJvamVjdHMucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RzKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0T3B0aW9ucyA9IFByb2plY3RzLmxpc3Q7XG4gICAgICAgIHByb2plY3RPcHRpb25zLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIHByb2plY3QudmFsdWUgPSBgJHtrZXkudGl0bGV9YDtcbiAgICAgICAgICAgIHByb2plY3QuaW5uZXJUZXh0ID0gYCR7a2V5LnRpdGxlLnRvVXBwZXJDYXNlKCl9YDtcbiAgICAgICAgICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcmlvcml0eS5pZCA9ICdlZGl0LXByaW9yaXR5JztcbiAgICAgICAgcHJpb3JpdHkubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgICAgIHByaW9yaXR5LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGxvdy52YWx1ZSA9ICdsb3cnO1xuICAgICAgICBsb3cuaW5uZXJUZXh0ID0gJ0xvdyc7XG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKGxvdyk7XG4gICAgICAgIGNvbnN0IG1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBtZWRpdW0udmFsdWUgPSAnbWVkaXVtJztcbiAgICAgICAgbWVkaXVtLmlubmVyVGV4dCA9ICdNZWRpdW0nO1xuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChtZWRpdW0pO1xuICAgICAgICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGhpZ2gudmFsdWUgPSAnaGlnaCc7XG4gICAgICAgIGhpZ2guaW5uZXJUZXh0ID0gJ0hpZ2gnO1xuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ0bi5jbGFzc05hbWUgPSAnc2F2ZSc7XG4gICAgICAgIGJ0bi5pbm5lclRleHQgPSAnU2F2ZSBDaGFuZ2VzJztcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChidG4pO1xuICAgIH1cblxuICAgIHJlbW92ZUZvcm0oKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRvZG8tZm9ybScpLnJlbW92ZSgpO1xuICAgIH1cbiAgICBcbiAgICBkZWxldGVEb20odG9kb0NvbnRhaW5lcikge1xuICAgICAgICBkZWxldGUgdGhpcy50aXRsZTtcbiAgICAgICAgZGVsZXRlIHRoaXMudGV4dDtcbiAgICAgICAgZGVsZXRlIHRoaXMuZHVlRGF0ZTtcbiAgICAgICAgZGVsZXRlIHRoaXMucHJvamVjdDtcbiAgICAgICAgZGVsZXRlIHRoaXMucHJpb3JpdHk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpbmRleCA9IFRvZG9zLmxpc3QuZmluZEluZGV4KGtleSA9PiBrZXkudGl0bGUgPT09IHVuZGVmaW5lZCk7XG4gICAgICAgIFRvZG9zLmxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgXG4gICAgICAgIHRvZG9Db250YWluZXIucmVtb3ZlKCk7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgVG9kb3MgZnJvbSAnLi90b2Rvcy5qcyc7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi9wcm9qZWN0cy5qcyc7XG5pbXBvcnQgTm90ZXMgZnJvbSAnLi9ub3Rlcy5qcyc7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBkb21NYW5pcHVsYXRvciA9ICgpID0+IHtcbiAgICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgUHJvamVjdHMuYWRkUHJvamVjdERvbSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBjbGVhckZvcm1zID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8tZm9ybScpLnJlc2V0KCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1mb3JtJykucmVzZXQoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ub3RlLWZvcm0nKS5yZXNldCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZW5lcmF0ZVRvZG8gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kb3MoXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZScpLnZhbHVlLFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGV4dCcpLnZhbHVlLFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZS1kYXRlJykudmFsdWUsXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKS52YWx1ZSxcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlLFxuICAgICAgICApO1xuXG4gICAgICAgIHRvZG8uZ2VuZXJhdGVEb20oKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2VuZXJhdGVQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3RzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJykudmFsdWUpO1xuICAgICAgICBcbiAgICAgICAgUHJvamVjdHMuYWRkUHJvamVjdERvbSgpO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgZ2VuZXJhdGVOb3RlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBub3RlID0gbmV3IE5vdGVzKFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGUtdGl0bGUnKS52YWx1ZSxcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RlLXRleHQnKS52YWx1ZVxuICAgICAgICApO1xuXG4gICAgICAgIG5vdGUuZ2VuZXJhdGVOb3RlRG9tKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7c3RhcnQsIGNsZWFyRm9ybXMsIGdlbmVyYXRlVG9kbywgZ2VuZXJhdGVQcm9qZWN0LCBnZW5lcmF0ZU5vdGV9O1xufTtcblxuY29uc3QgcGFnZSA9IGRvbU1hbmlwdWxhdG9yKCk7XG5wYWdlLnN0YXJ0KCk7XG5cbmNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LXRvZG8nKTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LXByb2plY3QnKTtcbmNvbnN0IGFkZE5vdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LW5vdGUnKTtcbmNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtYnV0dG9uJyk7XG5jb25zdCBuZXdUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10b2RvJyk7XG5jb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XG5jb25zdCBuZXdOb3RlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1ub3RlJyk7XG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuY29uc3QgdG9kb1BhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuY29uc3Qgbm90ZVBhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMnKTtcbmNvbnN0IGNsb3NlRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1lZGl0Jyk7XG5cbmNsb3NlRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtbm90ZS13aW5kb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5hZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vcHJldmVudHMgc2VuZGluZyB0aGUgZm9ybSBhbmQgcmVmcmVzaGluZyB0aGUgcGFnZVxuICAgIHBhZ2UuZ2VuZXJhdGVUb2RvKCk7XG4gICAgcGFnZS5jbGVhckZvcm1zKCk7XG59KTtcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy9wcmV2ZW50cyBzZW5kaW5nIHRoZSBmb3JtIGFuZCByZWZyZXNoaW5nIHRoZSBwYWdlXG4gICAgcGFnZS5nZW5lcmF0ZVByb2plY3QoKTtcbiAgICBwYWdlLmNsZWFyRm9ybXMoKTtcbn0pO1xuYWRkTm90ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3ByZXZlbnRzIHNlbmRpbmcgdGhlIGZvcm0gYW5kIHJlZnJlc2hpbmcgdGhlIHBhZ2VcbiAgICBwYWdlLmdlbmVyYXRlTm90ZSgpO1xuICAgIHBhZ2UuY2xlYXJGb3JtcygpO1xufSk7XG5uZXdUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kby1mb3JtJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbm90ZS1mb3JtJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBwYWdlLmNsZWFyRm9ybXMoKTtcbn0pO1xubmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8tZm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5vdGUtZm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcGFnZS5jbGVhckZvcm1zKCk7XG59KTtcbm5ld05vdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvLWZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1mb3JtJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5vdGUtZm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHBhZ2UuY2xlYXJGb3JtcygpO1xufSk7XG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC13aW5kb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xufSk7XG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcGFnZS5jbGVhckZvcm1zKCk7XG59KTtcbnRvZG9QYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvcy1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtd2luZG93Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBwYWdlLmNsZWFyRm9ybXMoKTtcbn0pXG5ub3RlUGFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcGFnZS5jbGVhckZvcm1zKCk7XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==