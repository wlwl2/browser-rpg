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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* exports provided: default */
/* exports used: default */
/*!************************!*\
  !*** ./src/Monster.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Monster;\nfunction Monster (x, y) {\r\n  this.x = x\r\n  this.y = y\r\n  this.size = 30\r\n  this.speed = 1\r\n}\r\n\r\nMonster.prototype.draw = function draw (ctx) {\r\n\r\n  var img = new Image()\r\n  img.src = 'src/sprites/characters.png'\r\n  console.log(img.src);\r\n  ctx.drawImage(\r\n    img,\r\n    8, // The X coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.\r\n    114, // The Y coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.\r\n    this.size, // The width of the sub-rectangle of the source image to draw into the destination context. If not specified, the entire rectangle from the coordinates specified by sx and sy to the bottom-right corner of the image is used.\r\n    this.size, // The height of the sub-rectangle of the source image to draw into the destination context.\r\n    this.x, // The X coordinate in the destination canvas at which to place the top-left corner of the source image.\r\n    this.y, // The Y coordinate in the destination canvas at which to place the top-left corner of the source image.\r\n    this.size, // The width to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in width when drawn.\r\n    this.size // The height to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in height when drawn.\r\n  )\r\n}\r\n\r\nMonster.prototype.step = function step (monsters) {\r\n\r\n  const next = {x: this.x, y: this.y}\r\n\r\n  switch (Math.floor(Math.random() * 4)) {\r\n    case 0: // up.\r\n      next.y -= this.speed\r\n      break;\r\n    case 1: // down.\r\n      next.y += this.speed\r\n      break;\r\n    case 2: // right.\r\n      next.x += this.speed\r\n      break;\r\n    case 3: // left.\r\n      next.x -= this.speed\r\n      break;\r\n  }\r\n\r\n  let canMove = true\r\n\r\n  // Collision detection.\r\n  monsters.forEach(function (monster) {\r\n    if (monster === this) return\r\n    if (!canMove) return\r\n    if (!(monster.x > next.x + this.size\r\n        || monster.x + monster.size <= next.x\r\n        || monster.y > next.y + this.size\r\n        || monster.y + monster.size <= next.y)\r\n    ) {\r\n      canMove = false\r\n    }\r\n  }, this)\r\n\r\n  if (canMove) {\r\n    this.x = next.x\r\n    this.y = next.y\r\n  } else {\r\n    this.step(monsters)\r\n  }\r\n}\r\n\r\n\r\n//uuid ietf rfc namespace network card\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Nb25zdGVyLmpzPzQ4MTkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9uc3RlciAoeCwgeSkge1xyXG4gIHRoaXMueCA9IHhcclxuICB0aGlzLnkgPSB5XHJcbiAgdGhpcy5zaXplID0gMzBcclxuICB0aGlzLnNwZWVkID0gMVxyXG59XHJcblxyXG5Nb25zdGVyLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gZHJhdyAoY3R4KSB7XHJcblxyXG4gIHZhciBpbWcgPSBuZXcgSW1hZ2UoKVxyXG4gIGltZy5zcmMgPSAnc3JjL3Nwcml0ZXMvY2hhcmFjdGVycy5wbmcnXHJcbiAgY29uc29sZS5sb2coaW1nLnNyYyk7XHJcbiAgY3R4LmRyYXdJbWFnZShcclxuICAgIGltZyxcclxuICAgIDgsIC8vIFRoZSBYIGNvb3JkaW5hdGUgb2YgdGhlIHRvcCBsZWZ0IGNvcm5lciBvZiB0aGUgc3ViLXJlY3RhbmdsZSBvZiB0aGUgc291cmNlIGltYWdlIHRvIGRyYXcgaW50byB0aGUgZGVzdGluYXRpb24gY29udGV4dC5cclxuICAgIDExNCwgLy8gVGhlIFkgY29vcmRpbmF0ZSBvZiB0aGUgdG9wIGxlZnQgY29ybmVyIG9mIHRoZSBzdWItcmVjdGFuZ2xlIG9mIHRoZSBzb3VyY2UgaW1hZ2UgdG8gZHJhdyBpbnRvIHRoZSBkZXN0aW5hdGlvbiBjb250ZXh0LlxyXG4gICAgdGhpcy5zaXplLCAvLyBUaGUgd2lkdGggb2YgdGhlIHN1Yi1yZWN0YW5nbGUgb2YgdGhlIHNvdXJjZSBpbWFnZSB0byBkcmF3IGludG8gdGhlIGRlc3RpbmF0aW9uIGNvbnRleHQuIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBlbnRpcmUgcmVjdGFuZ2xlIGZyb20gdGhlIGNvb3JkaW5hdGVzIHNwZWNpZmllZCBieSBzeCBhbmQgc3kgdG8gdGhlIGJvdHRvbS1yaWdodCBjb3JuZXIgb2YgdGhlIGltYWdlIGlzIHVzZWQuXHJcbiAgICB0aGlzLnNpemUsIC8vIFRoZSBoZWlnaHQgb2YgdGhlIHN1Yi1yZWN0YW5nbGUgb2YgdGhlIHNvdXJjZSBpbWFnZSB0byBkcmF3IGludG8gdGhlIGRlc3RpbmF0aW9uIGNvbnRleHQuXHJcbiAgICB0aGlzLngsIC8vIFRoZSBYIGNvb3JkaW5hdGUgaW4gdGhlIGRlc3RpbmF0aW9uIGNhbnZhcyBhdCB3aGljaCB0byBwbGFjZSB0aGUgdG9wLWxlZnQgY29ybmVyIG9mIHRoZSBzb3VyY2UgaW1hZ2UuXHJcbiAgICB0aGlzLnksIC8vIFRoZSBZIGNvb3JkaW5hdGUgaW4gdGhlIGRlc3RpbmF0aW9uIGNhbnZhcyBhdCB3aGljaCB0byBwbGFjZSB0aGUgdG9wLWxlZnQgY29ybmVyIG9mIHRoZSBzb3VyY2UgaW1hZ2UuXHJcbiAgICB0aGlzLnNpemUsIC8vIFRoZSB3aWR0aCB0byBkcmF3IHRoZSBpbWFnZSBpbiB0aGUgZGVzdGluYXRpb24gY2FudmFzLiBUaGlzIGFsbG93cyBzY2FsaW5nIG9mIHRoZSBkcmF3biBpbWFnZS4gSWYgbm90IHNwZWNpZmllZCwgdGhlIGltYWdlIGlzIG5vdCBzY2FsZWQgaW4gd2lkdGggd2hlbiBkcmF3bi5cclxuICAgIHRoaXMuc2l6ZSAvLyBUaGUgaGVpZ2h0IHRvIGRyYXcgdGhlIGltYWdlIGluIHRoZSBkZXN0aW5hdGlvbiBjYW52YXMuIFRoaXMgYWxsb3dzIHNjYWxpbmcgb2YgdGhlIGRyYXduIGltYWdlLiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgaW1hZ2UgaXMgbm90IHNjYWxlZCBpbiBoZWlnaHQgd2hlbiBkcmF3bi5cclxuICApXHJcbn1cclxuXHJcbk1vbnN0ZXIucHJvdG90eXBlLnN0ZXAgPSBmdW5jdGlvbiBzdGVwIChtb25zdGVycykge1xyXG5cclxuICBjb25zdCBuZXh0ID0ge3g6IHRoaXMueCwgeTogdGhpcy55fVxyXG5cclxuICBzd2l0Y2ggKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpKSB7XHJcbiAgICBjYXNlIDA6IC8vIHVwLlxyXG4gICAgICBuZXh0LnkgLT0gdGhpcy5zcGVlZFxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMTogLy8gZG93bi5cclxuICAgICAgbmV4dC55ICs9IHRoaXMuc3BlZWRcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDI6IC8vIHJpZ2h0LlxyXG4gICAgICBuZXh0LnggKz0gdGhpcy5zcGVlZFxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMzogLy8gbGVmdC5cclxuICAgICAgbmV4dC54IC09IHRoaXMuc3BlZWRcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICBsZXQgY2FuTW92ZSA9IHRydWVcclxuXHJcbiAgLy8gQ29sbGlzaW9uIGRldGVjdGlvbi5cclxuICBtb25zdGVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb25zdGVyKSB7XHJcbiAgICBpZiAobW9uc3RlciA9PT0gdGhpcykgcmV0dXJuXHJcbiAgICBpZiAoIWNhbk1vdmUpIHJldHVyblxyXG4gICAgaWYgKCEobW9uc3Rlci54ID4gbmV4dC54ICsgdGhpcy5zaXplXHJcbiAgICAgICAgfHwgbW9uc3Rlci54ICsgbW9uc3Rlci5zaXplIDw9IG5leHQueFxyXG4gICAgICAgIHx8IG1vbnN0ZXIueSA+IG5leHQueSArIHRoaXMuc2l6ZVxyXG4gICAgICAgIHx8IG1vbnN0ZXIueSArIG1vbnN0ZXIuc2l6ZSA8PSBuZXh0LnkpXHJcbiAgICApIHtcclxuICAgICAgY2FuTW92ZSA9IGZhbHNlXHJcbiAgICB9XHJcbiAgfSwgdGhpcylcclxuXHJcbiAgaWYgKGNhbk1vdmUpIHtcclxuICAgIHRoaXMueCA9IG5leHQueFxyXG4gICAgdGhpcy55ID0gbmV4dC55XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMuc3RlcChtb25zdGVycylcclxuICB9XHJcbn1cclxuXHJcblxyXG4vL3V1aWQgaWV0ZiByZmMgbmFtZXNwYWNlIG5ldHdvcmsgY2FyZFxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Nb25zdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/* exports provided: default */
