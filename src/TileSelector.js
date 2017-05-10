export default function TileSelector () {
  const tiles = document.querySelector('.tile-list').children
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', function (event) {
      const sprite = document.createElement('div')
      sprite.setAttribute('draggable', 'true')
      const dataEntityNumber = event.target.getAttribute('data-entity-number')
      sprite.setAttribute('data-entity-number', dataEntityNumber)
      sprite.className = event.target.className
      const currentTile = document.querySelector('.currently-selected-tile')
      if (currentTile.childNodes[1]) {
        currentTile.removeChild(currentTile.childNodes[1])
      }
      currentTile.appendChild(sprite)
    }, false)
  }
}
