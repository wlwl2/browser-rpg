export default class Monster {
  constructor (x, y) {
    this.img = document.getElementById('logImg')
    this.srcX = 4
    this.srcY = 7
    this.srcWidth = 32
    this.srcHeight = 32
    this.destX = x
    this.destY = y
    this.entityNumber = 3
    this.destWidth = 32
    this.destHeight = 32
    this.size = 32
    this.speed = 32
    this.category = 'monster'
    this.collidable = 'yes'
    this.collidableTiles = []
    this.exp = 0
    this.health = 5
    this.attackPower = 1
    this.defense = 0
    this.expReward = 5
  }
}

Monster.prototype.draw = function draw (ctx) {
  ctx.drawImage(this.img, this.srcX, this.srcY, this.srcWidth, this.srcHeight,
    this.destX, this.destY, this.destWidth, this.destHeight)
  ctx.drawImage(this.img, this.srcX, this.srcY, this.srcWidth, this.srcHeight,
    this.destX, this.destY, this.destWidth, this.destHeight)
}

Monster.prototype.step = function step (canvasLength, world) {
  const speed = this.speed / 32
  const y = this.destY / 32
  const x = this.destX / 32
  // Collates all the colliable tiles into this.collidableTiles.
  if (!world) return
  world.scene.tiles.forEach(function (Tile) {
    let tileObj = new Tile()
    if (tileObj.collidable === 'yes') {
      this.collidableTiles.push(tileObj.entityNumber)
    }
  }, this)

  // Randomly makes the monster move one step in one of 4 directions.
  const next = {x: this.destX, y: this.destY}
  const nextY = next.y / 32
  const nextX = next.x / 32
  switch (Math.floor(Math.random() * 4)) {
    case 0: // up.
      // Prevents monster from moving outside the canvas when moving up.
      if (next.y - this.speed < 0) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[nextY - speed][x]) >= 0) return
      next.y -= this.speed
      break
    case 1: // down.
      // Prevents monster from moving outside the canvas when moving down.
      if (this.destY + this.speed * 2 > canvasLength) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[nextY + speed][x]) >= 0) return
      next.y += this.speed
      break
    case 2: // right.
      // Prevents monster from moving outside the canvas when moving right.
      if (this.destX + this.speed * 2 > canvasLength) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[y][nextX + speed]) >= 0) return
      next.x += this.speed
      break
    case 3: // left.
      // Prevents monster from moving outside the canvas when moving left.
      if (this.destX - this.speed < 0) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[y][nextX - speed]) >= 0) return
      next.x -= this.speed
      break
  }
  // Collision detection between monsters.
  let canMove = true
  world.monsters.forEach(function (monster) {
    if (monster === this) return
    if (!canMove) return
    if (!(monster.destX > next.x + this.size ||
        monster.destX + monster.size <= next.x ||
        monster.destY > next.y + this.size ||
        monster.destY + monster.size <= next.y)
    ) {
      canMove = false
    }
  }, this)
  if (canMove) {
    this.destX = next.x
    this.destY = next.y
  } else {
    this.step(world.monsters)
  }
}
