export default function resize () {
  var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

  if (width > height) {
    document.querySelector('canvas').setAttribute('data-horizontal', 'yes')
  } else {
    document.querySelector('canvas').setAttribute('data-horizontal', 'no')
  }

  window.addEventListener('resize', function (event) {
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

    if (width > height) {
      document.querySelector('canvas').setAttribute('data-horizontal', 'yes')
    } else {
      document.querySelector('canvas').setAttribute('data-horizontal', 'no')
    }
  }, false)
}
