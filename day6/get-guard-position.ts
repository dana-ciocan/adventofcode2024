export const getGuardPosition = (map: string[][]) => {
  const guards = ['^', '>', 'v', '<'];
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (guards.includes(map[i][j])) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};
