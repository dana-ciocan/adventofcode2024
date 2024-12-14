import { expect, test } from "vitest";
import { orderingRules } from "./ordering-rules";
import { fixUpdate } from "./fix-update";
import { getValidRulesForUpdate } from "./get-valid-rules-for-update";

const rules = [[47, 53],
[97, 13],
[97, 61],
[97, 47],
[75, 29],
[61, 13],
[75, 53],
[29, 13],
[97, 29],
[53, 29],
[61, 53],
[97, 53],
[61, 29],
[47, 13],
[75, 47],
[97, 75],
[47, 61],
[75, 61],
[47, 29],
[75, 13],
[53, 13]];

test('should work on first example given in instructions', () => {
  expect(fixUpdate(getValidRulesForUpdate(rules, [75, 97, 47, 61, 53]), [75, 97, 47, 61, 53])).toEqual([97, 75, 47, 61, 53])
})

test('should work on second example given in instructions', () => {
  expect(fixUpdate(getValidRulesForUpdate(rules, [61, 13, 29]), [61, 13, 29])).toEqual([61, 29, 13])
})

test('should work on third example given in instructions', () => {
  expect(fixUpdate(getValidRulesForUpdate(rules, [97, 13, 75, 29, 47]), [97, 13, 75, 29, 47])).toEqual([97, 75, 47, 29, 13])
})
