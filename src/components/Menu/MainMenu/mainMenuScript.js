export default function mainMenuScript () {
  const menuContainer = document.querySelector('.menu__section-container')
  const overlay = document.querySelector('.overlay')

  // Set the initial state of Start Menu.
  window.localStorage.setItem('menuSelectedItem', 'startmenu1')

  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      if (menuContainer.getAttribute('data-shown') === 'yes') {
        // Hide Main Menu.
        menuContainer.setAttribute('data-shown', 'no')
        overlay.setAttribute('data-shown', 'no')
      } else {
        // Show Main Menu.
        menuContainer.setAttribute('data-shown', 'yes')
        overlay.setAttribute('data-shown', 'yes')
        if (window.localStorage.getItem('menuSelectedItem')) {
          const menuSelectedItem = window.localStorage.getItem('menuSelectedItem')
          document.getElementById(menuSelectedItem).focus()
        }
        window.localStorage.setItem('menuSelectedItem', 'startmenu1')
      }
    }
  }, false)
}
