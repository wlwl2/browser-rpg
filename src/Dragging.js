export default function dragging () {
  const canvasElement = document.querySelector('canvas')
  if (!canvasElement) return
  let mouseHeld = false

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
