// people and monsters
import Monster from './Monster'
import Player from './Player'
import Scene from './Scene'
export default function World () {
  const monsters = this.monsters = []
  for (var i = 0; i < 20; i++) {
    var monsterName = 'monster' + i
    monsterName = new Monster((i * 30), ((Math.floor(Math.random() * 20) * 30)))
    monsters.push(monsterName) // use addEntity
  }
  const players = this.players = []
  var player1 = new Player(240, 240)
  players.push(player1)
  this.scene = new Scene(20, 20)
}
// Add entity properties to this function?
World.prototype.addEntity = function addEntity ([worldX, worldY], entityType) {
  if (entityType <= 1) {
    this.scene.grid[worldY][worldX] = entityType
  }
}
World.prototype.screenToWorld = function screenToWorld ([screenX, screenY], canvas) {
  const tilesWidth = canvas.width / this.scene.width
  const tilesHeight = canvas.height / this.scene.height
  return [Math.floor(screenX / tilesWidth), Math.floor(screenY / tilesHeight)]
}
