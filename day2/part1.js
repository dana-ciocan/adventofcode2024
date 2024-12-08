import { reports } from './input.js';
import { isReportSafe } from './is-report-safe.js';

const safeReports = reports.map(report => {
    return isReportSafe(report) ? report : null;
}).filter(Boolean);

console.log(safeReports.length);