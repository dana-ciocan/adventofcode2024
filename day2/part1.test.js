import { isReportSafe } from './part1.js';

test('should return true for reports whose levels increment by 1', () => {
    expect(isReportSafe([1, 2, 3, 4, 5, 6])).toBe(true);
    expect(isReportSafe([94, 95, 96, 97, 98, 99])).toBe(true);
});

test('should return true for reports whose levels decrement by 1', () => {
    expect(isReportSafe([6, 5, 4, 3, 2, 1])).toBe(true);
    expect(isReportSafe([19234, 19233, 19232, 19231, 19230])).toBe(true);
});

test('should return false for reports whose levels do not decrement', () => {
    expect(isReportSafe([6, 1, 4, 3, 2, 1])).toBe(false);
    expect(isReportSafe([19234, 1, 19232, 19231, 19230])).toBe(false);
});