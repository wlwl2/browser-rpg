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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* exports provided: default */
/* exports used: default */
/*!**********************!*\
  !*** ./src/World.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Monster__ = __webpack_require__(/*! ./Monster */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Player__ = __webpack_require__(/*! ./Player */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Scene__ = __webpack_require__(/*! ./Scene */ 3);\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = World;\n// people and monsters\r\n\r\n\r\n\r\n\r\nfunction World () {\r\n  const monsters = this.monsters = []\r\n\r\n  // var monster1 = new Monster(128, 128)\r\n  // var monster2 = new Monster(144, 144)\r\n  // var monster3 = new Monster(160, 160)\r\n  // var monster4 = new Monster(240, 240)\r\n  // var monster5 = new Monster(256, 256)\r\n  // var monster6 = new Monster(320, 320)\r\n\r\n  // Returns a random integer between min (inclusive) and max (inclusive)\r\n  // Using Math.round() will give you a non-uniform distribution!\r\n  function getRandomInt (min, max) {\r\n    return Math.floor(Math.random() * (max - min + 1)) + min\r\n  }\r\n\r\n  for (var i = 0; i < 10; i++) {\r\n    var monsterName = 'monster' + i\r\n    monsterName = new __WEBPACK_IMPORTED_MODULE_0__Monster__[\"a\" /* default */]((i * 30), 300)\r\n    monsters.push(monsterName)\r\n  }\r\n\r\n  // var monster20 = new Monster(16, 16)\r\n  // monsters.push(monster1, monster2, monster3, monster4, monster5, monster6)\r\n  // monsters.push(monster20)\r\n\r\n  const players = this.players = []\r\n\r\n  var player1 = new __WEBPACK_IMPORTED_MODULE_1__Player__[\"a\" /* default */](240, 240)\r\n\r\n  players.push(player1)\r\n  this.scene = new __WEBPACK_IMPORTED_MODULE_2__Scene__[\"a\" /* default */](20, 20)\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Xb3JsZC5qcz9jOWIzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBlb3BsZSBhbmQgbW9uc3RlcnNcclxuaW1wb3J0IE1vbnN0ZXIgZnJvbSAnLi9Nb25zdGVyJ1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJ1xyXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9TY2VuZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmxkICgpIHtcclxuICBjb25zdCBtb25zdGVycyA9IHRoaXMubW9uc3RlcnMgPSBbXVxyXG5cclxuICAvLyB2YXIgbW9uc3RlcjEgPSBuZXcgTW9uc3RlcigxMjgsIDEyOClcclxuICAvLyB2YXIgbW9uc3RlcjIgPSBuZXcgTW9uc3RlcigxNDQsIDE0NClcclxuICAvLyB2YXIgbW9uc3RlcjMgPSBuZXcgTW9uc3RlcigxNjAsIDE2MClcclxuICAvLyB2YXIgbW9uc3RlcjQgPSBuZXcgTW9uc3RlcigyNDAsIDI0MClcclxuICAvLyB2YXIgbW9uc3RlcjUgPSBuZXcgTW9uc3RlcigyNTYsIDI1NilcclxuICAvLyB2YXIgbW9uc3RlcjYgPSBuZXcgTW9uc3RlcigzMjAsIDMyMClcclxuXHJcbiAgLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdXNpdmUpIGFuZCBtYXggKGluY2x1c2l2ZSlcclxuICAvLyBVc2luZyBNYXRoLnJvdW5kKCkgd2lsbCBnaXZlIHlvdSBhIG5vbi11bmlmb3JtIGRpc3RyaWJ1dGlvbiFcclxuICBmdW5jdGlvbiBnZXRSYW5kb21JbnQgKG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxyXG4gIH1cclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICB2YXIgbW9uc3Rlck5hbWUgPSAnbW9uc3RlcicgKyBpXHJcbiAgICBtb25zdGVyTmFtZSA9IG5ldyBNb25zdGVyKChpICogMzApLCAzMDApXHJcbiAgICBtb25zdGVycy5wdXNoKG1vbnN0ZXJOYW1lKVxyXG4gIH1cclxuXHJcbiAgLy8gdmFyIG1vbnN0ZXIyMCA9IG5ldyBNb25zdGVyKDE2LCAxNilcclxuICAvLyBtb25zdGVycy5wdXNoKG1vbnN0ZXIxLCBtb25zdGVyMiwgbW9uc3RlcjMsIG1vbnN0ZXI0LCBtb25zdGVyNSwgbW9uc3RlcjYpXHJcbiAgLy8gbW9uc3RlcnMucHVzaChtb25zdGVyMjApXHJcblxyXG4gIGNvbnN0IHBsYXllcnMgPSB0aGlzLnBsYXllcnMgPSBbXVxyXG5cclxuICB2YXIgcGxheWVyMSA9IG5ldyBQbGF5ZXIoMjQwLCAyNDApXHJcblxyXG4gIHBsYXllcnMucHVzaChwbGF5ZXIxKVxyXG4gIHRoaXMuc2NlbmUgPSBuZXcgU2NlbmUoMjAsIDIwKVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1dvcmxkLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/* exports provided: default */
/* exports used: default */
/*!************************!*\
  !*** ./src/Monster.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Monster;\nfunction Monster (x, y) {\r\n  this.x = x\r\n  this.y = y\r\n  this.size = 30\r\n  this.speed = 30\r\n}\r\n\r\nMonster.prototype.draw = function draw (ctx) {\n  var img = new Image()\n\r\n  img.addEventListener('load', () => {\r\n    ctx.drawImage(\r\n      img,\r\n      8, // The X coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.\r\n      114, // The Y coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.\r\n      this.size, // The width of the sub-rectangle of the source image to draw into the destination context. If not specified, the entire rectangle from the coordinates specified by sx and sy to the bottom-right corner of the image is used.\r\n      this.size, // The height of the sub-rectangle of the source image to draw into the destination context.\r\n      this.x, // The X coordinate in the destination canvas at which to place the top-left corner of the source image.\r\n      this.y, // The Y coordinate in the destination canvas at which to place the top-left corner of the source image.\r\n      this.size, // The width to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in width when drawn.\r\n      this.size // The height to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in height when drawn.\r\n    )\r\n  }, false)\r\n  img.src = 'src/sprites/characters-min.png'\r\n}\r\n\r\nMonster.prototype.step = function step (monsters) {\r\n  const next = {x: this.x, y: this.y}\r\n\r\n  switch (Math.floor(Math.random() * 4)) {\r\n    case 0: // up.\r\n      next.y -= this.speed\r\n      break\r\n    case 1: // down.\r\n      next.y += this.speed\r\n      break\r\n    case 2: // right.\r\n      next.x += this.speed\r\n      break\r\n    case 3: // left.\r\n      next.x -= this.speed\r\n      break\r\n  }\r\n\r\n  let canMove = true\r\n\r\n  // Collision detection.\r\n  monsters.forEach(function (monster) {\r\n    if (monster === this) return\r\n    if (!canMove) return\r\n    if (!(monster.x > next.x + this.size ||\r\n        monster.x + monster.size <= next.x ||\r\n        monster.y > next.y + this.size ||\r\n        monster.y + monster.size <= next.y)\r\n    ) {\r\n      canMove = false\r\n    }\r\n  }, this)\r\n\r\n  if (canMove) {\r\n    this.x = next.x\r\n    this.y = next.y\r\n  } else {\r\n    this.step(monsters)\r\n  }\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Nb25zdGVyLmpzPzQ4MTkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9uc3RlciAoeCwgeSkge1xyXG4gIHRoaXMueCA9IHhcclxuICB0aGlzLnkgPSB5XHJcbiAgdGhpcy5zaXplID0gMzBcclxuICB0aGlzLnNwZWVkID0gMzBcclxufVxyXG5cclxuTW9uc3Rlci5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIGRyYXcgKGN0eCkge1xuICB2YXIgaW1nID0gbmV3IEltYWdlKClcblxyXG4gIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgaW1nLFxyXG4gICAgICA4LCAvLyBUaGUgWCBjb29yZGluYXRlIG9mIHRoZSB0b3AgbGVmdCBjb3JuZXIgb2YgdGhlIHN1Yi1yZWN0YW5nbGUgb2YgdGhlIHNvdXJjZSBpbWFnZSB0byBkcmF3IGludG8gdGhlIGRlc3RpbmF0aW9uIGNvbnRleHQuXHJcbiAgICAgIDExNCwgLy8gVGhlIFkgY29vcmRpbmF0ZSBvZiB0aGUgdG9wIGxlZnQgY29ybmVyIG9mIHRoZSBzdWItcmVjdGFuZ2xlIG9mIHRoZSBzb3VyY2UgaW1hZ2UgdG8gZHJhdyBpbnRvIHRoZSBkZXN0aW5hdGlvbiBjb250ZXh0LlxyXG4gICAgICB0aGlzLnNpemUsIC8vIFRoZSB3aWR0aCBvZiB0aGUgc3ViLXJlY3RhbmdsZSBvZiB0aGUgc291cmNlIGltYWdlIHRvIGRyYXcgaW50byB0aGUgZGVzdGluYXRpb24gY29udGV4dC4gSWYgbm90IHNwZWNpZmllZCwgdGhlIGVudGlyZSByZWN0YW5nbGUgZnJvbSB0aGUgY29vcmRpbmF0ZXMgc3BlY2lmaWVkIGJ5IHN4IGFuZCBzeSB0byB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lciBvZiB0aGUgaW1hZ2UgaXMgdXNlZC5cclxuICAgICAgdGhpcy5zaXplLCAvLyBUaGUgaGVpZ2h0IG9mIHRoZSBzdWItcmVjdGFuZ2xlIG9mIHRoZSBzb3VyY2UgaW1hZ2UgdG8gZHJhdyBpbnRvIHRoZSBkZXN0aW5hdGlvbiBjb250ZXh0LlxyXG4gICAgICB0aGlzLngsIC8vIFRoZSBYIGNvb3JkaW5hdGUgaW4gdGhlIGRlc3RpbmF0aW9uIGNhbnZhcyBhdCB3aGljaCB0byBwbGFjZSB0aGUgdG9wLWxlZnQgY29ybmVyIG9mIHRoZSBzb3VyY2UgaW1hZ2UuXHJcbiAgICAgIHRoaXMueSwgLy8gVGhlIFkgY29vcmRpbmF0ZSBpbiB0aGUgZGVzdGluYXRpb24gY2FudmFzIGF0IHdoaWNoIHRvIHBsYWNlIHRoZSB0b3AtbGVmdCBjb3JuZXIgb2YgdGhlIHNvdXJjZSBpbWFnZS5cclxuICAgICAgdGhpcy5zaXplLCAvLyBUaGUgd2lkdGggdG8gZHJhdyB0aGUgaW1hZ2UgaW4gdGhlIGRlc3RpbmF0aW9uIGNhbnZhcy4gVGhpcyBhbGxvd3Mgc2NhbGluZyBvZiB0aGUgZHJhd24gaW1hZ2UuIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBpbWFnZSBpcyBub3Qgc2NhbGVkIGluIHdpZHRoIHdoZW4gZHJhd24uXHJcbiAgICAgIHRoaXMuc2l6ZSAvLyBUaGUgaGVpZ2h0IHRvIGRyYXcgdGhlIGltYWdlIGluIHRoZSBkZXN0aW5hdGlvbiBjYW52YXMuIFRoaXMgYWxsb3dzIHNjYWxpbmcgb2YgdGhlIGRyYXduIGltYWdlLiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgaW1hZ2UgaXMgbm90IHNjYWxlZCBpbiBoZWlnaHQgd2hlbiBkcmF3bi5cclxuICAgIClcclxuICB9LCBmYWxzZSlcclxuICBpbWcuc3JjID0gJ3NyYy9zcHJpdGVzL2NoYXJhY3RlcnMtbWluLnBuZydcclxufVxyXG5cclxuTW9uc3Rlci5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uIHN0ZXAgKG1vbnN0ZXJzKSB7XHJcbiAgY29uc3QgbmV4dCA9IHt4OiB0aGlzLngsIHk6IHRoaXMueX1cclxuXHJcbiAgc3dpdGNoIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSkge1xyXG4gICAgY2FzZSAwOiAvLyB1cC5cclxuICAgICAgbmV4dC55IC09IHRoaXMuc3BlZWRcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgMTogLy8gZG93bi5cclxuICAgICAgbmV4dC55ICs9IHRoaXMuc3BlZWRcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgMjogLy8gcmlnaHQuXHJcbiAgICAgIG5leHQueCArPSB0aGlzLnNwZWVkXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlIDM6IC8vIGxlZnQuXHJcbiAgICAgIG5leHQueCAtPSB0aGlzLnNwZWVkXHJcbiAgICAgIGJyZWFrXHJcbiAgfVxyXG5cclxuICBsZXQgY2FuTW92ZSA9IHRydWVcclxuXHJcbiAgLy8gQ29sbGlzaW9uIGRldGVjdGlvbi5cclxuICBtb25zdGVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb25zdGVyKSB7XHJcbiAgICBpZiAobW9uc3RlciA9PT0gdGhpcykgcmV0dXJuXHJcbiAgICBpZiAoIWNhbk1vdmUpIHJldHVyblxyXG4gICAgaWYgKCEobW9uc3Rlci54ID4gbmV4dC54ICsgdGhpcy5zaXplIHx8XHJcbiAgICAgICAgbW9uc3Rlci54ICsgbW9uc3Rlci5zaXplIDw9IG5leHQueCB8fFxyXG4gICAgICAgIG1vbnN0ZXIueSA+IG5leHQueSArIHRoaXMuc2l6ZSB8fFxyXG4gICAgICAgIG1vbnN0ZXIueSArIG1vbnN0ZXIuc2l6ZSA8PSBuZXh0LnkpXHJcbiAgICApIHtcclxuICAgICAgY2FuTW92ZSA9IGZhbHNlXHJcbiAgICB9XHJcbiAgfSwgdGhpcylcclxuXHJcbiAgaWYgKGNhbk1vdmUpIHtcclxuICAgIHRoaXMueCA9IG5leHQueFxyXG4gICAgdGhpcy55ID0gbmV4dC55XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMuc3RlcChtb25zdGVycylcclxuICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvTW9uc3Rlci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/* exports provided: default */
/* exports used: default */
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Player;\nfunction Player (x, y) {\r\n  this.x = x\r\n  this.y = y\r\n  this.size = 30\r\n  this.speed = 30\r\n}\r\n\r\nPlayer.prototype.draw = function draw (ctx) {\r\n  var img = new Image()\r\n\r\n  img.addEventListener('load', () => {\r\n    ctx.drawImage(\r\n\r\n      // An element to draw into the context.\r\n      img,\r\n\r\n      // The X coordinate of the top left corner of the sub-rectangle of the\r\n      // source image to draw into the destination context.\r\n      9,\r\n\r\n      // The Y coordinate of the top left corner of the sub-rectangle of the\r\n      // source image to draw into the destination context.\r\n      42,\r\n\r\n      // The width of the sub-rectangle of the source image to draw into the\r\n      // destination context. If not specified, the entire rectangle from the\r\n      // coordinates specified by sx and sy to the bottom-right\r\n      // corner of the image is used.\r\n      this.size,\r\n\r\n      // The height of the sub-rectangle of the source image to draw into\r\n      // the destination context.\r\n      this.size,\r\n\r\n      // The X coordinate in the destination canvas at which to place the\r\n      // top-left corner of the source image.\r\n      this.x,\r\n\r\n      // The Y coordinate in the destination canvas at which to place the\r\n      // top-left corner of the source image.\r\n      this.y,\r\n\r\n      // The width to draw the image in the destination canvas. This allows\r\n      // scaling of the drawn image. If not specified, the image is not\r\n      // scaled in width when drawn.\r\n      this.size,\r\n\r\n      // The height to draw the image in the destination canvas. This allows\r\n      // scaling of the drawn image. If not specified, the image is not\r\n      // scaled in height when drawn.\r\n      this.size\r\n    )\r\n  })\r\n  img.src = 'src/sprites/characters-min.png'\r\n}\r\n\r\nPlayer.prototype.move = function move (ctx, direction) {\r\n  switch (direction) {\r\n    case 'up':\r\n      this.y -= this.speed\r\n      break\r\n    case 'down':\r\n      this.y += this.speed\r\n      break\r\n    case 'right':\r\n      this.x += this.speed\r\n      break\r\n    case 'left':\r\n      this.x -= this.speed\r\n      break\r\n    case 'up left':\r\n      this.x -= this.speed\r\n      this.y -= this.speed\r\n      break\r\n    case 'down left':\r\n      this.x -= this.speed\r\n      this.y += this.speed\r\n      break\r\n    case 'up right':\r\n      this.x += this.speed\r\n      this.y -= this.speed\r\n      break\r\n    case 'down right':\r\n      this.x += this.speed\r\n      this.y += this.speed\r\n      break\r\n  }\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9QbGF5ZXIuanM/YWFkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIgKHgsIHkpIHtcclxuICB0aGlzLnggPSB4XHJcbiAgdGhpcy55ID0geVxyXG4gIHRoaXMuc2l6ZSA9IDMwXHJcbiAgdGhpcy5zcGVlZCA9IDMwXHJcbn1cclxuXHJcblBsYXllci5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIGRyYXcgKGN0eCkge1xyXG4gIHZhciBpbWcgPSBuZXcgSW1hZ2UoKVxyXG5cclxuICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcblxyXG4gICAgICAvLyBBbiBlbGVtZW50IHRvIGRyYXcgaW50byB0aGUgY29udGV4dC5cclxuICAgICAgaW1nLFxyXG5cclxuICAgICAgLy8gVGhlIFggY29vcmRpbmF0ZSBvZiB0aGUgdG9wIGxlZnQgY29ybmVyIG9mIHRoZSBzdWItcmVjdGFuZ2xlIG9mIHRoZVxyXG4gICAgICAvLyBzb3VyY2UgaW1hZ2UgdG8gZHJhdyBpbnRvIHRoZSBkZXN0aW5hdGlvbiBjb250ZXh0LlxyXG4gICAgICA5LFxyXG5cclxuICAgICAgLy8gVGhlIFkgY29vcmRpbmF0ZSBvZiB0aGUgdG9wIGxlZnQgY29ybmVyIG9mIHRoZSBzdWItcmVjdGFuZ2xlIG9mIHRoZVxyXG4gICAgICAvLyBzb3VyY2UgaW1hZ2UgdG8gZHJhdyBpbnRvIHRoZSBkZXN0aW5hdGlvbiBjb250ZXh0LlxyXG4gICAgICA0MixcclxuXHJcbiAgICAgIC8vIFRoZSB3aWR0aCBvZiB0aGUgc3ViLXJlY3RhbmdsZSBvZiB0aGUgc291cmNlIGltYWdlIHRvIGRyYXcgaW50byB0aGVcclxuICAgICAgLy8gZGVzdGluYXRpb24gY29udGV4dC4gSWYgbm90IHNwZWNpZmllZCwgdGhlIGVudGlyZSByZWN0YW5nbGUgZnJvbSB0aGVcclxuICAgICAgLy8gY29vcmRpbmF0ZXMgc3BlY2lmaWVkIGJ5IHN4IGFuZCBzeSB0byB0aGUgYm90dG9tLXJpZ2h0XHJcbiAgICAgIC8vIGNvcm5lciBvZiB0aGUgaW1hZ2UgaXMgdXNlZC5cclxuICAgICAgdGhpcy5zaXplLFxyXG5cclxuICAgICAgLy8gVGhlIGhlaWdodCBvZiB0aGUgc3ViLXJlY3RhbmdsZSBvZiB0aGUgc291cmNlIGltYWdlIHRvIGRyYXcgaW50b1xyXG4gICAgICAvLyB0aGUgZGVzdGluYXRpb24gY29udGV4dC5cclxuICAgICAgdGhpcy5zaXplLFxyXG5cclxuICAgICAgLy8gVGhlIFggY29vcmRpbmF0ZSBpbiB0aGUgZGVzdGluYXRpb24gY2FudmFzIGF0IHdoaWNoIHRvIHBsYWNlIHRoZVxyXG4gICAgICAvLyB0b3AtbGVmdCBjb3JuZXIgb2YgdGhlIHNvdXJjZSBpbWFnZS5cclxuICAgICAgdGhpcy54LFxyXG5cclxuICAgICAgLy8gVGhlIFkgY29vcmRpbmF0ZSBpbiB0aGUgZGVzdGluYXRpb24gY2FudmFzIGF0IHdoaWNoIHRvIHBsYWNlIHRoZVxyXG4gICAgICAvLyB0b3AtbGVmdCBjb3JuZXIgb2YgdGhlIHNvdXJjZSBpbWFnZS5cclxuICAgICAgdGhpcy55LFxyXG5cclxuICAgICAgLy8gVGhlIHdpZHRoIHRvIGRyYXcgdGhlIGltYWdlIGluIHRoZSBkZXN0aW5hdGlvbiBjYW52YXMuIFRoaXMgYWxsb3dzXHJcbiAgICAgIC8vIHNjYWxpbmcgb2YgdGhlIGRyYXduIGltYWdlLiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgaW1hZ2UgaXMgbm90XHJcbiAgICAgIC8vIHNjYWxlZCBpbiB3aWR0aCB3aGVuIGRyYXduLlxyXG4gICAgICB0aGlzLnNpemUsXHJcblxyXG4gICAgICAvLyBUaGUgaGVpZ2h0IHRvIGRyYXcgdGhlIGltYWdlIGluIHRoZSBkZXN0aW5hdGlvbiBjYW52YXMuIFRoaXMgYWxsb3dzXHJcbiAgICAgIC8vIHNjYWxpbmcgb2YgdGhlIGRyYXduIGltYWdlLiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgaW1hZ2UgaXMgbm90XHJcbiAgICAgIC8vIHNjYWxlZCBpbiBoZWlnaHQgd2hlbiBkcmF3bi5cclxuICAgICAgdGhpcy5zaXplXHJcbiAgICApXHJcbiAgfSlcclxuICBpbWcuc3JjID0gJ3NyYy9zcHJpdGVzL2NoYXJhY3RlcnMtbWluLnBuZydcclxufVxyXG5cclxuUGxheWVyLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gbW92ZSAoY3R4LCBkaXJlY3Rpb24pIHtcclxuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgY2FzZSAndXAnOlxyXG4gICAgICB0aGlzLnkgLT0gdGhpcy5zcGVlZFxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnZG93bic6XHJcbiAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWRcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ3VwIGxlZnQnOlxyXG4gICAgICB0aGlzLnggLT0gdGhpcy5zcGVlZFxyXG4gICAgICB0aGlzLnkgLT0gdGhpcy5zcGVlZFxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnZG93biBsZWZ0JzpcclxuICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWRcclxuICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ3VwIHJpZ2h0JzpcclxuICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWRcclxuICAgICAgdGhpcy55IC09IHRoaXMuc3BlZWRcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ2Rvd24gcmlnaHQnOlxyXG4gICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZFxyXG4gICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFxyXG4gICAgICBicmVha1xyXG4gIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9QbGF5ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 3 */
/* exports provided: default */
/* exports used: default */
/*!**********************!*\
  !*** ./src/Scene.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Scene;\nfunction Scene (height, width) {\r\n  this.height = height\r\n  this.width = width\r\n  this.tiles = ['rgb(223, 215, 138)', 'rgb(38, 38, 35)', 'rgb(247, 115, 41)', 'rgb(33, 62, 134)']\r\n  this.grid = []\r\n  this.initialize()\r\n  this.setBorder()\r\n  // this.setItems()\r\n  this.setRandomWalls()\r\n}\r\n\r\nScene.prototype.draw = function (ctx, canvas) {\r\n  const cellWidth = canvas.width / this.width\r\n  const cellHeight = canvas.height / this.height\r\n  for (let y = 0; y < this.height; y++) {\r\n    const row = this.grid[y]\r\n    for (let x = 0; x < this.width; x++) {\r\n      const value = row[x]\r\n      ctx.fillStyle = this.tiles[value]\r\n      ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight)\r\n    }\r\n  }\r\n}\r\n\r\nScene.prototype.initialize = function initialize () {\r\n  this.grid = []\r\n  for (let y = 0; y < this.height; y++) {\r\n    const row = []\r\n    for (let x = 0; x < this.width; x++) {\r\n      row.push(0)\r\n    }\r\n    this.grid.push(row)\r\n  }\r\n}\r\n\r\nScene.prototype.setBorder = function setBorder () {\r\n  for (let y = 0; y < this.height; y++) {\r\n    const row = this.grid[y]\r\n    for (let x = 0; x < this.width; x++) {\r\n      if (x === 0 || x === this.width - 1 || y === 0 || y === this.height - 1) {\r\n        row[x] = 1\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// Scene.prototype.setItems = function setItems () {\r\n//   for (let y = 1; y < this.height - 1; y++) {\r\n//     const row = this.grid[y]\r\n//     for (let x = 1; x < this.width - 1; x++) {\r\n//       if (x === Math.floor(Math.random() * 18) + 1 || y === Math.floor(Math.random() * 18) + 1) {\r\n//         row[x] = 2\r\n//       }\r\n//     }\r\n//   }\r\n// }\r\n\r\nScene.prototype.setRandomWalls = function setRandomWalls () {\r\n  for (let y = 1; y < this.height - 1; y++) {\r\n    const row = this.grid[y]\r\n    for (let x = 1; x < this.width - 1; x++) {\r\n      if (x === Math.floor(Math.random() * 18) + 1 || y === Math.floor(Math.random() * 18) + 1) {\r\n        row[x] = 1\r\n      }\r\n    }\r\n  }\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9TY2VuZS5qcz82YzY2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjZW5lIChoZWlnaHQsIHdpZHRoKSB7XHJcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcclxuICB0aGlzLndpZHRoID0gd2lkdGhcclxuICB0aGlzLnRpbGVzID0gWydyZ2IoMjIzLCAyMTUsIDEzOCknLCAncmdiKDM4LCAzOCwgMzUpJywgJ3JnYigyNDcsIDExNSwgNDEpJywgJ3JnYigzMywgNjIsIDEzNCknXVxyXG4gIHRoaXMuZ3JpZCA9IFtdXHJcbiAgdGhpcy5pbml0aWFsaXplKClcclxuICB0aGlzLnNldEJvcmRlcigpXHJcbiAgLy8gdGhpcy5zZXRJdGVtcygpXHJcbiAgdGhpcy5zZXRSYW5kb21XYWxscygpXHJcbn1cclxuXHJcblNjZW5lLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCwgY2FudmFzKSB7XHJcbiAgY29uc3QgY2VsbFdpZHRoID0gY2FudmFzLndpZHRoIC8gdGhpcy53aWR0aFxyXG4gIGNvbnN0IGNlbGxIZWlnaHQgPSBjYW52YXMuaGVpZ2h0IC8gdGhpcy5oZWlnaHRcclxuICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuaGVpZ2h0OyB5KyspIHtcclxuICAgIGNvbnN0IHJvdyA9IHRoaXMuZ3JpZFt5XVxyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4KyspIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSByb3dbeF1cclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMudGlsZXNbdmFsdWVdXHJcbiAgICAgIGN0eC5maWxsUmVjdCh4ICogY2VsbFdpZHRoLCB5ICogY2VsbEhlaWdodCwgY2VsbFdpZHRoLCBjZWxsSGVpZ2h0KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuU2NlbmUucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiBpbml0aWFsaXplICgpIHtcclxuICB0aGlzLmdyaWQgPSBbXVxyXG4gIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5oZWlnaHQ7IHkrKykge1xyXG4gICAgY29uc3Qgcm93ID0gW11cclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy53aWR0aDsgeCsrKSB7XHJcbiAgICAgIHJvdy5wdXNoKDApXHJcbiAgICB9XHJcbiAgICB0aGlzLmdyaWQucHVzaChyb3cpXHJcbiAgfVxyXG59XHJcblxyXG5TY2VuZS5wcm90b3R5cGUuc2V0Qm9yZGVyID0gZnVuY3Rpb24gc2V0Qm9yZGVyICgpIHtcclxuICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuaGVpZ2h0OyB5KyspIHtcclxuICAgIGNvbnN0IHJvdyA9IHRoaXMuZ3JpZFt5XVxyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4KyspIHtcclxuICAgICAgaWYgKHggPT09IDAgfHwgeCA9PT0gdGhpcy53aWR0aCAtIDEgfHwgeSA9PT0gMCB8fCB5ID09PSB0aGlzLmhlaWdodCAtIDEpIHtcclxuICAgICAgICByb3dbeF0gPSAxXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFNjZW5lLnByb3RvdHlwZS5zZXRJdGVtcyA9IGZ1bmN0aW9uIHNldEl0ZW1zICgpIHtcclxuLy8gICBmb3IgKGxldCB5ID0gMTsgeSA8IHRoaXMuaGVpZ2h0IC0gMTsgeSsrKSB7XHJcbi8vICAgICBjb25zdCByb3cgPSB0aGlzLmdyaWRbeV1cclxuLy8gICAgIGZvciAobGV0IHggPSAxOyB4IDwgdGhpcy53aWR0aCAtIDE7IHgrKykge1xyXG4vLyAgICAgICBpZiAoeCA9PT0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTgpICsgMSB8fCB5ID09PSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxOCkgKyAxKSB7XHJcbi8vICAgICAgICAgcm93W3hdID0gMlxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5TY2VuZS5wcm90b3R5cGUuc2V0UmFuZG9tV2FsbHMgPSBmdW5jdGlvbiBzZXRSYW5kb21XYWxscyAoKSB7XHJcbiAgZm9yIChsZXQgeSA9IDE7IHkgPCB0aGlzLmhlaWdodCAtIDE7IHkrKykge1xyXG4gICAgY29uc3Qgcm93ID0gdGhpcy5ncmlkW3ldXHJcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8IHRoaXMud2lkdGggLSAxOyB4KyspIHtcclxuICAgICAgaWYgKHggPT09IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE4KSArIDEgfHwgeSA9PT0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTgpICsgMSkge1xyXG4gICAgICAgIHJvd1t4XSA9IDFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TY2VuZS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__World__ = __webpack_require__(/*! ./World */ 0);\n\r\n\r\nfunction init () {\r\n  var canvas = document.createElement('canvas')\r\n\r\n  canvas.height = 600\r\n  canvas.width = 600\r\n\r\n  var ctx = canvas.getContext('2d')\r\n\r\n  document.body.appendChild(canvas)\r\n  return { ctx: ctx, canvas: canvas }\r\n}\r\n\r\n// For each of these steps, re-create the world.\r\nfunction step (direction) {\r\n  // sets all pixels in the rectangle defined by starting point and\r\n  // size to transparent black, erasing any previously drawn content.\r\n  ctx.clearRect(0, 0, canvas.width, canvas.height)\r\n  world.scene.draw(ctx, canvas)\r\n  world.monsters.forEach(function (monster) {\r\n    monster.step(world.monsters)\r\n    monster.draw(ctx)\r\n  })\r\n\r\n  world.players.forEach(function (player) {\r\n    player.move(ctx, direction)\r\n    player.draw(ctx)\r\n  })\r\n}\r\n\r\nvar _init = init()\r\nvar ctx = _init.ctx\r\nvar canvas = _init.canvas\r\n\r\nconst world = new __WEBPACK_IMPORTED_MODULE_0__World__[\"a\" /* default */]()\r\n\r\nstep()\r\n\r\nvar map = {}\r\nwindow.onkeydown = window.onkeyup = function controls (event) {\r\n  map[event.key] = event.type === 'keydown'\r\n  /* insert conditional here */\n  // console.log(map);\n\n  if (map['ArrowUp']) {\n    step('up')\n  } else if (map['ArrowDown']) {\n    step('down')\n  } else if (map['ArrowLeft']) {\n    step('left')\n  } else if (map['ArrowRight']) {\n    step('right')\n  }\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz85NTUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXb3JsZCBmcm9tICcuL1dvcmxkJ1xyXG5cclxuZnVuY3Rpb24gaW5pdCAoKSB7XHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXHJcblxyXG4gIGNhbnZhcy5oZWlnaHQgPSA2MDBcclxuICBjYW52YXMud2lkdGggPSA2MDBcclxuXHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKVxyXG4gIHJldHVybiB7IGN0eDogY3R4LCBjYW52YXM6IGNhbnZhcyB9XHJcbn1cclxuXHJcbi8vIEZvciBlYWNoIG9mIHRoZXNlIHN0ZXBzLCByZS1jcmVhdGUgdGhlIHdvcmxkLlxyXG5mdW5jdGlvbiBzdGVwIChkaXJlY3Rpb24pIHtcclxuICAvLyBzZXRzIGFsbCBwaXhlbHMgaW4gdGhlIHJlY3RhbmdsZSBkZWZpbmVkIGJ5IHN0YXJ0aW5nIHBvaW50IGFuZFxyXG4gIC8vIHNpemUgdG8gdHJhbnNwYXJlbnQgYmxhY2ssIGVyYXNpbmcgYW55IHByZXZpb3VzbHkgZHJhd24gY29udGVudC5cclxuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcclxuICB3b3JsZC5zY2VuZS5kcmF3KGN0eCwgY2FudmFzKVxyXG4gIHdvcmxkLm1vbnN0ZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vbnN0ZXIpIHtcclxuICAgIG1vbnN0ZXIuc3RlcCh3b3JsZC5tb25zdGVycylcclxuICAgIG1vbnN0ZXIuZHJhdyhjdHgpXHJcbiAgfSlcclxuXHJcbiAgd29ybGQucGxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChwbGF5ZXIpIHtcclxuICAgIHBsYXllci5tb3ZlKGN0eCwgZGlyZWN0aW9uKVxyXG4gICAgcGxheWVyLmRyYXcoY3R4KVxyXG4gIH0pXHJcbn1cclxuXHJcbnZhciBfaW5pdCA9IGluaXQoKVxyXG52YXIgY3R4ID0gX2luaXQuY3R4XHJcbnZhciBjYW52YXMgPSBfaW5pdC5jYW52YXNcclxuXHJcbmNvbnN0IHdvcmxkID0gbmV3IFdvcmxkKClcclxuXHJcbnN0ZXAoKVxyXG5cclxudmFyIG1hcCA9IHt9XHJcbndpbmRvdy5vbmtleWRvd24gPSB3aW5kb3cub25rZXl1cCA9IGZ1bmN0aW9uIGNvbnRyb2xzIChldmVudCkge1xyXG4gIG1hcFtldmVudC5rZXldID0gZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nXHJcbiAgLyogaW5zZXJ0IGNvbmRpdGlvbmFsIGhlcmUgKi9cbiAgLy8gY29uc29sZS5sb2cobWFwKTtcblxuICBpZiAobWFwWydBcnJvd1VwJ10pIHtcbiAgICBzdGVwKCd1cCcpXG4gIH0gZWxzZSBpZiAobWFwWydBcnJvd0Rvd24nXSkge1xuICAgIHN0ZXAoJ2Rvd24nKVxuICB9IGVsc2UgaWYgKG1hcFsnQXJyb3dMZWZ0J10pIHtcbiAgICBzdGVwKCdsZWZ0JylcbiAgfSBlbHNlIGlmIChtYXBbJ0Fycm93UmlnaHQnXSkge1xuICAgIHN0ZXAoJ3JpZ2h0JylcbiAgfVxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);