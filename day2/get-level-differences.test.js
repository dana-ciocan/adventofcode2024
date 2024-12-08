import { getLevelDifferences } from "./get-level-differences";

test('should return 1 for every element if the report decrements by 1', () => {
    expect(getLevelDifferences([6, 5, 4, 3, 2, 1])).toEqual([1, 1, 1, 1, 1]);
});

test('should return 1 for every element if the report increments by 1', () => {
    expect(getLevelDifferences([1, 2, 3, 4, 5, 6])).toEqual([1, 1, 1, 1, 1]);
});

test('should return 2 for every element if the report decrements by 2', () => {
    expect(getLevelDifferences([10, 8, 6, 4, 2, 0])).toEqual([2, 2, 2, 2, 2]);
});

test('should return 2 for every element if the report increments by 1', () => {
    expect(getLevelDifferences([1, 3, 5, 7, 9, 11])).toEqual([2, 2, 2, 2, 2]);
});