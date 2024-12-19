import { drawMap } from './draw-map.ts';
import { findObstaclePlacements } from './find-obstacle-placements.ts';
import { getPathAndRotations } from './get-path-and-rotations.ts';
import { map } from './input.ts';
import { placeObstacle } from './place-obstacle.ts';
import { rotateGuard } from './rotate-guard.ts';

const [happyPath] = getPathAndRotations(map);

const mapWidth = map[0].length;
const mapHeight = map.length;
const obstaclePlacements = findObstaclePlacements(
  happyPath.slice(0, happyPath.length - 1),
  mapWidth,
  mapHeight,
);
let numLoopedPaths = 0;

// const maps: string[] = [];

console.log(obstaclePlacements);

for (let i = 0; i < obstaclePlacements.length; i++) {
  console.log(`obstacle ${i + 1}`);

  const mapWithObstacle = placeObstacle(obstaclePlacements[i], [...map]);

  const [path, rotations, loop] = getPathAndRotations(mapWithObstacle);
  if (loop) {
    numLoopedPaths += 1;
  }
  console.log('looped: ', loop);
  const stringRotations: string[] = rotations.map(
    ([row, col]) => `${row},${col}`,
  );

  for (let j = 0; j < path.length - 1; j++) {
    const [curRow, curCol] = path[j];
    const [nextRow, nextCol] = path[j + 1];
    let guard = mapWithObstacle[curRow][curCol];
    mapWithObstacle[curRow] = mapWithObstacle[curRow].split(guard).join('.');
    if (stringRotations.includes(`${nextRow},${nextCol}`)) {
      guard = rotateGuard(guard);
    }
    if (mapWithObstacle[nextRow]) {
      mapWithObstacle[nextRow] =
        mapWithObstacle[nextRow].substring(0, nextCol) +
        guard +
        mapWithObstacle[nextRow].substring(nextCol + 1, mapWidth);
    }
    // maps.push([...mapWithObstacle].join('\n'));
  }
}

console.log(numLoopedPaths);

// drawMap(maps);
