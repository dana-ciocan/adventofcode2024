import { getLevelDifferences } from './get-level-differences.js';

export const getNumBadLevels = (report) => {
    const differences = getLevelDifferences(report);

    return differences.filter(item => item < 0 || item > 3).length;
};