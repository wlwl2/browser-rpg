export default function startMenu () {
  const menu = document.querySelector('.menu')
  const overlay = document.querySelector('.overlay')
  const mouseInfo = document.querySelector('.mouse-info')
  const startMenu = document.querySelector('.start-menu')
  const helpControlsMenu = document.querySelector('.help-controls')
  const gameMenu = document.querySelector('.game-menu')
  const gameEditor = document.querySelector('.tile-selector')

  function hideAllSections () {
    const sections = document.querySelectorAll('.menu__section-container section')
    for (var i = 0; i < sections.length; i++) {
      sections[i].setAttribute('data-hidden', 'yes')
    }
  }

  function menuInteraction (selectedItem) {
    if (selectedItem === 'Continue') {
      menu.setAttribute('data-hidden', 'yes')
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
  }

  // Arrow key events.
  window.addEventListener('keydown', function (event) {
    // console.log(event.key)
    if (startMenu.getAttribute('data-hidden', 'no')) {
      if (event.key === 'ArrowDown') {
        // Select start menu item below current one.
        const selectedMenuItem = document.querySelector('.start-menu__menu li.start-selected')
        if (selectedMenuItem.nextElementSibling) {
          selectedMenuItem.className = ''
          selectedMenuItem.nextElementSibling.className = 'start-selected'
        }
      }
      if (event.key === 'ArrowUp') {
        // Select start menu item above current one.
        const selectedMenuItem = document.querySelector('.start-menu__menu li.start-selected')
        if (selectedMenuItem.previousElementSibling) {
          selectedMenuItem.className = ''
          selectedMenuItem.previousElementSibling.className = 'start-selected'
        }
      }
    }

    if (event.key === 'Enter') {
      const selectedMenuItem = document.querySelector('.start-menu__menu li.start-selected').textContent
      menuInteraction(selectedMenuItem)
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
        menuInteraction(event.target.textContent)
      }
    }, false)
  })

  // Escape key events.
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      // If not in game do this.
      if (window.localStorage.getItem('inGame') === 'no' || !window.localStorage.getItem('inGame')) {
        // If the menu is shown, then hide the menu.
        if (menu.getAttribute('data-hidden') === 'no') {
          menu.setAttribute('data-hidden', 'yes')
          overlay.setAttribute('data-hidden', 'yes')
          mouseInfo.setAttribute('style', 'display: block;')
        } else { // If the menu is hidden, show the menu.
          menu.setAttribute('data-hidden', 'no')
          overlay.setAttribute('data-hidden', 'no')
          mouseInfo.setAttribute('style', 'display: none;')
          hideAllSections()
          startMenu.setAttribute('data-hidden', 'no')
        }
      }
      // If in game do this.
      if (window.localStorage.getItem('inGame') === 'yes') {
        // If the menu is shown, then hide the menu.
        if (menu.getAttribute('data-hidden') === 'no') {
          menu.setAttribute('data-hidden', 'yes')
          overlay.setAttribute('data-hidden', 'yes')
          mouseInfo.setAttribute('style', 'display: block;')
        } else { // If the menu is hidden, show the menu.
          menu.setAttribute('data-hidden', 'no')
          overlay.setAttribute('data-hidden', 'no')
          mouseInfo.setAttribute('style', 'display: none;')
          hideAllSections()
          gameMenu.setAttribute('data-hidden', 'no')
        }
      }
    }
  }, false)
}
