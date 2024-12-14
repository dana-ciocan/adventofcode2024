import { getValidRulesForUpdate } from './get-valid-rules-for-update.ts'
import { updates } from './updates.ts'
import { orderingRules } from './ordering-rules.ts'
import { doesUpdatePassInspection } from './does-update-pass-inspection.ts';
import { getMiddleElement } from './get-middle-element.ts';

const successfulUpdates: number[][] = [];

for (const update of updates) {
  const validRules = getValidRulesForUpdate(orderingRules, update)

  if (doesUpdatePassInspection(validRules, update)) {
    successfulUpdates.push(update);
  }
}

const numSuccessfulUpdates = successfulUpdates.map(update => getMiddleElement(update)).reduce((acc, val) => acc + val, 0);

console.log(numSuccessfulUpdates);
