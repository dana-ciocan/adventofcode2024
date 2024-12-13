import { getGuardPosition } from "./get-guard-position.ts";
import { isGuardOutOfBounds } from "./is-guard-out-of-bounds.ts";
import { rotateGuard } from "./rotate-guard.ts";

export const findLoops = (map: string[]) => {
  let currentGuardPosition: number[] = getGuardPosition(map);
  let guardDirection: string = '^';
  let squaresSeen: string[] = [];
  let loops = 0;

  while (!isGuardOutOfBounds(currentGuardPosition, map)) {
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
    const nextPosition = nextRow?.[nextGuardPosition[1]]

    if (nextPosition !== '#') {
      currentGuardPosition = nextGuardPosition;
      console.log(squaresSeen);
      console.log('nextGuardPosition: ', nextGuardPosition.join(','));
      console.log('loops: ', loops);
      if (squaresSeen.includes(nextGuardPosition.join(','))) {
        squaresSeen = [];
        loops++;
      }
      squaresSeen.push(nextGuardPosition.join(','));
    } else {
      guardDirection = rotateGuard(guardDirection);
    }
  }
  return loops;
}
