import { getTrailHeads } from './get-trail-heads.ts';
import { map } from './input.ts';

const trailHeadLocations = getTrailHeads(map);

console.log(trailHeadLocations);
