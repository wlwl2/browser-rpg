export default function mainMenu () {
  const menu = document.querySelector('.menu')
  const overlay = document.querySelector('.overlay')
  const mouseInfo = document.querySelector('.mouse-info')

  // Arrow key events.
  window.addEventListener('keydown', function (event) {
    // console.log(event.key)
    if (event.key === 'ArrowDown') {
      const selectedMenuItem = document.querySelector('.start-menu__menu li.selected')
      if (selectedMenuItem.nextElementSibling) {
        selectedMenuItem.className = ''
        selectedMenuItem.nextElementSibling.className = 'selected'
      }
    }
    if (event.key === 'ArrowUp') {
      const selectedMenuItem = document.querySelector('.start-menu__menu li.selected')
      if (selectedMenuItem.previousElementSibling) {
        selectedMenuItem.className = ''
        selectedMenuItem.previousElementSibling.className = 'selected'
      }
    }

    if (event.key === 'Enter') {
      const selectedMenuItem = document.querySelector('.start-menu__menu li.selected')
      const startMenu = document.querySelector('.start-menu')
      const helpControlsMenu = document.querySelector('.help-controls')
      if (selectedMenuItem.textContent === 'Continue') {
        menu.setAttribute('data-hidden', 'yes')
        overlay.setAttribute('data-hidden', 'yes')
        mouseInfo.setAttribute('style', 'display: block;')
      }
      if (selectedMenuItem.textContent === 'Help/Controls') {
        if (helpControlsMenu.getAttribute('data-hidden') === 'no') {
          helpControlsMenu.setAttribute('data-hidden', 'yes')
          startMenu.setAttribute('data-hidden', 'no')
        } else {
          startMenu.setAttribute('data-hidden', 'yes')
          helpControlsMenu.setAttribute('data-hidden', 'no')
        }
      }
    }
  }, false)

  // Escape key events.
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      // If the menu is shown, then hide the menu.
      if (menu.getAttribute('data-hidden') === 'no') {
        menu.setAttribute('data-hidden', 'yes')
        overlay.setAttribute('data-hidden', 'yes')
        mouseInfo.setAttribute('style', 'display: block;')
      } else { // If the menu is hidden, show the menu.
        menu.setAttribute('data-hidden', 'no')
        overlay.setAttribute('data-hidden', 'no')
        mouseInfo.setAttribute('style', 'display: none;')
      }
    }
  }, false)
}
