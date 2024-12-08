import { getLevelDifferences } from "./get-level-differences.js";

export const areLevelDifferencesSafe = (report) => {
    const differences = getLevelDifferences(report);
    const maxDifference = Math.max(...differences);
    const minDifference = Math.min(...differences);
    
    return minDifference > 0 && maxDifference < 4;
};