import { reports } from './input.js';

const isReportSafe = (report) => {
    const sortedReport = report.toSorted((a, b) => a - b).join(', ');
    const reversedReport = report.toSorted((a, b) => a - b).toReversed().join(', ');
    const stringifiedReport = report.join(', ');
    

    if (sortedReport !== stringifiedReport && reversedReport !== stringifiedReport) {
        return false;
    }

    const differences = report.reduce((acc, val, index) => {
        if (report[index + 1]) {
            const diff = val - report[index + 1];
            acc[index] = diff > 0 ? diff : -diff;
        }
        return acc;
    }, []);

    const maxDifference = Math.max(...differences);
    const minDifference = Math.min(...differences);
    
    return minDifference > 0 && maxDifference < 4;
};

const safeReports = reports.map(report => {
    return isReportSafe(report) ? report : null;
}).filter(Boolean);

console.log(safeReports.length);