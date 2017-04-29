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

    // An element to draw into the context.
    img,

    // The X coordinate of the top left corner of the sub-rectangle of the
    // source image to draw into the destination context.
    9,

    // The Y coordinate of the top left corner of the sub-rectangle of the
    // source image to draw into the destination context.
    42,

    // The width of the sub-rectangle of the source image to draw into the
    // destination context. If not specified, the entire rectangle from the
    // coordinates specified by sx and sy to the bottom-right
    // corner of the image is used.
    this.size,

    // The height of the sub-rectangle of the source image to draw into
    // the destination context.
    this.size,

    // The X coordinate in the destination canvas at which to place the
    // top-left corner of the source image.
    this.x,

    // The Y coordinate in the destination canvas at which to place the
    // top-left corner of the source image.
    this.y,

    // The width to draw the image in the destination canvas. This allows
    // scaling of the drawn image. If not specified, the image is not
    // scaled in width when drawn.
    this.size,

    // The height to draw the image in the destination canvas. This allows
    // scaling of the drawn image. If not specified, the image is not
    // scaled in height when drawn.
    this.size
  )
}

Player.prototype.move = function move (ctx, direction) {
  switch (direction) {
    case 'up': // up.
      this.y -= this.speed
      break
    case 'down': // down.
      this.y += this.speed
      break
    case 'right': // right.
      this.x += this.speed
      break
    case 'left': // left.
      this.x -= this.speed
      break
  }
}
