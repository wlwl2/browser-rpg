export default function Grass (x, y, entityNumber, ctx) {
  this.x = x
  this.y = y
  this.entityNumber = 4
  this.size = 30
  this.source = 'src/sprites/grass-attempt-1.png'
  this.sourceX = 0
  this.sourceY = 0
  this.category = 'terrain'
  this.collidable = 'no'
}
