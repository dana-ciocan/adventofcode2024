import { findXmas } from './find-x-mas.ts';
import { wordsearch } from './input.ts';

const formattedWordsearch: string[][] = wordsearch.map(row => Array.from(row));

console.log(findXmas(formattedWordsearch));

