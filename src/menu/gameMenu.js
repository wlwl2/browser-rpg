export default function gameMenu () {
  const menu = document.querySelector('.menu')
  const overlay = document.querySelector('.overlay')
  const mouseInfo = document.querySelector('.mouse-info')
  const startMenu = document.querySelector('.start-menu')
  const gameMenu = document.querySelector('.game-menu')

  function hideAllSections () {
    const sections = document.querySelectorAll('.menu__section-container section')
    for (var i = 0; i < sections.length; i++) {
      sections[i].setAttribute('data-hidden', 'yes')
    }
  }

  // Arrow key events.
  window.addEventListener('keydown', function (event) {
    // console.log(event.key)
    if (gameMenu.getAttribute('data-hidden') === 'no') {
      if (event.key === 'ArrowDown') {
        // Select game menu item below current one.
        const selectedGameItem = document.querySelector('.game-menu__menu li.game-selected')
        if (selectedGameItem.nextElementSibling) {
          selectedGameItem.className = ''
          selectedGameItem.nextElementSibling.className = 'game-selected'
        }
      }
      if (event.key === 'ArrowUp') {
        // Select game menu item above current one.
        const selectedGameItem = document.querySelector('.game-menu__menu li.game-selected')
        if (selectedGameItem.previousElementSibling) {
          selectedGameItem.className = ''
          selectedGameItem.previousElementSibling.className = 'game-selected'
        }
      }
    }

    if (event.key === 'Enter') {
      if (gameMenu.getAttribute('data-hidden') === 'no') {
        const selectedGameItem = document.querySelector('.game-menu__menu li.game-selected')
        if (selectedGameItem.textContent === 'Exit Game') {
          window.localStorage.setItem('inGame', 'no')
          hideAllSections()
          startMenu.setAttribute('data-hidden', 'no')
        }
      }
    }
  }, false)
}
