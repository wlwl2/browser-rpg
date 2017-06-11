// people and monsters
import Monster from './Monster'
import Player from './Player'
import Scene from './Scene'

export default function World () {
  const gridcells = 20
  const monsters = this.monsters = []
  let spawnNumber = 30
  monsters.push(new Monster(0, 0), new Monster(60, 60))
  const players = this.players = []
  var player1 = new Player(240, 240)
  players.push(player1)
  // Set the initial height and width of the grid (or game board) in cells.
  this.scene = new Scene(gridcells, gridcells)
}
// Add entity properties to this function?
// Different tiles can be added to the grid by restricting the limits
// for the entityType below.
World.prototype.addEntity = function addEntity ([worldX, worldY], entityType) {
  // if (entityType <= 1) {
  //   this.scene.grid[worldY][worldX] = entityType
  // }
  if (entityType) {
    this.scene.grid[worldY][worldX] = entityType
  }
}
// Returns the x and y coordinates in terms of grid cells.
World.prototype.screenToWorld = function screenToWorld ([screenX, screenY], canvas) {
  const tilesWidth = canvas.width / this.scene.width
  const tilesHeight = canvas.height / this.scene.height
  return [Math.floor(screenX / tilesWidth), Math.floor(screenY / tilesHeight)]
}
