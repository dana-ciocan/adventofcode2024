import { list1, list2 } from './input.js';

const similarityScore = list1.reduce((acc, val) => {
    const numTimesInList2 = list2.filter(locationId => locationId === val).length;
    return acc + (val * numTimesInList2);
}, 0)

console.log('similarityScore: ', similarityScore);