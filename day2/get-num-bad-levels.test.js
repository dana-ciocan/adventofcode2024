import { getNumBadLevels } from './get-num-bad-levels.js';

test('should return 0 if the report if there are zero bad levels', () => {
    expect(getNumBadLevels([6, 5, 4, 3, 2, 1])).toBe(0);
    expect(getNumBadLevels([99, 98, 97, 96, 95, 94])).toBe(0);
});