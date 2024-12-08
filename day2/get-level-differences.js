export const getLevelDifferences = (report) => report.reduce((acc, val, index) => {
    if (report[index + 1]) {
        const diff = val - report[index + 1];
        acc[index] = diff > 0 ? diff : -diff;
    }
    return acc;
}, []);