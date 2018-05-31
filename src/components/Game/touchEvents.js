export default function touchEvents (step) {
  function startup () {
    window.addEventListener('touchstart', handleStart, false)
    window.addEventListener('touchend', handleEnd, false)
    window.addEventListener('touchcancel', handleCancel, false)
    window.addEventListener('touchmove', handleMove, false)
    console.log('initialized.')
  }
  startup()
  // var ongoingTouches = []

  function handleStart (event) {
    event.preventDefault()
    console.log('touchstart.')
  }

  let coord;
  function handleMove (event) {
    event.preventDefault()
    console.log('handlemove.')
    let i;
    for (i = 0; i < event.changedTouches.length; i++) {
      if (coord) {
        if (coord.x < event.changedTouches[i].pageX) step('right')
        if (coord.x > event.changedTouches[i].pageX) step('left')
        if (coord.y > event.changedTouches[i].pageY) step('up')
        if (coord.y < event.changedTouches[i].pageY) step('down')
      }
      coord = {
        x: event.changedTouches[i].pageX,
        y: event.changedTouches[i].pageY
      }
    }
  }

  function handleEnd (event) {
    event.preventDefault()
    console.log('handleEnd.')
  }

  function handleCancel (event) {
    event.preventDefault()
    console.log('handleCancel.')
  }
}
