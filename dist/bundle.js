/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/Manager.js":
/*!****************************!*\
  !*** ./scripts/Manager.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const showModal = __webpack_require__(/*! ./showModal */ \"./scripts/showModal.js\");\r\n\r\nclass Manager {\r\n    constructor(props) {\r\n        this.quizList = props.quizList;\r\n        this.currentQuestionNumber = 0;\r\n        this.currentQuestion;\r\n        this.correctAnswers = 0;\r\n        this.incorrectAnswers = 0;\r\n        document.getElementById('firstAnswer').addEventListener(\"click\", this.setHandleClick(0));\r\n        document.getElementById('secondAnswer').addEventListener(\"click\", this.setHandleClick(1));\r\n    }\r\n\r\n    setQuestion() {\r\n        this.currentQuestion = this.quizList[this.currentQuestionNumber];\r\n\r\n        let question =  document.getElementById('question');\r\n        question.innerHTML = this.quizList[this.currentQuestionNumber].question;\r\n        \r\n        let firstButton = document.getElementById('firstAnswer');\r\n        firstButton.innerHTML = this.quizList[this.currentQuestionNumber].answers[0].text;\r\n        \r\n        let secondButton = document.getElementById('secondAnswer');\r\n        secondButton.innerHTML = this.quizList[this.currentQuestionNumber].answers[1].text;\r\n    }\r\n\r\n    setHandleClick(i) {\r\n        return () => {\r\n            if(this.currentQuestion.answers[i].isCorrect) {\r\n                console.log(\"correct\");\r\n                this.correctAnswers++;\r\n            } else {\r\n                console.log(\"incorrect\");\r\n                this.incorrectAnswers++;\r\n            }\r\n            if(this.currentQuestionNumber === this.quizList.length - 1 ) {\r\n                console.log(\"end\");\r\n                this.handleEnd();\r\n                return;\r\n            }\r\n            this.currentQuestionNumber++;\r\n            this.setQuestion(this.currentQuestionNumber);\r\n        }\r\n    }\r\n\r\n    handleEnd() {\r\n        showModal({\r\n            isWin: this.correctAnswers > this.incorrectAnswers,\r\n            correctAnswers: this.correctAnswers,\r\n            incorrectAnswers: this.incorrectAnswers\r\n        });\r\n    }\r\n}\r\n\r\nmodule.exports = Manager;\n\n//# sourceURL=webpack:///./scripts/Manager.js?");

/***/ }),

/***/ "./scripts/getRandomInt.js":
/*!*********************************!*\
  !*** ./scripts/getRandomInt.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function getRandomInt(min, max) {\r\n    let rand = min + Math.random() * (max + 1 - min);\r\n    return Math.floor(rand);\r\n}\r\n\r\nmodule.exports = getRandomInt;\r\n\n\n//# sourceURL=webpack:///./scripts/getRandomInt.js?");

/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const quizList = __webpack_require__(/*! ./quizList */ \"./scripts/quizList.js\");\r\nconst mixArray = __webpack_require__(/*! ./mixArray */ \"./scripts/mixArray.js\");\r\nconst Manager = __webpack_require__(/*! ./Manager */ \"./scripts/Manager.js\")\r\n\r\n\r\nlet mixedQuizList = mixArray(quizList);\r\nmixedQuizList.forEach(current => {\r\n    current.answers = mixArray(current.answers);\r\n});\r\n\r\n\r\nlet man =  new Manager({quizList: mixedQuizList});\r\n\r\nman.setQuestion();\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./scripts/main.js?");

/***/ }),

/***/ "./scripts/mixArray.js":
/*!*****************************!*\
  !*** ./scripts/mixArray.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const getRandomInt = __webpack_require__(/*! ./getRandomInt */ \"./scripts/getRandomInt.js\");\r\n\r\nfunction mixArray (input) {\r\n    let result = [];\r\n\r\n    let gost = [];\r\n    for (let i = 0; i < input.length; i++) {\r\n        gost.push(i);\r\n    }\r\n\r\n    for (let i = 0; i < input.length; i++) {\r\n        let rand = getRandomInt(0, gost.length-1);\r\n        result.push(input[gost[rand]]);\r\n        gost.splice(rand, 1);\r\n    }\r\n\r\n    return result;\r\n}\r\n\r\nmodule.exports = mixArray;\r\n\n\n//# sourceURL=webpack:///./scripts/mixArray.js?");

/***/ }),

/***/ "./scripts/quizList.js":
/*!*****************************!*\
  !*** ./scripts/quizList.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const quizList = [\r\n    {\r\n        question: 'Какая фамилия была у Петра I?',\r\n        answers: [\r\n            {text: 'Романов', isCorrect: true},\r\n            {text: 'Держинский', isCorrect: false},\r\n        ]\r\n    },\r\n\r\n    {\r\n        question: 'Как звали детей императрицы Екатерины II Великой?',\r\n        answers: [\r\n            {text: 'Павел и Анна', isCorrect: true},\r\n            {text: 'Алексей и Анна', isCorrect: false}\r\n        ]\r\n    },\r\n\r\n    {\r\n        question: 'Кто автор строк «Здоровью моему полезен русской холод» ?',\r\n        answers: [\r\n            {text: 'А.С.Пушкин', isCorrect: true},\r\n            {text: 'С.А.Есенин', isCorrect: false},\r\n        ]\r\n    },\r\n\r\n    {\r\n        question: 'Какой европейский город раньше носил название Лютеция?',\r\n        answers: [\r\n            {text: 'Париж', isCorrect: true},\r\n            {text: 'Милан', isCorrect: false},\r\n        ]\r\n    },\r\n\r\n    {\r\n        question: 'Кто из этих великих российских архитекторов был ярким представителем стиля барокко?',\r\n        answers: [\r\n            {text: 'Растрелли', isCorrect: true},\r\n            {text: 'Монферран', isCorrect: false},\r\n        ]\r\n    }\r\n\r\n];\r\n\r\nmodule.exports = quizList;\r\n\n\n//# sourceURL=webpack:///./scripts/quizList.js?");

/***/ }),

/***/ "./scripts/showModal.js":
/*!******************************!*\
  !*** ./scripts/showModal.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function showModal(props) {\r\n\r\n    var darkLayer = document.createElement('div'); \r\n    darkLayer.id = 'shadow'; \r\n    document.body.appendChild(darkLayer); \r\n\r\n    let modalWin;\r\n\r\n    if(props.isWin) {\r\n        modalWin = document.getElementById('popupWin');\r\n        document.getElementById('RightAnswers').innerHTML = `right answers: ${props.correctAnswers}`;\r\n        document.getElementById('FailAnswers').innerHTML = `fail answers: ${props.incorrectAnswers}`;\r\n    } else {\r\n        modalWin = document.getElementById('popupFail');\r\n        document.getElementById('RightAnswers1').innerHTML = `right answers: ${props.correctAnswers}`;\r\n        document.getElementById('FailAnswers1').innerHTML = `fail answers: ${props.incorrectAnswers}`;\r\n    }\r\n    console.log(document.getElementById('RightAnswers'));\r\n    \r\n\r\n    modalWin.style.display = 'block'; \r\n\r\n    darkLayer.onclick = function () {  \r\n        darkLayer.parentNode.removeChild(darkLayer); \r\n        modalWin.style.display = 'none'; \r\n        return false;\r\n    };\r\n}\r\n\r\nmodule.exports = showModal;\n\n//# sourceURL=webpack:///./scripts/showModal.js?");

/***/ })

/******/ });