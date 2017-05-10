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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* exports provided: default */
/* exports used: default */
/*!*****************************!*\
  !*** ./src/TileSelector.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = TileSelector;\nfunction TileSelector () {\r\n  const tiles = document.querySelector('.tile-list').children\r\n  for (var i = 0; i < tiles.length; i++) {\r\n    tiles[i].addEventListener('click', function (event) {\r\n      const sprite = document.createElement('div')\r\n      sprite.setAttribute('draggable', 'true')\r\n      const dataEntityNumber = event.target.getAttribute('data-entity-number')\r\n      sprite.setAttribute('data-entity-number', dataEntityNumber)\r\n      sprite.className = event.target.className\r\n      const currentTile = document.querySelector('.currently-selected-tile')\r\n      if (currentTile.childNodes[1]) {\r\n        currentTile.removeChild(currentTile.childNodes[1])\r\n      }\r\n      currentTile.appendChild(sprite)\r\n    }, false)\r\n  }\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9UaWxlU2VsZWN0b3IuanM/MmNiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaWxlU2VsZWN0b3IgKCkge1xyXG4gIGNvbnN0IHRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbGUtbGlzdCcpLmNoaWxkcmVuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgdGlsZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgY29uc3Qgc3ByaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgc3ByaXRlLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKVxyXG4gICAgICBjb25zdCBkYXRhRW50aXR5TnVtYmVyID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1lbnRpdHktbnVtYmVyJylcclxuICAgICAgc3ByaXRlLnNldEF0dHJpYnV0ZSgnZGF0YS1lbnRpdHktbnVtYmVyJywgZGF0YUVudGl0eU51bWJlcilcclxuICAgICAgc3ByaXRlLmNsYXNzTmFtZSA9IGV2ZW50LnRhcmdldC5jbGFzc05hbWVcclxuICAgICAgY29uc3QgY3VycmVudFRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudGx5LXNlbGVjdGVkLXRpbGUnKVxyXG4gICAgICBpZiAoY3VycmVudFRpbGUuY2hpbGROb2Rlc1sxXSkge1xyXG4gICAgICAgIGN1cnJlbnRUaWxlLnJlbW92ZUNoaWxkKGN1cnJlbnRUaWxlLmNoaWxkTm9kZXNbMV0pXHJcbiAgICAgIH1cclxuICAgICAgY3VycmVudFRpbGUuYXBwZW5kQ2hpbGQoc3ByaXRlKVxyXG4gICAgfSwgZmFsc2UpXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1RpbGVTZWxlY3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/* exports provided: default */
