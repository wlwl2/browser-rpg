export default function Monster (x, y, color = 'green') {
  this.x = x
  this.y = y
  this.size = 10
  this.color = color
  this.speed = 1
}

Monster.prototype.draw = function draw (ctx) {
  ctx.fillStyle = this.color
  ctx.fillRect(this.x, this.y, this.size, this.size)
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
