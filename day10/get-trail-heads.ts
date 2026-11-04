export const getTrailHeads = (map: string[]) => {
  const locations: number[][] = [];
  const regexp = /0/g;

  for (let i = 0; i < map.length; i++) {
    const columns: object[] = Array.from(map[i].matchAll(regexp));
    for (let j = 0; j < columns.length; j++) {
      locations.push([i + 1, columns[j].index + 1]);
    }
  }

  return locations;
};
