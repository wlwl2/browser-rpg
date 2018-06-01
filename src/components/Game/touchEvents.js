import openMenu from '../Menu/MainMenu/openMenu'

export default function touchEvents (step) {
  function init () {
    window.addEventListener('touchstart', handleStart, {passive: false})
    window.addEventListener('touchend', handleEnd, {passive: false})
    window.addEventListener('touchcancel', handleCancel, {passive: false})
    window.addEventListener('touchmove', handleMove, {passive: false})
    console.log('initialized.')
  }
  init()

  // start menu
  var startMenuItems = document.querySelector('.start-menu__menu').children
  function resetStartMenu () {
    for (var i = 0; i < startMenuItems.length; i++) {
      startMenuItems[i].setAttribute('data-selected', 'no')
    }
  }
  function selectStartMenuItem (itemSelected) {
    resetStartMenu()
    for (var i = 0; i < startMenuItems.length; i++) {
      if (startMenuItems[i].getAttribute('data-startmenuid') === itemSelected) {
        startMenuItems[i].focus()
        startMenuItems[i].setAttribute('data-selected', 'yes')
      }
    }
  }
  function startMenuItemEvent (event) {
    if (!startMenu) return
    const gameState = JSON.parse(window.localStorage.getItem('gameState'))
    if (gameState.inGame !== 'no') return
    const startMenuItemId = event.target.getAttribute('data-startmenuid')
    if (!startMenuItemId) return
    if (startMenuItemId !== '0') {
      gameState.startMenuItemSelected = startMenuItemId
      window.localStorage.setItem('gameState', JSON.stringify(gameState))
      selectStartMenuItem (startMenuItemId)
    }
    if (gameState.menuSelected === 'startmenu') {
      if (gameState.startMenuItemSelected === '3') {
        openMenu('3')
        gameState.menuSelected = 'helpmenu'
      }
      if (gameState.startMenuItemSelected === '4') {
        openMenu('4')
        gameState.menuSelected = 'editormenu'
      }
      if (gameState.startMenuItemSelected === '5') {
        openMenu('5')
        gameState.menuSelected = 'aboutmenu'
      }
    } else {
      openMenu('0')
      gameState.menuSelected = 'startmenu'
    }
    window.localStorage.setItem('gameState', JSON.stringify(gameState))
  }

  // menu
  const menuContainer = document.querySelector('.menu__section-container')
  const overlay = document.querySelector('.overlay')
  const startMenu = document.querySelector('.start-menu__menu')
  function toggleInGame (inGame) {
    const gameState = JSON.parse(window.localStorage.getItem('gameState'))
    gameState.inGame = inGame
    window.localStorage.setItem('gameState', JSON.stringify(gameState))
  }

  function selectedItem (menuSelectedItem) {
    var menuItems = startMenu.children
    for (var i = 0; i < menuItems.length; i++) {
      if (menuSelectedItem === menuItems[i].getAttribute('data-startmenuid')) {
        menuItems[i].focus()
        menuItems[i].setAttribute('data-selected', 'yes')
      }
    }
  }

  let coord;
  function handleStart (event) {
    event.preventDefault()
    console.log('touchstart.')
    var numTouches = event.touches.length;
    if (numTouches === 3) {

      // Show Main Menu.
      menuContainer.setAttribute('data-shown', 'yes')
      overlay.setAttribute('data-shown', 'yes')
      toggleInGame('no')
      // select item from history
      const menuSelectedItem = JSON.parse(window.localStorage.getItem('gameState')).startMenuItemSelected
      selectedItem(menuSelectedItem)

    }
    if (numTouches === 2) {
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

  var counter = 1

  function handleMove (event) {
    event.preventDefault()
    console.log('handlemove.')
    counter += 1
    if (Math.abs(counter % 4) !== 0) return
    let i;
    for (i = 0; i < event.changedTouches.length; i++) {
      if (coord) {
        const x = coord.x - event.changedTouches[i].pageX
        const y = coord.y - event.changedTouches[i].pageY
        const absX = Math.abs(x)
        const absY = Math.abs(y)
        stopAutoMove()
        if (absY > absX) {
          if (y < 0) {
            touchMove('down')
          }
          if (y > 0) {
            touchMove('up')
          }
        }
        if (absX > absY) {
          if (x < 0) {
            touchMove('right')
          }
          if (x > 0) {
            touchMove('left')
          }
        }

      }
      coord = {
        x: event.changedTouches[i].pageX,
        y: event.changedTouches[i].pageY
      }
    }

  }

  var movement
  function touchMove (direction) {
    function move () {
      step(direction)
      movement = setTimeout(move, 100)
    }
    move();
  }

  function stopAutoMove () {
    clearTimeout(movement)
  }


  function handleEnd (event) {
    event.preventDefault()
    console.log('handleEnd.')
    stopAutoMove()
    if (event.target.getAttribute('data-startmenuid')) {
      startMenuItemEvent(event)
    }
  }

  function handleCancel (event) {
    event.preventDefault()
    console.log('handleCancel.')
  }
}
