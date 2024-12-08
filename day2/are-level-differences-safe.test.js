import { areLevelDifferencesSafe } from './are-level-differences-safe.js';

test('should return true for reports whose levels increment by 1', () => {
    expect(areLevelDifferencesSafe([1, 2, 3, 4, 5, 6])).toBe(true);
    expect(areLevelDifferencesSafe([94, 95, 96, 97, 98, 99])).toBe(true);
});

test('should return true for reports whose levels decrement by 1', () => {
    expect(areLevelDifferencesSafe([6, 5, 4, 3, 2, 1])).toBe(true);
    expect(areLevelDifferencesSafe([19234, 19233, 19232, 19231, 19230])).toBe(true);
});

test('should return false for reports whose levels do not decrement', () => {
    expect(areLevelDifferencesSafe([6, 1, 4, 3, 2, 1])).toBe(false);
    expect(areLevelDifferencesSafe([19234, 19238, 19232, 19231, 19230])).toBe(false);
});

test('should return false for reports whose levels increment by more than 3', () => {
    expect(areLevelDifferencesSafe([6, 10, 14, 33, 48, 90])).toBe(false);
});

test('should return false for reports containing increments of 0', () => {
    expect(areLevelDifferencesSafe([1, 2, 3, 3, 4, 5])).toBe(false);
});