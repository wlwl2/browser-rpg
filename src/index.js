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

function redraw () {
  world.scene.draw(ctx, canvas)
  world.monsters.forEach(function (monster) {
    monster.draw(ctx)
  })
  world.players.forEach(function (player) {
    player.draw(ctx)
  })
}

var _init = init()
var ctx = _init.ctx
var canvas = _init.canvas
const world = new World()
TileSelector()

// Waits for all the images etc. to load, then runs the step function.
function assetLoader () {
  const images = document.querySelectorAll('img')
  if (images.length === 0) return
  const imageListLength = images.length
  // console.log(imageListLength)
  let loadedImagesCounter = 0
  for (var i = 0; i < imageListLength; i++) {
    images[i].addEventListener('load', function (event) {
      loadedImagesCounter += 1
      // console.log(loadedImagesCounter)
      if (imageListLength === loadedImagesCounter + 1) {
        // console.log('all done')
        step()
      }
    }, false)
  }
}
assetLoader()

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
canvas.addEventListener('click', function (event) {
  const selectedTile = document.querySelector('.currently-selected-tile')
  if (!selectedTile.children[0]) return
  const selectedEntityNumber =
  selectedTile.children[0].getAttribute('data-entity-number')
  const pos = world.screenToWorld([
    event.clientX,
    event.clientY
  ], canvas)
  world.addEntity(pos, selectedEntityNumber)
  redraw()
}, false)
