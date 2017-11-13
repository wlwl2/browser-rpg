import World from './World'
import tileSelector from './tileSelector'
import tileDragging from './tileDragging'
import playerControls from './playerControls'
import startMenu from './menu/startMenu'
import gameMenu from './menu/gameMenu'
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
const world = new World()
tileSelector(canvas)
tileDragging(canvas, world, ctx)

window.addEventListener('load', function (event) {
  step()
}, false)

startMenu()
gameMenu()
// touchEvents()
playerControls(step)