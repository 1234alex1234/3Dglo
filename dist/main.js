/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('15 march 2022');\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\"use strick\";\r\n\r\nconst timerFunc = (deadLine) => {\r\n  const timerNumbers = document.querySelector('.timer-numbers');\r\n  const timerHours = document.querySelector('#timer-hours');\r\n  const timerMinutes = document.querySelector('#timer-minutes');\r\n  const timerSeconds = document.querySelector('#timer-seconds');\r\n  let timerDays = document.querySelector('#timer-day');\r\n\r\n  const getTimeRemaining = () => {\r\n    timerDays = document.querySelector('#timer-day');\r\n\r\n    let dateStop = new Date(deadLine).getTime();\r\n    let nowDate = new Date().getTime();\r\n    let timeRemaining = (dateStop - nowDate) / 1000;\r\n\r\n    let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n    let hours = Math.floor(timeRemaining / 60 / 60) % 24;\r\n    let minutes = Math.floor(timeRemaining / 60) % 60;\r\n    let seconds = Math.floor(timeRemaining) % 60;\r\n\r\n    return {\r\n      timeRemaining: timeRemaining,\r\n      days: days,\r\n      hours: hours,\r\n      minutes: minutes,\r\n      seconds: seconds,\r\n    };\r\n  };\r\n\r\n  const noneZero = (number) => {\r\n    if (number < 10) {\r\n      return '0' + number;\r\n    } else {\r\n      return number;\r\n    }\r\n  };\r\n\r\n  const daysNumber = () => {\r\n    let span = document.createElement('span');\r\n    span.id = 'timer-day';\r\n    span.textContent = '00' + ' дней ';\r\n    timerNumbers.prepend(span);\r\n  };\r\n\r\n\r\n  const upDateClock = () => {\r\n    let getTime = getTimeRemaining('15 march 2022');\r\n\r\n    timerDays.textContent = noneZero(getTime.days + ' дней ');\r\n    timerHours.textContent = noneZero(getTime.hours);\r\n    timerMinutes.textContent = noneZero(getTime.minutes);\r\n    timerSeconds.textContent = noneZero(getTime.seconds);\r\n\r\n    // if (getTime.timeRemaining > 0) {\r\n    //   setTimeout(upDateClock, 1000);\r\n    // } else {\r\n    //   timerDays.textContent = '00';\r\n    //   timerHours.textContent = '00';\r\n    //   timerMinutes.textContent = '00';\r\n    //   timerSeconds.textContent = '00';\r\n    // }\r\n  };\r\n\r\n\r\n  daysNumber();\r\n  let getTime = getTimeRemaining();\r\n  if (getTime.timeRemaining > 0) {\r\n    setInterval(upDateClock, 1000);\r\n  } else {\r\n    timerDays.textContent = '00';\r\n    timerHours.textContent = '00';\r\n    timerMinutes.textContent = '00';\r\n    timerSeconds.textContent = '00';\r\n  }\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timerFunc);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;