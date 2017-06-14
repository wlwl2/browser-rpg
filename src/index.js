import World from './World'
import TileSelector from './TileSelector'
import tileDragging from './tileDragging'

function init () {
  var canvas = document.createElement('canvas')
  canvas.height = 600
  canvas.width = 600
  var ctx = canvas.getContext('2d')
  document.body.appendChild(canvas)
  return { ctx: ctx, canvas: canvas }
}

// For each of these steps, re-create the world.
function step (direction) {
  /* Sets all pixels in the rectangle defined by starting point and
  size to transparent black, erasing any previously drawn content. */
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  world.scene.draw(ctx, canvas)
  // console.log(world.scene.grid)
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
const world = new World()
TileSelector()
tileDragging(canvas, world, ctx)

// This is probably not the best way to check asset loading. Refactor.
window.addEventListener('load', function (event) {
  step()
}, false)

// Refactor.
var map = {}
window.onkeydown = window.onkeyup = function controls (event) {
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
