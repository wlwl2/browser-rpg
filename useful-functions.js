// TileSelector.prototype.clickEvent = function () {
//   const tiles = document.querySelector('.tile-list').children
//   for (var i = 0; i < tiles.length; i++) {
//     tiles[i].addEventListener('click', function (event) {
//       console.log(event.target)
//       const sprite = document.createElement('div')
//       sprite.setAttribute('draggable', 'true')
//       switch (event.target.className) {
//         case 'wall':
//           sprite.className = 'wall'
//           break
//         case 'monster':
//           sprite.className = 'monster'
//           break
//         case 'player':
//           sprite.className = 'player'
//           break
//       }
//       const currentTile = document.querySelector('.currently-selected-tile')
//       if (currentTile.childNodes[1]) {
//         currentTile.removeChild(currentTile.childNodes[1])
//       }
//       currentTile.appendChild(sprite)
//     }, false)
//   }
// }

// Returns a random integer between min (inclusive) and max (inclusive)
// Using Math.round() will give you a non-uniform distribution!
// function getRandomInt (min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }

// document.addEventListener('dragstart', function (event) {
//   // store a ref. on the dragged elem
//   dragged = event.target
//   // make it half transparent
//   canvas.style.opacity = 0.5
//   console.log(event)
//   const pos = world.screenToWorld(
//     event.clientX,
//     event.clientY
//   )
//   world.addEntity(pos, 1)
//
// }, false)
//
// document.addEventListener('dragend', function (event) {
//   // reset the transparency
//   canvas.style.opacity = ''
// }, false)
//
// canvas.addEventListener('dragover', function (event) {
//   // prevent default to allow drop
//   event.preventDefault()
// }, false)
