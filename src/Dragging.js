export default function dragging () {
  // On mousemove, the positions of the tiles that were hovered during the
  // mouse hold will be added to the hoveredOverTiles array, then on mouseup,
  // the canvas is redrawn with the tiles in that array. :)
  const canvasElement = document.querySelector('canvas')
  if (!canvasElement) return
  let mouseHeld = false
  let hoveredOverTiles = []

  canvasElement.addEventListener('mousedown', function (event) {
    mouseHeld = true
    console.log(mouseHeld)
  }, false)

  canvasElement.addEventListener('mouseup', function (event) {
    mouseHeld = false
    console.log(mouseHeld)
  }, false)

  canvasElement.addEventListener('mousemove', function (event) {
    if (mouseHeld === true) {
      console.log('x:' + String(event.clientX), 'y:' + event.clientY)
    }
  }, false)
}
