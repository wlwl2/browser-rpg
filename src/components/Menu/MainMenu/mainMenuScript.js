export default function mainMenuScript () {
  const menuContainer = document.querySelector('.menu__section-container')
  const overlay = document.querySelector('.overlay')
  const startMenu = document.querySelector('.start-menu__menu')

  // Set the initial state of Start Menu.
  window.localStorage.setItem('menuState', JSON.stringify({
    menuSelected: 'startmenu',
    menuItemSelected: '1'
  }))

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

        // select item from history
        if (window.localStorage.getItem('menuSelectedItem')) {
          const menuSelectedItem = JSON.parse(window.localStorage.getItem('menuState')).menuItemSelected
          var menuItems = startMenu.children
          for (var i = 0; i < menuItems.length; i++) {
            if (menuSelectedItem === menuItems[i].getAttribute('data-startmenuid')) {
              menuItems[i].focus()
              menuItems[i].setAttribute('data-selected', 'yes')
            }
          }
        }

      }
    }
  }, false)
}
