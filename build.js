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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Monster;
function Monster (x, y) {
  this.x = x
  this.y = y
  this.size = 30
  this.speed = 1
}

Monster.prototype.draw = function draw (ctx) {
  var img = new Image()
  img.src = 'src/sprites/characters.png'
  ctx.drawImage(
    img,
    8, // The X coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.
    114, // The Y coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.
    this.size, // The width of the sub-rectangle of the source image to draw into the destination context. If not specified, the entire rectangle from the coordinates specified by sx and sy to the bottom-right corner of the image is used.
    this.size, // The height of the sub-rectangle of the source image to draw into the destination context.
    this.x, // The X coordinate in the destination canvas at which to place the top-left corner of the source image.
    this.y, // The Y coordinate in the destination canvas at which to place the top-left corner of the source image.
    this.size, // The width to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in width when drawn.
    this.size // The height to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in height when drawn.
  )
}

Monster.prototype.step = function step (monsters) {
  const next = {x: this.x, y: this.y}

  switch (Math.floor(Math.random() * 4)) {
    case 0: // up.
      next.y -= this.speed
      break
    case 1: // down.
      next.y += this.speed
      break
    case 2: // right.
      next.x += this.speed
      break
    case 3: // left.
      next.x -= this.speed
      break
  }

  let canMove = true

  // Collision detection.
  monsters.forEach(function (monster) {
    if (monster === this) return
    if (!canMove) return
    if (!(monster.x > next.x + this.size ||
        monster.x + monster.size <= next.x ||
        monster.y > next.y + this.size ||
        monster.y + monster.size <= next.y)
    ) {
      canMove = false
    }
  }, this)

  if (canMove) {
    this.x = next.x
    this.y = next.y
  } else {
    this.step(monsters)
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Player;
function Player (x, y) {
  this.x = x
  this.y = y
  this.size = 30
  this.speed = 1
}

Player.prototype.draw = function draw (ctx) {
  var img = new Image()
  img.src = 'src/sprites/characters.png'
  ctx.drawImage(
    img,
    9, // The X coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.
    42, // The Y coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.
    this.size, // The width of the sub-rectangle of the source image to draw into the destination context. If not specified, the entire rectangle from the coordinates specified by sx and sy to the bottom-right corner of the image is used.
    this.size, // The height of the sub-rectangle of the source image to draw into the destination context.
    this.x, // The X coordinate in the destination canvas at which to place the top-left corner of the source image.
    this.y, // The Y coordinate in the destination canvas at which to place the top-left corner of the source image.
    this.size, // The width to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in width when drawn.
    this.size // The height to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in height when drawn.
  )
}

Player.prototype.move = function move (ctx, direction) {
  switch (direction) {
    case 'up': // up.
      this.y -= this.speed
      break
    case 'down': // down.
      this.y += this.speed
      break
    case 'right': // right.
      this.x += this.speed
      break
    case 'left': // left.
      this.x -= this.speed
      break
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Monster__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Player__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Scene__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = World;
// people and monsters




function World () {
  const monsters = this.monsters = []

  var monster1 = new __WEBPACK_IMPORTED_MODULE_0__Monster__["a" /* default */](10, 10)
  var monster2 = new __WEBPACK_IMPORTED_MODULE_0__Monster__["a" /* default */](50, 50)
  var monster3 = new __WEBPACK_IMPORTED_MODULE_0__Monster__["a" /* default */](81, 50)
  var monster4 = new __WEBPACK_IMPORTED_MODULE_0__Monster__["a" /* default */](111, 50)
  var monster5 = new __WEBPACK_IMPORTED_MODULE_0__Monster__["a" /* default */](141, 50)
  var monster6 = new __WEBPACK_IMPORTED_MODULE_0__Monster__["a" /* default */](171, 50)

  monsters.push(monster1, monster2, monster3, monster4, monster5, monster6)

  const players = this.players = []

  var player1 = new __WEBPACK_IMPORTED_MODULE_1__Player__["a" /* default */](10, 50)

  players.push(player1)
  this.scene = new __WEBPACK_IMPORTED_MODULE_2__Scene__["a" /* default */](16, 16)
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Monster__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Player__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__World__ = __webpack_require__(2);




function init () {
  var canvas = document.createElement('canvas')

  canvas.height = 256
  canvas.width = 256

  var ctx = canvas.getContext('2d')

  document.body.appendChild(canvas)
  return { ctx: ctx, canvas: canvas }
}


// For each of these steps, re-create the world.
function step (direction) {
  // sets all pixels in the rectangle defined by starting point and
  // size to transparent black, erasing any previously drawn content.
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  world.scene.draw(ctx, canvas)
  world.monsters.forEach(function (monster) {
    monster.step(world.monsters)
    monster.draw(ctx)
  })

  world.players.forEach(function (player) {
    player.move(ctx, direction)
    player.draw(ctx)
  })
}

var _init = init(),
  ctx = _init.ctx,
  canvas = _init.canvas

const world = new __WEBPACK_IMPORTED_MODULE_2__World__["a" /* default */]()

step()

window.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'ArrowUp':
      step('up')
      break
    case 'ArrowDown':
      step('down')
      break
    case 'ArrowRight':
      step('right')
      break
    case 'ArrowLeft':
      step('left')
      break
  }
}, false)


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Scene;
function Scene (height, width) {
  this.height = height
  this.width = width
  this.tiles = ['rgb(223, 215, 138)', 'rgb(38, 38, 35)']
  this.grid = []
  this.initialize()
  this.setBorder()
}

Scene.prototype.draw = function (ctx, canvas) {
  const cellWidth = canvas.width / this.width
  const cellHeight = canvas.height / this.height
  for (let y = 0; y < this.height; y++) {
    const row = this.grid[y]
    for (let x = 0; x < this.width; x++) {
      const value = row[x]
      ctx.fillStyle = this.tiles[value]
      ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight)
    }
  }
}

Scene.prototype.initialize = function initialize () {
  this.grid = []

  for (let y = 0; y < this.height; y++) {
    const row = []
    for (let x = 0; x < this.width; x++) {
      row.push(0)
    }
    this.grid.push(row)
  }
}

Scene.prototype.setBorder = function setBorder () {

  for (let y = 0; y < this.height; y++) {
    const row = this.grid[y]
    for (let x = 0; x < this.width; x++) {
      const col = row[x]
      if (x === 0 || x === this.width - 1 || y === 0 || y === this.height - 1) {
        row[x] = 1
      }
    }
  }
}


/***/ })
/******/ ]);