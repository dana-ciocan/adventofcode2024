import { isReportDecrementing } from "./is-report-decrementing.js";
import { isReportIncrementing } from "./is-report-incrementing.js";

export const isReportSafe = (report) => {
    if (!isReportIncrementing(report) && !isReportDecrementing(report)) {
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