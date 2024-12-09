import { program } from "./input.ts";

const regexp = /mul\([0-9]*,[0-9]*\)/g;
const matches = [...program.matchAll(regexp)];

console.log(matches.reduce((acc, [val]) => {
    const numbers = val.replace('mul(', '').replace(')', '').split(',').map(num => parseInt(num, 10));
    return acc + numbers[0] * numbers[1];
}, 0));

