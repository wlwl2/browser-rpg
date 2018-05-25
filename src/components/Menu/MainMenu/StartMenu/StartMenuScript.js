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

  // Arrow key events.
  window.addEventListener('keydown', function (event) {
    if (!startMenu) return
    // if start menu is not selected, return
    if (JSON.parse(window.localStorage.getItem('menuState')).menuSelected !== 'startmenu') return
    if (startMenu.getAttribute('data-hidden', 'no')) {
      if (event.key === 'ArrowDown') {
        // Select start menu item below current one.
        console.log('down')
        const selectedMenuItem = JSON.parse(window.localStorage.getItem('menuState')).menuItemSelected
        
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
