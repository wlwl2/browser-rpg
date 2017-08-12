export default function TileSelector () {
  if (!document.querySelector('.tile-list')) return
  const tiles = document.querySelector('.tile-list').children
  const currentTile = document.querySelector('.currently-selected-tile')
  const resetTileButton = document.querySelector('.reset-tile-button')
  const mouseInfo = document.querySelector('.mouse-info')

  // Resets currently selected tile.
  function removeCurrentlySelectedTile () {
    if (currentTile.childNodes[1]) {
      currentTile.removeChild(currentTile.childNodes[1])
    }
    if (mouseInfo.childNodes[1]) {
      mouseInfo.removeChild(mouseInfo.childNodes[1])
    }
  }

  // When each of the tiles are clicked, update the tile selected.
  if (tiles.length === 0) return
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', function (event) {
      const sprite1 = document.createElement('div')
      sprite1.setAttribute('draggable', 'true')
      const dataEntityNumber = event.target.getAttribute('data-entity-number')
      sprite1.setAttribute('data-entity-number', dataEntityNumber)
      sprite1.className = event.target.className
      const sprite2 = sprite1.cloneNode(true)
      removeCurrentlySelectedTile()
      currentTile.appendChild(sprite1)
      mouseInfo.appendChild(sprite2)
    }, false)
  }

  // On reset button click, reset the currently selected tile.
  if (resetTileButton) {
    resetTileButton.addEventListener('click', function (event) {
      removeCurrentlySelectedTile()
    }, false)
  }

  // When the esc key is pressed, clear the currently selected tile.
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      removeCurrentlySelectedTile()
    }
  }, false)

  // Displays the tile near the mouse cursor when a tile is selected.
  document.addEventListener('mousemove', function mouseInfoPosition (event) {
    console.log(event.pageX, event.pageY)
    if (!currentTile) return
    if (currentTile.children[0]) {
      mouseInfo.style.left = String(event.pageX + 20) + 'px'
      mouseInfo.style.top = String(event.pageY + 20) + 'px'
    }
  }, false)
}
