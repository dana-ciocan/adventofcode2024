import { calculations } from './input.ts';
import { processCalculation } from './process-calculation.ts';

let result = 0;
for (const calculation of calculations) {
  const [total, terms] = calculation;
  const combinations = {};

  if (!combinations[(terms as number[]).length]) {
    combinations[(terms as number[]).length] = [];
    for (let i = 0; i < Math.pow(3, (terms as number[]).length - 1); i++) {
      combinations[(terms as number[]).length].push(
        i
          .toString(3)
          .padStart((terms as number[]).length - 1, '0')
          .replaceAll('0', '*')
          .replaceAll('1', '+')
          .replaceAll('2', '|')
          .split(''),
      );
    }
  }
  const operatorSets = combinations[(terms as number[]).length];

  for (const operators of operatorSets) {
    let calcArray = [];
    for (let i = 0; i < operators.length; i++) {
      calcArray.push(terms[i], operators[i]);
    }
    calcArray.push(terms[terms.length - 1]);

    if (processCalculation(calcArray) === total) {
      result += total;
      break;
    }
  }
}
console.log(result);
