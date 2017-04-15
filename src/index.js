import Monster from './Monster'
import World from './World'
import Sprite from './Sprite'

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
function step () {

  // sets all pixels in the rectangle defined by starting point and
  // size to transparent black, erasing any previously drawn content.
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  monsters.forEach(function (monster) {
    monster.step(monsters)
    monster.draw(ctx)
  })

  players.forEach(function (player) {
    player.draw(ctx)
  })
}

function characterMove (direction) {
  players.forEach(function (player) {
    player.move(ctx)
    player.draw(ctx)
  })
}


// Monsters randomly move on keypress.
window.addEventListener("keydown", function(event){
  if (event.key === 'ArrowRight') characterMove('right')
}, false);

// Monsters move randomly every second.
//setInterval(function(){ step()}, 1000)

var _init = init(),
    ctx = _init.ctx,
    canvas = _init.canvas;

step()
