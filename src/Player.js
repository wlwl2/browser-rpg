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
  ctx.drawImage(
    // An element to draw into the context.
    img,

    /* The X coordinate of the top left corner of the sub-rectangle of the
    source image to draw into the destination context. */
    this.sourceX,

    /* The Y coordinate of the top left corner of the sub-rectangle of the
     source image to draw into the destination context. */
    this.sourceY,

    /* The width of the sub-rectangle of the source image to draw into the
    destination context. If not specified, the entire rectangle from the
    coordinates specified by sx and sy to the bottom-right
    corner of the image is used. */
    this.size,

    /* The height of the sub-rectangle of the source image to draw into
    the destination context. */
    this.size,

    /* The X coordinate in the destination canvas at which to place the
    top-left corner of the source image. */
    this.x,

    /* The Y coordinate in the destination canvas at which to place the
    top-left corner of the source image. */
    this.y,

    /* The width to draw the image in the destination canvas. This allows
    scaling of the drawn image. If not specified, the image is not
    scaled in width when drawn. */
    this.size,

    /* The height to draw the image in the destination canvas. This allows
    scaling of the drawn image. If not specified, the image is not
    scaled in height when drawn. */
    this.size
  )
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
    case 'up left':
      this.x -= this.speed
      this.y -= this.speed
      break
    case 'down left':
      this.x -= this.speed
      this.y += this.speed
      break
    case 'up right':
      this.x += this.speed
      this.y -= this.speed
      break
    case 'down right':
      this.x += this.speed
      this.y += this.speed
      break
  }
}
