const img = document.createElement('img')
img.src = 'src/sprites/characters-min.png'

export default function Monster (x, y) {
  this.x = x
  this.y = y
  this.entityNumber = 3
  this.size = 30
  this.speed = 30
  this.category = 'monster'
  this.sourceX = 8
  this.sourceY = 114
  this.source = 'src/sprites/characters-min.png'
  this.collidable = 'yes'
  this.collidableTiles = []
}

Monster.prototype.draw = function draw (ctx) {
  ctx.drawImage(img, this.sourceX, this.sourceY, this.size, this.size,
    this.x, this.y, this.size, this.size)
}

Monster.prototype.step = function step (monsters, canvasLength, grid, tiles) {
  const speed = this.speed / 30
  const y = this.y / 30
  const x = this.x / 30
  // Collates all the colliable tiles into this.collidableTiles.
  if (!tiles) return
  tiles.forEach(function (Tile) {
    let tileObj = new Tile()
    if (tileObj.collidable === 'yes') {
      this.collidableTiles.push(tileObj.entityNumber)
    }
  }, this)
  // Randomly makes the monster move one step in one of 4 directions.
  const next = {x: this.x, y: this.y}
  const nextY = next.y / 30
  const nextX = next.x / 30
  switch (Math.floor(Math.random() * 4)) {
    case 0: // up.
      // Prevents monster from moving outside the canvas when moving up.
      if (next.y - this.speed < 0) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(grid[nextY - speed][x]) >= 0) return
      next.y -= this.speed
      break
    case 1: // down.
      // Prevents monster from moving outside the canvas when moving down.
      if (this.y + this.speed * 2 > canvasLength) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(grid[nextY + speed][x]) >= 0) return
      next.y += this.speed
      break
    case 2: // right.
      // Prevents monster from moving outside the canvas when moving right.
      if (this.x + this.speed * 2 > canvasLength) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(grid[y][nextX + speed]) >= 0) return
      next.x += this.speed
      break
    case 3: // left.
      // Prevents monster from moving outside the canvas when moving left.
      if (this.x - this.speed < 0) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(grid[y][nextX - speed]) >= 0) return
      next.x -= this.speed
      break
  }
  // Collision detection between monsters.
  let canMove = true
  monsters.forEach(function (monster) {
    if (monster === this) return
    if (!canMove) return
    if (!(monster.x > next.x + this.size ||
        monster.x + monster.size <= next.x ||
        monster.y > next.y + this.size ||
        monster.y + monster.size <= next.y)
    ) {
      canMove = false
    }
  }, this)

  if (canMove) {
    this.x = next.x
    this.y = next.y
  } else {
    this.step(monsters)
  }
}
