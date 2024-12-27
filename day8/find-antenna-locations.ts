interface LocationsByType {
  [key: string]: number[][];
}

export const findAntennaLocations = (map: string[]): LocationsByType => {
  const output = {};
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      const curLocation = map[i][j];
      if (curLocation !== '.') {
        if (output[curLocation] === undefined) {
          output[curLocation] = [];
        }
        output[curLocation].push([i, j]);
      }
    }
  }
  return output;
};
