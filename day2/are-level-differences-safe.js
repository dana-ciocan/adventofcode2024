export const areLevelDifferencesSafe = (report) => {
    const differences = report.reduce((acc, val, index) => {
        if (report[index + 1]) {
            const diff = val - report[index + 1];
            acc[index] = diff > 0 ? diff : -diff;
        }
        return acc;
    }, []);

    const maxDifference = Math.max(...differences);
    const minDifference = Math.min(...differences);
    
    return minDifference > 0 && maxDifference < 4;
};