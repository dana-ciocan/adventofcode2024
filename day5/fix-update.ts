import { doesUpdatePassInspection } from "./does-update-pass-inspection.ts";

export const fixUpdate = (orderingRules: number[][], update: number[]) => {
  let ruleIndex = 0;
  while (!doesUpdatePassInspection(orderingRules, update)) {
    const [page1, page2] = orderingRules[ruleIndex];
    const page1Index = update.indexOf(page1);
    const page2Index = update.indexOf(page2);

    if (page2Index < page1Index) {
      update[page1Index] = page2;
      update[page2Index] = page1;
    }
    ruleIndex = (ruleIndex + 1) % orderingRules.length;
  }
  return update;
}
