const img = document.createElement('img')
img.src = 'src/sprites/characters-min.png'

export default function Player (x, y, world) {
  this.x = x
  this.y = y
  this.entityNumber = 2
  this.size = 30
  this.speed = 30
  this.world = world
  this.category = 'character'
  this.sourceX = 9
  this.sourceY = 42
  this.source = 'src/sprites/characters-min.png'
  this.collidable = 'yes'
  this.collidableTiles = []
}

Player.prototype.draw = function draw (ctx) {
  ctx.drawImage(img, this.sourceX, this.sourceY, this.size, this.size,
    this.x, this.y, this.size, this.size)
}

// Moves the player one step.
Player.prototype.move = function move (ctx, direction, canvas, grid, tiles) {
  const speed = this.speed / 30
  const y = this.y / 30
  const x = this.x / 30
  tiles.forEach(function (Tile) {
    let tileObj = new Tile()
    if (tileObj.collidable === 'yes') {
      this.collidableTiles.push(tileObj.entityNumber)
    }
  }, this)
  switch (direction) {
    case 'up':
      // Prevents player from moving outside the canvas when moving up.
      if (this.y - this.speed < 0) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(grid[y - speed][x]) >= 0) return
      this.y -= this.speed
      break
    case 'down':
      // Prevents player from moving outside the canvas when moving down.
      if (this.y + this.speed * 2 > canvas.height) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(grid[y + speed][x]) >= 0) return
      this.y += this.speed
      break
    case 'right':
      // Prevents player from moving outside the canvas when moving right.
      if (this.x + this.speed * 2 > canvas.width) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(grid[y][x + speed]) >= 0) return
      this.x += this.speed
      break
    case 'left':
      // Prevents player from moving outside the canvas when moving left.
      if (this.x - this.speed < 0) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(grid[y][x - speed]) >= 0) return
      this.x -= this.speed
      break
  }
}