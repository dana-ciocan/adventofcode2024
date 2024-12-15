export const getGuardPosition = (map) => {
  let guardRow;
  let guardCol;
  for (let i = 0; i < map.length; i++) {
    if (map[i].indexOf('^') > 0) {
      guardRow = i;
      guardCol = map[i].indexOf('^');
    }
  }

  return [guardRow, guardCol];
};
