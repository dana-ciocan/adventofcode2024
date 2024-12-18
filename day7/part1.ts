import { calculations } from './input.ts';

for (const calculation of calculations) {
  const [total, terms] = calculation;

  console.log(`${terms} have to make ${total}`);

  const numOperations = (terms as number[]).length - 1;
  const operations: string[] = [];
  let remainder: number = total as number;

  for (let i = 0; i < numOperations; i++) {
    if ((total as number) % terms[i] === 0) {
      operations.push('*');
      remainder = remainder / terms[i];
    } else {
      operations.push('+');
      remainder = remainder - terms[i];
    }
  }

  console.log(operations);
  console.log(remainder);
}
