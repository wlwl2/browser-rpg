var canvas = document.querySelector('.canvas'),
ctx = canvas.getContext('2d')

var img = new Image()
img.src = 'characters.png'

var spriteWidth  = 736,
    spriteHeight = 128,
    pixelsLeft   = 0,
    pixelsTop    = 0,

    // Where are we going to draw
    // the sprite on the canvas
    canvasPosX   = 0,
    canvasPosY   = 0


ctx.drawImage(img,
    pixelsLeft, // The X coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.
    pixelsTop, // The Y coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.
    spriteWidth, // The width of the sub-rectangle of the source image to draw into the destination context. If not specified, the entire rectangle from the coordinates specified by sx and sy to the bottom-right corner of the image is used.
    spriteHeight, // The height of the sub-rectangle of the source image to draw into the destination context.
    canvasPosX, // The X coordinate in the destination canvas at which to place the top-left corner of the source image.
    canvasPosY, // The Y coordinate in the destination canvas at which to place the top-left corner of the source image.
    spriteWidth, // The width to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in width when drawn.
    spriteHeight // The height to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in height when drawn.
)

//ctx.fillRect(x, y, width, height)

function xLines () {

  var intervalX = 13
  var differenceX = 10
  var startX = 9
  var endX = 727
  var maxWidthX = Math.floor(spriteWidth/10)*10
  var intervalTotalX = Math.floor(maxWidthX/intervalX)

  ctx.fillStyle = 'blue'
  ctx.fillRect(startX, 0, 1, 10)
  ctx.fillRect(endX, 0, 1, 10)
  for (var i = 1; i < intervalTotalX-1; i++) {
    ctx.fillRect((i*intervalX+differenceX), 0, 1, 10)
  }
}
xLines()

function yLines () {

  var intervalY = 13
  var differenceY = 10
  var startY = 10
  var endY = 119
  var maxWidthY = Math.floor(spriteWidth/10)*10
  var intervalTotalY = Math.floor(maxWidthY/intervalY)

  ctx.fillStyle = 'blue'
  ctx.fillRect(0, startY, 20, 1)
  ctx.fillRect(0, endY, 10, 1)
  for (var i = 1; i < intervalTotalY-1; i++) {
    ctx.fillRect(0, (i*intervalY+differenceY), 10, 1)
  }
}
yLines()
