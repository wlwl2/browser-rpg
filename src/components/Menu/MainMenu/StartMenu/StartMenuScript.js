export default function startMenu () {
  const mouseInfo = document.querySelector('.mouse-info')
  const startMenu = document.querySelector('.start-menu')
  const helpControlsMenu = document.querySelector('.help-controls')
  const gameMenu = document.querySelector('.game-menu')
  const gameEditor = document.querySelector('.tile-selector')
  const about = document.querySelector('.about')

  function hideAllSections () {
    const sections = document.querySelectorAll('.menu__section-container section')
    for (var i = 0; i < sections.length; i++) {
      sections[i].setAttribute('data-hidden', 'yes')
    }
  }

  function menuInteraction (selectedItem) {
    if (selectedItem === 'Continue') {
      overlay.setAttribute('data-hidden', 'yes')
      mouseInfo.setAttribute('style', 'display: block;')
      window.localStorage.setItem('inGame', 'yes')
    }
    if (selectedItem === 'Help/Controls') {
      if (helpControlsMenu.getAttribute('data-hidden') === 'no') {
        helpControlsMenu.setAttribute('data-hidden', 'yes')
        startMenu.setAttribute('data-hidden', 'no')
      } else {
        startMenu.setAttribute('data-hidden', 'yes')
        helpControlsMenu.setAttribute('data-hidden', 'no')
      }
    }
    if (selectedItem === 'Game Editor') {
      if (gameEditor.getAttribute('data-hidden') === 'no') {
        gameEditor.setAttribute('data-hidden', 'yes')
        startMenu.setAttribute('data-hidden', 'no')
      } else {
        startMenu.setAttribute('data-hidden', 'yes')
        gameEditor.setAttribute('data-hidden', 'no')
      }
    }
    if (selectedItem === 'About') {
      if (about.getAttribute('data-hidden') === 'no') {
        about.setAttribute('data-hidden', 'yes')
        startMenu.setAttribute('data-hidden', 'no')
      } else {
        startMenu.setAttribute('data-hidden', 'yes')
        about.setAttribute('data-hidden', 'no')
      }
    }
  }

  // Arrow key events.
  window.addEventListener('keydown', function (event) {
    if (!startMenu) return
    if (startMenu.getAttribute('data-hidden', 'no')) {
      if (event.key === 'ArrowDown') {
        // Select start menu item below current one.
      }
      if (event.key === 'ArrowUp') {
        // Select start menu item above current one.
      }
    }

    if (event.key === 'Enter') {

    }
  }, false)

  const startMenuItems = document.querySelectorAll('.start-menu__menu li')

  function clearStartMenuItems () {
    startMenuItems.forEach(function (item, index) {
      item.className = ''
      console.log('deleted')
    })
  }

  startMenuItems.forEach(function (item, index) {
    item.addEventListener('click', function (event) {
      if (startMenu.getAttribute('data-hidden', 'no')) {
        clearStartMenuItems()
        event.target.className = 'start-selected'
      }
    }, false)
  })
}
