export default function Wall (x, y, entityNumber, ctx) {
  this.img = document.getElementById('wall')
  this.sourceX = 0
  this.sourceY = 0
  this.x = x
  this.y = y
  this.entityNumber = 1
  this.size = 30
  this.category = 'terrain'
  this.collidable = 'yes'
}
