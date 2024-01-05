module.exports = function(direction, x, y) {
  if (direction === 'N') {
    y++;
  } else if (direction === 'S') {
    y--;
  } else if (direction === 'E') {
    x++;
  } else if (direction === 'W') {
    x--;
  }

  return {direction, x, y};
};