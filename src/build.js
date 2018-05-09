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

"use strict";


var _World = __webpack_require__(3);

var _World2 = _interopRequireDefault(_World);

var _tileSelector = __webpack_require__(10);

var _tileSelector2 = _interopRequireDefault(_tileSelector);

var _tileDragging = __webpack_require__(11);

var _tileDragging2 = _interopRequireDefault(_tileDragging);

var _playerControls = __webpack_require__(12);

var _playerControls2 = _interopRequireDefault(_playerControls);

var _startMenu = __webpack_require__(13);

var _startMenu2 = _interopRequireDefault(_startMenu);

var _gameMenu = __webpack_require__(14);

var _gameMenu2 = _interopRequireDefault(_gameMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import touchEvents from './touchEvents'

function init() {
  var canvas = document.createElement('canvas');
  canvas.height = 600;
  canvas.width = 600;
  var ctx = canvas.getContext('2d');
  document.querySelector('.game').appendChild(canvas);
  return { ctx: ctx, canvas: canvas };
}

// For each of these steps, re-create the world.
function step(direction) {
  // Erases canvas.
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  world.scene.draw(ctx, canvas);
  world.monsters.forEach(function (monster) {
    monster.step(canvas.height, world);
    monster.draw(ctx);
  });
  world.players.forEach(function (player) {
    player.move(ctx, direction, canvas, world);
    player.draw(ctx);
  });
}

var _init = init(),
    ctx = _init.ctx,
    canvas = _init.canvas;

var world = new _World2.default();
(0, _tileSelector2.default)(canvas);
(0, _tileDragging2.default)(canvas, world, ctx);

window.addEventListener('load', function (event) {
  step();
}, false);

(0, _startMenu2.default)();
(0, _gameMenu2.default)();
// touchEvents()
(0, _playerControls2.default)(step);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Monster = function Monster(x, y) {
  _classCallCheck(this, Monster);

  this.img = document.getElementById('spritesheet');
  this.sourceX = 8;
  this.sourceY = 114;
  this.x = x;
  this.y = y;
  this.entityNumber = 3;
  this.size = 30;
  this.speed = 30;
  this.category = 'monster';
  this.collidable = 'yes';
  this.collidableTiles = [];
  this.exp = 0;
  this.health = 5;
  this.attackPower = 1;
  this.defense = 0;
  this.expReward = 5;
};

exports.default = Monster;


Monster.prototype.draw = function draw(ctx) {
  ctx.drawImage(this.img, this.sourceX, this.sourceY, this.size, this.size, this.x, this.y, this.size, this.size);
};

Monster.prototype.step = function step(canvasLength, world) {
  var speed = this.speed / 30;
  var y = this.y / 30;
  var x = this.x / 30;
  // Collates all the colliable tiles into this.collidableTiles.
  if (!world) return;
  world.scene.tiles.forEach(function (Tile) {
    var tileObj = new Tile();
    if (tileObj.collidable === 'yes') {
      this.collidableTiles.push(tileObj.entityNumber);
    }
  }, this);

  // Randomly makes the monster move one step in one of 4 directions.
  var next = { x: this.x, y: this.y };
  var nextY = next.y / 30;
  var nextX = next.x / 30;
  switch (Math.floor(Math.random() * 4)) {
    case 0:
      // up.
      // Prevents monster from moving outside the canvas when moving up.
      if (next.y - this.speed < 0) return;
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[nextY - speed][x]) >= 0) return;
      next.y -= this.speed;
      break;
    case 1:
      // down.
      // Prevents monster from moving outside the canvas when moving down.
      if (this.y + this.speed * 2 > canvasLength) return;
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[nextY + speed][x]) >= 0) return;
      next.y += this.speed;
      break;
    case 2:
      // right.
      // Prevents monster from moving outside the canvas when moving right.
      if (this.x + this.speed * 2 > canvasLength) return;
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[y][nextX + speed]) >= 0) return;
      next.x += this.speed;
      break;
    case 3:
      // left.
      // Prevents monster from moving outside the canvas when moving left.
      if (this.x - this.speed < 0) return;
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[y][nextX - speed]) >= 0) return;
      next.x -= this.speed;
      break;
  }
  // Collision detection between monsters.
  var canMove = true;
  world.monsters.forEach(function (monster) {
    if (monster === this) return;
    if (!canMove) return;
    if (!(monster.x > next.x + this.size || monster.x + monster.size <= next.x || monster.y > next.y + this.size || monster.y + monster.size <= next.y)) {
      canMove = false;
    }
  }, this);
  if (canMove) {
    this.x = next.x;
    this.y = next.y;
  } else {
    this.step(world.monsters);
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function Player(x, y) {
  _classCallCheck(this, Player);

  this.img = document.getElementById('spritesheet');
  this.sourceX = 9;
  this.sourceY = 42;
  this.x = x;
  this.y = y;
  this.entityNumber = 2;
  this.size = 30;
  this.speed = 30;
  this.category = 'character';
  this.collidable = 'yes';
  this.collidableTiles = [];
  this.exp = 0;
  this.health = 10;
  this.attackPower = 3;
  this.defense = 0;
};

exports.default = Player;


Player.prototype.draw = function draw(ctx) {
  ctx.drawImage(this.img, this.sourceX, this.sourceY, this.size, this.size, this.x, this.y, this.size, this.size);
};

// Moves the player one step.
Player.prototype.move = function move(ctx, direction, canvas, world) {
  var speed = this.speed / 30;
  var y = this.y / 30;
  var x = this.x / 30;
  world.scene.tiles.forEach(function (Tile) {
    var tileObj = new Tile();
    if (tileObj.collidable === 'yes') {
      this.collidableTiles.push(tileObj.entityNumber);
    }
  }, this);
  switch (direction) {
    case 'up':
      // Prevents player from moving outside the canvas when moving up.
      if (this.y - this.speed < 0) return;
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[y - speed][x]) >= 0) return;
      this.y -= this.speed;
      break;
    case 'down':
      // Prevents player from moving outside the canvas when moving down.
      if (this.y + this.speed * 2 > canvas.height) return;
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[y + speed][x]) >= 0) return;
      this.y += this.speed;
      break;
    case 'right':
      // Prevents player from moving outside the canvas when moving right.
      if (this.x + this.speed * 2 > canvas.width) return;
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[y][x + speed]) >= 0) return;
      this.x += this.speed;
      break;
    case 'left':
      // Prevents player from moving outside the canvas when moving left.
      if (this.x - this.speed < 0) return;
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[y][x - speed]) >= 0) return;
      this.x -= this.speed;
      break;
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = World;

