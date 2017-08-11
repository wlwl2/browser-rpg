export default function Wall (x, y, entityNumber, ctx) {
  this.x = x
  this.y = y
  this.entityNumber = 1
  this.size = 30
  this.source = 'src/sprites/wall.png'
  this.sourceX = 0
  this.sourceY = 0
  this.category = 'terrain'
  this.collidable = 'yes'
}
