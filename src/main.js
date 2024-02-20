export default class Team {
  constructor() {
    this.Bowman = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10
    }
    this.Magicial = {
      name: 'Gamen',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    }
    this.Zombie = {
      name: 'Gamen',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    }
  }
  *genetator() {
    yield this.Bowman;
    yield this.Magicial;
    yield this.Zombie;
    return
  }
}