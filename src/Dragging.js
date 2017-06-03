import World from './World'

export default function dragging (canvas, world, ctx) {
  // On mousemove, the positions of the tiles that were hovered during the
  // mouse hold will be added to the hoveredOverTiles array, then on mouseup,
  // the canvas is redrawn with the tiles in that array. :)
  // const canvasElement = document.querySelector('canvas')
  // if (!canvasElement) return
  let mouseHeld = false
  let hoveredOverTiles = []
  let duplicate = 0
  canvas.addEventListener('mousedown', function (event) {
    mouseHeld = true
    hoveredOverTiles = []
    const pos = world.screenToWorld([
      event.clientX,
      event.clientY
    ], canvas)
    hoveredOverTiles.push(pos)
    console.log(mouseHeld)
  }, false)

  canvas.addEventListener('mouseup', function (event) {
    mouseHeld = false
    console.log(mouseHeld)
    console.log(hoveredOverTiles)
    for (var i = 0; i < hoveredOverTiles.length; i++) {
      world.addEntity(hoveredOverTiles[i], 4)
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
    redraw()
  }, false)

  canvas.addEventListener('mousemove', function (event) {
    if (mouseHeld === true) {
      const pos = world.screenToWorld([
        event.clientX,
        event.clientY
      ], canvas)
      duplicate = 0
      for (var i = 0; i < hoveredOverTiles.length; i++) {
        if ((hoveredOverTiles[i][0] === pos[0]) && (hoveredOverTiles[i][1] === pos[1])) {
          duplicate += 1
        }
      }
      if (duplicate === 0) {
        hoveredOverTiles.push(pos)
      }
      console.log(hoveredOverTiles)
      for (var i = 0; i < hoveredOverTiles.length; i++) {
        world.addEntity(hoveredOverTiles[i], 4)
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
      redraw()
    }
  }, false)
}
