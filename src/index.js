import Monster from './Monster'
import Players from './Player'
import World from './World'

function init () {
  var canvas = document.createElement('canvas')

  canvas.height = 256
  canvas.width = 256

  var ctx = canvas.getContext('2d')

  document.body.appendChild(canvas)
  return { ctx: ctx, canvas: canvas }
}

// For each of these steps, re-create the world.
function step (direction) {
  // sets all pixels in the rectangle defined by starting point and
  // size to transparent black, erasing any previously drawn content.
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  world.scene.draw(ctx, canvas)
  world.monsters.forEach(function (monster) {
    monster.step(world.monsters)
    monster.draw(ctx)
  })

  world.players.forEach(function (player) {
    player.move(ctx, direction)
    player.draw(ctx)
  })
}

var _init = init(),
  ctx = _init.ctx,
  canvas = _init.canvas

const world = new World()

step()

var map = {};
onkeydown = onkeyup = function(event){
  map[event.key] = event.type == 'keydown';
  /* insert conditional here */
  // console.log(map);
  if (map['ArrowUp'] && map['ArrowRight']) {
    step('up right');
  }
  else if (map['ArrowUp'] && map['ArrowLeft']) {
    step('up left');
  }
  else if (map['ArrowDown'] && map['ArrowRight']) {
    step('down right');
  }
  else if (map['ArrowDown'] && map['ArrowLeft']) {
    step('down left');
  }
  // else if (map['ArrowUp']) {
  //   step('up');
  // }
  // else if (map['ArrowDown']) {
  //   step('down');
  // }
  // else if (map['ArrowLeft']) {
  //   step('left');
  // }
  // else if (map['ArrowRight']) {
  //   step('right');
  // }
}
