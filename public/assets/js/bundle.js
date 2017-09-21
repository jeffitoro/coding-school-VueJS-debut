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
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Vue.component("add-task", {
    props: ["taskprop"],
    template: '<li class="list-group-item" style="max-height:41px"><form v-on:submit.prevent="editOk" v-if="editActive" style="vertical-align:middle;display:inline-block;width:auto;max-height:41px"><input v-on:focus="focusActive" v-bind:class="{error: isActive}" v-model="taskprop.txt" type="text" class="form-control"style="vertical-align:middle;display:inline-block;width:auto;height:19px"><button type="submit" class="btn btn-primary" style="vertical-align:middle">Ok</button></form><span v-else>{{taskprop.txt}}</span><button v-on:click="addDone" class="pull-right"><i class="fa fa-check-square-o" aria-hidden="true"></i></button><button v-on:click="addUpdtask" class="pull-right"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button><button v-on:click="deletetask" class="pull-right"><i class="fa fa-trash-o" aria-hidden="true"></i></button></li>',
    data: function data() {
        return { editActive: false, isActive: false };
    },
    methods: {
        addDone: function addDone() {
            this.$el.classList.toggle("done");
        },
        addUpdtask: function addUpdtask() {
            this.editActive = true;
        },
        editOk: function editOk() {
            if (this.$props.taskprop.txt == "") {
                this.isActive = true;
                document.activeElement.blur();
            } else {
                this.editActive = false;
            }
        },
        focusActive: function focusActive() {
            this.isActive = false;
        },
        deletetask: function deletetask() {
            this.$el.parentElement.removeChild(this.$el);
        }
    }
});
var app = new Vue({
    el: "#app",
    created: function created() {
        console.log("hello vue!");
    },
    data: {
        titre: "Todo List With VueJs",
        task: "",
        isActive: false,
        tasks: []
    },
    methods: {
        submitTask: function submitTask() {
            if (this.task == "") {
                this.isActive = true;
                document.activeElement.blur();
            } else {
                this.tasks.push({ id: this.tasks.length + 1, txt: this.task, status: "todo" });
                this.task = "";
                console.dir(this.tasks);
            }
        },
        focusActive: function focusActive() {
            this.isActive = false;
        }
    }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map