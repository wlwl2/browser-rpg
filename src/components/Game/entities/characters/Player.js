export default class Player {
  constructor (x, y) {
    this.img = document.getElementById('spritesheet')
    this.sourceX = 1
    this.sourceY = 6
    this.destinationX = x
    this.destinationY = y
    this.entityNumber = 2
    this.sizeX = 15
    this.sizeY = 22
    this.speed = 5
    this.category = 'character'
    this.collidable = 'yes'
    this.collidableTiles = []
    this.exp = 0
    this.health = 10
    this.attackPower = 3
    this.defense = 0
    this.updateSprite = function (sourceX, sourceY, sizeX, sizeY) {
      console.log(this)
    }.bind(this)
  }
}

Player.prototype.draw = function draw (ctx) {
  ctx.drawImage(this.img, this.sourceX, this.sourceY, this.sizeX, this.sizeY,
    this.destinationX, this.destinationY, this.sizeX, this.sizeY)
}



// Moves the player one step.
Player.prototype.move = function move (ctx, direction, canvas, world) {
  const speed = this.speed
  const y = this.destinationY
  const x = this.destinationX
  world.scene.tiles.forEach(function (Tile) {
    let tileObj = new Tile()
    if (tileObj.collidable === 'yes') {
      this.collidableTiles.push(tileObj.entityNumber)
    }
  }, this)
  switch (direction) {
    case 'up':
      // Prevents player from moving outside the canvas when moving up.
      if (this.destinationY - this.speed < 0) return
      // Collidable terrain detection.
      // if (this.collidableTiles.indexOf(world.scene.grid[y - speed][x]) >= 0) return

      if (this.sourceX === 1) {
        this.sourceX = 17
        this.sourceY = 7
        this.sizeX = 15
        this.sizeY = 21
        this.updateSprite()
      } else if (this.sourceX === 17) {
        this.sourceX = 33
        this.sourceY = 6
        this.sizeX = 15
        this.sizeY = 22
      } else if (this.sourceX === 33) {
        this.sourceX = 49
        this.sourceY = 7
        this.sizeX = 15
        this.sizeY = 21
      } else if (this.sourceX === 49) {
        this.sourceX = 1
        this.sourceY = 6
        this.sizeX = 15
        this.sizeY = 22
      }

      this.destinationY -= this.speed
      break
    case 'down':
      // Prevents player from moving outside the canvas when moving down.
      if (this.destinationY + this.speed * 2 > canvas.height) return
      // Collidable terrain detection.
      // if (this.collidableTiles.indexOf(world.scene.grid[y + speed][x]) >= 0) return
      if (this.sourceX === 1) {
        this.sourceX = 17
        this.sourceY = 7
        this.sizeX = 15
        this.sizeY = 21
      } else if (this.sourceX === 17) {
        this.sourceX = 33
        this.sourceY = 6
        this.sizeX = 15
        this.sizeY = 22
      } else if (this.sourceX === 33) {
        this.sourceX = 49
        this.sourceY = 7
        this.sizeX = 15
        this.sizeY = 21
      } else if (this.sourceX === 49) {
        this.sourceX = 1
        this.sourceY = 6
        this.sizeX = 15
        this.sizeY = 22
      }

      this.destinationY += this.speed
      break
    case 'right':
      // Prevents player from moving outside the canvas when moving right.
      if (this.destinationX + this.speed * 2 > canvas.width) return
      // Collidable terrain detection.
      // if (this.collidableTiles.indexOf(world.scene.grid[y][x + speed]) >= 0) return
      this.destinationX += this.speed
      break
    case 'left':
      // Prevents player from moving outside the canvas when moving left.
      if (this.destinationX - this.speed < 0) return
      // Collidable terrain detection.
      // if (this.collidableTiles.indexOf(world.scene.grid[y][x - speed]) >= 0) return
      this.destinationX -= this.speed
      break
  }
}
