export const isReportIncrementing = (report: number[]) => {
  const sortedReport = report.toSorted((a, b) => a - b).join(', ');
  const stringifiedReport = report.join(', ');

  if (sortedReport !== stringifiedReport) {
    return false;
  }

  return true;
};
