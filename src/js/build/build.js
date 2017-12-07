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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Monster;
function Monster (x, y) {
  this.img = document.getElementById('spritesheet')
  this.sourceX = 8
  this.sourceY = 114
  this.x = x
  this.y = y
  this.entityNumber = 3
  this.size = 30
  this.speed = 30
  this.category = 'monster'
  this.collidable = 'yes'
  this.collidableTiles = []
  this.exp = 0
  this.health = 5
  this.attackPower = 1
  this.defense = 0
  this.expReward = 5
}

Monster.prototype.draw = function draw (ctx) {
  ctx.drawImage(this.img, this.sourceX, this.sourceY, this.size, this.size,
    this.x, this.y, this.size, this.size)
}

Monster.prototype.step = function step (canvasLength, world) {
  const speed = this.speed / 30
  const y = this.y / 30
  const x = this.x / 30
  // Collates all the colliable tiles into this.collidableTiles.
  if (!world) return
  world.scene.tiles.forEach(function (Tile) {
    let tileObj = new Tile()
    if (tileObj.collidable === 'yes') {
      this.collidableTiles.push(tileObj.entityNumber)
    }
  }, this)

  // Randomly makes the monster move one step in one of 4 directions.
  const next = {x: this.x, y: this.y}
  const nextY = next.y / 30
  const nextX = next.x / 30
  switch (Math.floor(Math.random() * 4)) {
    case 0: // up.
      // Prevents monster from moving outside the canvas when moving up.
      if (next.y - this.speed < 0) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[nextY - speed][x]) >= 0) return
      next.y -= this.speed
      break
    case 1: // down.
      // Prevents monster from moving outside the canvas when moving down.
      if (this.y + this.speed * 2 > canvasLength) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[nextY + speed][x]) >= 0) return
      next.y += this.speed
      break
    case 2: // right.
      // Prevents monster from moving outside the canvas when moving right.
      if (this.x + this.speed * 2 > canvasLength) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[y][nextX + speed]) >= 0) return
      next.x += this.speed
      break
    case 3: // left.
      // Prevents monster from moving outside the canvas when moving left.
      if (this.x - this.speed < 0) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[y][nextX - speed]) >= 0) return
      next.x -= this.speed
      break
  }
  // Collision detection between monsters.
  let canMove = true
  world.monsters.forEach(function (monster) {
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
    this.step(world.monsters)
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Player;
function Player (x, y) {
  this.img = document.getElementById('spritesheet')
  this.sourceX = 9
  this.sourceY = 42
  this.x = x
  this.y = y
  this.entityNumber = 2
  this.size = 30
  this.speed = 30
  this.category = 'character'
  this.collidable = 'yes'
  this.collidableTiles = []
  this.exp = 0
  this.health = 10
  this.attackPower = 3
  this.defense = 0
}

Player.prototype.draw = function draw (ctx) {
  ctx.drawImage(this.img, this.sourceX, this.sourceY, this.size, this.size,
    this.x, this.y, this.size, this.size)
}

// Moves the player one step.
Player.prototype.move = function move (ctx, direction, canvas, world) {
  const speed = this.speed / 30
  const y = this.y / 30
  const x = this.x / 30
  world.scene.tiles.forEach(function (Tile) {
    let tileObj = new Tile()
    if (tileObj.collidable === 'yes') {
      this.collidableTiles.push(tileObj.entityNumber)
    }
  }, this)
  switch (direction) {
    case 'up':
      // Prevents player from moving outside the canvas when moving up.
      if (this.y - this.speed < 0) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[y - speed][x]) >= 0) return
      this.y -= this.speed
      break
    case 'down':
      // Prevents player from moving outside the canvas when moving down.
      if (this.y + this.speed * 2 > canvas.height) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[y + speed][x]) >= 0) return
      this.y += this.speed
      break
    case 'right':
      // Prevents player from moving outside the canvas when moving right.
      if (this.x + this.speed * 2 > canvas.width) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[y][x + speed]) >= 0) return
      this.x += this.speed
      break
    case 'left':
      // Prevents player from moving outside the canvas when moving left.
      if (this.x - this.speed < 0) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[y][x - speed]) >= 0) return
      this.x -= this.speed
      break
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__World__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tileSelector__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tileDragging__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__playerControls__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_startMenu__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_gameMenu__ = __webpack_require__(14);






