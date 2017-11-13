export default function Grass (x, y, entityNumber, ctx) {
  this.img = document.getElementById('tree')
  this.sourceX = 0
  this.sourceY = 0
  this.x = x
  this.y = y
  this.entityNumber = 5
  this.size = 30
  this.category = 'terrain'
  this.collidable = 'yes'
}
