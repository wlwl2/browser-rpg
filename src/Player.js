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
}

Player.prototype.draw = function draw (ctx) {
  ctx.drawImage(img, this.sourceX, this.sourceY, this.size, this.size,
    this.x, this.y, this.size, this.size)
}

Player.prototype.move = function move (ctx, direction) {
  switch (direction) {
    case 'up':
      this.y -= this.speed
      break
    case 'down':
      this.y += this.speed
      break
    case 'right':
      this.x += this.speed
      break
    case 'left':
      this.x -= this.speed
      break
  }
}
