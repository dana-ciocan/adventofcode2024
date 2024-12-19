export const findLoops = (numTimesVisited: object) => {
  const loopedMoreThanTwice = Object.values(numTimesVisited).filter(
    (count) => count > 2,
  );
  if (loopedMoreThanTwice.length > 100) {
    return true;
  }
  const loopedMoreThanFifty = Object.values(numTimesVisited).filter(
    (count) => count > 100,
  );
  if (loopedMoreThanFifty.length > 1) {
    return true;
  }
  return false;
};
