import Team from './main'

test('проверяем работу метода genetator на вызов первого игрока', () => {
  const team = new Team()
  let player = team.genetator()
  const correct = {
    value: {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10
    },
    done: false
  }
  expect(player.next()).toEqual(correct)
})

test('проверяем работу метода genetator на вызов второго игрока', () => {
  const team = new Team()
  const player = team.genetator()
  player.next()
  const correct = {
    value: {
      name: 'Gamen',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40
    },
    done: false
  }
  expect(player.next()).toEqual(correct)
})

test('проверяем работу метода genetator на окончание итерации', () => {
  const team = new Team()
  const player = team.genetator()
  player.next()
  player.next()
  player.next()
  const correct = {
    value: undefined, done: true
  }
  expect(player.next()).toEqual(correct)
})