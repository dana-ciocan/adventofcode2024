import { reports } from './input.js';
import { isReportDecrementing } from './is-report-decrementing.js';
import { isReportIncrementing } from './is-report-incrementing.js';
import { areLevelDifferencesSafe } from './are-level-differences-safe.js';

const safeReports = reports.map(report => {
    if (!isReportIncrementing(report) && !isReportDecrementing(report)) {
        return null;
    }
    return areLevelDifferencesSafe(report) ? report : null;
}).filter(Boolean);

console.log(safeReports.length);