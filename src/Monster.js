export default function Monster (x, y, color = 'green') {
  this.x = x
  this.y = y
  this.size = 10
  this.color = color
  this.speed = 1
}

Monster.prototype.draw = function draw (ctx) {
  var img = new Image()
  img.src = '../sprites/characters.png'

  function Sprite (img, width, height, positions) {
    this.img = img
    this.width = width
    this.height = height
    this.positions = positions
  }

  Sprite.prototype = {
    draw: function(x, y, position){

        var pos = this.positions[position]

        ctx.drawImage(
          this.img,
          pos[0], // The X coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.
          pos[1], // The Y coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.
          this.width, // The width of the sub-rectangle of the source image to draw into the destination context. If not specified, the entire rectangle from the coordinates specified by sx and sy to the bottom-right corner of the image is used.
          this.height, // The height of the sub-rectangle of the source image to draw into the destination context.
          x, // The X coordinate in the destination canvas at which to place the top-left corner of the source image.
          y, // The Y coordinate in the destination canvas at which to place the top-left corner of the source image.
          this.width, // The width to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in width when drawn.
          this.height // The height to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in height when drawn.
        )
      }
  }

  var monster = new Sprite(img, 30, 30,  [[8, 114]]);
  monster.draw(140, 200, 0);
}

Monster.prototype.step = function step (monsters) {

  const next = {x: this.x, y: this.y}

  switch (Math.floor(Math.random() * 4)) {
    case 0: // up.
      next.y -= this.speed
      break;
    case 1: // down.
      next.y += this.speed
      break;
    case 2: // right.
      next.x += this.speed
      break;
    case 3: // left.
      next.x -= this.speed
      break;
  }

  let canMove = true

  // Collision detection.
  monsters.forEach(function (monster) {
    if (monster === this) return
    if (!canMove) return
    if (!(monster.x > next.x + this.size
        || monster.x + monster.size <= next.x
        || monster.y > next.y + this.size
        || monster.y + monster.size <= next.y)
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


//uuid ietf rfc namespace network card
