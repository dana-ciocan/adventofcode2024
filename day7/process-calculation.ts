export const processCalculation = (input: string[]): number => {
  let total = Number(input[0]);
  for (let i = 1; i <= input.length - 2; i++) {
    if (input[i] === '*') {
      total *= Number(input[i + 1]);
    }
    if (input[i] === '+') {
      total += Number(input[i + 1]);
    }
    if (input[i] === '|') {
      total = Number(`${total}${input[i + 1]}`);
    }
  }
  return total;
};
