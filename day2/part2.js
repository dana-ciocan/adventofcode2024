import { reports } from './input.js';
import { isReportDecrementing } from './is-report-decrementing.js';
import { isReportIncrementing } from './is-report-incrementing.js';
import { areLevelDifferencesSafe } from './are-level-differences-safe.js';

const safeReports = reports.map(report => {
    return ((isReportIncrementing(report) || isReportDecrementing(report)) && areLevelDifferencesSafe(report)) ? report : null;
}).filter(Boolean);

const kindOfSafeReports = reports.map(report => {
    return ((isReportIncrementing(report) || isReportDecrementing(report)) && areLevelDifferencesSafe(report)) ? null : report;
}).filter(Boolean).map(unsafeReport => {
    let isSplicedReportSafe = false;;

    for (let i = 0; i < unsafeReport.length; ++i) {
        const splicedReport = unsafeReport.toSpliced(i, 1);
        isSplicedReportSafe = isSplicedReportSafe || ((isReportIncrementing(splicedReport) || isReportDecrementing(splicedReport)) && areLevelDifferencesSafe(splicedReport));
    }
    
    return isSplicedReportSafe ? unsafeReport : null;
}).filter(Boolean);

console.log(safeReports.length + kindOfSafeReports.length);