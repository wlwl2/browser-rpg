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

  let coord;
  function handleStart (event) {
    event.preventDefault()
    console.log('touchstart.')
    let i;
    for (i = 0; i < event.changedTouches.length; i++) {
      // console.log(event.changedTouches[i].pageX, event.changedTouches[i].pageY)
      coord = {
        x: event.changedTouches[i].pageX,
        y: event.changedTouches[i].pageY
      }
      console.log(coord)
    }
  }

  function handleMove (event) {
    event.preventDefault()
    console.log('handlemove.')

  }

  function handleEnd (event) {
    event.preventDefault()
    console.log('handleEnd.')
    let i;
    for (i = 0; i < event.changedTouches.length; i++) {
      // console.log(event.changedTouches[i].pageX, event.changedTouches[i].pageY)
      if (coord) {
        const x = coord.x - event.changedTouches[i].pageX
        const y = coord.y - event.changedTouches[i].pageY
        const absX = Math.abs(x)
        const absY = Math.abs(y)
        if (absY > absX) {
          if (y < 0) step('down')
          if (y > 0) step('up')
        }
        if (absX > absY) {
          if (x < 0) step('right')
          if (x > 0) step('left')
        }
      }
      coord = {
        x: event.changedTouches[i].pageX,
        y: event.changedTouches[i].pageY
      }
    }
  }

  function handleCancel (event) {
    event.preventDefault()
    console.log('handleCancel.')
  }
}
