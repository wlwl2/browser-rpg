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

  // menu
  const menuContainer = document.querySelector('.menu__section-container')
  const overlay = document.querySelector('.overlay')
  const startMenu = document.querySelector('.start-menu__menu')
  function toggleInGame (inGame) {
    const gameState = JSON.parse(window.localStorage.getItem('gameState'))
    gameState.inGame = inGame
    window.localStorage.setItem('gameState', JSON.stringify(gameState))
  }

  let coord;
  function handleStart (event) {
    event.preventDefault()
    console.log('touchstart.')
    var numTouches = event.touches.length;
    if (numTouches === 2) {
      // Show Main Menu.
      menuContainer.setAttribute('data-shown', 'yes')
      overlay.setAttribute('data-shown', 'yes')
      toggleInGame('no')
      // select item from history
      const menuSelectedItem = JSON.parse(window.localStorage.getItem('gameState')).startMenuItemSelected
      var menuItems = startMenu.children
      for (var i = 0; i < menuItems.length; i++) {
        if (menuSelectedItem === menuItems[i].getAttribute('data-startmenuid')) {
          menuItems[i].focus()
          menuItems[i].setAttribute('data-selected', 'yes')
        }
      }
    }
    if (numTouches === 3) {
      // Hide Main Menu.
      menuContainer.setAttribute('data-shown', 'no')
      overlay.setAttribute('data-shown', 'no')
      toggleInGame('yes')
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
