export default function TileSelector () {
  const tiles = document.querySelector('.tile-list').children
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', function (event) {
      const sprite = document.createElement('div')
      sprite.setAttribute('draggable', 'true')
      switch (event.target.className) {
        case 'wall':
          sprite.className = 'wall'
          break
        case 'monster':
          sprite.className = 'monster'
          break
        case 'player':
          sprite.className = 'player'
          break
      }
      const currentTile = document.querySelector('.currently-selected-tile')
      if (currentTile.childNodes[1]) {
        currentTile.removeChild(currentTile.childNodes[1])
      }
      currentTile.appendChild(sprite)
    }, false)
  }
}
