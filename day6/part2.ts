import { drawMap } from './draw-map.ts';
import { getPathAndRotations } from './get-path-and-rotations.ts';
import { map } from './input.ts';
import { rotateGuard } from './rotate-guard.ts';

const [path, rotations] = getPathAndRotations(map);

const stringRotations: string[] = rotations.map(
  ([row, col]) => `${row},${col}`,
);

const mapWidth = map[0].length;
const maps: string[] = [];

for (let i = 0; i < path.length - 1; i++) {
  const [curRow, curCol] = path[i];
  const [nextRow, nextCol] = path[i + 1];
  let guard = map[curRow][curCol];
  map[curRow] = map[curRow].split(guard).join('.');
  if (stringRotations.includes(`${nextRow},${nextCol}`)) {
    guard = rotateGuard(guard);
  }
  if (map[nextRow]) {
    map[nextRow] =
      map[nextRow].substring(0, nextCol) +
      guard +
      map[nextRow].substring(nextCol + 1, mapWidth);
  }
  maps.push([...map].join('\n'));
}

drawMap(maps);
