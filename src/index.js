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
  // sets all pixels in the rectangle defined by starting point and
  // size to transparent black, erasing any previously drawn content.
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

step()

var map = {}
window.onkeydown = window.onkeyup = function controls (event) {
  map[event.key] = event.type === 'keydown'
  /* insert conditional here */
  // console.log(map);

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

var dragged
var canvas = document.querySelector('canvas')

document.addEventListener('dragstart', function (event) {
  // store a ref. on the dragged elem
  dragged = event.target
  // make it half transparent
  canvas.style.opacity = 0.5
}, false)

document.addEventListener('dragend', function (event) {
  // reset the transparency
  canvas.style.opacity = ''
}, false)

canvas.addEventListener('dragover', function (event) {
  // prevent default to allow drop
  event.preventDefault()
}, false)
