import TileSelector from './TileSelector'
import World from './World'

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
  world.monsters.forEach(function (monster) {
    monster.step(world.monsters)
    monster.draw(ctx)
  })

  world.players.forEach(function (player) {
    player.move(ctx, direction)
    player.draw(ctx)
  })
}

var _init = init()
var ctx = _init.ctx
var canvas = _init.canvas

const world = new World()

TileSelector()

step()

// Refactor.
var map = {}
window.onkeydown = window.onkeyup = function controls (event) {
  map[event.key] = event.type === 'keydown'
  // console.log(map)
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

canvas.addEventListener('click', function (event) {
  const pos = world.screenToWorld([
    event.clientX,
    event.clientY
  ])
  console.log(event)
  world.addEntity(pos, 1)
}, false)
