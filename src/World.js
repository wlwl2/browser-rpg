// people and monsters
import Monster from './Monster'
import Player from './Player'
import Scene from './Scene'

export default function World () {
  const monsters = this.monsters = []

  var monster1 = new Monster(10, 10)
  var monster2 = new Monster(50, 50)
  var monster3 = new Monster(100, 100)
  var monster4 = new Monster(150, 150)
  var monster5 = new Monster(200, 200)
  var monster6 = new Monster(250, 250)

  monsters.push(monster1, monster2, monster3, monster4, monster5, monster6)

  const players = this.players = []

  var player1 = new Player(10, 50)

  players.push(player1)
  this.scene = new Scene(32, 32)
}
