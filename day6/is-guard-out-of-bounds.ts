import { getGuardPosition } from './get-guard-position.ts';

export const isGuardOutOfBounds = (map: string[][]) => {
  const [row, col] = getGuardPosition(map);
  return row === -1 && col === -1;
};
