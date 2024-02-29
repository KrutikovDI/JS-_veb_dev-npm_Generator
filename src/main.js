export default class Team {
  constructor() {
    this.players = [{
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10
    },
    {
      name: 'Gamen',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: 'Gamen',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    }]
  }

  *genetator() {
    for(let ind = 0; ind < this.players.length; ind++) {
        yield this.players[ind]
    }
  }
}