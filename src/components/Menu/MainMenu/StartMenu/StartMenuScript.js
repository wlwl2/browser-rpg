export default function startMenu () {
  const startMenu = document.querySelector('.start-menu__menu')
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

  window.addEventListener('click', function (event) {
    if (!startMenu) return
    const gameState = JSON.parse(window.localStorage.getItem('gameState'))
    if (gameState.inGame !== 'no') return
    if (gameState.menuSelected !== 'startmenu') return
    const startMenuItemId = event.target.getAttribute('data-startmenuid')
    if (!startMenuItemId) return
    gameState.startMenuItemSelected = startMenuItemId
    window.localStorage.setItem('gameState', JSON.stringify(gameState))
    selectStartMenuItem (startMenuItemId)
  })

  window.addEventListener('keydown', function (event) {
    if (!startMenu) return
    const gameState = JSON.parse(window.localStorage.getItem('gameState'))
    if (gameState.inGame !== 'no') return
    if (gameState.menuSelected !== 'startmenu') return
    // Select start menu item below current one.
    if (event.key === 'ArrowDown') {
      const selectedMenuItem = Number(gameState.startMenuItemSelected)
      if (selectedMenuItem === startMenuItems.length) {
        gameState.startMenuItemSelected = '1'
      } else {
        gameState.startMenuItemSelected = String(selectedMenuItem + 1)
      }
      window.localStorage.setItem('gameState', JSON.stringify(gameState))
      selectStartMenuItem(gameState.startMenuItemSelected)
    }
    // Select start menu item above current one.
    if (event.key === 'ArrowUp') {
      const selectedMenuItem = Number(gameState.startMenuItemSelected)
      if (selectedMenuItem === 1) {
        gameState.startMenuItemSelected = String(startMenuItems.length)
      } else {
        gameState.startMenuItemSelected = String(selectedMenuItem - 1)
      }
      window.localStorage.setItem('gameState', JSON.stringify(gameState))
      selectStartMenuItem(gameState.startMenuItemSelected)
    }

    if (event.key === 'Enter') {
      // data-menuid
      // console.log(event.target)
    }
  }, false)
}
