export default function menu () {
  var menu = document.querySelector('.menu')
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      if (menu.getAttribute('data-hidden') === 'no') {
        menu.setAttribute('data-hidden', 'yes')
      } else {
        menu.setAttribute('data-hidden', 'no')
      }
    }
  }, false)
}
