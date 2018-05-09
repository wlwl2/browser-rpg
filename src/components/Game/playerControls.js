function playerControls (step) {
  var map = {}
  function playerControls (event) {
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
  document.addEventListener('keyup', function (event) {
    playerControls(event)
  }, false)
  document.addEventListener('keydown', function (event) {
    playerControls(event)
  }, false)
}

export default playerControls