/* exports used: default */
/*!**********************!*\
  !*** ./src/World.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Monster__ = __webpack_require__(/*! ./Monster */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Character__ = __webpack_require__(/*! ./Character */ 2);\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = World;\n// people and monsters\r\n\r\n\r\n\r\nfunction World () {\r\n\r\n  const monsters = []\r\n\r\n  var monster1 = new __WEBPACK_IMPORTED_MODULE_0__Monster__[\"a\" /* default */](10, 10)\r\n  var monster2 = new __WEBPACK_IMPORTED_MODULE_0__Monster__[\"a\" /* default */](50, 50)\r\n  var monster3 = new __WEBPACK_IMPORTED_MODULE_0__Monster__[\"a\" /* default */](81, 50)\r\n  var monster4 = new __WEBPACK_IMPORTED_MODULE_0__Monster__[\"a\" /* default */](111, 50)\r\n  var monster5 = new __WEBPACK_IMPORTED_MODULE_0__Monster__[\"a\" /* default */](141, 50)\r\n  var monster6 = new __WEBPACK_IMPORTED_MODULE_0__Monster__[\"a\" /* default */](171, 50)\r\n\r\n  monsters.push(monster1, monster2, monster3, monster4, monster5, monster6)\r\n\r\n  const characters = []\r\n\r\n  var character1 = new __WEBPACK_IMPORTED_MODULE_1__Character__[\"a\" /* default */](10, 50)\r\n\r\n  characters.push(character1)\r\n\r\n  return { monsters, characters }\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Xb3JsZC5qcz9jOWIzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBlb3BsZSBhbmQgbW9uc3RlcnNcclxuaW1wb3J0IE1vbnN0ZXIgZnJvbSAnLi9Nb25zdGVyJ1xyXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ybGQgKCkge1xyXG5cclxuICBjb25zdCBtb25zdGVycyA9IFtdXHJcblxyXG4gIHZhciBtb25zdGVyMSA9IG5ldyBNb25zdGVyKDEwLCAxMClcclxuICB2YXIgbW9uc3RlcjIgPSBuZXcgTW9uc3Rlcig1MCwgNTApXHJcbiAgdmFyIG1vbnN0ZXIzID0gbmV3IE1vbnN0ZXIoODEsIDUwKVxyXG4gIHZhciBtb25zdGVyNCA9IG5ldyBNb25zdGVyKDExMSwgNTApXHJcbiAgdmFyIG1vbnN0ZXI1ID0gbmV3IE1vbnN0ZXIoMTQxLCA1MClcclxuICB2YXIgbW9uc3RlcjYgPSBuZXcgTW9uc3RlcigxNzEsIDUwKVxyXG5cclxuICBtb25zdGVycy5wdXNoKG1vbnN0ZXIxLCBtb25zdGVyMiwgbW9uc3RlcjMsIG1vbnN0ZXI0LCBtb25zdGVyNSwgbW9uc3RlcjYpXHJcblxyXG4gIGNvbnN0IGNoYXJhY3RlcnMgPSBbXVxyXG5cclxuICB2YXIgY2hhcmFjdGVyMSA9IG5ldyBDaGFyYWN0ZXIoMTAsIDUwKVxyXG5cclxuICBjaGFyYWN0ZXJzLnB1c2goY2hhcmFjdGVyMSlcclxuXHJcbiAgcmV0dXJuIHsgbW9uc3RlcnMsIGNoYXJhY3RlcnMgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1dvcmxkLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/* exports provided: default */
