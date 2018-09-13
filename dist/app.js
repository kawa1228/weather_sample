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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__script_weather_data__ = __webpack_require__(1);

const weatherData = __WEBPACK_IMPORTED_MODULE_0__script_weather_data__["a" /* weatherData */]()

const result = document.getElementById('result')

class MakeData {
    execute() {
        result.appendChild(this.today())
        result.appendChild(this.tomorrow())
    }
    today() {
        const todayImg = weatherData[0].image.url

        const img = document.createElement('img')
        const p = document.createElement('p')
        p.setAttribute('id', 'title')
    
        img.src = todayImg
        img.setAttribute('alt', '今日の天気画像')
    
        p.textContent = '今日の天気'
        p.className = 'today'

        const div = document.createElement('div')
        div.className = 'today-wrapper'

        div.appendChild(img)
        div.appendChild(p)

        return div
    }
    tomorrow() {
        const　tomorrowImg = weatherData[1].image.url

        const img = document.createElement('img')
        const p = document.createElement('p')
        p.setAttribute('id', 'title')
    
        img.src = tomorrowImg
        img.setAttribute('alt', '明日の天気画像')
    
        p.textContent = '明日の天気'
        p.className = 'tomorrow'
    
        const div = document.createElement('div')
        div.className = 'tomorrow-wrapper'

        div.appendChild(img)
        div.appendChild(p)
        
        return div
    }
}

const makeData = new MakeData()
makeData.execute()


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const weatherData = ()=> {
    return [
    {
        dateLabel: "今日",
        telop: "曇り",
        date: "2018-09-12",
        temperature: {
            min: null,
            max: {
                celsius: "29",
                fahrenheit: "84.2"
            }
        },
        image: {
            width: 50,
            url: "http://weather.livedoor.com/img/icon/8.gif",
            title: "曇り",
            height: 31
        }
    },
    {
        dateLabel: "明日",
        telop: "曇のち雨",
        date: "2018-09-13",
        temperature: {
            min: {
                celsius: "23",
                fahrenheit: "73.4"
            },
            max: {
                celsius: "30",
                fahrenheit: "86.0"
            }
        },
        image: {
            width: 50,
            url: "http://weather.livedoor.com/img/icon/13.gif",
            title: "曇のち雨",
            height: 31
        }
    },
    {
        dateLabel: "明後日",
        telop: "晴れのち雪",
        date: "2018-09-14",
        temperature: {
            min: null,
            max: null
        },
        image: {
            width: 50,
            url: "http://weather.livedoor.com/img/icon/7.gif",
            title: "曇り",
            height: 31
        }
    }
    ]
}
/* harmony export (immutable) */ __webpack_exports__["a"] = weatherData;



/***/ })
/******/ ]);