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
const todayBtn = document.querySelector('.due-today');

todayBtn.addEventListener('click', () => {
    _todos_js__WEBPACK_IMPORTED_MODULE_0__["default"].filterByDueDate();
});
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
    _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].showAll();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxnREFBZ0Qsb0JBQW9CLHFDQUFxQyxzQ0FBc0Msb0JBQW9CLGtCQUFrQixHQUFHLGFBQWEseUJBQXlCLHNCQUFzQiw0QkFBNEIsR0FBRyxjQUFjLHlCQUF5QixzQkFBc0Isc0JBQXNCLDZCQUE2QixnQkFBZ0Isa0NBQWtDLDhCQUE4QixHQUFHLG9CQUFvQixvQkFBb0IsNkJBQTZCLEdBQUcsY0FBYyx5QkFBeUIsc0JBQXNCLEdBQUcsYUFBYSx5QkFBeUIsc0JBQXNCLEdBQUcsaUJBQWlCLG9CQUFvQix5Q0FBeUMsOENBQThDLHNCQUFzQixtQkFBbUIsOEJBQThCLEdBQUcsMENBQTBDLHlCQUF5QixHQUFHLGlHQUFpRyx5QkFBeUIsdUJBQXVCLEdBQUcsOEZBQThGLG9CQUFvQixHQUFHLFlBQVkseUJBQXlCLHNCQUFzQixHQUFHLFlBQVksc0JBQXNCLEdBQUcsaUJBQWlCLG9CQUFvQixHQUFHLHlDQUF5QyxvQkFBb0IsbUJBQW1CLEdBQUcsNkJBQTZCLG9CQUFvQiwwQkFBMEIscUNBQXFDLEdBQUcsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxXQUFXLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxTQUFTLFlBQVksYUFBYSxPQUFPLFNBQVMsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGdDQUFnQyxvQkFBb0IscUNBQXFDLHNDQUFzQyxvQkFBb0Isa0JBQWtCLEdBQUcsYUFBYSx5QkFBeUIsc0JBQXNCLDRCQUE0QixHQUFHLGNBQWMseUJBQXlCLHNCQUFzQixzQkFBc0IsNkJBQTZCLGdCQUFnQixrQ0FBa0MsOEJBQThCLEdBQUcsb0JBQW9CLG9CQUFvQiw2QkFBNkIsR0FBRyxjQUFjLHlCQUF5QixzQkFBc0IsR0FBRyxhQUFhLHlCQUF5QixzQkFBc0IsR0FBRyxpQkFBaUIsb0JBQW9CLHlDQUF5Qyw4Q0FBOEMsc0JBQXNCLG1CQUFtQiw4QkFBOEIsR0FBRywwQ0FBMEMseUJBQXlCLEdBQUcsaUdBQWlHLHlCQUF5Qix1QkFBdUIsR0FBRyw4RkFBOEYsb0JBQW9CLEdBQUcsWUFBWSx5QkFBeUIsc0JBQXNCLEdBQUcsWUFBWSxzQkFBc0IsR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUcseUNBQXlDLG9CQUFvQixtQkFBbUIsR0FBRyw2QkFBNkIsb0JBQW9CLDBCQUEwQixxQ0FBcUMsR0FBRyxtQkFBbUI7QUFDM3RIO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZrQztBQUNKOztBQUVmOztBQUVmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsWUFBWTtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHNDQUFJO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsd0NBQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JIK0I7O0FBRWhCOztBQUVmLG9CQUFvQixjQUFjOztBQUVsQztBQUNBOztBQUVBLDRCQUE0QixNQUFNO0FBQ2xDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsVUFBVTtBQUMvQyx5Q0FBeUMsd0JBQXdCO0FBQ2pFO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsd0JBQXdCO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLGdDQUFnQyxVQUFVO0FBQzFDO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtEQUErRCxxQkFBcUI7QUFDcEY7QUFDQTtBQUNBO0FBQ0EsK0RBQStELFVBQVU7QUFDekU7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxVQUFVO0FBQ3JFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzREFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RmtDO0FBQ0o7QUFDTzs7QUFFdEI7O0FBRWY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5Qix3Q0FBd0M7QUFDakU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixJQUFJLEdBQUcsTUFBTSxHQUFHLEtBQUs7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHNDQUFJO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsd0NBQU07QUFDM0I7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLElBQUksR0FBRyxNQUFNLEdBQUcsS0FBSztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQix5REFBYTtBQUM1QztBQUNBO0FBQ0EsK0JBQStCLFVBQVU7QUFDekMsbUNBQW1DLHdCQUF3QjtBQUMzRDtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHVFQUEyQjtBQUNuQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3ROQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7O0FDQStCO0FBQ007QUFDTjs7QUFFVjs7QUFFckI7QUFDQTtBQUNBLFFBQVEsa0VBQXNCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsaURBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsb0RBQVE7QUFDcEM7QUFDQSxRQUFRLGtFQUFzQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaURBQUs7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxpRUFBcUI7QUFDekIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQWdCO0FBQ3BCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25vdGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmciAxZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLmFkZC13aW5kb3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA0ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciA1ZnI7XFxuXFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG5cXG4gICAgYm9yZGVyOiByZWQgMnB4IHNvbGlkO1xcbn1cXG5cXG4ubmV3LXRvZG8sXFxuLm5ldy1wcm9qZWN0LFxcbi5uZXctbm90ZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLmFkZC10b2RvLWZvcm0sXFxuLmFkZC1wcm9qZWN0LWZvcm0sXFxuLmFkZC1ub3RlLWZvcm0sXFxuLmVkaXQtdG9kby13aW5kb3csXFxuLmVkaXQtbm90ZS13aW5kb3cge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gLTE7XFxufVxcblxcbi5hZGQtd2luZG93LFxcbi5hZGQtcHJvamVjdC1mb3JtLFxcbi5hZGQtbm90ZS1mb3JtLFxcbi5lZGl0LXRvZG8td2luZG93LFxcbi5lZGl0LW5vdGUtd2luZG93IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNsb3NlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5vdGVzLXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1pdGVtID4gaW1nLFxcbi5ub3RlLWl0ZW0gPiBpbWcge1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi50b2RvLWl0ZW0sXFxuLm5vdGUtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlOztJQUVmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsdUNBQXVDOztJQUV2QyxhQUFhO0lBQ2IsWUFBWTs7SUFFWixxQkFBcUI7QUFDekI7O0FBRUE7OztJQUdJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7Ozs7SUFLSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7OztJQUtJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmciAxZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLmFkZC13aW5kb3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA0ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciA1ZnI7XFxuXFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG5cXG4gICAgYm9yZGVyOiByZWQgMnB4IHNvbGlkO1xcbn1cXG5cXG4ubmV3LXRvZG8sXFxuLm5ldy1wcm9qZWN0LFxcbi5uZXctbm90ZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLmFkZC10b2RvLWZvcm0sXFxuLmFkZC1wcm9qZWN0LWZvcm0sXFxuLmFkZC1ub3RlLWZvcm0sXFxuLmVkaXQtdG9kby13aW5kb3csXFxuLmVkaXQtbm90ZS13aW5kb3cge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gLTE7XFxufVxcblxcbi5hZGQtd2luZG93LFxcbi5hZGQtcHJvamVjdC1mb3JtLFxcbi5hZGQtbm90ZS1mb3JtLFxcbi5lZGl0LXRvZG8td2luZG93LFxcbi5lZGl0LW5vdGUtd2luZG93IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNsb3NlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5vdGVzLXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1pdGVtID4gaW1nLFxcbi5ub3RlLWl0ZW0gPiBpbWcge1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi50b2RvLWl0ZW0sXFxuLm5vdGUtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFJlbW92ZSBmcm9tIFwiLi9yZW1vdmUucG5nXCI7XG5pbXBvcnQgRWRpdCBmcm9tIFwiLi9lZGl0LnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RlcyB7XG5cbiAgICBzdGF0aWMgbGlzdCA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IodGl0bGUsIHRleHQpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuXG4gICAgICAgIE5vdGVzLmxpc3QucHVzaCh7dGl0bGUsIHRleHR9KTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZU5vdGVEb20oKSB7XG4gICAgICAgIGNvbnN0IG5vdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbm90ZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnbm90ZS1pdGVtJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLXBhZ2UnKS5hcHBlbmRDaGlsZChub3RlQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS5jbGFzc05hbWUgPSAndGl0bGUnO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSB0aGlzLnRpdGxlO1xuICAgICAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRleHQuY2xhc3NOYW1lID0gJ3RleHQnO1xuICAgICAgICB0ZXh0LmlubmVyVGV4dCA9IHRoaXMudGV4dDtcbiAgICAgICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGVkaXQuY2xhc3NOYW1lID0gJ2VkaXQnO1xuICAgICAgICBlZGl0LnNyYyA9IEVkaXQ7XG4gICAgICAgIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdCk7XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHJlbW92ZS5jbGFzc05hbWUgPSAncmVtb3ZlJztcbiAgICAgICAgcmVtb3ZlLnNyYyA9IFJlbW92ZTtcbiAgICAgICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgICAgICBcbiAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBwb3AgdXAgd2luZG93IHNob3dzIGRldGFpbHNcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lZGl0Rm9ybSh0aXRsZSwgdGV4dCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVEb20obm90ZUNvbnRhaW5lcik7XG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgfVxuXG4gICAgZWRpdEZvcm0odGl0bGVEb20sIHRleHREb20pIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtbm90ZS13aW5kb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC13aW5kb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVGb3JtKCk7XG5cbiAgICAgICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRpdGxlJyk7XG4gICAgICAgIGNvbnN0IHRleHRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGV4dCcpO1xuXG4gICAgICAgIHRpdGxlRm9ybS52YWx1ZSA9IHRoaXMudGl0bGU7XG4gICAgICAgIHRleHRGb3JtLnZhbHVlID0gdGhpcy50ZXh0O1xuICAgICAgICBcbiAgICAgICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZUZvcm0udmFsdWU7XG4gICAgICAgICAgICB0aGlzLnRleHQgPSB0ZXh0Rm9ybS52YWx1ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGl0bGVEb20uaW5uZXJUZXh0ID0gdGhpcy50aXRsZTtcbiAgICAgICAgICAgIHRleHREb20uaW5uZXJUZXh0ID0gdGhpcy50ZXh0O1xuXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZvcm0oKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LW5vdGUtd2luZG93Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVGb3JtKCkge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtLmNsYXNzTmFtZSA9ICdlZGl0LW5vdGUtZm9ybSc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LW5vdGUtd2luZG93JykuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIGlucHV0LmlkID0gJ2VkaXQtdGl0bGUnO1xuICAgICAgICBpbnB1dC5uYW1lID0gJ3RpdGxlJztcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnVGl0bGUnO1xuICAgICAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICB0ZXh0Lm5hbWUgPSAndGV4dCc7XG4gICAgICAgIHRleHQuaWQgPSAnZWRpdC10ZXh0JztcbiAgICAgICAgdGV4dC5jb2xzID0gJzMwJztcbiAgICAgICAgdGV4dC5yb3dzID0gJzYnO1xuICAgICAgICB0ZXh0LnBsYWNlaG9sZGVyID0gJ0Rlc2NyaXB0aW9uJztcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnRuLmNsYXNzTmFtZSA9ICdzYXZlJztcbiAgICAgICAgYnRuLmlubmVyVGV4dCA9ICdTYXZlIENoYW5nZXMnO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgfVxuXG4gICAgcmVtb3ZlRm9ybSgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtbm90ZS1mb3JtJykucmVtb3ZlKCk7XG4gICAgfVxuICAgIFxuICAgIGRlbGV0ZURvbShpdGVtKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnRpdGxlO1xuICAgICAgICBkZWxldGUgdGhpcy50ZXh0O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaW5kZXggPSBOb3Rlcy5saXN0LmZpbmRJbmRleChrZXkgPT4ga2V5LnRpdGxlID09PSB1bmRlZmluZWQpO1xuICAgICAgICBOb3Rlcy5saXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIFxuICAgICAgICBpdGVtLnJlbW92ZSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgVG9kb3MgZnJvbSAnLi90b2Rvcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzIHtcblxuICAgIHN0YXRpYyBsaXN0ID0gW3t0aXRsZTogJ01BSU4nfV07XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG5cbiAgICAgICAgUHJvamVjdHMubGlzdC5wdXNoKHt0aXRsZX0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRQcm9qZWN0RG9tKCkge1xuICAgICAgICBQcm9qZWN0cy5yZW1vdmVBbGwoKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XG4gICAgICAgIGNvbnN0IHNpZGViYXJQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWVzJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IFByb2plY3RzLmxpc3Q7XG5cbiAgICAgICAgcHJvamVjdHNMaXN0LmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBgJHtrZXkudGl0bGV9YDtcbiAgICAgICAgICAgIHByb2plY3RPcHRpb24uaW5uZXJUZXh0ID0gYCR7a2V5LnRpdGxlLnRvVXBwZXJDYXNlKCl9YDtcbiAgICAgICAgICAgIHByb2plY3RPcHRpb24uY2xhc3NOYW1lID0gJ3Byb2plY3Qtb3B0aW9uJztcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lLmlubmVyVGV4dCA9IGAke2tleS50aXRsZS50b1VwcGVyQ2FzZSgpfWA7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc05hbWUgPSAncHJvamVjdC1vcHRpb24nO1xuICAgICAgICAgICAgc2lkZWJhclByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICAgICAgICAgICAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgUHJvamVjdHMuZmlsdGVyQnlQcm9qZWN0KGtleS50aXRsZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RQYWdlLmNsYXNzTmFtZSA9ICdwcm9qZWN0LXBhZ2UnO1xuICAgICAgICAgICAgcHJvamVjdFBhZ2UuaWQgPSBgJHtrZXkudGl0bGV9YDtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXBhZ2VzJykuYXBwZW5kQ2hpbGQocHJvamVjdFBhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZmlsdGVyQnlQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gUHJvamVjdHMubGlzdDtcblxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZihrZXkudGl0bGUgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtrZXkudGl0bGUudG9TdHJpbmcoKX1gKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGtleSA9PiBrZXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke2tleS50aXRsZX1gKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGtleSA9PiBrZXkuc3R5bGUuZGlzcGxheSA9ICdub25lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIHNob3dBbGwoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gUHJvamVjdHMubGlzdDtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7a2V5LnRpdGxlfWApO1xuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChrZXkgPT4ga2V5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCcpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgcmVtb3ZlQWxsKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW9wdGlvbicpO1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKGtleSA9PiBrZXkucmVtb3ZlKCkpO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgcmVtb3ZlRW1wdHlQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZXMgPSBQcm9qZWN0cy5saXN0O1xuICAgICAgICBjb25zdCB0b2RvcyA9IFRvZG9zLmxpc3Q7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0TmFtZXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgICAgICBpZih0b2RvLnByb2plY3QgPT09IGtleS50aXRsZSkgY291bnQrKztcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmKGNvdW50ID09PSAwICYmIGtleS50aXRsZSAhPT0gJ01BSU4nKSB7ICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lcy5zcGxpY2UocHJvamVjdE5hbWVzLmluZGV4T2Yoa2V5KSwgMSk7XG5cbiAgICAgICAgICAgICAgICBQcm9qZWN0cy5saXN0ID0gcHJvamVjdE5hbWVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH0pXG5cbiAgICAgICAgUHJvamVjdHMuYWRkUHJvamVjdERvbSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVtb3ZlIGZyb20gJy4vcmVtb3ZlLnBuZyc7XG5pbXBvcnQgRWRpdCBmcm9tICcuL2VkaXQucG5nJztcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuL3Byb2plY3RzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb3Mge1xuXG4gICAgc3RhdGljIGxpc3QgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCB0ZXh0LCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG4gICAgICAgIFRvZG9zLmxpc3QucHVzaCh7dGl0bGUsIHRleHQsIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5fSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZpbHRlckJ5RHVlRGF0ZSgpIHtcbiAgICAgICAgY29uc3QgdG9kb0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8taXRlbScpO1xuXG4gICAgICAgIHRvZG9JdGVtcy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0ga2V5LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XG5cbiAgICAgICAgICAgIGlmKGRhdGUuaW5uZXJUZXh0ID09PSBUb2Rvcy5nZXRDdXJyZW50RGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAga2V5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBrZXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q3VycmVudERhdGUoKSB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgZGF5ID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgIHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gO1xuICAgICAgICB9XG5cbiAgICBnZW5lcmF0ZURvbSgpIHtcbiAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd0b2RvLWl0ZW0nO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmlkID0gdGhpcy5wcm9qZWN0LnRvU3RyaW5nKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvcy1wYWdlJykuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb21wbGV0ZS5jbGFzc05hbWUgPSAnY29tcGxldGUnO1xuICAgICAgICBjb21wbGV0ZS50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZSk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGUuY2xhc3NOYW1lID0gJ3RpdGxlJztcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gdGhpcy50aXRsZTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXRlLmNsYXNzTmFtZSA9ICdkYXRlJztcbiAgICAgICAgZGF0ZS5pbm5lclRleHQgPSB0aGlzLmdldER1ZURhdGUodGhpcy5kdWVEYXRlKTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGVkaXQuY2xhc3NOYW1lID0gJ2VkaXQnO1xuICAgICAgICBlZGl0LnNyYyA9IEVkaXQ7XG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdCk7XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHJlbW92ZS5jbGFzc05hbWUgPSAncmVtb3ZlJztcbiAgICAgICAgcmVtb3ZlLnNyYyA9IFJlbW92ZTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmUpO1xuXG4gICAgICAgIGNvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSh0aXRsZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWRpdEZvcm0odGl0bGUsIGRhdGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlRG9tKHRvZG9Db250YWluZXIpO1xuICAgICAgICB9KTsgICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBjb21wbGV0ZSh0aXRsZSkge1xuICAgICAgICBpZih0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiAhPT0gJ2xpbmUtdGhyb3VnaCcpIHRpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICAgIGVsc2UgdGl0bGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicpO1xuICAgIH1cbiAgICBcbiAgICBlZGl0Rm9ybSh0aXRsZURvbSwgZGF0ZURvbSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgdGhpcy5nZW5lcmF0ZUZvcm0oKTtcblxuICAgICAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUnKTtcbiAgICAgICAgY29uc3QgdGl0bGVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGl0bGUnKTtcbiAgICAgICAgY29uc3QgdGV4dEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10ZXh0Jyk7XG4gICAgICAgIGNvbnN0IGRhdGVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZGF0ZScpO1xuICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByb2plY3RzJyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByaW9yaXR5Jyk7XG5cbiAgICAgICAgdGl0bGVGb3JtLnZhbHVlID0gdGhpcy50aXRsZTtcbiAgICAgICAgdGV4dEZvcm0udmFsdWUgPSB0aGlzLnRleHQ7XG4gICAgICAgIGRhdGVGb3JtLnZhbHVlID0gdGhpcy5kdWVEYXRlO1xuICAgICAgICBwcm9qZWN0Rm9ybS52YWx1ZSA9IHRoaXMucHJvamVjdDtcbiAgICAgICAgcHJpb3JpdHlGb3JtLnZhbHVlID0gdGhpcy5wcmlvcml0eTtcbiAgICAgICAgXG4gICAgICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVGb3JtLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gdGV4dEZvcm0udmFsdWU7XG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSB0aGlzLmdldER1ZURhdGUoZGF0ZUZvcm0udmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdEZvcm0udmFsdWU7XG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlGb3JtLnZhbHVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aXRsZURvbS5pbm5lclRleHQgPSB0aGlzLnRpdGxlO1xuICAgICAgICAgICAgZGF0ZURvbS5pbm5lclRleHQgPSB0aGlzLmR1ZURhdGU7XG5cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRm9ybSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdG9kby13aW5kb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXREdWVEYXRlKGR1ZURhdGUpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGR1ZURhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgY29uc3QgZGF5ID0gZGF0ZVsyXTtcbiAgICAgICAgY29uc3QgbW9udGggPSBkYXRlWzFdO1xuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZVswXTtcblxuICAgICAgICBpZih5ZWFyID09PSAnJykgcmV0dXJuICcnO1xuICAgICAgICByZXR1cm4gYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9YDtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uY2xhc3NOYW1lID0gJ2VkaXQtdG9kby1mb3JtJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdG9kby13aW5kb3cnKS5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgaW5wdXQuaWQgPSAnZWRpdC10aXRsZSc7XG4gICAgICAgIGlucHV0Lm5hbWUgPSAndGl0bGUnO1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICdUaXRsZSc7XG4gICAgICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIHRleHQubmFtZSA9ICd0ZXh0JztcbiAgICAgICAgdGV4dC5pZCA9ICdlZGl0LXRleHQnO1xuICAgICAgICB0ZXh0LmNvbHMgPSAnMzAnO1xuICAgICAgICB0ZXh0LnJvd3MgPSAnNic7XG4gICAgICAgIHRleHQucGxhY2Vob2xkZXIgPSAnRGVzY3JpcHRpb24nO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIGR1ZURhdGUuaWQgPSAnZWRpdC1kYXRlJztcbiAgICAgICAgZHVlRGF0ZS5uYW1lID0gJ2R1ZS1kYXRlJztcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcm9qZWN0cy5pZCA9ICdlZGl0LXByb2plY3RzJztcbiAgICAgICAgcHJvamVjdHMubmFtZSA9ICdwcm9qZWN0cyc7XG4gICAgICAgIHByb2plY3RzLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbnMgPSBQcm9qZWN0cy5saXN0O1xuICAgICAgICBwcm9qZWN0T3B0aW9ucy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBwcm9qZWN0LnZhbHVlID0gYCR7a2V5LnRpdGxlfWA7XG4gICAgICAgICAgICBwcm9qZWN0LmlubmVyVGV4dCA9IGAke2tleS50aXRsZS50b1VwcGVyQ2FzZSgpfWA7XG4gICAgICAgICAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgcHJpb3JpdHkuaWQgPSAnZWRpdC1wcmlvcml0eSc7XG4gICAgICAgIHByaW9yaXR5Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgICAgICBwcmlvcml0eS5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBsb3cudmFsdWUgPSAnbG93JztcbiAgICAgICAgbG93LmlubmVyVGV4dCA9ICdMb3cnO1xuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChsb3cpO1xuICAgICAgICBjb25zdCBtZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgbWVkaXVtLnZhbHVlID0gJ21lZGl1bSc7XG4gICAgICAgIG1lZGl1bS5pbm5lclRleHQgPSAnTWVkaXVtJztcbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobWVkaXVtKTtcbiAgICAgICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBoaWdoLnZhbHVlID0gJ2hpZ2gnO1xuICAgICAgICBoaWdoLmlubmVyVGV4dCA9ICdIaWdoJztcbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidG4uY2xhc3NOYW1lID0gJ3NhdmUnO1xuICAgICAgICBidG4uaW5uZXJUZXh0ID0gJ1NhdmUgQ2hhbmdlcyc7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB9XG5cbiAgICByZW1vdmVGb3JtKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLWZvcm0nKS5yZW1vdmUoKTtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlRG9tKHRvZG9Db250YWluZXIpIHtcbiAgICAgICAgY29uc3QgZGVsZXRlZFRpdGxlID0gdGhpcy50aXRsZTtcblxuICAgICAgICBjb25zdCBpbmRleCA9IFRvZG9zLmxpc3QuZmluZEluZGV4KGtleSA9PiBrZXkudGl0bGUgPT09IGRlbGV0ZWRUaXRsZSk7XG4gICAgICAgIFRvZG9zLmxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgXG4gICAgICAgIHRvZG9Db250YWluZXIucmVtb3ZlKCk7XG5cbiAgICAgICAgUHJvamVjdHMucmVtb3ZlRW1wdHlQcm9qZWN0KCk7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgVG9kb3MgZnJvbSAnLi90b2Rvcy5qcyc7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi9wcm9qZWN0cy5qcyc7XG5pbXBvcnQgTm90ZXMgZnJvbSAnLi9ub3Rlcy5qcyc7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBkb21NYW5pcHVsYXRvciA9ICgpID0+IHtcbiAgICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgUHJvamVjdHMuYWRkUHJvamVjdERvbSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBjbGVhckZvcm1zID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8tZm9ybScpLnJlc2V0KCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1mb3JtJykucmVzZXQoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ub3RlLWZvcm0nKS5yZXNldCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZW5lcmF0ZVRvZG8gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kb3MoXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZScpLnZhbHVlLFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGV4dCcpLnZhbHVlLFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZS1kYXRlJykudmFsdWUsXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKS52YWx1ZSxcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlLFxuICAgICAgICApO1xuXG4gICAgICAgIHRvZG8uZ2VuZXJhdGVEb20oKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2VuZXJhdGVQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3RzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJykudmFsdWUpO1xuICAgICAgICBcbiAgICAgICAgUHJvamVjdHMuYWRkUHJvamVjdERvbSgpO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgZ2VuZXJhdGVOb3RlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBub3RlID0gbmV3IE5vdGVzKFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGUtdGl0bGUnKS52YWx1ZSxcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RlLXRleHQnKS52YWx1ZVxuICAgICAgICApO1xuXG4gICAgICAgIG5vdGUuZ2VuZXJhdGVOb3RlRG9tKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7c3RhcnQsIGNsZWFyRm9ybXMsIGdlbmVyYXRlVG9kbywgZ2VuZXJhdGVQcm9qZWN0LCBnZW5lcmF0ZU5vdGV9O1xufTtcblxuY29uc3QgcGFnZSA9IGRvbU1hbmlwdWxhdG9yKCk7XG5wYWdlLnN0YXJ0KCk7XG5cbmNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LXRvZG8nKTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LXByb2plY3QnKTtcbmNvbnN0IGFkZE5vdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LW5vdGUnKTtcbmNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtYnV0dG9uJyk7XG5jb25zdCBuZXdUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10b2RvJyk7XG5jb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XG5jb25zdCBuZXdOb3RlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1ub3RlJyk7XG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuY29uc3QgdG9kb1BhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuY29uc3Qgbm90ZVBhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMnKTtcbmNvbnN0IGNsb3NlRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1lZGl0Jyk7XG5jb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWUtdG9kYXknKTtcblxudG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgVG9kb3MuZmlsdGVyQnlEdWVEYXRlKCk7XG59KTtcbmNsb3NlRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtbm90ZS13aW5kb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5hZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vcHJldmVudHMgc2VuZGluZyB0aGUgZm9ybSBhbmQgcmVmcmVzaGluZyB0aGUgcGFnZVxuICAgIHBhZ2UuZ2VuZXJhdGVUb2RvKCk7XG4gICAgcGFnZS5jbGVhckZvcm1zKCk7XG59KTtcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy9wcmV2ZW50cyBzZW5kaW5nIHRoZSBmb3JtIGFuZCByZWZyZXNoaW5nIHRoZSBwYWdlXG4gICAgcGFnZS5nZW5lcmF0ZVByb2plY3QoKTtcbiAgICBwYWdlLmNsZWFyRm9ybXMoKTtcbn0pO1xuYWRkTm90ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3ByZXZlbnRzIHNlbmRpbmcgdGhlIGZvcm0gYW5kIHJlZnJlc2hpbmcgdGhlIHBhZ2VcbiAgICBwYWdlLmdlbmVyYXRlTm90ZSgpO1xuICAgIHBhZ2UuY2xlYXJGb3JtcygpO1xufSk7XG5uZXdUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kby1mb3JtJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbm90ZS1mb3JtJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBwYWdlLmNsZWFyRm9ybXMoKTtcbn0pO1xubmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8tZm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5vdGUtZm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcGFnZS5jbGVhckZvcm1zKCk7XG59KTtcbm5ld05vdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvLWZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1mb3JtJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5vdGUtZm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHBhZ2UuY2xlYXJGb3JtcygpO1xufSk7XG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC13aW5kb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xufSk7XG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcGFnZS5jbGVhckZvcm1zKCk7XG59KTtcbnRvZG9QYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvcy1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtd2luZG93Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBQcm9qZWN0cy5zaG93QWxsKCk7XG4gICAgcGFnZS5jbGVhckZvcm1zKCk7XG59KVxubm90ZVBhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC13aW5kb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHBhZ2UuY2xlYXJGb3JtcygpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=