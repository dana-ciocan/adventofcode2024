import { reports } from './input.js';
import { isReportDecrementing } from './is-report-decrementing.js';
import { isReportIncrementing } from './is-report-incrementing.js';
import { areLevelDifferencesSafe } from './are-level-differences-safe.js';

const safeReports = reports.map(report => {
    return ((isReportIncrementing(report) || isReportDecrementing(report)) && areLevelDifferencesSafe(report)) ? report : null;
}).filter(Boolean);

console.log(safeReports.length);