export default function Wall (x, y, entityNumber, ctx) {
  this.x = x
  this.y = y
  this.entityNumber = 0
  this.size = 30
  this.img = document.getElementById('floor')
  this.sourceX = 0
  this.sourceY = 0
  this.category = 'terrain'
  this.collidable = 'no'
}
