import { getLevelDifferences } from "./get-level-differences.ts";

export const areLevelDifferencesSafe = (report: number[]) => {
  const differences = getLevelDifferences(report);
  const maxDifference = Math.max(...differences);
  const minDifference = Math.min(...differences);

  return minDifference > 0 && maxDifference < 4;
};
