var img = new Image();
img.src = '../sprites/characters.png';


var spriteWidth  = 350,
    spriteHeight = 170,
    pixelsLeft   = 170,
    pixelsTop    = 10,

    // Where are we going to draw
    // the sprite on the canvas
    canvasPosX   = 20,
    canvasPosY   = 20
;

ctx.drawImage(img,
    pixelsLeft,
    pixelsTop,
    spriteWidth,
    spriteHeight,
    canvasPosX,
    canvasPosY,
    spriteWidth,
    spriteHeight
);
