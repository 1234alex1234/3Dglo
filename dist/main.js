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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/regex */ \"./modules/regex.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('15 march 2022');\r\n(0,_modules_regex__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calcFunc = (price) => {\r\n  const calcBlock = document.querySelector('.calc-block');\r\n  const calcType = document.querySelector('.calc-type');\r\n  const calcSquare = document.querySelector('.calc-square');\r\n  const calcCount = document.querySelector('.calc-count');\r\n  const calcDay = document.querySelector('.calc-day');\r\n  const total = document.querySelector('#total');\r\n\r\n  const countCalc = (e) => {\r\n    let calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n    let calcSquareValue = +calcSquare.value;\r\n\r\n    let totalValue = 0;\r\n    let calcCountValue = 1;\r\n    let calcDayValue = 1;\r\n\r\n    if (calcCount.value > 1) {\r\n      calcCountValue += +calcCount.value / 10;\r\n      console.log(calcCountValue);\r\n    }\r\n\r\n    if (calcDay.value && calcDay.value < 5) {\r\n      calcDayValue = 2;\r\n    } else if (calcDay.value && calcDay.value < 10) {\r\n      calcDayValue = 1.5;\r\n    }\r\n\r\n    if (calcType.value && calcSquare.value) {\r\n      totalValue = price * calcTypeValue * calcCountValue * calcDayValue * calcSquareValue;\r\n    } else {\r\n      totalValue = 0;\r\n    }\r\n\r\n    total.textContent = totalValue;\r\n  };\r\n\r\n  const handleCalc = (e) => {\r\n    if (e.target == calcType || e.target == calcCount || e.target == calcDay || e.target == calcSquare) {\r\n      countCalc();\r\n    }\r\n  };\r\n\r\n  calcBlock.addEventListener(\"input\", handleCalc);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calcFunc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuFunc = () => {\r\n\r\n  const menuBtn = document.querySelector(\".menu\");\r\n  const menu = document.querySelector('menu');\r\n  const menuLinks = menu.querySelectorAll('ul>li>a');\r\n  const serviceLink = document.querySelector('a[href=\"#service-block\"]');\r\n\r\n  function blockScroll(e) {\r\n\r\n    const id = this.getAttribute('href');\r\n\r\n    if (id == '#service-block') {\r\n      e.preventDefault();\r\n    }\r\n\r\n    document.querySelector(id).scrollIntoView({\r\n      behavior: 'smooth',\r\n      block: 'start'\r\n    });\r\n  }\r\n\r\n  const toggleMenu = (e) => {\r\n    e.preventDefault();\r\n\r\n    if (e.target.closest('.menu')) {\r\n      menu.classList.toggle('active-menu');\r\n    }\r\n\r\n    if (e.target.classList.contains('close-btn') || (!e.target.closest('.menu'))) {\r\n      menu.classList.remove('active-menu');\r\n    }\r\n  };\r\n\r\n  document.addEventListener(\"click\", toggleMenu);\r\n\r\n  serviceLink.addEventListener(\"click\", blockScroll);\r\n\r\n  menuLinks.forEach(menuLink => {\r\n\r\n    menuLink.addEventListener(\"click\", blockScroll);\r\n\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuFunc);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalFunc = () => {\r\n\r\n  const modal = document.querySelector('.popup');\r\n  const popupBtns = document.querySelectorAll('.popup-btn');\r\n  const popupContent = modal.querySelector('.popup-content');\r\n\r\n  let count = 0;\r\n  let idInterval;\r\n\r\n  const popupAnimation = () => {\r\n    const documentWidth = document.documentElement.clientWidth;\r\n    const popupContentWidth = popupContent.clientWidth;\r\n\r\n    count += 5;\r\n    idInterval = requestAnimationFrame(popupAnimation);\r\n\r\n    if (count < ((documentWidth / 2) - (popupContentWidth / 2)) / 5) {\r\n      popupContent.style.left = count * 5.5 + 'px';\r\n    } else {\r\n      cancelAnimationFrame(idInterval);\r\n      count = 0;\r\n    }\r\n  };\r\n\r\n  popupBtns.forEach(btn => {\r\n    btn.addEventListener(\"click\", () => {\r\n      modal.style.display = 'block';\r\n      popupAnimation();\r\n    });\r\n  });\r\n\r\n  const handlePopup = (e) => {\r\n    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n      modal.style.display = 'none';\r\n    }\r\n  };\r\n\r\n  modal.addEventListener(\"click\", handlePopup);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalFunc);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/regex.js":
/*!**************************!*\
  !*** ./modules/regex.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst regexFunc = () => {\r\n\r\n  const mainForms = document.querySelectorAll('.main-form');\r\n  const footerForm = document.querySelector('.footer-form');\r\n\r\n  mainForms.forEach((mainForm) => {\r\n\r\n    mainForm.addEventListener(\"submit\", function (e) {\r\n      e.preventDefault();\r\n\r\n      let isError = false;\r\n      const inputText = this.querySelector('input[type=text]');\r\n      const inputEmail = this.querySelector('input[type=email]');\r\n      const inputTel = this.querySelector('input[type=tel]');\r\n\r\n      if (!/[^а-яА-Я\\-]/gi.test(inputText.value) && inputText.value !== '') {\r\n\r\n      } else {\r\n        alert(\"Ввод неверный!\");\r\n        isError = true;\r\n      }\r\n\r\n      if (/\\w+@([\\w]+\\.)[\\w]+/gi.test(inputEmail.value)) {\r\n\r\n      } else {\r\n        alert(\"Email неверный!\");\r\n        isError = true;\r\n      }\r\n\r\n      if (!/[^\\d\\-]+/gi.test(inputTel.value)) {\r\n\r\n      } else {\r\n        alert(\"Телефон не верный!\");\r\n        isError = true;\r\n      }\r\n\r\n      if (isError == true) {\r\n        alert(\"Заполните данные верно!\");\r\n      }\r\n    });\r\n  });\r\n\r\n  footerForm.addEventListener(\"submit\", function (e) {\r\n    e.preventDefault();\r\n\r\n    let isError = false;\r\n    const inputText = this.querySelector('input[type=text]');\r\n    const inputEmail = this.querySelector('input[type=email]');\r\n    const inputTel = this.querySelector('input[type=tel]');\r\n\r\n\r\n    if (!/[^а-яА-Я\\-]/gi.test(inputText.value) && inputText.value !== '') {\r\n\r\n    } else {\r\n      alert(\"Ввод неверный!\");\r\n      isError = true;\r\n    }\r\n\r\n    if (/\\w+@([\\w]+\\.)[\\w]+/gi.test(inputEmail.value)) {\r\n\r\n    } else {\r\n      alert(\"Email неверный!\");\r\n      isError = true;\r\n    }\r\n\r\n    if (!/[^\\d\\-]+/gi.test(inputTel.value)) {\r\n\r\n    } else {\r\n      alert(\"Телефон не верный!\");\r\n      isError = true;\r\n    }\r\n\r\n    if (isError == true) {\r\n      alert(\"Данные введены неверно!\");\r\n    }\r\n  });\r\n\r\n  const inputTexts = document.querySelectorAll('input[type=text]');\r\n\r\n  inputTexts.forEach(function (inputText) {\r\n\r\n    inputText.addEventListener(\"input\", function (e) {\r\n\r\n      if (inputText.classList.contains('calc-item')) {\r\n        e.target.value = e.target.value.replace(/\\D+/, \"\");\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (regexFunc);\n\n//# sourceURL=webpack:///./modules/regex.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderFunk = () => {\r\n\r\n  const sliderBlock = document.querySelector('.portfolio-content');\r\n  const slides = document.querySelectorAll('.portfolio-item');\r\n  let dots = document.querySelectorAll('.dot');\r\n  const portfolioDots = document.querySelector('.portfolio-dots');\r\n\r\n  let currentSlide = 0;\r\n  let interval;\r\n\r\n  for (let i = 0; i < slides.length; i++) {\r\n    let li = document.createElement('li');\r\n    li.classList.add('dot');\r\n\r\n    if (i == 0) {\r\n      li.classList.add('dot-active');\r\n    }\r\n\r\n    portfolioDots.append(li);\r\n\r\n  }\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    dots = document.querySelectorAll('.dot');\r\n    elems[index].classList.remove(strClass);\r\n  };\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    dots = document.querySelectorAll('.dot');\r\n    elems[index].classList.add(strClass);\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n    prevSlide(dots, currentSlide, 'dot-active');\r\n    currentSlide++;\r\n\r\n    if (currentSlide > slides.length - 1) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n    nextSlide(dots, currentSlide, 'dot-active');\r\n  };\r\n\r\n  const startSlide = () => {\r\n    interval = setInterval(autoSlide, 1000);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  const handleSlider = (e) => {\r\n    e.preventDefault();\r\n\r\n    if (!e.target.matches('.portfolio-btn, .dot')) {\r\n      return;\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n    prevSlide(dots, currentSlide, 'dot-active');\r\n\r\n    if (e.target.matches('#arrow-right')) {\r\n      currentSlide++;\r\n\r\n    } else if (e.target.matches('#arrow-left')) {\r\n      currentSlide--;\r\n\r\n    } else if (e.target.matches('.dot')) {\r\n      dots.forEach((dot, index) => {\r\n        if (e.target == dot) {\r\n          currentSlide = index;\r\n        }\r\n      });\r\n    }\r\n\r\n    if (currentSlide > slides.length - 1) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1;\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n    nextSlide(dots, currentSlide, 'dot-active');\r\n  };\r\n\r\n  sliderBlock.addEventListener(\"mouseenter\", function (e) {\r\n\r\n    if (e.target.matches('.portfolio-btn, .dot')) {\r\n      stopSlide(interval);\r\n    }\r\n\r\n  }, true);\r\n\r\n  sliderBlock.addEventListener(\"mouseleave\", function (e) {\r\n\r\n    if (e.target.matches('.portfolio-btn, .dot')) {\r\n      startSlide();\r\n    }\r\n\r\n  }, true);\r\n\r\n  sliderBlock.addEventListener(\"click\", handleSlider);\r\n\r\n\r\n  startSlide();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderFunk);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabsFunc = () => {\r\n  const tabPanel = document.querySelector('.service-header');\r\n  const tabs = document.querySelectorAll('.service-header-tab');\r\n  const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n  const handleTabs = (e) => {\r\n\r\n    if (e.target.closest('.service-header')) {\r\n      tabs.forEach((tab, index) => {\r\n\r\n        const tabBtn = e.target.closest('.service-header-tab');\r\n\r\n        if (tab == tabBtn) {\r\n          tab.classList.add('active');\r\n          tabContent[index].classList.remove('d-none');\r\n        } else {\r\n          tab.classList.remove('active');\r\n          tabContent[index].classList.add('d-none');\r\n        }\r\n\r\n\r\n      });\r\n    }\r\n  };\r\n\r\n\r\n\r\n  tabPanel.addEventListener(\"click\", handleTabs);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabsFunc);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\"use strick\";\r\n\r\nconst timerFunc = (deadLine) => {\r\n  const timerNumbers = document.querySelector('.timer-numbers');\r\n  const timerHours = document.querySelector('#timer-hours');\r\n  const timerMinutes = document.querySelector('#timer-minutes');\r\n  const timerSeconds = document.querySelector('#timer-seconds');\r\n  let timerDays = document.querySelector('#timer-day');\r\n\r\n  const getTimeRemaining = () => {\r\n    timerDays = document.querySelector('#timer-day');\r\n\r\n    let dateStop = new Date(deadLine).getTime();\r\n    let nowDate = new Date().getTime();\r\n    let timeRemaining = (dateStop - nowDate) / 1000;\r\n\r\n    let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n    let hours = Math.floor(timeRemaining / 60 / 60) % 24;\r\n    let minutes = Math.floor(timeRemaining / 60) % 60;\r\n    let seconds = Math.floor(timeRemaining) % 60;\r\n\r\n    return {\r\n      timeRemaining: timeRemaining,\r\n      days: days,\r\n      hours: hours,\r\n      minutes: minutes,\r\n      seconds: seconds,\r\n    };\r\n  };\r\n\r\n  const noneZero = (number) => {\r\n    if (number < 10) {\r\n      return '0' + number;\r\n    } else {\r\n      return number;\r\n    }\r\n  };\r\n\r\n  const daysNumber = () => {\r\n    let span = document.createElement('span');\r\n    span.id = 'timer-day';\r\n    span.textContent = '00' + ' дней ';\r\n    timerNumbers.prepend(span);\r\n  };\r\n\r\n\r\n  const upDateClock = () => {\r\n    let getTime = getTimeRemaining('15 march 2022');\r\n\r\n    timerDays.textContent = noneZero(getTime.days + ' дней ');\r\n    timerHours.textContent = noneZero(getTime.hours);\r\n    timerMinutes.textContent = noneZero(getTime.minutes);\r\n    timerSeconds.textContent = noneZero(getTime.seconds);\r\n  };\r\n\r\n\r\n  daysNumber();\r\n  let getTime = getTimeRemaining();\r\n  if (getTime.timeRemaining > 0) {\r\n    setInterval(upDateClock, 1000);\r\n  } else {\r\n    timerDays.textContent = '00';\r\n    timerHours.textContent = '00';\r\n    timerMinutes.textContent = '00';\r\n    timerSeconds.textContent = '00';\r\n  }\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timerFunc);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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