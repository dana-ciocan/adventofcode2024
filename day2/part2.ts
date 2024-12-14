import { reports } from './input.ts';
import { isReportDecrementing } from './is-report-decrementing.ts';
import { isReportIncrementing } from './is-report-incrementing.ts';
import { areLevelDifferencesSafe } from './are-level-differences-safe.ts';

const safeReports: (number[] | null)[] = reports.map(report => {
  return ((isReportIncrementing(report) || isReportDecrementing(report)) && areLevelDifferencesSafe(report)) ? report : null;
}).filter(Boolean);

const kindOfSafeReports: (number[] | null)[] = reports.map(report => {
  return ((isReportIncrementing(report) || isReportDecrementing(report)) && areLevelDifferencesSafe(report)) ? null : report;
}).filter(Boolean).map(unsafeReport => {
  let isSplicedReportSafe = false;;

  for (let i = 0; i < unsafeReport?.length; ++i) {
    const splicedReport = unsafeReport?.toSpliced(i, 1);
    isSplicedReportSafe = isSplicedReportSafe || ((isReportIncrementing(splicedReport) || isReportDecrementing(splicedReport)) && areLevelDifferencesSafe(splicedReport));
  }

  return isSplicedReportSafe ? unsafeReport : null;
}).filter(Boolean);

console.log(safeReports.length + kindOfSafeReports.length);
