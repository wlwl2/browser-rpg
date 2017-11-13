export default function Player (x, y) {
  this.img = document.getElementById('spritesheet')
  this.sourceX = 9
  this.sourceY = 42
  this.x = x
  this.y = y
  this.entityNumber = 2
  this.size = 30
  this.speed = 30
  this.category = 'character'
  this.collidable = 'yes'
  this.collidableTiles = []
  this.exp = 0
  this.health = 10
  this.attackPower = 3
  this.defense = 0
}

Player.prototype.draw = function draw (ctx) {
  ctx.drawImage(this.img, this.sourceX, this.sourceY, this.size, this.size,
    this.x, this.y, this.size, this.size)
}

// Moves the player one step.
Player.prototype.move = function move (ctx, direction, canvas, world) {
  const speed = this.speed / 30
  const y = this.y / 30
  const x = this.x / 30
  world.scene.tiles.forEach(function (Tile) {
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
      if (this.collidableTiles.indexOf(world.scene.grid[y - speed][x]) >= 0) return
      this.y -= this.speed
      break
    case 'down':
      // Prevents player from moving outside the canvas when moving down.
      if (this.y + this.speed * 2 > canvas.height) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[y + speed][x]) >= 0) return
      this.y += this.speed
      break
    case 'right':
      // Prevents player from moving outside the canvas when moving right.
      if (this.x + this.speed * 2 > canvas.width) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[y][x + speed]) >= 0) return
      this.x += this.speed
      break
    case 'left':
      // Prevents player from moving outside the canvas when moving left.
      if (this.x - this.speed < 0) return
      // Collidable terrain detection.
      if (this.collidableTiles.indexOf(world.scene.grid[y][x - speed]) >= 0) return
      this.x -= this.speed
      break
  }
}
