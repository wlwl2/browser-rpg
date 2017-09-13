import World from './World'
import tileSelector from './tileSelector'
import tileDragging from './tileDragging'
import playerControls from './playerControls'
import menu from './menu'
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
tileSelector(canvas)
tileDragging(canvas, world, ctx)

window.addEventListener('load', function (event) {
  step()
}, false)

menu()
// touchEvents()
playerControls(step)
