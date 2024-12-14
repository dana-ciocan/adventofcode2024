export const getValidRulesForUpdate = (orderingRules: number[][], update: number[]) => {
  return orderingRules.filter((rule: number[]) => {
    if (update.filter(page => rule.includes(page)).length === rule.length) {
      return true;
    }
    return false;
  })
}
