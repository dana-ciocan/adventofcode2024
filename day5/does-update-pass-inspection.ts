export const doesUpdatePassInspection = (orderingRules: number[][], update: number[]) => {
  let inspectionPassed = true;
  for (const rule of orderingRules) {
    const [page1, page2] = rule;
    const page1Index = update.indexOf(page1);
    const page2Index = update.indexOf(page2);
    if (page2Index < page1Index) {
      inspectionPassed = false;
    }
  }
  return inspectionPassed;
}
