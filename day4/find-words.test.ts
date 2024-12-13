import { describe, test, expect } from "vitest";
import { findWords } from "./find-words";

describe('two letter words', () => {
    test('should return the positions of the letters correctly for a 2x2 grid', () => {
        const wordsearch = [
            ['X', 'M'],
            ['M', 'X']
        ];
        expect(findWords(wordsearch, 'XM')).toEqual([[[0,0], [0, 1]], [[0, 0], [1, 0]], [[1, 1], [0, 1]], [[1, 1], [1, 0]]]);
    });

    test('should return the positions of the letters correctly for a 3x3 grid', () => {
        const wordsearch = [
            ['X', 'M', 'M'],
            ['M', 'X', 'X'],
            ['M', 'M', 'M'],
        ];
        expect(findWords(wordsearch, 'XM')).toEqual([[[0,0], [0, 1]], [[0, 0], [1, 0]], [[1, 1], [0, 1]], [[1, 1], [0, 2]], [[1, 1], [1, 0]], [[1, 1], [2, 0]], [[1, 1], [2, 1]], [[1, 1], [2, 2]], [[1, 2], [0, 1]], [[1, 2], [0, 2]], [[1, 2], [2, 1]], [[1, 2], [2, 2]]]);
    });
});

describe('three letter words', () => {
    test('should return the positions of the letters correctly when they are in the first column', () => {
        const wordsearch = [
            ['E', 'M', 'O'],
            ['L', 'X', 'P'],
            ['F', 'X', 'E']
        ];
        expect(findWords(wordsearch, 'ELF')).toEqual([[[0, 0], [1, 0], [2, 0]]]);
    });

    test('should return the positions of the letters correctly when they are in the second column', () => {
        const wordsearch = [
            ['M', 'E', 'O'],
            ['X', 'L', 'P'],
            ['X', 'F', 'E']
        ];
        expect(findWords(wordsearch, 'ELF')).toEqual([[[0, 1], [1, 1], [2, 1]]]);
    });

    test('should return the positions of the letters correctly when they are in the second column', () => {
        const wordsearch = [
            ['M', 'O', 'E'],
            ['X', 'P', 'L'],
            ['X', 'E', 'F']
        ];
        expect(findWords(wordsearch, 'ELF')).toEqual([[[0, 2], [1, 2], [2, 2]]]);
    });

    test('should return the positions of the letters correctly when they are diagonal', () => {
        const wordsearch = [
            ['E', 'O', 'A'],
            ['X', 'L', 'B'],
            ['X', 'E', 'F']
        ];
        expect(findWords(wordsearch, 'ELF')).toEqual([[[0, 0], [1, 1], [2, 2]]]);
    });

    test('should return the positions of the letters correctly when they are in the first row', () => {
        const wordsearch = [
            ['E', 'L', 'F'],
            ['X', 'I', 'B'],
            ['X', 'E', 'S']
        ];
        expect(findWords(wordsearch, 'ELF')).toEqual([[[0, 0], [0, 1], [0, 2]]]);
    });

    test('should return the positions of the letters correctly when they are in the second row', () => {
        const wordsearch = [
            ['X', 'I', 'B'],
            ['E', 'L', 'F'],
            ['X', 'E', 'S']
        ];
        expect(findWords(wordsearch, 'ELF')).toEqual([[[1, 0], [1, 1], [1, 2]]]);
    });

    test('should return the positions of the letters correctly when they are in the third row', () => {
        const wordsearch = [
            ['X', 'I', 'B'],
            ['X', 'E', 'S'],
            ['E', 'L', 'F']
        ];
        expect(findWords(wordsearch, 'ELF')).toEqual([[[2, 0], [2, 1], [2, 2]]]);
    });

    test('should return the positions of the letters correctly when they are backwards', () => {
        const wordsearch = [
            ['X', 'I', 'B'],
            ['X', 'E', 'S'],
            ['F', 'L', 'E']
        ];
        expect(findWords(wordsearch, 'ELF')).toEqual([[[2, 2], [2, 1], [2, 0]]]);
    });

    test('should return the positions of the letters correctly when there are multiple matches', () => {
        const wordsearch = [
            ['X', 'I', 'E'],
            ['X', 'L', 'S'],
            ['F', 'L', 'E']
        ];
        expect(findWords(wordsearch, 'ELF')).toEqual([[[0,2], [1,1], [2,0]], [[2, 2], [2, 1], [2, 0]]]);
    });
});