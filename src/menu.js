export default function menu () {
  const menu = document.querySelector('.menu')
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      if (menu.getAttribute('data-hidden') === 'yes') {
        menu.setAttribute('data-hidden', 'no')
      } else {
        menu.setAttribute('data-hidden', 'yes')
      }
    }
  }, false)
}
