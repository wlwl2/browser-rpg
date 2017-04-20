export default function Player (x, y) {
  this.x = x
  this.y = y
  this.size = 30
  this.speed = 1
}

Player.prototype.draw = function draw (ctx) {
  var img = new Image()
  img.src = 'src/sprites/characters.png'
  ctx.drawImage(
    img,
    9, // The X coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.
    42, // The Y coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.
    this.size, // The width of the sub-rectangle of the source image to draw into the destination context. If not specified, the entire rectangle from the coordinates specified by sx and sy to the bottom-right corner of the image is used.
    this.size, // The height of the sub-rectangle of the source image to draw into the destination context.
    this.x, // The X coordinate in the destination canvas at which to place the top-left corner of the source image.
    this.y, // The Y coordinate in the destination canvas at which to place the top-left corner of the source image.
    this.size, // The width to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in width when drawn.
    this.size // The height to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in height when drawn.
  )
}

Player.prototype.move = function move (ctx, direction) {
  switch (direction) {
    case 'up': // up.
      this.y -= this.speed
      break;
    case 'down': // down.
      this.y += this.speed
      break;
    case 'right': // right.
      this.x += this.speed
      break;
    case 'left': // left.
      this.x -= this.speed
      break;
  }
}
