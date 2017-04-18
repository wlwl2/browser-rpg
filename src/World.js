// people and monsters
import Monster from './Monster'
import Character from './Character'

export default function World () {

  const monsters = []

  var monster1 = new Monster(10, 10)
  var monster2 = new Monster(50, 50)
  var monster3 = new Monster(81, 50)
  var monster4 = new Monster(111, 50)
  var monster5 = new Monster(141, 50)
  var monster6 = new Monster(171, 50)

  monsters.push(monster1, monster2, monster3, monster4, monster5, monster6)

  const characters = []

  var character1 = new Character(10, 50)

  characters.push(character1)

  return { monsters, characters }
}
