import { findLoops } from './find-loops.ts';
import { getGuardPosition } from './get-guard-position.ts';
import { isGuardOutOfBounds } from './is-guard-out-of-bounds.ts';
import { rotateGuard } from './rotate-guard.ts';

export const getPathAndLoop = (map: string[]): [string[], boolean] => {
  let currentGuardPosition: number[] = getGuardPosition(map);
  let guardDirection: string = '^';
  let path: string[] = [];
  let loopedPath = false;
  const numTimesVisited: object = {};
  let numLoops = 0;

  path.push(`${currentGuardPosition[0]},${currentGuardPosition[1]}`);

  while (!isGuardOutOfBounds(currentGuardPosition, map) && !loopedPath) {
    const [guardRow, guardCol] = currentGuardPosition;
    let nextGuardPosition;

    switch (guardDirection) {
      case '^':
        nextGuardPosition = [guardRow - 1, guardCol];
        break;
      case '>':
        nextGuardPosition = [guardRow, guardCol + 1];
        break;
      case 'v':
        nextGuardPosition = [guardRow + 1, guardCol];
        break;
      case '<':
        nextGuardPosition = [guardRow, guardCol - 1];
        break;
    }

    const nextRow = map[nextGuardPosition[0]];
    const nextPosition = nextRow?.[nextGuardPosition[1]];

    if (nextPosition !== '#') {
      currentGuardPosition = nextGuardPosition;
      path.push(`${currentGuardPosition[0]},${currentGuardPosition[1]}`);
      if (
        !numTimesVisited[
          `${currentGuardPosition[0]},${currentGuardPosition[1]}`
        ]
      ) {
        numTimesVisited[
          `${currentGuardPosition[0]},${currentGuardPosition[1]}`
        ] = 0;
      }
      numTimesVisited[
        `${currentGuardPosition[0]},${currentGuardPosition[1]}`
      ] += 1;
    } else {
      guardDirection = rotateGuard(guardDirection);
    }
    numLoops++;
    if (numLoops % 500 === 0) {
      loopedPath = findLoops(numTimesVisited);
    }
  }
  return [path, loopedPath];
};
