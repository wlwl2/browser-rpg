export default function Monster (x, y, entityNumber) {
  this.x = x
  this.y = y
  this.entityNumber = 3
  this.size = 30
  this.speed = 30
  this.category = 'monster'
}

Monster.prototype.draw = function draw (ctx) {
  var img = document.createElement('img')
  img.addEventListener('load', () => {
    ctx.drawImage(
      img,
      8, // The X coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.
      114, // The Y coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.
      this.size, // The width of the sub-rectangle of the source image to draw into the destination context. If not specified, the entire rectangle from the coordinates specified by sx and sy to the bottom-right corner of the image is used.
      this.size, // The height of the sub-rectangle of the source image to draw into the destination context.
      this.x, // The X coordinate in the destination canvas at which to place the top-left corner of the source image.
      this.y, // The Y coordinate in the destination canvas at which to place the top-left corner of the source image.
      this.size, // The width to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in width when drawn.
      this.size // The height to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in height when drawn.
    )
  }, false)
  img.src = 'src/sprites/characters-min.png'
}

Monster.prototype.step = function step (monsters) {
  const next = {x: this.x, y: this.y}

  switch (Math.floor(Math.random() * 4)) {
    case 0: // up.
      next.y -= this.speed
      break
    case 1: // down.
      next.y += this.speed
      break
    case 2: // right.
      next.x += this.speed
      break
    case 3: // left.
      next.x -= this.speed
      break
  }

  let canMove = true

  // Collision detection.
  monsters.forEach(function (monster) {
    if (monster === this) return
    if (!canMove) return
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
