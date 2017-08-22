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
const img = document.createElement('img')
img.src = 'src/sprites/characters-min.png'

function Monster (x, y) {
  this.x = x
  this.y = y
  this.entityNumber = 3
  this.size = 30
  this.speed = 30
  this.category = 'monster'
  this.sourceX = 8
  this.sourceY = 114
  this.source = 'src/sprites/characters-min.png'
  this.collidable = 'yes'
  this.collidableTiles = []
}

Monster.prototype.draw = function draw (ctx) {
  ctx.drawImage(img, this.sourceX, this.sourceY, this.size, this.size,
    this.x, this.y, this.size, this.size)
}

Monster.prototype.step = function step (monsters, canvasLength, grid, tiles) {
  const speed = this.speed / 30
  const y = this.y / 30
  const x = this.x / 30
  // Collates all the colliable tiles into this.collidableTiles.
  if (!tiles) return
  tiles.forEach(function (Tile) {
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
      if (this.collidableTiles.indexOf(grid[nextY - speed][x]) >= 0) return
      next.y -= this.speed
      break
    case 1: // down.
      // Prevents monster from moving outside the canvas when moving down.
      if (this.y + this.speed * 2 > canvasLength) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(grid[nextY + speed][x]) >= 0) return
      next.y += this.speed
      break
    case 2: // right.
      // Prevents monster from moving outside the canvas when moving right.
      if (this.x + this.speed * 2 > canvasLength) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(grid[y][nextX + speed]) >= 0) return
      next.x += this.speed
      break
    case 3: // left.
      // Prevents monster from moving outside the canvas when moving left.
      if (this.x - this.speed < 0) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(grid[y][nextX - speed]) >= 0) return
      next.x -= this.speed
      break
  }
  // Collision detection between monsters.
  let canMove = true
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
const img = document.createElement('img')
img.src = 'src/sprites/characters-min.png'

function Player (x, y, world) {
  this.x = x
  this.y = y
  this.entityNumber = 2
  this.size = 30
  this.speed = 30
  this.world = world
  this.category = 'character'
  this.sourceX = 9
  this.sourceY = 42
  this.source = 'src/sprites/characters-min.png'
  this.collidable = 'yes'
  this.collidableTiles = []
}

Player.prototype.draw = function draw (ctx) {
  ctx.drawImage(img, this.sourceX, this.sourceY, this.size, this.size,
    this.x, this.y, this.size, this.size)
}

// Moves the player one step.
Player.prototype.move = function move (ctx, direction, canvas, grid, tiles) {
  const speed = this.speed / 30
  const y = this.y / 30
  const x = this.x / 30
  tiles.forEach(function (Tile) {
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
      if (this.collidableTiles.indexOf(grid[y - speed][x]) >= 0) return
      this.y -= this.speed
      break
    case 'down':
      // Prevents player from moving outside the canvas when moving down.
      if (this.y + this.speed * 2 > canvas.height) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(grid[y + speed][x]) >= 0) return
      this.y += this.speed
      break
    case 'right':
      // Prevents player from moving outside the canvas when moving right.
      if (this.x + this.speed * 2 > canvas.width) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(grid[y][x + speed]) >= 0) return
      this.x += this.speed
      break
    case 'left':
      // Prevents player from moving outside the canvas when moving left.
      if (this.x - this.speed < 0) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(grid[y][x - speed]) >= 0) return
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TileSelector__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tileDragging__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__playerControls__ = __webpack_require__(11);





function init () {
  var canvas = document.createElement('canvas')
  canvas.height = 600
  canvas.width = 600
  var ctx = canvas.getContext('2d')
  document.body.appendChild(canvas)
  return { ctx, canvas }
}

// For each of these steps, re-create the world.
function step (direction) {
  // Erases canvas.
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  world.scene.draw(ctx, canvas)
  const canvasLength = canvas.height
  world.monsters.forEach(function (monster) {
    monster.step(world.monsters, canvasLength, world.scene.grid, world.scene.tiles)
    monster.draw(ctx)
  })
  world.players.forEach(function (player) {
    player.move(ctx, direction, canvas, world.scene.grid, world.scene.tiles)
    player.draw(ctx)
  })
}