/* exports used: default */
/*!**************************!*\
  !*** ./src/Character.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Player;\nfunction Player (x, y, color = 'black') {\r\n  this.x = x\r\n  this.y = y\r\n  this.size = 10\r\n  this.color = color\r\n  this.speed = 1\r\n}\r\n\r\nPlayer.prototype.draw = function draw (ctx) {\r\n  ctx.fillStyle = this.color\r\n  ctx.fillRect(this.x, this.y, this.size, this.size)\r\n}\r\n\r\nPlayer.prototype.move = function move (players) {\r\n  ctx.fillStyle = this.color\r\n  ctx.fillRect(this.x, this.y, this.size, this.size)\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9DaGFyYWN0ZXIuanM/ZDM1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIgKHgsIHksIGNvbG9yID0gJ2JsYWNrJykge1xyXG4gIHRoaXMueCA9IHhcclxuICB0aGlzLnkgPSB5XHJcbiAgdGhpcy5zaXplID0gMTBcclxuICB0aGlzLmNvbG9yID0gY29sb3JcclxuICB0aGlzLnNwZWVkID0gMVxyXG59XHJcblxyXG5QbGF5ZXIucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiBkcmF3IChjdHgpIHtcclxuICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvclxyXG4gIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy5zaXplLCB0aGlzLnNpemUpXHJcbn1cclxuXHJcblBsYXllci5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIG1vdmUgKHBsYXllcnMpIHtcclxuICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvclxyXG4gIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy5zaXplLCB0aGlzLnNpemUpXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQ2hhcmFjdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Monster__ = __webpack_require__(/*! ./Monster */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__World__ = __webpack_require__(/*! ./World */ 1);\n\r\n\r\n\r\nfunction init () {\r\n  var canvas = document.createElement(\"canvas\")\r\n\r\n  canvas.height = 256\r\n  canvas.width = 256\r\n\r\n  var ctx = canvas.getContext('2d')\r\n\r\n  document.body.appendChild(canvas)\r\n  console.log(ctx);\r\n  return { ctx: ctx, canvas: canvas }\r\n}\r\n\r\nconst monsters = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__World__[\"a\" /* default */])().monsters\r\nconst players = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__World__[\"a\" /* default */])().players\r\n\r\n// For each of these steps, re-create the world.\r\nfunction step () {\r\n\r\n  // sets all pixels in the rectangle defined by starting point and\r\n  // size to transparent black, erasing any previously drawn content.\r\n  ctx.clearRect(0, 0, canvas.width, canvas.height)\r\n\r\n  monsters.forEach(function (monster) {\r\n    monster.step(monsters)\r\n    monster.draw(ctx)\r\n  })\r\n\r\n  // players.forEach(function (player) {\r\n  //   player.draw(ctx)\r\n  // })\r\n}\r\n//\r\n// function characterMove (direction) {\r\n//   players.forEach(function (player) {\r\n//     player.move(ctx)\r\n//     player.draw(ctx)\r\n//   })\r\n// }\r\n\r\n// Monsters randomly move on keypress.\r\nwindow.addEventListener(\"keydown\", function(event){\r\n  // if (event.key === 'ArrowRight') characterMove('right')\r\n  // if (event.key === ' ') step()\r\n  step()\r\n}, false);\r\n\r\n// Monsters move randomly every second.\r\n//setInterval(function(){ step()}, 1000)\r\n\r\nvar _init = init(),\r\n    ctx = _init.ctx,\r\n    canvas = _init.canvas;\r\n\r\nstep()\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz85NTUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb25zdGVyIGZyb20gJy4vTW9uc3RlcidcclxuaW1wb3J0IFdvcmxkIGZyb20gJy4vV29ybGQnXHJcblxyXG5mdW5jdGlvbiBpbml0ICgpIHtcclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG5cclxuICBjYW52YXMuaGVpZ2h0ID0gMjU2XHJcbiAgY2FudmFzLndpZHRoID0gMjU2XHJcblxyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcylcclxuICBjb25zb2xlLmxvZyhjdHgpO1xyXG4gIHJldHVybiB7IGN0eDogY3R4LCBjYW52YXM6IGNhbnZhcyB9XHJcbn1cclxuXHJcbmNvbnN0IG1vbnN0ZXJzID0gV29ybGQoKS5tb25zdGVyc1xyXG5jb25zdCBwbGF5ZXJzID0gV29ybGQoKS5wbGF5ZXJzXHJcblxyXG4vLyBGb3IgZWFjaCBvZiB0aGVzZSBzdGVwcywgcmUtY3JlYXRlIHRoZSB3b3JsZC5cclxuZnVuY3Rpb24gc3RlcCAoKSB7XHJcblxyXG4gIC8vIHNldHMgYWxsIHBpeGVscyBpbiB0aGUgcmVjdGFuZ2xlIGRlZmluZWQgYnkgc3RhcnRpbmcgcG9pbnQgYW5kXHJcbiAgLy8gc2l6ZSB0byB0cmFuc3BhcmVudCBibGFjaywgZXJhc2luZyBhbnkgcHJldmlvdXNseSBkcmF3biBjb250ZW50LlxyXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxyXG5cclxuICBtb25zdGVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb25zdGVyKSB7XHJcbiAgICBtb25zdGVyLnN0ZXAobW9uc3RlcnMpXHJcbiAgICBtb25zdGVyLmRyYXcoY3R4KVxyXG4gIH0pXHJcblxyXG4gIC8vIHBsYXllcnMuZm9yRWFjaChmdW5jdGlvbiAocGxheWVyKSB7XHJcbiAgLy8gICBwbGF5ZXIuZHJhdyhjdHgpXHJcbiAgLy8gfSlcclxufVxyXG4vL1xyXG4vLyBmdW5jdGlvbiBjaGFyYWN0ZXJNb3ZlIChkaXJlY3Rpb24pIHtcclxuLy8gICBwbGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKHBsYXllcikge1xyXG4vLyAgICAgcGxheWVyLm1vdmUoY3R4KVxyXG4vLyAgICAgcGxheWVyLmRyYXcoY3R4KVxyXG4vLyAgIH0pXHJcbi8vIH1cclxuXHJcbi8vIE1vbnN0ZXJzIHJhbmRvbWx5IG1vdmUgb24ga2V5cHJlc3MuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihldmVudCl7XHJcbiAgLy8gaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnKSBjaGFyYWN0ZXJNb3ZlKCdyaWdodCcpXHJcbiAgLy8gaWYgKGV2ZW50LmtleSA9PT0gJyAnKSBzdGVwKClcclxuICBzdGVwKClcclxufSwgZmFsc2UpO1xyXG5cclxuLy8gTW9uc3RlcnMgbW92ZSByYW5kb21seSBldmVyeSBzZWNvbmQuXHJcbi8vc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXsgc3RlcCgpfSwgMTAwMClcclxuXHJcbnZhciBfaW5pdCA9IGluaXQoKSxcclxuICAgIGN0eCA9IF9pbml0LmN0eCxcclxuICAgIGNhbnZhcyA9IF9pbml0LmNhbnZhcztcclxuXHJcbnN0ZXAoKVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);