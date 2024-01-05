const turn = require('./turn');

test('turn the rover', () => {
    expect(turn('R', 'E')).toBe( 'S' );
});