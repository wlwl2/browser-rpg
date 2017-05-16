import Wall from './terrain/Wall'
import Floor from './terrain/Floor'
export default function Scene (height, width) {
  this.height = height
  this.width = width
  this.grid = []
  this.initialize()
  this.setBorder()
  this.setRandomWalls()
  this.tiles = [Floor, Wall]
}
Scene.prototype.draw = function (ctx, canvas) {
  // cellHeight is the height of each tile in px.
  const cellHeight = canvas.height / this.height
  const cellWidth = canvas.width / this.width
  for (let y = 0; y < this.height; y++) {
    const row = this.grid[y]
    for (let x = 0; x < this.width; x++) {
      const value = row[x]
      const tile = new this.tiles[value]()
      const img = document.createElement('img')
      img.addEventListener('load', () => {
        ctx.drawImage(
          img,
          tile.sourceX,
          tile.sourceY,
          cellWidth,
          cellHeight,
          x * cellWidth,
          y * cellHeight,
          cellWidth,
          cellHeight
        )
      })
      img.src = tile.source
    }
  }
}
Scene.prototype.initialize = function initialize () {
  this.grid = []
  for (let y = 0; y < this.height; y++) {
    const row = []
    for (let x = 0; x < this.width; x++) {
      row.push(0)
    }
    this.grid.push(row)
  }
}
Scene.prototype.setBorder = function setBorder () {
  for (let y = 0; y < this.height; y++) {
    const row = this.grid[y]
    for (let x = 0; x < this.width; x++) {
      if (x === 0 || x === this.width - 1 || y === 0 || y === this.height - 1) {
        row[x] = 1
      }
    }
  }
}
Scene.prototype.setRandomWalls = function setRandomWalls () {
  for (let y = 1; y < this.height - 1; y++) {
    const row = this.grid[y]
    for (let x = 1; x < this.width - 1; x++) {
      row[x] = Math.random() < 0.1 ? 1 : 0
    }
  }
}
