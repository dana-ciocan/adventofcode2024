import { list1, list2 } from './input.ts';

const sortedList1 = list1.sort();
const sortedList2 = list2.sort();

const differences = sortedList1.reduce((acc, val, index) => {
    const difference = val - sortedList2[index];
    return acc + (difference > 0 ? difference : -difference);
}, 0)

console.log('differences: ', differences);