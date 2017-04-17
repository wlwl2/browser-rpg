var canvas = document.querySelector('.canvas'),
ctx = canvas.getContext('2d')

var img = new Image()
img.src = 'characters.png'

function Sprite(img, width, height, positions){
  this.img = img;
  this.width = width;
  this.height = height;
  this.positions = positions;
}

Sprite.prototype = {
  draw: function(position, x, y){

      var pos = this.positions[position];

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
      );
    }
};

var sprite = new Sprite(
  img,
  30,
  30,
  [
    // specify a few sprite locations
    [160, 40],  // warrior
    [190, 70], // archer
    [190, 10]  // monk
  ]
);

sprite.draw(0, 10, 200);
sprite.draw(1, 50, 200);
sprite.draw(2, 90, 200);
