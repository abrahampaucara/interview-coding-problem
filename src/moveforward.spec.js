const moveforward = require('./moveforward');

test('move forward the rover', () => {
    expect(moveforward('E', 4, 3)).toStrictEqual({ direction: 'E', x: 5, y: 3 });
  });