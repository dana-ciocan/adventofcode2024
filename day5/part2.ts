import { getValidRulesForUpdate } from './get-valid-rules-for-update.ts'
import { updates } from './updates.ts'
import { orderingRules } from './ordering-rules.ts'
import { doesUpdatePassInspection } from './does-update-pass-inspection.ts';
import { getMiddleElement } from './get-middle-element.ts';
import { fixUpdate } from './fix-update.ts';

const unsuccessfulUpdates: number[][] = [];

for (const update of updates) {
  const validRules = getValidRulesForUpdate(orderingRules, update)

  if (!doesUpdatePassInspection(validRules, update)) {
    unsuccessfulUpdates.push(update);
  }
}

const fixedUpdates = unsuccessfulUpdates.map(update => {
  const validRules = getValidRulesForUpdate(orderingRules, update);

  return fixUpdate(validRules, update);
})

const result = fixedUpdates.map(update => getMiddleElement(update)).reduce((acc, val) => acc + val, 0);

console.log(result);
