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
      console.log(event.changedTouches[i].pageX, event.changedTouches[i].pageY)
      if (coord) {
        if (coord.x < event.changedTouches[i].pageX + 4) step('right')
        if (coord.x > event.changedTouches[i].pageX - 4) step('left')
        if (coord.y > event.changedTouches[i].pageY - 4) step('up')
        if (coord.y < event.changedTouches[i].pageY + 4) step('down')
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
