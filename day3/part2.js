import { program } from "./input.js";

const regexp = /mul\([0-9]*,[0-9]*\)|do\(\)|don't\(\)/g;
const matches = [...program.matchAll(regexp)];

let active = true;

const filteredOperations = matches.map(match => match[0]).map(match => {
    if (match === 'don\'t()') {
        active = false;
    } else if (match === 'do()') {
        active = true;
        return null;
    }
    if (!active) {
        return null;
    } else {
        return match;
    }
}).filter(Boolean);

console.log(filteredOperations.reduce((acc, val) => {
    const numbers = val.replace('mul(', '').replace(')', '').split(',').map(num => parseInt(num, 10));
    return acc + numbers[0] * numbers[1];
}, 0));

