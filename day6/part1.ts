import { map } from './input.ts';
import { walkMap } from './walk-map.ts';

console.log(walkMap(map).length - 1);