// import touchEvents from './touchEvents'

function init () {
  var canvas = document.createElement('canvas')
  canvas.height = 600
  canvas.width = 600
  var ctx = canvas.getContext('2d')
  document.querySelector('.game').appendChild(canvas)
  return { ctx, canvas }
}

// For each of these steps, re-create the world.
function step (direction) {
  // Erases canvas.
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  world.scene.draw(ctx, canvas)
  world.monsters.forEach(function (monster) {
    monster.step(canvas.height, world)
    monster.draw(ctx)
  })
  world.players.forEach(function (player) {
    player.move(ctx, direction, canvas, world)
    player.draw(ctx)
  })
}

const { ctx, canvas } = init()
const world = new __WEBPACK_IMPORTED_MODULE_0__World__["a" /* default */]()
Object(__WEBPACK_IMPORTED_MODULE_1__tileSelector__["a" /* default */])(canvas)
Object(__WEBPACK_IMPORTED_MODULE_2__tileDragging__["a" /* default */])(canvas, world, ctx)

window.addEventListener('load', function (event) {
  step()
}, false)

Object(__WEBPACK_IMPORTED_MODULE_4__menu_startMenu__["a" /* default */])()
Object(__WEBPACK_IMPORTED_MODULE_5__menu_gameMenu__["a" /* default */])()
// touchEvents()
Object(__WEBPACK_IMPORTED_MODULE_3__playerControls__["a" /* default */])(step)


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = World;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_characters_Monster__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_characters_Player__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Scene__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__canvasDimensions__ = __webpack_require__(9);





// Contains players and monsters.
function World () {
  const gridcells = 20
  const monsters = this.monsters = []
  monsters.push(new __WEBPACK_IMPORTED_MODULE_0__entities_characters_Monster__["a" /* default */](30, 30), new __WEBPACK_IMPORTED_MODULE_0__entities_characters_Monster__["a" /* default */](60, 60))
  const players = this.players = []
  players.push(new __WEBPACK_IMPORTED_MODULE_1__entities_characters_Player__["a" /* default */](240, 240))
  // Set the initial height and width of the grid (or game board) in cells.
  this.scene = new __WEBPACK_IMPORTED_MODULE_2__Scene__["a" /* default */](gridcells, gridcells)
}

World.prototype.addEntity = function addEntity ([worldX, worldY], entityType) {
  if (entityType) {
    this.scene.grid[worldY][worldX] = Number(entityType)
  }
}

