import Monster from './Monster'
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
const characters = World().characters

function step () {

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  monsters.forEach(function (monster) {
    monster.step(monsters)
    monster.draw(ctx)
  })

  characters.forEach(function (character) {
    character.draw(ctx)
  })
}

// Monsters randomly move on keypress.
// window.addEventListener("keydown", function(event){
//   if (event.key === ' ') step()
// }, false);

// Monsters move randomly every second.
//setInterval(function(){ step()}, 1000)

var _init = init(),
    ctx = _init.ctx,
    canvas = _init.canvas;

step()
