// people and monsters
import Monster from './Monster'
import Player from './Player'
import Scene from './Scene'

export default function World () {
  const monsters = this.monsters = []

  var monster1 = new Monster(10, 10)
  var monster2 = new Monster(50, 50)
  var monster3 = new Monster(81, 50)
  var monster4 = new Monster(111, 50)
  var monster5 = new Monster(141, 50)
  var monster6 = new Monster(171, 50)

  monsters.push(monster1, monster2, monster3, monster4, monster5, monster6)

  const players = this.players = []

  var player1 = new Player(10, 50)

  players.push(player1)
  this.scene = new Scene(16, 16)
}
