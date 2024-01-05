module.exports = function(instruction, direction) {
  const directions = ['N', 'E', 'S', 'W'];
  let index = directions.indexOf(direction);
  if (instruction === 'R') {
    direction = directions[(index + 1) % 4];
  } else {
    direction = directions[(index + 3) % 4];
  }
  return direction;
}