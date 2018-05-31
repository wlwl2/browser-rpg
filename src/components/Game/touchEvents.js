export default function touchEvents (step) {
  function startup () {
    window.addEventListener('touchstart', handleStart, {passive: false})
    window.addEventListener('touchend', handleEnd, {passive: false})
    window.addEventListener('touchcancel', handleCancel, {passive: false})
    window.addEventListener('touchmove', handleMove, {passive: false})
    console.log('initialized.')
  }
  startup()
  // var ongoingTouches = []

  let coord;
  function handleStart (event) {
    event.preventDefault()
    console.log('touchstart.')
    var touch;
    if (event.targetTouches.length >= 1) {
      touch = event.targetTouches.item(0);
      window.alert('multi tap');
    } else {
      touch = event.touches.item(0);
      window.alert('single tap');
    }
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
