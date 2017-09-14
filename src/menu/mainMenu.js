export default function mainMenu () {
  const startMenuItems = document.querySelectorAll('.start-menu__menu li')

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
  }, false)


  // Escape key events.
  const menu = document.querySelector('.menu')
  const overlay = document.querySelector('.overlay')
  const mouseInfo = document.querySelector('.mouse-info')
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      // If the menu is shown.
      if (menu.getAttribute('data-hidden') === 'no') {
        menu.setAttribute('data-hidden', 'yes')
        overlay.setAttribute('data-hidden', 'yes')
        mouseInfo.setAttribute('style', 'display: block;')
      } else { // If the menu is hidden.
        menu.setAttribute('data-hidden', 'no')
        overlay.setAttribute('data-hidden', 'no')
        mouseInfo.setAttribute('style', 'display: none;')
      }
    }
  }, false)
}
