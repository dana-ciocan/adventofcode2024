import { map } from './input.ts';
import { walkMap } from './walk-map.ts';

const [squaresSeen, frames] = walkMap(map.map((line) => line.split('')));
console.log(squaresSeen.length - 1);