var _init = init()
var ctx = _init.ctx
var canvas = _init.canvas
const world = new __WEBPACK_IMPORTED_MODULE_0__World__["a" /* default */]()
__WEBPACK_IMPORTED_MODULE_1__TileSelector__["a" /* default */]()
__WEBPACK_IMPORTED_MODULE_2__tileDragging__["a" /* default */](canvas, world, ctx)

window.addEventListener('load', function (event) {
  step()
}, false)

__WEBPACK_IMPORTED_MODULE_3__playerControls__["a" /* default */](step)


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = World;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_characters_Monster__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_characters_Player__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Scene__ = __webpack_require__(4);
// people and monsters




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
World.prototype.screenToWorld = function screenToWorld ([screenX, screenY], canvas) {
  const tilesWidth = canvas.width / this.scene.width
  const tilesHeight = canvas.height / this.scene.height
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
      const img = document.createElement('img')
      img.src = tile.source
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
  this.x = x
  this.y = y
  this.entityNumber = 1
  this.size = 30
  this.source = 'src/sprites/wall.png'
  this.sourceX = 0
  this.sourceY = 0
  this.category = 'terrain'
  this.collidable = 'yes'
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Wall;
function Wall (x, y, entityNumber, ctx) {
  this.x = x
  this.y = y
  this.entityNumber = 0
  this.size = 30
  this.source = 'src/sprites/floor.png'
  this.sourceX = 0
  this.sourceY = 0
  this.category = 'terrain'
  this.collidable = 'no'
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Grass;
function Grass (x, y, entityNumber, ctx) {
  this.x = x
  this.y = y
  this.entityNumber = 4
  this.size = 30
  this.source = 'src/sprites/grass-attempt-1.png'
  this.sourceX = 0
  this.sourceY = 0
  this.category = 'terrain'
  this.collidable = 'no'
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Grass;
function Grass (x, y, entityNumber, ctx) {
  this.x = x
  this.y = y
  this.entityNumber = 5
  this.size = 30
  this.source = 'src/sprites/tree.png'
  this.sourceX = 0
  this.sourceY = 0
  this.category = 'terrain'
  this.collidable = 'yes'
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = TileSelector;
function TileSelector () {
  if (!document.querySelector('.tile-list')) return
  const tiles = document.querySelector('.tile-list').children
  const currentTile = document.querySelector('.currently-selected-tile')
  const resetTileButton = document.querySelector('.reset-tile-button')
  const mouseInfo = document.querySelector('.mouse-info')

  // Resets currently selected tile.
  function removeCurrentlySelectedTile () {
    if (currentTile.childNodes[1]) {
      currentTile.removeChild(currentTile.childNodes[1])
    }
    if (mouseInfo.childNodes[1]) {
      mouseInfo.removeChild(mouseInfo.childNodes[1])
    }
  }

  // When each of the tiles are clicked, update the tile selected.
  if (tiles.length === 0) return
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', function (event) {
      const sprite1 = document.createElement('div')
      sprite1.setAttribute('draggable', 'true')
      const dataEntityNumber = event.target.getAttribute('data-entity-number')
      sprite1.setAttribute('data-entity-number', dataEntityNumber)
      sprite1.className = event.target.className
      const sprite2 = sprite1.cloneNode(true)
      removeCurrentlySelectedTile()
      currentTile.appendChild(sprite1)
      mouseInfo.appendChild(sprite2)
    }, false)
  }

  // On reset button click, reset the currently selected tile.
  if (resetTileButton) {
    resetTileButton.addEventListener('click', function (event) {
      removeCurrentlySelectedTile()
    }, false)
  }

  // When the esc key is pressed, clear the currently selected tile.
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      removeCurrentlySelectedTile()
    }
  }, false)

  // Displays the tile near the mouse cursor when a tile is selected.
  document.addEventListener('mousemove', function mouseInfoPosition (event) {
    console.log(event.pageX, event.pageY)
    if (!currentTile) return
    if (currentTile.children[0]) {
      mouseInfo.style.left = String(event.pageX + 20) + 'px'
      mouseInfo.style.top = String(event.pageY + 20) + 'px'
    }
  }, false)
}


/***/ }),
/* 10 */
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
  canvas.addEventListener('mousedown', function (event) {
    mouseHeld = true
    hoveredOverTiles = []
    const pos = world.screenToWorld([
      event.clientX,
      event.clientY
    ], canvas)
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
      const pos = world.screenToWorld([
        event.clientX,
        event.clientY
      ], canvas)
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
/* 11 */
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


/***/ })
/******/ ]);