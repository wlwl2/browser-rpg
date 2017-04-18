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
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Monster;\nfunction Monster (x, y, color = 'green') {\r\n  this.x = x\r\n  this.y = y\r\n  this.size = 10\r\n  this.color = color\r\n  this.speed = 1\r\n}\r\n\r\nMonster.prototype.draw = function draw (ctx) {\r\n  var img = new Image()\r\n  img.src = '../sprites/characters.png'\r\n\r\n  function Sprite (img, width, height, positions) {\r\n    this.img = img\r\n    this.width = width\r\n    this.height = height\r\n    this.positions = positions\r\n  }\r\n\r\n  Sprite.prototype = {\r\n    draw: function(x, y, position){\r\n\r\n        var pos = this.positions[position]\r\n\r\n        ctx.drawImage(\r\n          this.img,\r\n          pos[0], // The X coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.\r\n          pos[1], // The Y coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.\r\n          this.width, // The width of the sub-rectangle of the source image to draw into the destination context. If not specified, the entire rectangle from the coordinates specified by sx and sy to the bottom-right corner of the image is used.\r\n          this.height, // The height of the sub-rectangle of the source image to draw into the destination context.\r\n          x, // The X coordinate in the destination canvas at which to place the top-left corner of the source image.\r\n          y, // The Y coordinate in the destination canvas at which to place the top-left corner of the source image.\r\n          this.width, // The width to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in width when drawn.\r\n          this.height // The height to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in height when drawn.\r\n        )\r\n      }\r\n  }\r\n\r\n  var monster = new Sprite(img, 30, 30,  [[8, 114]]);\r\n  monster.draw(140, 200, 0);\r\n}\r\n\r\nMonster.prototype.step = function step (monsters) {\r\n\r\n  const next = {x: this.x, y: this.y}\r\n\r\n  switch (Math.floor(Math.random() * 4)) {\r\n    case 0: // up.\r\n      next.y -= this.speed\r\n      break;\r\n    case 1: // down.\r\n      next.y += this.speed\r\n      break;\r\n    case 2: // right.\r\n      next.x += this.speed\r\n      break;\r\n    case 3: // left.\r\n      next.x -= this.speed\r\n      break;\r\n  }\r\n\r\n  let canMove = true\r\n\r\n  // Collision detection.\r\n  monsters.forEach(function (monster) {\r\n    if (monster === this) return\r\n    if (!canMove) return\r\n    if (!(monster.x > next.x + this.size\r\n        || monster.x + monster.size <= next.x\r\n        || monster.y > next.y + this.size\r\n        || monster.y + monster.size <= next.y)\r\n    ) {\r\n      canMove = false\r\n    }\r\n  }, this)\r\n\r\n  if (canMove) {\r\n    this.x = next.x\r\n    this.y = next.y\r\n  } else {\r\n    this.step(monsters)\r\n  }\r\n}\r\n\r\n\r\n//uuid ietf rfc namespace network card\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Nb25zdGVyLmpzPzQ4MTkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9uc3RlciAoeCwgeSwgY29sb3IgPSAnZ3JlZW4nKSB7XHJcbiAgdGhpcy54ID0geFxyXG4gIHRoaXMueSA9IHlcclxuICB0aGlzLnNpemUgPSAxMFxyXG4gIHRoaXMuY29sb3IgPSBjb2xvclxyXG4gIHRoaXMuc3BlZWQgPSAxXHJcbn1cclxuXHJcbk1vbnN0ZXIucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiBkcmF3IChjdHgpIHtcclxuICB2YXIgaW1nID0gbmV3IEltYWdlKClcclxuICBpbWcuc3JjID0gJy4uL3Nwcml0ZXMvY2hhcmFjdGVycy5wbmcnXHJcblxyXG4gIGZ1bmN0aW9uIFNwcml0ZSAoaW1nLCB3aWR0aCwgaGVpZ2h0LCBwb3NpdGlvbnMpIHtcclxuICAgIHRoaXMuaW1nID0gaW1nXHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGhcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XHJcbiAgICB0aGlzLnBvc2l0aW9ucyA9IHBvc2l0aW9uc1xyXG4gIH1cclxuXHJcbiAgU3ByaXRlLnByb3RvdHlwZSA9IHtcclxuICAgIGRyYXc6IGZ1bmN0aW9uKHgsIHksIHBvc2l0aW9uKXtcclxuXHJcbiAgICAgICAgdmFyIHBvcyA9IHRoaXMucG9zaXRpb25zW3Bvc2l0aW9uXVxyXG5cclxuICAgICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgdGhpcy5pbWcsXHJcbiAgICAgICAgICBwb3NbMF0sIC8vIFRoZSBYIGNvb3JkaW5hdGUgb2YgdGhlIHRvcCBsZWZ0IGNvcm5lciBvZiB0aGUgc3ViLXJlY3RhbmdsZSBvZiB0aGUgc291cmNlIGltYWdlIHRvIGRyYXcgaW50byB0aGUgZGVzdGluYXRpb24gY29udGV4dC5cclxuICAgICAgICAgIHBvc1sxXSwgLy8gVGhlIFkgY29vcmRpbmF0ZSBvZiB0aGUgdG9wIGxlZnQgY29ybmVyIG9mIHRoZSBzdWItcmVjdGFuZ2xlIG9mIHRoZSBzb3VyY2UgaW1hZ2UgdG8gZHJhdyBpbnRvIHRoZSBkZXN0aW5hdGlvbiBjb250ZXh0LlxyXG4gICAgICAgICAgdGhpcy53aWR0aCwgLy8gVGhlIHdpZHRoIG9mIHRoZSBzdWItcmVjdGFuZ2xlIG9mIHRoZSBzb3VyY2UgaW1hZ2UgdG8gZHJhdyBpbnRvIHRoZSBkZXN0aW5hdGlvbiBjb250ZXh0LiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgZW50aXJlIHJlY3RhbmdsZSBmcm9tIHRoZSBjb29yZGluYXRlcyBzcGVjaWZpZWQgYnkgc3ggYW5kIHN5IHRvIHRoZSBib3R0b20tcmlnaHQgY29ybmVyIG9mIHRoZSBpbWFnZSBpcyB1c2VkLlxyXG4gICAgICAgICAgdGhpcy5oZWlnaHQsIC8vIFRoZSBoZWlnaHQgb2YgdGhlIHN1Yi1yZWN0YW5nbGUgb2YgdGhlIHNvdXJjZSBpbWFnZSB0byBkcmF3IGludG8gdGhlIGRlc3RpbmF0aW9uIGNvbnRleHQuXHJcbiAgICAgICAgICB4LCAvLyBUaGUgWCBjb29yZGluYXRlIGluIHRoZSBkZXN0aW5hdGlvbiBjYW52YXMgYXQgd2hpY2ggdG8gcGxhY2UgdGhlIHRvcC1sZWZ0IGNvcm5lciBvZiB0aGUgc291cmNlIGltYWdlLlxyXG4gICAgICAgICAgeSwgLy8gVGhlIFkgY29vcmRpbmF0ZSBpbiB0aGUgZGVzdGluYXRpb24gY2FudmFzIGF0IHdoaWNoIHRvIHBsYWNlIHRoZSB0b3AtbGVmdCBjb3JuZXIgb2YgdGhlIHNvdXJjZSBpbWFnZS5cclxuICAgICAgICAgIHRoaXMud2lkdGgsIC8vIFRoZSB3aWR0aCB0byBkcmF3IHRoZSBpbWFnZSBpbiB0aGUgZGVzdGluYXRpb24gY2FudmFzLiBUaGlzIGFsbG93cyBzY2FsaW5nIG9mIHRoZSBkcmF3biBpbWFnZS4gSWYgbm90IHNwZWNpZmllZCwgdGhlIGltYWdlIGlzIG5vdCBzY2FsZWQgaW4gd2lkdGggd2hlbiBkcmF3bi5cclxuICAgICAgICAgIHRoaXMuaGVpZ2h0IC8vIFRoZSBoZWlnaHQgdG8gZHJhdyB0aGUgaW1hZ2UgaW4gdGhlIGRlc3RpbmF0aW9uIGNhbnZhcy4gVGhpcyBhbGxvd3Mgc2NhbGluZyBvZiB0aGUgZHJhd24gaW1hZ2UuIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBpbWFnZSBpcyBub3Qgc2NhbGVkIGluIGhlaWdodCB3aGVuIGRyYXduLlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIG1vbnN0ZXIgPSBuZXcgU3ByaXRlKGltZywgMzAsIDMwLCAgW1s4LCAxMTRdXSk7XHJcbiAgbW9uc3Rlci5kcmF3KDE0MCwgMjAwLCAwKTtcclxufVxyXG5cclxuTW9uc3Rlci5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uIHN0ZXAgKG1vbnN0ZXJzKSB7XHJcblxyXG4gIGNvbnN0IG5leHQgPSB7eDogdGhpcy54LCB5OiB0aGlzLnl9XHJcblxyXG4gIHN3aXRjaCAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkpIHtcclxuICAgIGNhc2UgMDogLy8gdXAuXHJcbiAgICAgIG5leHQueSAtPSB0aGlzLnNwZWVkXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAxOiAvLyBkb3duLlxyXG4gICAgICBuZXh0LnkgKz0gdGhpcy5zcGVlZFxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMjogLy8gcmlnaHQuXHJcbiAgICAgIG5leHQueCArPSB0aGlzLnNwZWVkXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAzOiAvLyBsZWZ0LlxyXG4gICAgICBuZXh0LnggLT0gdGhpcy5zcGVlZFxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGxldCBjYW5Nb3ZlID0gdHJ1ZVxyXG5cclxuICAvLyBDb2xsaXNpb24gZGV0ZWN0aW9uLlxyXG4gIG1vbnN0ZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vbnN0ZXIpIHtcclxuICAgIGlmIChtb25zdGVyID09PSB0aGlzKSByZXR1cm5cclxuICAgIGlmICghY2FuTW92ZSkgcmV0dXJuXHJcbiAgICBpZiAoIShtb25zdGVyLnggPiBuZXh0LnggKyB0aGlzLnNpemVcclxuICAgICAgICB8fCBtb25zdGVyLnggKyBtb25zdGVyLnNpemUgPD0gbmV4dC54XHJcbiAgICAgICAgfHwgbW9uc3Rlci55ID4gbmV4dC55ICsgdGhpcy5zaXplXHJcbiAgICAgICAgfHwgbW9uc3Rlci55ICsgbW9uc3Rlci5zaXplIDw9IG5leHQueSlcclxuICAgICkge1xyXG4gICAgICBjYW5Nb3ZlID0gZmFsc2VcclxuICAgIH1cclxuICB9LCB0aGlzKVxyXG5cclxuICBpZiAoY2FuTW92ZSkge1xyXG4gICAgdGhpcy54ID0gbmV4dC54XHJcbiAgICB0aGlzLnkgPSBuZXh0LnlcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy5zdGVwKG1vbnN0ZXJzKVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vdXVpZCBpZXRmIHJmYyBuYW1lc3BhY2UgbmV0d29yayBjYXJkXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL01vbnN0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/* exports provided: default */
/* exports used: default */
/*!**********************!*\
  !*** ./src/World.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Monster__ = __webpack_require__(/*! ./Monster */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Character__ = __webpack_require__(/*! ./Character */ 2);\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = World;\n// people and monsters\r\n\r\n\r\n\r\nfunction World () {\r\n\r\n  const monsters = []\r\n\r\n  var monster1 = new __WEBPACK_IMPORTED_MODULE_0__Monster__[\"a\" /* default */](10, 10)\r\n  var monster2 = new __WEBPACK_IMPORTED_MODULE_0__Monster__[\"a\" /* default */](50, 50)\r\n  var monster3 = new __WEBPACK_IMPORTED_MODULE_0__Monster__[\"a\" /* default */](61, 50)\r\n  var monster4 = new __WEBPACK_IMPORTED_MODULE_0__Monster__[\"a\" /* default */](71, 50)\r\n  var monster5 = new __WEBPACK_IMPORTED_MODULE_0__Monster__[\"a\" /* default */](81, 50)\r\n  var monster6 = new __WEBPACK_IMPORTED_MODULE_0__Monster__[\"a\" /* default */](91, 50)\r\n\r\n  monsters.push(monster1, monster2, monster3, monster4, monster5, monster6)\r\n\r\n  const characters = []\r\n\r\n  var character1 = new __WEBPACK_IMPORTED_MODULE_1__Character__[\"a\" /* default */](10, 50)\r\n\r\n  characters.push(character1)\r\n\r\n  return { monsters, characters }\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Xb3JsZC5qcz9jOWIzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBlb3BsZSBhbmQgbW9uc3RlcnNcclxuaW1wb3J0IE1vbnN0ZXIgZnJvbSAnLi9Nb25zdGVyJ1xyXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ybGQgKCkge1xyXG5cclxuICBjb25zdCBtb25zdGVycyA9IFtdXHJcblxyXG4gIHZhciBtb25zdGVyMSA9IG5ldyBNb25zdGVyKDEwLCAxMClcclxuICB2YXIgbW9uc3RlcjIgPSBuZXcgTW9uc3Rlcig1MCwgNTApXHJcbiAgdmFyIG1vbnN0ZXIzID0gbmV3IE1vbnN0ZXIoNjEsIDUwKVxyXG4gIHZhciBtb25zdGVyNCA9IG5ldyBNb25zdGVyKDcxLCA1MClcclxuICB2YXIgbW9uc3RlcjUgPSBuZXcgTW9uc3Rlcig4MSwgNTApXHJcbiAgdmFyIG1vbnN0ZXI2ID0gbmV3IE1vbnN0ZXIoOTEsIDUwKVxyXG5cclxuICBtb25zdGVycy5wdXNoKG1vbnN0ZXIxLCBtb25zdGVyMiwgbW9uc3RlcjMsIG1vbnN0ZXI0LCBtb25zdGVyNSwgbW9uc3RlcjYpXHJcblxyXG4gIGNvbnN0IGNoYXJhY3RlcnMgPSBbXVxyXG5cclxuICB2YXIgY2hhcmFjdGVyMSA9IG5ldyBDaGFyYWN0ZXIoMTAsIDUwKVxyXG5cclxuICBjaGFyYWN0ZXJzLnB1c2goY2hhcmFjdGVyMSlcclxuXHJcbiAgcmV0dXJuIHsgbW9uc3RlcnMsIGNoYXJhY3RlcnMgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1dvcmxkLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Monster__ = __webpack_require__(/*! ./Monster */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__World__ = __webpack_require__(/*! ./World */ 1);\n\r\n\r\n\r\nfunction init () {\r\n  var canvas = document.createElement(\"canvas\")\r\n\r\n  canvas.height = 256\r\n  canvas.width = 256\r\n\r\n  var ctx = canvas.getContext('2d')\r\n\r\n  document.body.appendChild(canvas)\r\n\r\n  return { ctx: ctx, canvas: canvas }\r\n}\r\n\r\nconst monsters = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__World__[\"a\" /* default */])().monsters\r\nconst players = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__World__[\"a\" /* default */])().players\r\n\r\n// For each of these steps, re-create the world.\r\nfunction step () {\r\n\r\n  // sets all pixels in the rectangle defined by starting point and\r\n  // size to transparent black, erasing any previously drawn content.\r\n  ctx.clearRect(0, 0, canvas.width, canvas.height)\r\n\r\n  monsters.forEach(function (monster) {\r\n    monster.step(monsters)\r\n    monster.draw(ctx)\r\n  })\r\n\r\n  players.forEach(function (player) {\r\n    player.draw(ctx)\r\n  })\r\n}\r\n\r\nfunction characterMove (direction) {\r\n  players.forEach(function (player) {\r\n    player.move(ctx)\r\n    player.draw(ctx)\r\n  })\r\n}\r\n\r\n// Monsters randomly move on keypress.\r\nwindow.addEventListener(\"keydown\", function(event){\r\n  if (event.key === 'ArrowRight') characterMove('right')\r\n}, false);\r\n\r\n// Monsters move randomly every second.\r\n//setInterval(function(){ step()}, 1000)\r\n\r\nvar _init = init(),\r\n    ctx = _init.ctx,\r\n    canvas = _init.canvas;\r\n\r\nstep()\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz85NTUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb25zdGVyIGZyb20gJy4vTW9uc3RlcidcclxuaW1wb3J0IFdvcmxkIGZyb20gJy4vV29ybGQnXHJcblxyXG5mdW5jdGlvbiBpbml0ICgpIHtcclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG5cclxuICBjYW52YXMuaGVpZ2h0ID0gMjU2XHJcbiAgY2FudmFzLndpZHRoID0gMjU2XHJcblxyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcylcclxuXHJcbiAgcmV0dXJuIHsgY3R4OiBjdHgsIGNhbnZhczogY2FudmFzIH1cclxufVxyXG5cclxuY29uc3QgbW9uc3RlcnMgPSBXb3JsZCgpLm1vbnN0ZXJzXHJcbmNvbnN0IHBsYXllcnMgPSBXb3JsZCgpLnBsYXllcnNcclxuXHJcbi8vIEZvciBlYWNoIG9mIHRoZXNlIHN0ZXBzLCByZS1jcmVhdGUgdGhlIHdvcmxkLlxyXG5mdW5jdGlvbiBzdGVwICgpIHtcclxuXHJcbiAgLy8gc2V0cyBhbGwgcGl4ZWxzIGluIHRoZSByZWN0YW5nbGUgZGVmaW5lZCBieSBzdGFydGluZyBwb2ludCBhbmRcclxuICAvLyBzaXplIHRvIHRyYW5zcGFyZW50IGJsYWNrLCBlcmFzaW5nIGFueSBwcmV2aW91c2x5IGRyYXduIGNvbnRlbnQuXHJcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXHJcblxyXG4gIG1vbnN0ZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vbnN0ZXIpIHtcclxuICAgIG1vbnN0ZXIuc3RlcChtb25zdGVycylcclxuICAgIG1vbnN0ZXIuZHJhdyhjdHgpXHJcbiAgfSlcclxuXHJcbiAgcGxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChwbGF5ZXIpIHtcclxuICAgIHBsYXllci5kcmF3KGN0eClcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFyYWN0ZXJNb3ZlIChkaXJlY3Rpb24pIHtcclxuICBwbGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKHBsYXllcikge1xyXG4gICAgcGxheWVyLm1vdmUoY3R4KVxyXG4gICAgcGxheWVyLmRyYXcoY3R4KVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIE1vbnN0ZXJzIHJhbmRvbWx5IG1vdmUgb24ga2V5cHJlc3MuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihldmVudCl7XHJcbiAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnKSBjaGFyYWN0ZXJNb3ZlKCdyaWdodCcpXHJcbn0sIGZhbHNlKTtcclxuXHJcbi8vIE1vbnN0ZXJzIG1vdmUgcmFuZG9tbHkgZXZlcnkgc2Vjb25kLlxyXG4vL3NldEludGVydmFsKGZ1bmN0aW9uKCl7IHN0ZXAoKX0sIDEwMDApXHJcblxyXG52YXIgX2luaXQgPSBpbml0KCksXHJcbiAgICBjdHggPSBfaW5pdC5jdHgsXHJcbiAgICBjYW52YXMgPSBfaW5pdC5jYW52YXM7XHJcblxyXG5zdGVwKClcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);