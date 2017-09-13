export default function menu () {
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
