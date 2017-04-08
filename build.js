/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Monster__ = __webpack_require__(/*! ./Monster */ 1);\n\n\nfunction init () {\n  var canvas = document.createElement(\"canvas\")\n\n  canvas.height = 256\n  canvas.width = 256\n\n  var ctx = canvas.getContext('2d')\n\n  document.body.appendChild(canvas)\n\n  return { ctx, canvas }\n}\n\nfunction step () {\n  ctx.clearRect(0, 0, canvas.width, canvas.height)\n\n  monsters.forEach(function (monster) {\n    monster.step(monsters)\n    monster.draw(ctx)\n  })\n}\n\nwindow.addEventListener(\"keydown\", function(event){\n  if (event.key === ' ') step()\n}, false);\n\nconst { ctx, canvas } = init()\n\n\n\nvar monster1 = new __WEBPACK_IMPORTED_MODULE_0__Monster__[\"a\" /* default */](10, 10, 'blue')\nvar monster2 = new __WEBPACK_IMPORTED_MODULE_0__Monster__[\"a\" /* default */](50, 50, 'red')\nvar monster3 = new __WEBPACK_IMPORTED_MODULE_0__Monster__[\"a\" /* default */](61, 50)\nvar monster4 = new __WEBPACK_IMPORTED_MODULE_0__Monster__[\"a\" /* default */](71, 50)\nvar monster5 = new __WEBPACK_IMPORTED_MODULE_0__Monster__[\"a\" /* default */](81, 50)\nvar monster6 = new __WEBPACK_IMPORTED_MODULE_0__Monster__[\"a\" /* default */](91, 50)\n\nconst monsters = []\n\nmonsters.push(monster1, monster2, monster3, monster4, monster5, monster6)\n\nstep()\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz85NTUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb25zdGVyIGZyb20gJy4vTW9uc3RlcidcblxuZnVuY3Rpb24gaW5pdCAoKSB7XG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXG5cbiAgY2FudmFzLmhlaWdodCA9IDI1NlxuICBjYW52YXMud2lkdGggPSAyNTZcblxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcylcblxuICByZXR1cm4geyBjdHgsIGNhbnZhcyB9XG59XG5cbmZ1bmN0aW9uIHN0ZXAgKCkge1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcblxuICBtb25zdGVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb25zdGVyKSB7XG4gICAgbW9uc3Rlci5zdGVwKG1vbnN0ZXJzKVxuICAgIG1vbnN0ZXIuZHJhdyhjdHgpXG4gIH0pXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihldmVudCl7XG4gIGlmIChldmVudC5rZXkgPT09ICcgJykgc3RlcCgpXG59LCBmYWxzZSk7XG5cbmNvbnN0IHsgY3R4LCBjYW52YXMgfSA9IGluaXQoKVxuXG5cblxudmFyIG1vbnN0ZXIxID0gbmV3IE1vbnN0ZXIoMTAsIDEwLCAnYmx1ZScpXG52YXIgbW9uc3RlcjIgPSBuZXcgTW9uc3Rlcig1MCwgNTAsICdyZWQnKVxudmFyIG1vbnN0ZXIzID0gbmV3IE1vbnN0ZXIoNjEsIDUwKVxudmFyIG1vbnN0ZXI0ID0gbmV3IE1vbnN0ZXIoNzEsIDUwKVxudmFyIG1vbnN0ZXI1ID0gbmV3IE1vbnN0ZXIoODEsIDUwKVxudmFyIG1vbnN0ZXI2ID0gbmV3IE1vbnN0ZXIoOTEsIDUwKVxuXG5jb25zdCBtb25zdGVycyA9IFtdXG5cbm1vbnN0ZXJzLnB1c2gobW9uc3RlcjEsIG1vbnN0ZXIyLCBtb25zdGVyMywgbW9uc3RlcjQsIG1vbnN0ZXI1LCBtb25zdGVyNilcblxuc3RlcCgpXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/* exports provided: default */
/* exports used: default */
/*!************************!*\
  !*** ./src/Monster.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Monster;\nfunction Monster (x, y, color = 'black') {\n  this.x = x\n  this.y = y\n  this.size = 10\n  this.color = color\n  this.speed = 1\n}\n\nMonster.prototype.draw = function draw (ctx) {\n  ctx.fillStyle = this.color\n  ctx.fillRect(this.x, this.y, this.size, this.size)\n}\n\nMonster.prototype.step = function step (monsters) {\n  const next = {x: this.x, y: this.y}\n  switch (Math.floor(Math.random() * 4)) {\n    case 0: // up.\n      next.y -= this.speed\n      break;\n    case 1: // down.\n      next.y += this.speed\n      break;\n    case 2: // right.\n      next.x += this.speed\n      break;\n    case 3: // left.\n      next.x -= this.speed\n      break;\n  }\n  let canMove = true\n  monsters.forEach(function (monster) {\n    if (monster === this) return\n    if (!canMove) return\n    if (!(monster.x > next.x + this.size\n        || monster.x + monster.size <= next.x\n        || monster.y > next.y + this.size\n        || monster.y + monster.size <= next.y)\n    ) {\n      canMove = false\n    }\n  }, this)\n  if (canMove) {\n    this.x = next.x\n    this.y = next.y\n  } else {\n    this.step(monsters)\n  }\n}\n\n\n//uuid ietf rfc namespace network card\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Nb25zdGVyLmpzPzQ4MTkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9uc3RlciAoeCwgeSwgY29sb3IgPSAnYmxhY2snKSB7XG4gIHRoaXMueCA9IHhcbiAgdGhpcy55ID0geVxuICB0aGlzLnNpemUgPSAxMFxuICB0aGlzLmNvbG9yID0gY29sb3JcbiAgdGhpcy5zcGVlZCA9IDFcbn1cblxuTW9uc3Rlci5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIGRyYXcgKGN0eCkge1xuICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvclxuICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuc2l6ZSwgdGhpcy5zaXplKVxufVxuXG5Nb25zdGVyLnByb3RvdHlwZS5zdGVwID0gZnVuY3Rpb24gc3RlcCAobW9uc3RlcnMpIHtcbiAgY29uc3QgbmV4dCA9IHt4OiB0aGlzLngsIHk6IHRoaXMueX1cbiAgc3dpdGNoIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSkge1xuICAgIGNhc2UgMDogLy8gdXAuXG4gICAgICBuZXh0LnkgLT0gdGhpcy5zcGVlZFxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxOiAvLyBkb3duLlxuICAgICAgbmV4dC55ICs9IHRoaXMuc3BlZWRcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjogLy8gcmlnaHQuXG4gICAgICBuZXh0LnggKz0gdGhpcy5zcGVlZFxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOiAvLyBsZWZ0LlxuICAgICAgbmV4dC54IC09IHRoaXMuc3BlZWRcbiAgICAgIGJyZWFrO1xuICB9XG4gIGxldCBjYW5Nb3ZlID0gdHJ1ZVxuICBtb25zdGVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb25zdGVyKSB7XG4gICAgaWYgKG1vbnN0ZXIgPT09IHRoaXMpIHJldHVyblxuICAgIGlmICghY2FuTW92ZSkgcmV0dXJuXG4gICAgaWYgKCEobW9uc3Rlci54ID4gbmV4dC54ICsgdGhpcy5zaXplXG4gICAgICAgIHx8IG1vbnN0ZXIueCArIG1vbnN0ZXIuc2l6ZSA8PSBuZXh0LnhcbiAgICAgICAgfHwgbW9uc3Rlci55ID4gbmV4dC55ICsgdGhpcy5zaXplXG4gICAgICAgIHx8IG1vbnN0ZXIueSArIG1vbnN0ZXIuc2l6ZSA8PSBuZXh0LnkpXG4gICAgKSB7XG4gICAgICBjYW5Nb3ZlID0gZmFsc2VcbiAgICB9XG4gIH0sIHRoaXMpXG4gIGlmIChjYW5Nb3ZlKSB7XG4gICAgdGhpcy54ID0gbmV4dC54XG4gICAgdGhpcy55ID0gbmV4dC55XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zdGVwKG1vbnN0ZXJzKVxuICB9XG59XG5cblxuLy91dWlkIGlldGYgcmZjIG5hbWVzcGFjZSBuZXR3b3JrIGNhcmRcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL01vbnN0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);