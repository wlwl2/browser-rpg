export default function Scene (height, width) {
  this.height = height
  this.width = width
  this.tiles = ['rgb(223, 215, 138)', 'rgb(38, 38, 35)', 'rgb(247, 115, 41)', 'rgb(33, 62, 134)']
  this.grid = []
  this.initialize()
  this.setBorder()
  // this.setItems()
  this.setRandomWalls()
}

Scene.prototype.draw = function (ctx, canvas) {
  const cellWidth = canvas.width / this.width
  const cellHeight = canvas.height / this.height
  for (let y = 0; y < this.height; y++) {
    const row = this.grid[y]
    for (let x = 0; x < this.width; x++) {
      const value = row[x]
      ctx.fillStyle = this.tiles[value]
      ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight)
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

// Scene.prototype.setItems = function setItems () {
//   for (let y = 1; y < this.height - 1; y++) {
//     const row = this.grid[y]
//     for (let x = 1; x < this.width - 1; x++) {
//       if (x === Math.floor(Math.random() * 18) + 1 || y === Math.floor(Math.random() * 18) + 1) {
//         row[x] = 2
//       }
//     }
//   }
// }

Scene.prototype.setRandomWalls = function setRandomWalls () {
  for (let y = 1; y < this.height - 1; y++) {
    const row = this.grid[y]
    for (let x = 1; x < this.width - 1; x++) {
      if (x === Math.floor(Math.random() * 18) + 1 || y === Math.floor(Math.random() * 18) + 1) {
        row[x] = 1
      }
    }
  }
}
