export const getLevelDifferences = (report: number[]) => report.reduce((acc: number[], val: number, index: number) => {
  if (report[index + 1]) {
    const diff = val - report[index + 1];
    acc[index] = diff > 0 ? diff : -diff;
  }
  return acc;
}, []);
