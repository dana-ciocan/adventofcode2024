import { getGuardPosition } from './get-guard-position.ts';
import { isGuardOutOfBounds } from './is-guard-out-of-bounds.ts';
import { rotateGuard } from './rotate-guard.ts';

export const walkMap = (
  map: string[],
  removeRepeats: boolean = true,
  addStartSquare: boolean = false,
) => {
  let currentGuardPosition: number[] = getGuardPosition(map);
  let guardDirection: string = '^';
  let squaresSeen: string[] = [];

  if (addStartSquare) {
    squaresSeen.push(currentGuardPosition.join(','));
  }

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
    const nextPosition = nextRow?.[nextGuardPosition[1]];

    if (nextPosition !== '#') {
      currentGuardPosition = nextGuardPosition;
      if (removeRepeats) {
        if (!squaresSeen.includes(currentGuardPosition.join(','))) {
          squaresSeen.push(currentGuardPosition.join(','));
        }
      } else {
        squaresSeen.push(currentGuardPosition.join(','));
      }
    } else {
      guardDirection = rotateGuard(guardDirection);
    }
  }
  return squaresSeen;
};
