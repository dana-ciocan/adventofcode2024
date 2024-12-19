import { findObstaclePlacements } from './find-obstacle-placements.ts';
import { getPathAndLoop } from './get-path-and-loop.ts';
import { getPath } from './get-path.ts';
import { map } from './input.ts';
import { placeObstacle } from './place-obstacle.ts';

const happyPath = getPath(map);

const mapWidth = map[0].length;
const mapHeight = map.length;
const obstaclePlacements = findObstaclePlacements(
  happyPath.slice(0, happyPath.length - 1),
  mapWidth,
  mapHeight,
);
let numLoopedPaths = 0;

for (let i = 0; i < obstaclePlacements.length; i++) {
  const mapWithObstacle = placeObstacle(obstaclePlacements[i], [...map]);

  const [path, loop] = getPathAndLoop(mapWithObstacle);
  if (loop) {
    numLoopedPaths += 1;
  }
  console.log(`${i}: ${loop}`);
}

console.log(numLoopedPaths);