// Returns the x and y coordinates in terms of grid cells.
World.prototype.screenToWorld = function screenToWorld ([screenX, screenY]) {
  const {canvasWidth, canvasHeight} = Object(__WEBPACK_IMPORTED_MODULE_3__canvasDimensions__["a" /* default */])() // dimensions in pixels
  const tilesWidth = canvasWidth / this.scene.width
  const tilesHeight = canvasHeight / this.scene.height
  return [Math.floor(screenX / tilesWidth), Math.floor(screenY / tilesHeight)]
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Scene;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_characters_Monster__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_characters_Player__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_terrain_Wall__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_terrain_Floor__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_terrain_Grass__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_terrain_Tree__ = __webpack_require__(8);







function Scene (height, width) {
  this.height = height
  this.width = width
  this.grid = []
  this.initialize()
  this.setBorder()
  this.setRandomWalls()
  this.tiles = [__WEBPACK_IMPORTED_MODULE_3__entities_terrain_Floor__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__entities_terrain_Wall__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__entities_characters_Player__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__entities_characters_Monster__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__entities_terrain_Grass__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__entities_terrain_Tree__["a" /* default */]]
}

// Allows different tiles to be used in each grid cell.
Scene.prototype.draw = function (ctx, canvas) {
  // cellHeight is the height of each tile in px.
  const cellHeight = canvas.height / this.height
  const cellWidth = canvas.width / this.width
  for (let y = 0; y < this.height; y++) {
    const row = this.grid[y]
    for (let x = 0; x < this.width; x++) {
      const value = row[x]
      const tile = new this.tiles[value]()
      const img = tile.img
      ctx.drawImage(img, tile.sourceX, tile.sourceY, cellWidth, cellHeight,
        x * cellWidth, y * cellHeight, cellWidth, cellHeight)
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
      if (x === 0 || x === this.width - 1 || y === 0 || y === this.height - 1) {
        row[x] = 1
      }
    }
  }
}
Scene.prototype.setRandomWalls = function setRandomWalls () {
  for (let y = 1; y < this.height - 1; y++) {
    const row = this.grid[y]
    for (let x = 1; x < this.width - 1; x++) {
      row[x] = Math.random() < 0.1 ? 1 : 0
    }
  }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Wall;
function Wall (x, y, entityNumber, ctx) {
  this.img = document.getElementById('wall')
  this.sourceX = 0
  this.sourceY = 0
  this.x = x
  this.y = y
  this.entityNumber = 1
  this.size = 30
  this.category = 'terrain'
  this.collidable = 'yes'
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Wall;
function Wall (x, y, entityNumber, ctx) {
  this.img = document.getElementById('floor')
  this.sourceX = 0
  this.sourceY = 0
  this.x = x
  this.y = y
  this.entityNumber = 0
  this.size = 30
  this.category = 'terrain'
  this.collidable = 'no'
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Grass;
function Grass (x, y, entityNumber, ctx) {
  this.img = document.getElementById('grass')
  this.sourceX = 0
  this.sourceY = 0
  this.x = x
  this.y = y
  this.entityNumber = 4
  this.size = 30
  this.category = 'terrain'
  this.collidable = 'no'
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Grass;
function Grass (x, y, entityNumber, ctx) {
  this.img = document.getElementById('tree')
  this.sourceX = 0
  this.sourceY = 0
  this.x = x
  this.y = y
  this.entityNumber = 5
  this.size = 30
  this.category = 'terrain'
  this.collidable = 'yes'
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = canvasDimensions;
function canvasDimensions () {
  const canvasLeft = document.querySelector('canvas').getBoundingClientRect().left
  const canvasRight = document.querySelector('canvas').getBoundingClientRect().right
  const canvasTop = document.querySelector('canvas').getBoundingClientRect().top
  const canvasBottom = document.querySelector('canvas').getBoundingClientRect().bottom
  const canvasWidth = canvasRight - canvasLeft
  const canvasHeight = canvasBottom - canvasTop
  return {canvasWidth, canvasHeight}
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = tileSelector;
function tileSelector (canvas) {
  if (!document.querySelector('.tile-list')) return
  const tiles = document.querySelector('.tile-list').children
  const currentTile = document.querySelector('.currently-selected-tile')
  const resetTileButton = document.querySelector('.reset-tile-button')
  const mouseInfo = document.querySelector('.mouse-info')

  // Resets currently selected tile.
  function removeCurrentlySelectedTile (canvas) {
    if (currentTile.childNodes[1]) {
      currentTile.removeChild(currentTile.childNodes[1])
    }
    if (mouseInfo.childNodes[0]) {
      mouseInfo.removeChild(mouseInfo.childNodes[0])
    }
    if (mouseInfo.childNodes[1]) {
      mouseInfo.removeChild(mouseInfo.childNodes[1])
    }
    if (canvas.getAttribute('data-cursor')) {
      canvas.removeAttribute('data-cursor')
    }
  }
  // When each of the tiles are clicked, update the tile selected.
  function tileSelect (canvas) {
    if (tiles.length === 0) return
    for (var i = 0; i < tiles.length; i++) {
      tiles[i].addEventListener('click', function (event) {
        const sprite1 = document.createElement('div')
        sprite1.setAttribute('draggable', 'true')
        const dataEntityNumber = event.target.getAttribute('data-entity-number')
        sprite1.setAttribute('data-entity-number', dataEntityNumber)
        sprite1.className = event.target.className
        const sprite2 = sprite1.cloneNode(true)
        removeCurrentlySelectedTile(canvas)
        currentTile.appendChild(sprite1)
        mouseInfo.appendChild(sprite2)
        canvas.setAttribute('data-cursor', 'pointer')
      }, false)
    }
  }
  tileSelect(canvas)

  // On reset button click, reset the currently selected tile.
  if (resetTileButton) {
    resetTileButton.addEventListener('click', function (event) {
      removeCurrentlySelectedTile(canvas)
    }, false)
  }

  // Displays the tile near the mouse cursor when a tile is selected.
  canvas.addEventListener('mousemove', function mouseInfoPosition (event) {
    if (!currentTile) return
    if (event.pageY > window.innerHeight - 60) {
      if (currentTile.children[0]) {
        mouseInfo.style.left = String(event.pageX - 40) + 'px'
        mouseInfo.style.top = String(event.pageY - 40) + 'px'
      }
    } else {
      if (currentTile.children[0]) {
        mouseInfo.style.left = String(event.pageX + 20) + 'px'
        mouseInfo.style.top = String(event.pageY + 20) + 'px'
      }
    }
  }, false)
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = tileDragging;
function tileDragging (canvas, world, ctx) {
  const currentTile = document.querySelector('.currently-selected-tile')
  if (!currentTile) return
  let mouseHeld = false
  let hoveredOverTiles = []
  let duplicate = 0
  function redraw () {
    world.scene.draw(ctx, canvas)
    world.monsters.forEach(function (monster) {
      monster.draw(ctx)
    })
    world.players.forEach(function (player) {
      player.draw(ctx)
    })
  }

  const canvasLeft = document.querySelector('canvas').getBoundingClientRect().left
  const bodyLeft = document.body.getBoundingClientRect().left
  const marginLeft = canvasLeft - bodyLeft

  canvas.addEventListener('mousedown', function (event) {
    mouseHeld = true
    hoveredOverTiles = []
    const pos = world.screenToWorld([event.clientX - marginLeft, event.clientY])
    hoveredOverTiles.push(pos)
  }, false)

  // Canvas is redrawn with the tiles in hoveredOverTiles array.
  canvas.addEventListener('mouseup', function (event) {
    if (!currentTile) return
    mouseHeld = false
    if (!currentTile.children[0]) return
    if (!currentTile.children[0].getAttribute('data-entity-number')) return
    for (var j = 0; j < hoveredOverTiles.length; j++) {
      world.addEntity(hoveredOverTiles[j], currentTile.children[0].getAttribute('data-entity-number'))
    }
    redraw()
  }, false)

  // Positions of the tiles that were hovered on during the mouse hold will be
  // added to the hoveredOverTiles array. This is then drawn on canvas.
  canvas.addEventListener('mousemove', function (event) {
    if (!currentTile) return
    if (!currentTile.children[0]) return
    if (!currentTile.children[0].getAttribute('data-entity-number')) return
    if (mouseHeld === true) {
      const pos = world.screenToWorld([event.clientX - marginLeft, event.clientY])
      duplicate = 0
      for (var i = 0; i < hoveredOverTiles.length; i++) {
        if ((hoveredOverTiles[i][0] === pos[0]) && (hoveredOverTiles[i][1] === pos[1])) {
          duplicate += 1
        }
      }
      if (duplicate === 0) {
        hoveredOverTiles.push(pos)
      }
      for (var j = 0; j < hoveredOverTiles.length; j++) {
        world.addEntity(hoveredOverTiles[j], currentTile.children[0].getAttribute('data-entity-number'))
      }
      redraw()
    }
  }, false)
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function playerControls (step) {
  var map = {}
  function playerControls (event) {
    map[event.key] = event.type === 'keydown'
    if (map['ArrowUp']) {
      step('up')
    } else if (map['ArrowDown']) {
      step('down')
    } else if (map['ArrowLeft']) {
      step('left')
    } else if (map['ArrowRight']) {
      step('right')
    }
  }
  document.addEventListener('keyup', function (event) {
    playerControls(event)
  }, false)
  document.addEventListener('keydown', function (event) {
    playerControls(event)
  }, false)
}

/* harmony default export */ __webpack_exports__["a"] = (playerControls);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startMenu;
function startMenu () {
  const menu = document.querySelector('.menu')
  const overlay = document.querySelector('.overlay')
  const mouseInfo = document.querySelector('.mouse-info')
  const startMenu = document.querySelector('.start-menu')
  const helpControlsMenu = document.querySelector('.help-controls')
  const gameMenu = document.querySelector('.game-menu')
  const gameEditor = document.querySelector('.tile-selector')
  const about = document.querySelector('.about')
  // const backToStart = document.querySelectorAll('.back-to-start')
  // backToStart.forEach(function (button, index) {
  //   button.addEventListener('click', function (event) {
  //
  //   }, false)
  // })

  function hideAllSections () {
    const sections = document.querySelectorAll('.menu__section-container section')
    for (var i = 0; i < sections.length; i++) {
      sections[i].setAttribute('data-hidden', 'yes')
    }
  }

  function menuInteraction (selectedItem) {
    if (selectedItem === 'Continue') {
      menu.setAttribute('data-hidden', 'yes')
      overlay.setAttribute('data-hidden', 'yes')
      mouseInfo.setAttribute('style', 'display: block;')
      window.localStorage.setItem('inGame', 'yes')
    }
    if (selectedItem === 'Help/Controls') {
      if (helpControlsMenu.getAttribute('data-hidden') === 'no') {
        helpControlsMenu.setAttribute('data-hidden', 'yes')
        startMenu.setAttribute('data-hidden', 'no')
      } else {
        startMenu.setAttribute('data-hidden', 'yes')
        helpControlsMenu.setAttribute('data-hidden', 'no')
      }
    }
    if (selectedItem === 'Game Editor') {
      if (gameEditor.getAttribute('data-hidden') === 'no') {
        gameEditor.setAttribute('data-hidden', 'yes')
        startMenu.setAttribute('data-hidden', 'no')
      } else {
        startMenu.setAttribute('data-hidden', 'yes')
        gameEditor.setAttribute('data-hidden', 'no')
      }
    }
    if (selectedItem === 'About') {
      if (about.getAttribute('data-hidden') === 'no') {
        about.setAttribute('data-hidden', 'yes')
        startMenu.setAttribute('data-hidden', 'no')
      } else {
        startMenu.setAttribute('data-hidden', 'yes')
        about.setAttribute('data-hidden', 'no')
      }
    }
  }

  // Arrow key events.
  window.addEventListener('keydown', function (event) {
    // console.log(event.key)
    if (startMenu.getAttribute('data-hidden', 'no')) {
      if (event.key === 'ArrowDown') {
        // Select start menu item below current one.
        const selectedMenuItem = document.querySelector('.start-menu__menu li.start-selected')
        if (selectedMenuItem.nextElementSibling) {
          selectedMenuItem.className = ''
          selectedMenuItem.nextElementSibling.className = 'start-selected'
        }
      }
      if (event.key === 'ArrowUp') {
        // Select start menu item above current one.
        const selectedMenuItem = document.querySelector('.start-menu__menu li.start-selected')
        if (selectedMenuItem.previousElementSibling) {
          selectedMenuItem.className = ''
          selectedMenuItem.previousElementSibling.className = 'start-selected'
        }
      }
    }

    if (event.key === 'Enter') {
      const selectedMenuItem = document.querySelector('.start-menu__menu li.start-selected').textContent
      menuInteraction(selectedMenuItem)
    }
  }, false)

  const startMenuItems = document.querySelectorAll('.start-menu__menu li')

  function clearStartMenuItems () {
    startMenuItems.forEach(function (item, index) {
      item.className = ''
      console.log('deleted')
    })
  }

  startMenuItems.forEach(function (item, index) {
    item.addEventListener('click', function (event) {
      if (startMenu.getAttribute('data-hidden', 'no')) {
        clearStartMenuItems()
        event.target.className = 'start-selected'
        menuInteraction(event.target.textContent)
      }
    }, false)
  })

  // Escape key events.
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      // If not in game do this.
      if (window.localStorage.getItem('inGame') === 'no' || !window.localStorage.getItem('inGame')) {
        // If the menu is shown, then hide the menu.
        if (menu.getAttribute('data-hidden') === 'no') {
          menu.setAttribute('data-hidden', 'yes')
          overlay.setAttribute('data-hidden', 'yes')
          mouseInfo.setAttribute('style', 'display: block;')
        } else { // If the menu is hidden, show the menu.
          menu.setAttribute('data-hidden', 'no')
          overlay.setAttribute('data-hidden', 'no')
          mouseInfo.setAttribute('style', 'display: none;')
          hideAllSections()
          startMenu.setAttribute('data-hidden', 'no')
        }
      }
      // If in game do this.
      if (window.localStorage.getItem('inGame') === 'yes') {
        // If the menu is shown, then hide the menu.
        if (menu.getAttribute('data-hidden') === 'no') {
          menu.setAttribute('data-hidden', 'yes')
          overlay.setAttribute('data-hidden', 'yes')
          mouseInfo.setAttribute('style', 'display: block;')
        } else { // If the menu is hidden, show the menu.
          menu.setAttribute('data-hidden', 'no')
          overlay.setAttribute('data-hidden', 'no')
          mouseInfo.setAttribute('style', 'display: none;')
          hideAllSections()
          gameMenu.setAttribute('data-hidden', 'no')
        }
      }
    }
  }, false)
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = gameMenu;
function gameMenu () {
  const menu = document.querySelector('.menu')
  const overlay = document.querySelector('.overlay')
  const mouseInfo = document.querySelector('.mouse-info')
  const startMenu = document.querySelector('.start-menu')
  const gameMenu = document.querySelector('.game-menu')

  if (window.localStorage.getItem('inGame') === 'yes') {
    menu.setAttribute('data-hidden', 'yes')
    overlay.setAttribute('data-hidden', 'yes')
    mouseInfo.setAttribute('style', 'display: block;')
  }

  function hideAllSections () {
    const sections = document.querySelectorAll('.menu__section-container section')
    for (var i = 0; i < sections.length; i++) {
      sections[i].setAttribute('data-hidden', 'yes')
    }
  }

  // Arrow key events.
  window.addEventListener('keydown', function (event) {
    // console.log(event.key)
    if (gameMenu.getAttribute('data-hidden') === 'no') {
      if (event.key === 'ArrowDown') {
        // Select game menu item below current one.
        const selectedGameItem = document.querySelector('.game-menu__menu li.game-selected')
        if (selectedGameItem.nextElementSibling) {
          selectedGameItem.className = ''
          selectedGameItem.nextElementSibling.className = 'game-selected'
        }
      }
      if (event.key === 'ArrowUp') {
        // Select game menu item above current one.
        const selectedGameItem = document.querySelector('.game-menu__menu li.game-selected')
        if (selectedGameItem.previousElementSibling) {
          selectedGameItem.className = ''
          selectedGameItem.previousElementSibling.className = 'game-selected'
        }
      }
    }

    if (event.key === 'Enter') {
      if (gameMenu.getAttribute('data-hidden') === 'no') {
        const selectedGameItem = document.querySelector('.game-menu__menu li.game-selected')
        if (selectedGameItem.textContent === 'Exit Game') {
          window.localStorage.setItem('inGame', 'no')
          menu.setAttribute('data-hidden', 'no')
          overlay.setAttribute('data-hidden', 'no')
          mouseInfo.setAttribute('style', 'display: none;')
          hideAllSections()
          startMenu.setAttribute('data-hidden', 'no')
        }
      }
    }
  }, false)
}


/***/ })
/******/ ]);