export const isReportDecrementing = (report: number[]) => {
  const sortedReport = report.toSorted((a, b) => a - b).toReversed().join(', ');
  const stringifiedReport = report.join(', ');

  if (sortedReport !== stringifiedReport) {
    return false;
  }

  return true;
};