var _Monster = __webpack_require__(1);

var _Monster2 = _interopRequireDefault(_Monster);

var _Player = __webpack_require__(2);

var _Player2 = _interopRequireDefault(_Player);

var _Scene = __webpack_require__(4);

var _Scene2 = _interopRequireDefault(_Scene);

var _canvasDimensions2 = __webpack_require__(9);

var _canvasDimensions3 = _interopRequireDefault(_canvasDimensions2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Contains players and monsters.
function World() {
  var gridcells = 20;
  var monsters = this.monsters = [];
  monsters.push(new _Monster2.default(30, 30), new _Monster2.default(60, 60));
  var players = this.players = [];
  players.push(new _Player2.default(240, 240));
  // Set the initial height and width of the grid (or game board) in cells.
  this.scene = new _Scene2.default(gridcells, gridcells);
}

World.prototype.addEntity = function addEntity(_ref, entityType) {
  var _ref2 = _slicedToArray(_ref, 2),
      worldX = _ref2[0],
      worldY = _ref2[1];

  if (entityType) {
    this.scene.grid[worldY][worldX] = Number(entityType);
  }
};

// Returns the x and y coordinates in terms of grid cells.
World.prototype.screenToWorld = function screenToWorld(_ref3) {
  var _ref4 = _slicedToArray(_ref3, 2),
      screenX = _ref4[0],
      screenY = _ref4[1];

  var _canvasDimensions = (0, _canvasDimensions3.default)(),
      canvasWidth = _canvasDimensions.canvasWidth,
      canvasHeight = _canvasDimensions.canvasHeight; // dimensions in pixels


  var tilesWidth = canvasWidth / this.scene.width;
  var tilesHeight = canvasHeight / this.scene.height;
  return [Math.floor(screenX / tilesWidth), Math.floor(screenY / tilesHeight)];
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Scene;

var _Monster = __webpack_require__(1);

var _Monster2 = _interopRequireDefault(_Monster);

var _Player = __webpack_require__(2);

var _Player2 = _interopRequireDefault(_Player);

var _Wall = __webpack_require__(5);

var _Wall2 = _interopRequireDefault(_Wall);

var _Floor = __webpack_require__(6);

var _Floor2 = _interopRequireDefault(_Floor);

var _Grass = __webpack_require__(7);

var _Grass2 = _interopRequireDefault(_Grass);

var _Tree = __webpack_require__(8);

var _Tree2 = _interopRequireDefault(_Tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Scene(height, width) {
  this.height = height;
  this.width = width;
  this.grid = [];
  this.initialize();
  this.setBorder();
  this.setRandomWalls();
  this.tiles = [_Floor2.default, _Wall2.default, _Player2.default, _Monster2.default, _Grass2.default, _Tree2.default];
}

// Allows different tiles to be used in each grid cell.
Scene.prototype.draw = function (ctx, canvas) {
  // cellHeight is the height of each tile in px.
  var cellHeight = canvas.height / this.height;
  var cellWidth = canvas.width / this.width;
  for (var y = 0; y < this.height; y++) {
    var row = this.grid[y];
    for (var x = 0; x < this.width; x++) {
      var value = row[x];
      var tile = new this.tiles[value]();
      var img = tile.img;
      ctx.drawImage(img, tile.sourceX, tile.sourceY, cellWidth, cellHeight, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
    }
  }
};
Scene.prototype.initialize = function initialize() {
  this.grid = [];
  for (var y = 0; y < this.height; y++) {
    var row = [];
    for (var x = 0; x < this.width; x++) {
      row.push(0);
    }
    this.grid.push(row);
  }
};
Scene.prototype.setBorder = function setBorder() {
  for (var y = 0; y < this.height; y++) {
    var row = this.grid[y];
    for (var x = 0; x < this.width; x++) {
      if (x === 0 || x === this.width - 1 || y === 0 || y === this.height - 1) {
        row[x] = 1;
      }
    }
  }
};
Scene.prototype.setRandomWalls = function setRandomWalls() {
  for (var y = 1; y < this.height - 1; y++) {
    var row = this.grid[y];
    for (var x = 1; x < this.width - 1; x++) {
      row[x] = Math.random() < 0.1 ? 1 : 0;
    }
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Wall = function Wall(x, y, entityNumber, ctx) {
  _classCallCheck(this, Wall);

  this.img = document.getElementById('wall');
  this.sourceX = 0;
  this.sourceY = 0;
  this.x = x;
  this.y = y;
  this.entityNumber = 1;
  this.size = 30;
  this.category = 'terrain';
  this.collidable = 'yes';
};

exports.default = Wall;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Floor = function Floor(x, y, entityNumber, ctx) {
  _classCallCheck(this, Floor);

  this.img = document.getElementById('floor');
  this.sourceX = 0;
  this.sourceY = 0;
  this.x = x;
  this.y = y;
  this.entityNumber = 0;
  this.size = 30;
  this.category = 'terrain';
  this.collidable = 'no';
};

exports.default = Floor;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Grass = function Grass(x, y, entityNumber, ctx) {
  _classCallCheck(this, Grass);

  this.img = document.getElementById('grass');
  this.sourceX = 0;
  this.sourceY = 0;
  this.x = x;
  this.y = y;
  this.entityNumber = 4;
  this.size = 30;
  this.category = 'terrain';
  this.collidable = 'no';
};

exports.default = Grass;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Grass = function Grass(x, y, entityNumber, ctx) {
  _classCallCheck(this, Grass);

  this.img = document.getElementById('tree');
  this.sourceX = 0;
  this.sourceY = 0;
  this.x = x;
  this.y = y;
  this.entityNumber = 5;
  this.size = 30;
  this.category = 'terrain';
  this.collidable = 'yes';
};

exports.default = Grass;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = canvasDimensions;
function canvasDimensions() {
  var canvasLeft = document.querySelector('canvas').getBoundingClientRect().left;
  var canvasRight = document.querySelector('canvas').getBoundingClientRect().right;
  var canvasTop = document.querySelector('canvas').getBoundingClientRect().top;
  var canvasBottom = document.querySelector('canvas').getBoundingClientRect().bottom;
  var canvasWidth = canvasRight - canvasLeft;
  var canvasHeight = canvasBottom - canvasTop;
  return { canvasWidth: canvasWidth, canvasHeight: canvasHeight };
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tileSelector;
function tileSelector(canvas) {
  if (!document.querySelector('.tile-list')) return;
  var tiles = document.querySelector('.tile-list').children;
  var currentTile = document.querySelector('.currently-selected-tile');
  var resetTileButton = document.querySelector('.reset-tile-button');
  var mouseInfo = document.querySelector('.mouse-info');

  // Resets currently selected tile.
  function removeCurrentlySelectedTile(canvas) {
    if (currentTile.childNodes[1]) {
      currentTile.removeChild(currentTile.childNodes[1]);
    }
    if (mouseInfo.childNodes[0]) {
      mouseInfo.removeChild(mouseInfo.childNodes[0]);
    }
    if (mouseInfo.childNodes[1]) {
      mouseInfo.removeChild(mouseInfo.childNodes[1]);
    }
    if (canvas.getAttribute('data-cursor')) {
      canvas.removeAttribute('data-cursor');
    }
  }
  // When each of the tiles are clicked, update the tile selected.
  function tileSelect(canvas) {
    if (tiles.length === 0) return;
    for (var i = 0; i < tiles.length; i++) {
      tiles[i].addEventListener('click', function (event) {
        var sprite1 = document.createElement('div');
        sprite1.setAttribute('draggable', 'true');
        var dataEntityNumber = event.target.getAttribute('data-entity-number');
        sprite1.setAttribute('data-entity-number', dataEntityNumber);
        sprite1.className = event.target.className;
        var sprite2 = sprite1.cloneNode(true);
        removeCurrentlySelectedTile(canvas);
        currentTile.appendChild(sprite1);
        mouseInfo.appendChild(sprite2);
        canvas.setAttribute('data-cursor', 'pointer');
      }, false);
    }
  }
  tileSelect(canvas);

  // On reset button click, reset the currently selected tile.
  if (resetTileButton) {
    resetTileButton.addEventListener('click', function (event) {
      removeCurrentlySelectedTile(canvas);
    }, false);
  }

  // Displays the tile near the mouse cursor when a tile is selected.
  canvas.addEventListener('mousemove', function mouseInfoPosition(event) {
    if (!currentTile) return;
    if (event.pageY > window.innerHeight - 60) {
      if (currentTile.children[0]) {
        mouseInfo.style.left = String(event.pageX - 40) + 'px';
        mouseInfo.style.top = String(event.pageY - 40) + 'px';
      }
    } else {
      if (currentTile.children[0]) {
        mouseInfo.style.left = String(event.pageX + 20) + 'px';
        mouseInfo.style.top = String(event.pageY + 20) + 'px';
      }
    }
  }, false);
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tileDragging;
function tileDragging(canvas, world, ctx) {
  var currentTile = document.querySelector('.currently-selected-tile');
  if (!currentTile) return;
  var mouseHeld = false;
  var hoveredOverTiles = [];
  var duplicate = 0;
  function redraw() {
    world.scene.draw(ctx, canvas);
    world.monsters.forEach(function (monster) {
      monster.draw(ctx);
    });
    world.players.forEach(function (player) {
      player.draw(ctx);
    });
  }

  var canvasLeft = document.querySelector('canvas').getBoundingClientRect().left;
  var bodyLeft = document.body.getBoundingClientRect().left;
  var marginLeft = canvasLeft - bodyLeft;

  canvas.addEventListener('mousedown', function (event) {
    mouseHeld = true;
    hoveredOverTiles = [];
    var pos = world.screenToWorld([event.clientX - marginLeft, event.clientY]);
    hoveredOverTiles.push(pos);
  }, false);

  // Canvas is redrawn with the tiles in hoveredOverTiles array.
  canvas.addEventListener('mouseup', function (event) {
    if (!currentTile) return;
    mouseHeld = false;
    if (!currentTile.children[0]) return;
    if (!currentTile.children[0].getAttribute('data-entity-number')) return;
    for (var j = 0; j < hoveredOverTiles.length; j++) {
      world.addEntity(hoveredOverTiles[j], currentTile.children[0].getAttribute('data-entity-number'));
    }
    redraw();
  }, false);

  // Positions of the tiles that were hovered on during the mouse hold will be
  // added to the hoveredOverTiles array. This is then drawn on canvas.
  canvas.addEventListener('mousemove', function (event) {
    if (!currentTile) return;
    if (!currentTile.children[0]) return;
    if (!currentTile.children[0].getAttribute('data-entity-number')) return;
    if (mouseHeld === true) {
      var pos = world.screenToWorld([event.clientX - marginLeft, event.clientY]);
      duplicate = 0;
      for (var i = 0; i < hoveredOverTiles.length; i++) {
        if (hoveredOverTiles[i][0] === pos[0] && hoveredOverTiles[i][1] === pos[1]) {
          duplicate += 1;
        }
      }
      if (duplicate === 0) {
        hoveredOverTiles.push(pos);
      }
      for (var j = 0; j < hoveredOverTiles.length; j++) {
        world.addEntity(hoveredOverTiles[j], currentTile.children[0].getAttribute('data-entity-number'));
      }
      redraw();
    }
  }, false);
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function playerControls(step) {
  var map = {};
  function playerControls(event) {
    map[event.key] = event.type === 'keydown';
    if (map['ArrowUp']) {
      step('up');
    } else if (map['ArrowDown']) {
      step('down');
    } else if (map['ArrowLeft']) {
      step('left');
    } else if (map['ArrowRight']) {
      step('right');
    }
  }
  document.addEventListener('keyup', function (event) {
    playerControls(event);
  }, false);
  document.addEventListener('keydown', function (event) {
    playerControls(event);
  }, false);
}

exports.default = playerControls;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startMenu;
function startMenu() {
  var menu = document.querySelector('.menu');
  var overlay = document.querySelector('.overlay');
  var mouseInfo = document.querySelector('.mouse-info');
  var startMenu = document.querySelector('.start-menu');
  var helpControlsMenu = document.querySelector('.help-controls');
  var gameMenu = document.querySelector('.game-menu');
  var gameEditor = document.querySelector('.tile-selector');
  var about = document.querySelector('.about');
  // const backToStart = document.querySelectorAll('.back-to-start')
  // backToStart.forEach(function (button, index) {
  //   button.addEventListener('click', function (event) {
  //
  //   }, false)
  // })

  function hideAllSections() {
    var sections = document.querySelectorAll('.menu__section-container section');
    for (var i = 0; i < sections.length; i++) {
      sections[i].setAttribute('data-hidden', 'yes');
    }
  }

  function menuInteraction(selectedItem) {
    if (selectedItem === 'Continue') {
      menu.setAttribute('data-hidden', 'yes');
      overlay.setAttribute('data-hidden', 'yes');
      mouseInfo.setAttribute('style', 'display: block;');
      window.localStorage.setItem('inGame', 'yes');
    }
    if (selectedItem === 'Help/Controls') {
      if (helpControlsMenu.getAttribute('data-hidden') === 'no') {
        helpControlsMenu.setAttribute('data-hidden', 'yes');
        startMenu.setAttribute('data-hidden', 'no');
      } else {
        startMenu.setAttribute('data-hidden', 'yes');
        helpControlsMenu.setAttribute('data-hidden', 'no');
      }
    }
    if (selectedItem === 'Game Editor') {
      if (gameEditor.getAttribute('data-hidden') === 'no') {
        gameEditor.setAttribute('data-hidden', 'yes');
        startMenu.setAttribute('data-hidden', 'no');
      } else {
        startMenu.setAttribute('data-hidden', 'yes');
        gameEditor.setAttribute('data-hidden', 'no');
      }
    }
    if (selectedItem === 'About') {
      if (about.getAttribute('data-hidden') === 'no') {
        about.setAttribute('data-hidden', 'yes');
        startMenu.setAttribute('data-hidden', 'no');
      } else {
        startMenu.setAttribute('data-hidden', 'yes');
        about.setAttribute('data-hidden', 'no');
      }
    }
  }

  // Arrow key events.
  window.addEventListener('keydown', function (event) {
    // console.log(event.key)
    if (startMenu.getAttribute('data-hidden', 'no')) {
      if (event.key === 'ArrowDown') {
        // Select start menu item below current one.
        var selectedMenuItem = document.querySelector('.start-menu__menu li.start-selected');
        if (selectedMenuItem.nextElementSibling) {
          selectedMenuItem.className = '';
          selectedMenuItem.nextElementSibling.className = 'start-selected';
        }
      }
      if (event.key === 'ArrowUp') {
        // Select start menu item above current one.
        var _selectedMenuItem = document.querySelector('.start-menu__menu li.start-selected');
        if (_selectedMenuItem.previousElementSibling) {
          _selectedMenuItem.className = '';
          _selectedMenuItem.previousElementSibling.className = 'start-selected';
        }
      }
    }

    if (event.key === 'Enter') {
      var _selectedMenuItem2 = document.querySelector('.start-menu__menu li.start-selected').textContent;
      menuInteraction(_selectedMenuItem2);
    }
  }, false);

  var startMenuItems = document.querySelectorAll('.start-menu__menu li');

  function clearStartMenuItems() {
    startMenuItems.forEach(function (item, index) {
      item.className = '';
      console.log('deleted');
    });
  }

  startMenuItems.forEach(function (item, index) {
    item.addEventListener('click', function (event) {
      if (startMenu.getAttribute('data-hidden', 'no')) {
        clearStartMenuItems();
        event.target.className = 'start-selected';
        menuInteraction(event.target.textContent);
      }
    }, false);
  });

  // Escape key events.
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      // If not in game do this.
      if (window.localStorage.getItem('inGame') === 'no' || !window.localStorage.getItem('inGame')) {
        // If the menu is shown, then hide the menu.
        if (menu.getAttribute('data-hidden') === 'no') {
          menu.setAttribute('data-hidden', 'yes');
          overlay.setAttribute('data-hidden', 'yes');
          mouseInfo.setAttribute('style', 'display: block;');
        } else {
          // If the menu is hidden, show the menu.
          menu.setAttribute('data-hidden', 'no');
          overlay.setAttribute('data-hidden', 'no');
          mouseInfo.setAttribute('style', 'display: none;');
          hideAllSections();
          startMenu.setAttribute('data-hidden', 'no');
        }
      }
      // If in game do this.
      if (window.localStorage.getItem('inGame') === 'yes') {
        // If the menu is shown, then hide the menu.
        if (menu.getAttribute('data-hidden') === 'no') {
          menu.setAttribute('data-hidden', 'yes');
          overlay.setAttribute('data-hidden', 'yes');
          mouseInfo.setAttribute('style', 'display: block;');
        } else {
          // If the menu is hidden, show the menu.
          menu.setAttribute('data-hidden', 'no');
          overlay.setAttribute('data-hidden', 'no');
          mouseInfo.setAttribute('style', 'display: none;');
          hideAllSections();
          gameMenu.setAttribute('data-hidden', 'no');
        }
      }
    }
  }, false);
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gameMenu;
function gameMenu() {
  var menu = document.querySelector('.menu');
  var overlay = document.querySelector('.overlay');
  var mouseInfo = document.querySelector('.mouse-info');
  var startMenu = document.querySelector('.start-menu');
  var gameMenu = document.querySelector('.game-menu');

  if (window.localStorage.getItem('inGame') === 'yes') {
    menu.setAttribute('data-hidden', 'yes');
    overlay.setAttribute('data-hidden', 'yes');
    mouseInfo.setAttribute('style', 'display: block;');
  }

  function hideAllSections() {
    var sections = document.querySelectorAll('.menu__section-container section');
    for (var i = 0; i < sections.length; i++) {
      sections[i].setAttribute('data-hidden', 'yes');
    }
  }

  // Arrow key events.
  window.addEventListener('keydown', function (event) {
    // console.log(event.key)
    if (gameMenu.getAttribute('data-hidden') === 'no') {
      if (event.key === 'ArrowDown') {
        // Select game menu item below current one.
        var selectedGameItem = document.querySelector('.game-menu__menu li.game-selected');
        if (selectedGameItem.nextElementSibling) {
          selectedGameItem.className = '';
          selectedGameItem.nextElementSibling.className = 'game-selected';
        }
      }
      if (event.key === 'ArrowUp') {
        // Select game menu item above current one.
        var _selectedGameItem = document.querySelector('.game-menu__menu li.game-selected');
        if (_selectedGameItem.previousElementSibling) {
          _selectedGameItem.className = '';
          _selectedGameItem.previousElementSibling.className = 'game-selected';
        }
      }
    }

    if (event.key === 'Enter') {
      if (gameMenu.getAttribute('data-hidden') === 'no') {
        var _selectedGameItem2 = document.querySelector('.game-menu__menu li.game-selected');
        if (_selectedGameItem2.textContent === 'Exit Game') {
          window.localStorage.setItem('inGame', 'no');
          menu.setAttribute('data-hidden', 'no');
          overlay.setAttribute('data-hidden', 'no');
          mouseInfo.setAttribute('style', 'display: none;');
          hideAllSections();
          startMenu.setAttribute('data-hidden', 'no');
        }
      }
    }
  }, false);
}

/***/ })
/******/ ]);