export default function Character (x, y, color = 'black') {
  this.x = x
  this.y = y
  this.size = 10
  this.color = color
  this.speed = 1
}

Character.prototype.draw = function draw (ctx) {
  ctx.fillStyle = this.color
  ctx.fillRect(this.x, this.y, this.size, this.size)
}
