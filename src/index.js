import Monster from './Monster'
import Players from './Player'
import World from './World'

function init () {
  var canvas = document.createElement("canvas")

  canvas.height = 256
  canvas.width = 256

  var ctx = canvas.getContext('2d')

  document.body.appendChild(canvas)
  return { ctx: ctx, canvas: canvas }
}

const monsters = World().monsters
const players = World().players

// For each of these steps, re-create the world.
function step (direction) {

  // sets all pixels in the rectangle defined by starting point and
  // size to transparent black, erasing any previously drawn content.
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  monsters.forEach(function (monster) {
    monster.step(monsters)
    monster.draw(ctx)
  })

  players.forEach(function (player) {
    player.move(ctx, direction)
    player.draw(ctx)
  })
}

var _init = init(),
    ctx = _init.ctx,
    canvas = _init.canvas;

step()

window.addEventListener("keydown", function(event){
  if (event.key === 'ArrowUp') step('up')
  if (event.key === 'ArrowDown') step('down')
  if (event.key === 'ArrowRight') step('right')
  if (event.key === 'ArrowLeft') step('left')
}, false);
