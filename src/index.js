import Monster from './Monster'

function init () {
  var canvas = document.createElement("canvas")

  canvas.height = 256
  canvas.width = 256

  var ctx = canvas.getContext('2d')

  document.body.appendChild(canvas)

  return { ctx, canvas }
}

function step () {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  monsters.forEach(function (monster) {
    monster.step(monsters)
    monster.draw(ctx)
  })
}

window.addEventListener("keydown", function(event){
  if (event.key === ' ') step()
}, false);

const { ctx, canvas } = init()



var monster1 = new Monster(10, 10, 'blue')
var monster2 = new Monster(50, 50, 'red')
var monster3 = new Monster(61, 50)
var monster4 = new Monster(71, 50)
var monster5 = new Monster(81, 50)
var monster6 = new Monster(91, 50)

const monsters = []

monsters.push(monster1, monster2, monster3, monster4, monster5, monster6)

step()
