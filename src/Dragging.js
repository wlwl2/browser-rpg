export default function Dragging () {
  let dragged
  document.addEventListener('dragstart', function (event) {
    // store a ref. on the dragged elem
    dragged = event.target
    // make it half transparent
    event.target.style.opacity = 0.5
    console.log(dragged)
  }, false)
}
