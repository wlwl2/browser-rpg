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
  tiles.forEach(function (Tile) {
    let tileObj = new Tile()
    if (tileObj.collidable === 'yes') {
      this.collidableTiles.push(tileObj.entityNumber)
    }
  }, this)
  // Randomly makes the monster move one step in one of 4 directions.
  const next = {x: this.x, y: this.y}
  switch (Math.floor(Math.random() * 4)) {
    case 0: // up.
      if (next.y - this.speed < 0) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(grid[(next.y / 30) - (this.speed / 30)][this.x / 30]) >= 0) return
      next.y -= this.speed
      break
    case 1: // down.
      if (this.y + this.speed * 2 > canvasLength) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(grid[(next.y / 30) + (this.speed / 30) * 2][this.x]) >= 0) return
      next.y += this.speed
      break
    case 2: // right.
      if (this.x + this.speed * 2 > canvasLength) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(grid[this.y / 30][(next.x / 30) + (this.speed / 30) * 2]) >= 0) return
      next.x += this.speed
      break
    case 3: // left.
      if (this.x - this.speed < 0) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(grid[this.y / 30][(next.x / 30) - (this.speed / 30)]) >= 0) return
      next.x -= this.speed
      break
  }
  // Collision detection. next is now: next position of the monster.
  let canMove = true
  monsters.forEach(function (monster) {
    if (monster === this) return
    if (!canMove) return
    // console.log(monster.x, monster.y, 'next:', next.x, next.y)
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
