export const findLoops = (path: string[]) => {
  const numTimesVisited = path.reduce((acc: object, val: string) => {
    if (!acc[val]) {
      acc[val] = 0;
    }
    acc[val] += 1;
    return acc;
  }, {});
  const loopedSteps = Object.values(numTimesVisited).filter(
    (count) => count > 2,
  );
  return loopedSteps.length > 10;
};
