import { isReportIncrementing } from './is-report-incrementing.js';

test('should return true for reports whose levels increment', () => {
    expect(isReportIncrementing([1, 2, 3, 4, 5, 6])).toBe(true);
    expect(isReportIncrementing([94, 95, 96, 97, 98, 99])).toBe(true);
});

test('should return false for reports whose levels decrement', () => {
    expect(isReportIncrementing([6, 5, 4, 3, 2, 1])).toBe(false);
    expect(isReportIncrementing([99, 98, 97, 96, 95, 94])).toBe(false);
});
