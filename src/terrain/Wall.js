export default function Wall (x, y, entityNumber, ctx) {
  this.x = x
  this.y = y
  this.entityNumber = 1
  this.size = 30
  // const img = document.createElement('img')
  // img.addEventListener('load', () => {
  //   ctx.drawImage(img, 0, 0, this.size, this.size, this.x, this.y, this.size, this.size)
  // })
  // img.src = 'src/sprites/wall.png'
  // this.img = img
  this.source = 'src/sprites/wall.png'
  this.sourceX = 0
  this.sourceY = 0
  this.category = 'terrain'
}
