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
