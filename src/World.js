// people and monsters
import Monster from './Monster'
import Player from './Player'
import Scene from './Scene'

export default function World () {
  const monsters = this.monsters = []

  // var monster1 = new Monster(128, 128)
  // var monster2 = new Monster(144, 144)
  // var monster3 = new Monster(160, 160)
  // var monster4 = new Monster(240, 240)
  // var monster5 = new Monster(256, 256)
  // var monster6 = new Monster(320, 320)

  // Returns a random integer between min (inclusive) and max (inclusive)
  // Using Math.round() will give you a non-uniform distribution!
  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  for (var i = 0; i < 10; i++) {
    var monsterName = 'monster' + i
    monsterName = new Monster((i * 30), 300)
    monsters.push(monsterName)
  }

  // var monster20 = new Monster(16, 16)
  // monsters.push(monster1, monster2, monster3, monster4, monster5, monster6)
  // monsters.push(monster20)

  const players = this.players = []

  var player1 = new Player(240, 240)

  players.push(player1)
  this.scene = new Scene(20, 20)
}
