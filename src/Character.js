export default function Player (x, y, color = 'black') {
  this.x = x
  this.y = y
  this.size = 10
  this.color = color
  this.speed = 1
}

Player.prototype.draw = function draw (ctx) {
  ctx.fillStyle = this.color
  ctx.fillRect(this.x, this.y, this.size, this.size)
}

Player.prototype.move = function move (players) {
  ctx.fillStyle = this.color
  ctx.fillRect(this.x, this.y, this.size, this.size)
}
