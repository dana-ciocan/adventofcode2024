import { findWords } from './find-words.ts';
import { wordsearch } from './input.ts';

const formattedWordsearch = wordsearch.map(row => Array.from(row));

const matches = findWords(formattedWordsearch, 'XMAS');

console.log(matches.length);