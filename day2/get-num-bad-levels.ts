import { getLevelDifferences } from './get-level-differences.ts';

export const getNumBadLevels = (report: number[]) => {
  const differences = getLevelDifferences(report);

  return differences.filter(item => item < 0 || item > 3).length;
};
