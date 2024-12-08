export const isReportDecrementing = (report) => {
    const sortedReport = report.toSorted((a, b) => a - b).toReversed().join(', ');
    const stringifiedReport = report.join(', ');

    if (sortedReport !== stringifiedReport) {
        return false;
    }

    return true;
};