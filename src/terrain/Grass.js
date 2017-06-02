export default function Grass (x, y, entityNumber, ctx) {
  this.x = x
  this.y = y
  this.entityNumber = 4
  this.size = 30
  // const img = document.createElement('img')
  // img.addEventListener('load', () => {
  //   ctx.drawImage(img, 0, 0, this.size, this.size, this.x, this.y, this.size, this.size)
  // })
  // img.src = 'src/sprites/floor.png'
  // this.img = img
  // console.log(document.querySelector('.floorimg').complete)
  this.source = 'src/sprites/grass-attempt-1.png'
  this.sourceX = 0
  this.sourceY = 0
  this.category = 'terrain'
}
