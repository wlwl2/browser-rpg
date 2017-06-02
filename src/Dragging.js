export default function Dragging () {
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

  canvasElement.addEventListener('mouseover', function (event) {
    // console.log(event.target)
  }, false)
}