/* exports used: default */
/*!**********************!*\
  !*** ./src/World.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Monster__ = __webpack_require__(/*! ./Monster */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Player__ = __webpack_require__(/*! ./Player */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Scene__ = __webpack_require__(/*! ./Scene */ 4);\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = World;\n// people and monsters\r\n\r\n\r\n\r\nfunction World () {\r\n  const monsters = this.monsters = []\r\n  for (var i = 0; i < 20; i++) {\r\n    var monsterName = 'monster' + i\r\n    monsterName = new __WEBPACK_IMPORTED_MODULE_0__Monster__[\"a\" /* default */]((i * 30), 300)\r\n    monsters.push(monsterName) // use addEntity\r\n  }\r\n  const players = this.players = []\r\n  var player1 = new __WEBPACK_IMPORTED_MODULE_1__Player__[\"a\" /* default */](240, 240)\r\n  players.push(player1)\r\n  this.scene = new __WEBPACK_IMPORTED_MODULE_2__Scene__[\"a\" /* default */](20, 20)\r\n}\r\n// Add entity properties to this function?\r\nWorld.prototype.addEntity = function addEntity ([worldX, worldY], entityType) {\r\n  if (entityType <= 1) {\r\n    this.scene.grid[worldY][worldX] = entityType\r\n  }\r\n}\r\nWorld.prototype.screenToWorld = function screenToWorld ([screenX, screenY], canvas) {\r\n  const tilesWidth = canvas.width / this.scene.width\r\n  const tilesHeight = canvas.height / this.scene.height\r\n  return [Math.floor(screenX / tilesWidth), Math.floor(screenY / tilesHeight)]\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Xb3JsZC5qcz9jOWIzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBlb3BsZSBhbmQgbW9uc3RlcnNcclxuaW1wb3J0IE1vbnN0ZXIgZnJvbSAnLi9Nb25zdGVyJ1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJ1xyXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9TY2VuZSdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ybGQgKCkge1xyXG4gIGNvbnN0IG1vbnN0ZXJzID0gdGhpcy5tb25zdGVycyA9IFtdXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XHJcbiAgICB2YXIgbW9uc3Rlck5hbWUgPSAnbW9uc3RlcicgKyBpXHJcbiAgICBtb25zdGVyTmFtZSA9IG5ldyBNb25zdGVyKChpICogMzApLCAzMDApXHJcbiAgICBtb25zdGVycy5wdXNoKG1vbnN0ZXJOYW1lKSAvLyB1c2UgYWRkRW50aXR5XHJcbiAgfVxyXG4gIGNvbnN0IHBsYXllcnMgPSB0aGlzLnBsYXllcnMgPSBbXVxyXG4gIHZhciBwbGF5ZXIxID0gbmV3IFBsYXllcigyNDAsIDI0MClcclxuICBwbGF5ZXJzLnB1c2gocGxheWVyMSlcclxuICB0aGlzLnNjZW5lID0gbmV3IFNjZW5lKDIwLCAyMClcclxufVxyXG4vLyBBZGQgZW50aXR5IHByb3BlcnRpZXMgdG8gdGhpcyBmdW5jdGlvbj9cclxuV29ybGQucHJvdG90eXBlLmFkZEVudGl0eSA9IGZ1bmN0aW9uIGFkZEVudGl0eSAoW3dvcmxkWCwgd29ybGRZXSwgZW50aXR5VHlwZSkge1xyXG4gIGlmIChlbnRpdHlUeXBlIDw9IDEpIHtcclxuICAgIHRoaXMuc2NlbmUuZ3JpZFt3b3JsZFldW3dvcmxkWF0gPSBlbnRpdHlUeXBlXHJcbiAgfVxyXG59XHJcbldvcmxkLnByb3RvdHlwZS5zY3JlZW5Ub1dvcmxkID0gZnVuY3Rpb24gc2NyZWVuVG9Xb3JsZCAoW3NjcmVlblgsIHNjcmVlblldLCBjYW52YXMpIHtcclxuICBjb25zdCB0aWxlc1dpZHRoID0gY2FudmFzLndpZHRoIC8gdGhpcy5zY2VuZS53aWR0aFxyXG4gIGNvbnN0IHRpbGVzSGVpZ2h0ID0gY2FudmFzLmhlaWdodCAvIHRoaXMuc2NlbmUuaGVpZ2h0XHJcbiAgcmV0dXJuIFtNYXRoLmZsb29yKHNjcmVlblggLyB0aWxlc1dpZHRoKSwgTWF0aC5mbG9vcihzY3JlZW5ZIC8gdGlsZXNIZWlnaHQpXVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1dvcmxkLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/* exports provided: default */
/* exports used: default */
/*!************************!*\
  !*** ./src/Monster.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Monster;\nfunction Monster (x, y) {\r\n  this.x = x\r\n  this.y = y\r\n  this.size = 30\r\n  this.speed = 30\r\n}\r\n\r\nMonster.prototype.draw = function draw (ctx) {\r\n  var img = new Image()\r\n\r\n  img.addEventListener('load', () => {\r\n    ctx.drawImage(\r\n      img,\r\n      8, // The X coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.\r\n      114, // The Y coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.\r\n      this.size, // The width of the sub-rectangle of the source image to draw into the destination context. If not specified, the entire rectangle from the coordinates specified by sx and sy to the bottom-right corner of the image is used.\r\n      this.size, // The height of the sub-rectangle of the source image to draw into the destination context.\r\n      this.x, // The X coordinate in the destination canvas at which to place the top-left corner of the source image.\r\n      this.y, // The Y coordinate in the destination canvas at which to place the top-left corner of the source image.\r\n      this.size, // The width to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in width when drawn.\r\n      this.size // The height to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in height when drawn.\r\n    )\r\n  }, false)\r\n  img.src = 'src/sprites/characters-min.png'\r\n}\r\n\r\nMonster.prototype.step = function step (monsters) {\r\n  const next = {x: this.x, y: this.y}\r\n\r\n  switch (Math.floor(Math.random() * 4)) {\r\n    case 0: // up.\r\n      next.y -= this.speed\r\n      break\r\n    case 1: // down.\r\n      next.y += this.speed\r\n      break\r\n    case 2: // right.\r\n      next.x += this.speed\r\n      break\r\n    case 3: // left.\r\n      next.x -= this.speed\r\n      break\r\n  }\r\n\r\n  let canMove = true\r\n\r\n  // Collision detection.\r\n  monsters.forEach(function (monster) {\r\n    if (monster === this) return\r\n    if (!canMove) return\r\n    if (!(monster.x > next.x + this.size ||\r\n        monster.x + monster.size <= next.x ||\r\n        monster.y > next.y + this.size ||\r\n        monster.y + monster.size <= next.y)\r\n    ) {\r\n      canMove = false\r\n    }\r\n  }, this)\r\n\r\n  if (canMove) {\r\n    this.x = next.x\r\n    this.y = next.y\r\n  } else {\r\n    this.step(monsters)\r\n  }\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Nb25zdGVyLmpzPzQ4MTkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9uc3RlciAoeCwgeSkge1xyXG4gIHRoaXMueCA9IHhcclxuICB0aGlzLnkgPSB5XHJcbiAgdGhpcy5zaXplID0gMzBcclxuICB0aGlzLnNwZWVkID0gMzBcclxufVxyXG5cclxuTW9uc3Rlci5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIGRyYXcgKGN0eCkge1xyXG4gIHZhciBpbWcgPSBuZXcgSW1hZ2UoKVxyXG5cclxuICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIGltZyxcclxuICAgICAgOCwgLy8gVGhlIFggY29vcmRpbmF0ZSBvZiB0aGUgdG9wIGxlZnQgY29ybmVyIG9mIHRoZSBzdWItcmVjdGFuZ2xlIG9mIHRoZSBzb3VyY2UgaW1hZ2UgdG8gZHJhdyBpbnRvIHRoZSBkZXN0aW5hdGlvbiBjb250ZXh0LlxyXG4gICAgICAxMTQsIC8vIFRoZSBZIGNvb3JkaW5hdGUgb2YgdGhlIHRvcCBsZWZ0IGNvcm5lciBvZiB0aGUgc3ViLXJlY3RhbmdsZSBvZiB0aGUgc291cmNlIGltYWdlIHRvIGRyYXcgaW50byB0aGUgZGVzdGluYXRpb24gY29udGV4dC5cclxuICAgICAgdGhpcy5zaXplLCAvLyBUaGUgd2lkdGggb2YgdGhlIHN1Yi1yZWN0YW5nbGUgb2YgdGhlIHNvdXJjZSBpbWFnZSB0byBkcmF3IGludG8gdGhlIGRlc3RpbmF0aW9uIGNvbnRleHQuIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBlbnRpcmUgcmVjdGFuZ2xlIGZyb20gdGhlIGNvb3JkaW5hdGVzIHNwZWNpZmllZCBieSBzeCBhbmQgc3kgdG8gdGhlIGJvdHRvbS1yaWdodCBjb3JuZXIgb2YgdGhlIGltYWdlIGlzIHVzZWQuXHJcbiAgICAgIHRoaXMuc2l6ZSwgLy8gVGhlIGhlaWdodCBvZiB0aGUgc3ViLXJlY3RhbmdsZSBvZiB0aGUgc291cmNlIGltYWdlIHRvIGRyYXcgaW50byB0aGUgZGVzdGluYXRpb24gY29udGV4dC5cclxuICAgICAgdGhpcy54LCAvLyBUaGUgWCBjb29yZGluYXRlIGluIHRoZSBkZXN0aW5hdGlvbiBjYW52YXMgYXQgd2hpY2ggdG8gcGxhY2UgdGhlIHRvcC1sZWZ0IGNvcm5lciBvZiB0aGUgc291cmNlIGltYWdlLlxyXG4gICAgICB0aGlzLnksIC8vIFRoZSBZIGNvb3JkaW5hdGUgaW4gdGhlIGRlc3RpbmF0aW9uIGNhbnZhcyBhdCB3aGljaCB0byBwbGFjZSB0aGUgdG9wLWxlZnQgY29ybmVyIG9mIHRoZSBzb3VyY2UgaW1hZ2UuXHJcbiAgICAgIHRoaXMuc2l6ZSwgLy8gVGhlIHdpZHRoIHRvIGRyYXcgdGhlIGltYWdlIGluIHRoZSBkZXN0aW5hdGlvbiBjYW52YXMuIFRoaXMgYWxsb3dzIHNjYWxpbmcgb2YgdGhlIGRyYXduIGltYWdlLiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgaW1hZ2UgaXMgbm90IHNjYWxlZCBpbiB3aWR0aCB3aGVuIGRyYXduLlxyXG4gICAgICB0aGlzLnNpemUgLy8gVGhlIGhlaWdodCB0byBkcmF3IHRoZSBpbWFnZSBpbiB0aGUgZGVzdGluYXRpb24gY2FudmFzLiBUaGlzIGFsbG93cyBzY2FsaW5nIG9mIHRoZSBkcmF3biBpbWFnZS4gSWYgbm90IHNwZWNpZmllZCwgdGhlIGltYWdlIGlzIG5vdCBzY2FsZWQgaW4gaGVpZ2h0IHdoZW4gZHJhd24uXHJcbiAgICApXHJcbiAgfSwgZmFsc2UpXHJcbiAgaW1nLnNyYyA9ICdzcmMvc3ByaXRlcy9jaGFyYWN0ZXJzLW1pbi5wbmcnXHJcbn1cclxuXHJcbk1vbnN0ZXIucHJvdG90eXBlLnN0ZXAgPSBmdW5jdGlvbiBzdGVwIChtb25zdGVycykge1xyXG4gIGNvbnN0IG5leHQgPSB7eDogdGhpcy54LCB5OiB0aGlzLnl9XHJcblxyXG4gIHN3aXRjaCAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkpIHtcclxuICAgIGNhc2UgMDogLy8gdXAuXHJcbiAgICAgIG5leHQueSAtPSB0aGlzLnNwZWVkXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlIDE6IC8vIGRvd24uXHJcbiAgICAgIG5leHQueSArPSB0aGlzLnNwZWVkXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlIDI6IC8vIHJpZ2h0LlxyXG4gICAgICBuZXh0LnggKz0gdGhpcy5zcGVlZFxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAzOiAvLyBsZWZ0LlxyXG4gICAgICBuZXh0LnggLT0gdGhpcy5zcGVlZFxyXG4gICAgICBicmVha1xyXG4gIH1cclxuXHJcbiAgbGV0IGNhbk1vdmUgPSB0cnVlXHJcblxyXG4gIC8vIENvbGxpc2lvbiBkZXRlY3Rpb24uXHJcbiAgbW9uc3RlcnMuZm9yRWFjaChmdW5jdGlvbiAobW9uc3Rlcikge1xyXG4gICAgaWYgKG1vbnN0ZXIgPT09IHRoaXMpIHJldHVyblxyXG4gICAgaWYgKCFjYW5Nb3ZlKSByZXR1cm5cclxuICAgIGlmICghKG1vbnN0ZXIueCA+IG5leHQueCArIHRoaXMuc2l6ZSB8fFxyXG4gICAgICAgIG1vbnN0ZXIueCArIG1vbnN0ZXIuc2l6ZSA8PSBuZXh0LnggfHxcclxuICAgICAgICBtb25zdGVyLnkgPiBuZXh0LnkgKyB0aGlzLnNpemUgfHxcclxuICAgICAgICBtb25zdGVyLnkgKyBtb25zdGVyLnNpemUgPD0gbmV4dC55KVxyXG4gICAgKSB7XHJcbiAgICAgIGNhbk1vdmUgPSBmYWxzZVxyXG4gICAgfVxyXG4gIH0sIHRoaXMpXHJcblxyXG4gIGlmIChjYW5Nb3ZlKSB7XHJcbiAgICB0aGlzLnggPSBuZXh0LnhcclxuICAgIHRoaXMueSA9IG5leHQueVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLnN0ZXAobW9uc3RlcnMpXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL01vbnN0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 3 */
/* exports provided: default */
/* exports used: default */
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Player;\nfunction Player (x, y, world) {\r\n  this.x = x\r\n  this.y = y\r\n  this.size = 30\r\n  this.speed = 30\r\n  this.world = world\r\n}\r\nPlayer.prototype.draw = function draw (ctx) {\r\n  var img = new Image()\r\n  img.addEventListener('load', () => {\r\n    ctx.drawImage(\r\n      // An element to draw into the context.\r\n      img,\r\n\r\n      /* The X coordinate of the top left corner of the sub-rectangle of the\r\n      source image to draw into the destination context. */\r\n      9,\r\n\r\n      /* The Y coordinate of the top left corner of the sub-rectangle of the\r\n       source image to draw into the destination context. */\r\n      42,\r\n\r\n      /* The width of the sub-rectangle of the source image to draw into the\r\n      destination context. If not specified, the entire rectangle from the\r\n      coordinates specified by sx and sy to the bottom-right\r\n      corner of the image is used. */\r\n      this.size,\r\n\r\n      /* The height of the sub-rectangle of the source image to draw into\r\n      the destination context. */\r\n      this.size,\r\n\r\n      /* The X coordinate in the destination canvas at which to place the\r\n      top-left corner of the source image. */\r\n      this.x,\r\n\r\n      /* The Y coordinate in the destination canvas at which to place the\r\n      top-left corner of the source image. */\r\n      this.y,\r\n\r\n      /* The width to draw the image in the destination canvas. This allows\r\n      scaling of the drawn image. If not specified, the image is not\r\n      scaled in width when drawn. */\r\n      this.size,\r\n\r\n      /* The height to draw the image in the destination canvas. This allows\r\n      scaling of the drawn image. If not specified, the image is not\r\n      scaled in height when drawn. */\r\n      this.size\r\n    )\r\n  })\r\n  img.src = 'src/sprites/characters-min.png'\r\n}\r\nPlayer.prototype.move = function move (ctx, direction) {\r\n  switch (direction) {\r\n    case 'up':\r\n      this.y -= this.speed\r\n      break\r\n    case 'down':\r\n      this.y += this.speed\r\n      break\r\n    case 'right':\r\n      this.x += this.speed\r\n      break\r\n    case 'left':\r\n      this.x -= this.speed\r\n      break\r\n    case 'up left':\r\n      this.x -= this.speed\r\n      this.y -= this.speed\r\n      break\r\n    case 'down left':\r\n      this.x -= this.speed\r\n      this.y += this.speed\r\n      break\r\n    case 'up right':\r\n      this.x += this.speed\r\n      this.y -= this.speed\r\n      break\r\n    case 'down right':\r\n      this.x += this.speed\r\n      this.y += this.speed\r\n      break\r\n  }\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9QbGF5ZXIuanM/YWFkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIgKHgsIHksIHdvcmxkKSB7XHJcbiAgdGhpcy54ID0geFxyXG4gIHRoaXMueSA9IHlcclxuICB0aGlzLnNpemUgPSAzMFxyXG4gIHRoaXMuc3BlZWQgPSAzMFxyXG4gIHRoaXMud29ybGQgPSB3b3JsZFxyXG59XHJcblBsYXllci5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIGRyYXcgKGN0eCkge1xyXG4gIHZhciBpbWcgPSBuZXcgSW1hZ2UoKVxyXG4gIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgLy8gQW4gZWxlbWVudCB0byBkcmF3IGludG8gdGhlIGNvbnRleHQuXHJcbiAgICAgIGltZyxcclxuXHJcbiAgICAgIC8qIFRoZSBYIGNvb3JkaW5hdGUgb2YgdGhlIHRvcCBsZWZ0IGNvcm5lciBvZiB0aGUgc3ViLXJlY3RhbmdsZSBvZiB0aGVcclxuICAgICAgc291cmNlIGltYWdlIHRvIGRyYXcgaW50byB0aGUgZGVzdGluYXRpb24gY29udGV4dC4gKi9cclxuICAgICAgOSxcclxuXHJcbiAgICAgIC8qIFRoZSBZIGNvb3JkaW5hdGUgb2YgdGhlIHRvcCBsZWZ0IGNvcm5lciBvZiB0aGUgc3ViLXJlY3RhbmdsZSBvZiB0aGVcclxuICAgICAgIHNvdXJjZSBpbWFnZSB0byBkcmF3IGludG8gdGhlIGRlc3RpbmF0aW9uIGNvbnRleHQuICovXHJcbiAgICAgIDQyLFxyXG5cclxuICAgICAgLyogVGhlIHdpZHRoIG9mIHRoZSBzdWItcmVjdGFuZ2xlIG9mIHRoZSBzb3VyY2UgaW1hZ2UgdG8gZHJhdyBpbnRvIHRoZVxyXG4gICAgICBkZXN0aW5hdGlvbiBjb250ZXh0LiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgZW50aXJlIHJlY3RhbmdsZSBmcm9tIHRoZVxyXG4gICAgICBjb29yZGluYXRlcyBzcGVjaWZpZWQgYnkgc3ggYW5kIHN5IHRvIHRoZSBib3R0b20tcmlnaHRcclxuICAgICAgY29ybmVyIG9mIHRoZSBpbWFnZSBpcyB1c2VkLiAqL1xyXG4gICAgICB0aGlzLnNpemUsXHJcblxyXG4gICAgICAvKiBUaGUgaGVpZ2h0IG9mIHRoZSBzdWItcmVjdGFuZ2xlIG9mIHRoZSBzb3VyY2UgaW1hZ2UgdG8gZHJhdyBpbnRvXHJcbiAgICAgIHRoZSBkZXN0aW5hdGlvbiBjb250ZXh0LiAqL1xyXG4gICAgICB0aGlzLnNpemUsXHJcblxyXG4gICAgICAvKiBUaGUgWCBjb29yZGluYXRlIGluIHRoZSBkZXN0aW5hdGlvbiBjYW52YXMgYXQgd2hpY2ggdG8gcGxhY2UgdGhlXHJcbiAgICAgIHRvcC1sZWZ0IGNvcm5lciBvZiB0aGUgc291cmNlIGltYWdlLiAqL1xyXG4gICAgICB0aGlzLngsXHJcblxyXG4gICAgICAvKiBUaGUgWSBjb29yZGluYXRlIGluIHRoZSBkZXN0aW5hdGlvbiBjYW52YXMgYXQgd2hpY2ggdG8gcGxhY2UgdGhlXHJcbiAgICAgIHRvcC1sZWZ0IGNvcm5lciBvZiB0aGUgc291cmNlIGltYWdlLiAqL1xyXG4gICAgICB0aGlzLnksXHJcblxyXG4gICAgICAvKiBUaGUgd2lkdGggdG8gZHJhdyB0aGUgaW1hZ2UgaW4gdGhlIGRlc3RpbmF0aW9uIGNhbnZhcy4gVGhpcyBhbGxvd3NcclxuICAgICAgc2NhbGluZyBvZiB0aGUgZHJhd24gaW1hZ2UuIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBpbWFnZSBpcyBub3RcclxuICAgICAgc2NhbGVkIGluIHdpZHRoIHdoZW4gZHJhd24uICovXHJcbiAgICAgIHRoaXMuc2l6ZSxcclxuXHJcbiAgICAgIC8qIFRoZSBoZWlnaHQgdG8gZHJhdyB0aGUgaW1hZ2UgaW4gdGhlIGRlc3RpbmF0aW9uIGNhbnZhcy4gVGhpcyBhbGxvd3NcclxuICAgICAgc2NhbGluZyBvZiB0aGUgZHJhd24gaW1hZ2UuIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBpbWFnZSBpcyBub3RcclxuICAgICAgc2NhbGVkIGluIGhlaWdodCB3aGVuIGRyYXduLiAqL1xyXG4gICAgICB0aGlzLnNpemVcclxuICAgIClcclxuICB9KVxyXG4gIGltZy5zcmMgPSAnc3JjL3Nwcml0ZXMvY2hhcmFjdGVycy1taW4ucG5nJ1xyXG59XHJcblBsYXllci5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIG1vdmUgKGN0eCwgZGlyZWN0aW9uKSB7XHJcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgIGNhc2UgJ3VwJzpcclxuICAgICAgdGhpcy55IC09IHRoaXMuc3BlZWRcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ2Rvd24nOlxyXG4gICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZFxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICd1cCBsZWZ0JzpcclxuICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWRcclxuICAgICAgdGhpcy55IC09IHRoaXMuc3BlZWRcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ2Rvd24gbGVmdCc6XHJcbiAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkXHJcbiAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICd1cCByaWdodCc6XHJcbiAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkXHJcbiAgICAgIHRoaXMueSAtPSB0aGlzLnNwZWVkXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICdkb3duIHJpZ2h0JzpcclxuICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWRcclxuICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRcclxuICAgICAgYnJlYWtcclxuICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvUGxheWVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 4 */
/* exports provided: default */
/* exports used: default */
/*!**********************!*\
  !*** ./src/Scene.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Scene;\nfunction Scene (height, width) {\r\n  this.height = height\r\n  this.width = width\r\n  this.tiles = ['rgb(223, 215, 138)', 'rgb(38, 38, 35)', 'rgb(247, 115, 41)', 'rgb(33, 62, 134)']\r\n  this.grid = []\r\n  this.initialize()\r\n  this.setBorder()\r\n  this.setRandomWalls()\r\n}\r\nScene.prototype.draw = function (ctx, canvas) {\r\n  const cellWidth = canvas.width / this.width\r\n  const cellHeight = canvas.height / this.height\r\n  for (let y = 0; y < this.height; y++) {\r\n    const row = this.grid[y]\r\n    for (let x = 0; x < this.width; x++) {\r\n      const value = row[x]\r\n      ctx.fillStyle = this.tiles[value]\r\n      ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight)\r\n    }\r\n  }\r\n}\r\nScene.prototype.initialize = function initialize () {\r\n  this.grid = []\r\n  for (let y = 0; y < this.height; y++) {\r\n    const row = []\r\n    for (let x = 0; x < this.width; x++) {\r\n      row.push(0)\r\n    }\r\n    this.grid.push(row)\r\n  }\r\n}\r\nScene.prototype.setBorder = function setBorder () {\r\n  for (let y = 0; y < this.height; y++) {\r\n    const row = this.grid[y]\r\n    for (let x = 0; x < this.width; x++) {\r\n      if (x === 0 || x === this.width - 1 || y === 0 || y === this.height - 1) {\r\n        row[x] = 1\r\n      }\r\n    }\r\n  }\r\n}\r\nScene.prototype.setRandomWalls = function setRandomWalls () {\r\n  for (let y = 1; y < this.height - 1; y++) {\r\n    const row = this.grid[y]\r\n    for (let x = 1; x < this.width - 1; x++) {\r\n      row[x] = Math.random() < 0.1 ? 1 : 0\r\n    }\r\n  }\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9TY2VuZS5qcz82YzY2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjZW5lIChoZWlnaHQsIHdpZHRoKSB7XHJcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcclxuICB0aGlzLndpZHRoID0gd2lkdGhcclxuICB0aGlzLnRpbGVzID0gWydyZ2IoMjIzLCAyMTUsIDEzOCknLCAncmdiKDM4LCAzOCwgMzUpJywgJ3JnYigyNDcsIDExNSwgNDEpJywgJ3JnYigzMywgNjIsIDEzNCknXVxyXG4gIHRoaXMuZ3JpZCA9IFtdXHJcbiAgdGhpcy5pbml0aWFsaXplKClcclxuICB0aGlzLnNldEJvcmRlcigpXHJcbiAgdGhpcy5zZXRSYW5kb21XYWxscygpXHJcbn1cclxuU2NlbmUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoY3R4LCBjYW52YXMpIHtcclxuICBjb25zdCBjZWxsV2lkdGggPSBjYW52YXMud2lkdGggLyB0aGlzLndpZHRoXHJcbiAgY29uc3QgY2VsbEhlaWdodCA9IGNhbnZhcy5oZWlnaHQgLyB0aGlzLmhlaWdodFxyXG4gIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5oZWlnaHQ7IHkrKykge1xyXG4gICAgY29uc3Qgcm93ID0gdGhpcy5ncmlkW3ldXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKykge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHJvd1t4XVxyXG4gICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy50aWxlc1t2YWx1ZV1cclxuICAgICAgY3R4LmZpbGxSZWN0KHggKiBjZWxsV2lkdGgsIHkgKiBjZWxsSGVpZ2h0LCBjZWxsV2lkdGgsIGNlbGxIZWlnaHQpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblNjZW5lLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSAoKSB7XHJcbiAgdGhpcy5ncmlkID0gW11cclxuICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuaGVpZ2h0OyB5KyspIHtcclxuICAgIGNvbnN0IHJvdyA9IFtdXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKykge1xyXG4gICAgICByb3cucHVzaCgwKVxyXG4gICAgfVxyXG4gICAgdGhpcy5ncmlkLnB1c2gocm93KVxyXG4gIH1cclxufVxyXG5TY2VuZS5wcm90b3R5cGUuc2V0Qm9yZGVyID0gZnVuY3Rpb24gc2V0Qm9yZGVyICgpIHtcclxuICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuaGVpZ2h0OyB5KyspIHtcclxuICAgIGNvbnN0IHJvdyA9IHRoaXMuZ3JpZFt5XVxyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4KyspIHtcclxuICAgICAgaWYgKHggPT09IDAgfHwgeCA9PT0gdGhpcy53aWR0aCAtIDEgfHwgeSA9PT0gMCB8fCB5ID09PSB0aGlzLmhlaWdodCAtIDEpIHtcclxuICAgICAgICByb3dbeF0gPSAxXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuU2NlbmUucHJvdG90eXBlLnNldFJhbmRvbVdhbGxzID0gZnVuY3Rpb24gc2V0UmFuZG9tV2FsbHMgKCkge1xyXG4gIGZvciAobGV0IHkgPSAxOyB5IDwgdGhpcy5oZWlnaHQgLSAxOyB5KyspIHtcclxuICAgIGNvbnN0IHJvdyA9IHRoaXMuZ3JpZFt5XVxyXG4gICAgZm9yIChsZXQgeCA9IDE7IHggPCB0aGlzLndpZHRoIC0gMTsgeCsrKSB7XHJcbiAgICAgIHJvd1t4XSA9IE1hdGgucmFuZG9tKCkgPCAwLjEgPyAxIDogMFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TY2VuZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TileSelector__ = __webpack_require__(/*! ./TileSelector */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__World__ = __webpack_require__(/*! ./World */ 1);\n\r\n\r\nfunction init () {\r\n  var canvas = document.createElement('canvas')\r\n  canvas.height = 600\r\n  canvas.width = 600\r\n  var ctx = canvas.getContext('2d')\r\n  document.body.appendChild(canvas)\r\n  return { ctx: ctx, canvas: canvas }\r\n}\r\n// For each of these steps, re-create the world.\r\nfunction step (direction) {\r\n  /* Sets all pixels in the rectangle defined by starting point and\r\n  size to transparent black, erasing any previously drawn content. */\r\n  ctx.clearRect(0, 0, canvas.width, canvas.height)\r\n  world.scene.draw(ctx, canvas)\r\n  world.monsters.forEach(function (monster) {\r\n    monster.step(world.monsters)\r\n    monster.draw(ctx)\r\n  })\r\n  world.players.forEach(function (player) {\r\n    player.move(ctx, direction)\r\n    player.draw(ctx)\r\n  })\r\n}\r\n\r\nfunction redraw () {\r\n  world.scene.draw(ctx, canvas)\r\n  world.monsters.forEach(function (monster) {\r\n    monster.draw(ctx)\r\n  })\r\n  world.players.forEach(function (player) {\r\n    player.draw(ctx)\r\n  })\r\n}\r\nvar _init = init()\r\nvar ctx = _init.ctx\r\nvar canvas = _init.canvas\r\nconst world = new __WEBPACK_IMPORTED_MODULE_1__World__[\"a\" /* default */]()\r\n__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__TileSelector__[\"a\" /* default */])()\r\nstep()\r\n// Refactor.\r\nvar map = {}\r\nwindow.onkeydown = window.onkeyup = function controls (event) {\r\n  map[event.key] = event.type === 'keydown'\r\n  if (map['ArrowUp']) {\r\n    step('up')\r\n  } else if (map['ArrowDown']) {\r\n    step('down')\r\n  } else if (map['ArrowLeft']) {\r\n    step('left')\r\n  } else if (map['ArrowRight']) {\r\n    step('right')\r\n  }\r\n}\r\ncanvas.addEventListener('click', function (event) {\r\n  const selectedTile = document.querySelector('.currently-selected-tile')\r\n  if (!selectedTile.children[0]) return\r\n  const selectedEntityNumber =\r\n  selectedTile.children[0].getAttribute('data-entity-number')\r\n  const pos = world.screenToWorld([\r\n    event.clientX,\r\n    event.clientY\r\n  ], canvas)\r\n  world.addEntity(pos, selectedEntityNumber)\r\n  redraw()\r\n}, false)\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz85NTUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaWxlU2VsZWN0b3IgZnJvbSAnLi9UaWxlU2VsZWN0b3InXHJcbmltcG9ydCBXb3JsZCBmcm9tICcuL1dvcmxkJ1xyXG5mdW5jdGlvbiBpbml0ICgpIHtcclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcclxuICBjYW52YXMuaGVpZ2h0ID0gNjAwXHJcbiAgY2FudmFzLndpZHRoID0gNjAwXHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpXHJcbiAgcmV0dXJuIHsgY3R4OiBjdHgsIGNhbnZhczogY2FudmFzIH1cclxufVxyXG4vLyBGb3IgZWFjaCBvZiB0aGVzZSBzdGVwcywgcmUtY3JlYXRlIHRoZSB3b3JsZC5cclxuZnVuY3Rpb24gc3RlcCAoZGlyZWN0aW9uKSB7XHJcbiAgLyogU2V0cyBhbGwgcGl4ZWxzIGluIHRoZSByZWN0YW5nbGUgZGVmaW5lZCBieSBzdGFydGluZyBwb2ludCBhbmRcclxuICBzaXplIHRvIHRyYW5zcGFyZW50IGJsYWNrLCBlcmFzaW5nIGFueSBwcmV2aW91c2x5IGRyYXduIGNvbnRlbnQuICovXHJcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXHJcbiAgd29ybGQuc2NlbmUuZHJhdyhjdHgsIGNhbnZhcylcclxuICB3b3JsZC5tb25zdGVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb25zdGVyKSB7XHJcbiAgICBtb25zdGVyLnN0ZXAod29ybGQubW9uc3RlcnMpXHJcbiAgICBtb25zdGVyLmRyYXcoY3R4KVxyXG4gIH0pXHJcbiAgd29ybGQucGxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChwbGF5ZXIpIHtcclxuICAgIHBsYXllci5tb3ZlKGN0eCwgZGlyZWN0aW9uKVxyXG4gICAgcGxheWVyLmRyYXcoY3R4KVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZHJhdyAoKSB7XHJcbiAgd29ybGQuc2NlbmUuZHJhdyhjdHgsIGNhbnZhcylcclxuICB3b3JsZC5tb25zdGVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb25zdGVyKSB7XHJcbiAgICBtb25zdGVyLmRyYXcoY3R4KVxyXG4gIH0pXHJcbiAgd29ybGQucGxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChwbGF5ZXIpIHtcclxuICAgIHBsYXllci5kcmF3KGN0eClcclxuICB9KVxyXG59XHJcbnZhciBfaW5pdCA9IGluaXQoKVxyXG52YXIgY3R4ID0gX2luaXQuY3R4XHJcbnZhciBjYW52YXMgPSBfaW5pdC5jYW52YXNcclxuY29uc3Qgd29ybGQgPSBuZXcgV29ybGQoKVxyXG5UaWxlU2VsZWN0b3IoKVxyXG5zdGVwKClcclxuLy8gUmVmYWN0b3IuXHJcbnZhciBtYXAgPSB7fVxyXG53aW5kb3cub25rZXlkb3duID0gd2luZG93Lm9ua2V5dXAgPSBmdW5jdGlvbiBjb250cm9scyAoZXZlbnQpIHtcclxuICBtYXBbZXZlbnQua2V5XSA9IGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJ1xyXG4gIGlmIChtYXBbJ0Fycm93VXAnXSkge1xyXG4gICAgc3RlcCgndXAnKVxyXG4gIH0gZWxzZSBpZiAobWFwWydBcnJvd0Rvd24nXSkge1xyXG4gICAgc3RlcCgnZG93bicpXHJcbiAgfSBlbHNlIGlmIChtYXBbJ0Fycm93TGVmdCddKSB7XHJcbiAgICBzdGVwKCdsZWZ0JylcclxuICB9IGVsc2UgaWYgKG1hcFsnQXJyb3dSaWdodCddKSB7XHJcbiAgICBzdGVwKCdyaWdodCcpXHJcbiAgfVxyXG59XHJcbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGNvbnN0IHNlbGVjdGVkVGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50bHktc2VsZWN0ZWQtdGlsZScpXHJcbiAgaWYgKCFzZWxlY3RlZFRpbGUuY2hpbGRyZW5bMF0pIHJldHVyblxyXG4gIGNvbnN0IHNlbGVjdGVkRW50aXR5TnVtYmVyID1cclxuICBzZWxlY3RlZFRpbGUuY2hpbGRyZW5bMF0uZ2V0QXR0cmlidXRlKCdkYXRhLWVudGl0eS1udW1iZXInKVxyXG4gIGNvbnN0IHBvcyA9IHdvcmxkLnNjcmVlblRvV29ybGQoW1xyXG4gICAgZXZlbnQuY2xpZW50WCxcclxuICAgIGV2ZW50LmNsaWVudFlcclxuICBdLCBjYW52YXMpXHJcbiAgd29ybGQuYWRkRW50aXR5KHBvcywgc2VsZWN0ZWRFbnRpdHlOdW1iZXIpXHJcbiAgcmVkcmF3KClcclxufSwgZmFsc2UpXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);