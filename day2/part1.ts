import { reports } from './input.ts';
import { isReportDecrementing } from './is-report-decrementing.ts';
import { isReportIncrementing } from './is-report-incrementing.ts';
import { areLevelDifferencesSafe } from './are-level-differences-safe.ts';

const safeReports = reports.map((report: number[]) => {
  return ((isReportIncrementing(report) || isReportDecrementing(report)) && areLevelDifferencesSafe(report)) ? report : null;
}).filter(Boolean);

console.log(safeReports.length);
