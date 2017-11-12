// people and monsters
import Monster from './entities/characters/Monster'
import Player from './entities/characters/Player'
import Scene from './Scene'

export default function World () {
  const gridcells = 20
  const monsters = this.monsters = []
  monsters.push(new Monster(30, 30), new Monster(60, 60))
  const players = this.players = []
  players.push(new Player(240, 240))
  // Set the initial height and width of the grid (or game board) in cells.
  this.scene = new Scene(gridcells, gridcells)
}

World.prototype.addEntity = function addEntity ([worldX, worldY], entityType) {
  if (entityType) {
    this.scene.grid[worldY][worldX] = Number(entityType)
  }
}

// Returns the x and y coordinates in terms of grid cells.
World.prototype.screenToWorld = function screenToWorld ([screenX, screenY], canvas) {
  const canvasLeft = document.querySelector('canvas').getBoundingClientRect().left
  const canvasRight = document.querySelector('canvas').getBoundingClientRect().right
  const canvasTop = document.querySelector('canvas').getBoundingClientRect().top
  const canvasBottom = document.querySelector('canvas').getBoundingClientRect().bottom
  const canvasWidth = canvasRight - canvasLeft
  const canvasHeight = canvasBottom - canvasTop
  const tilesWidth = canvasWidth / this.scene.width
  const tilesHeight = canvasHeight / this.scene.height
  return [Math.floor(screenX / tilesWidth), Math.floor(screenY / tilesHeight)]
}
