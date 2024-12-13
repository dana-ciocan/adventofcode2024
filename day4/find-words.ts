export const findWords = (wordsearch: string[][], wordToFind: string) => {
    const [firstLetter, secondLetter, ...restOfWord] = wordToFind;

    const potentialWordPositions: number[][][] = [];

    for (let row = 0; row < wordsearch.length; row++) {
        for (let col = 0; col < wordsearch[row].length; col++) {
            if (wordsearch[row][col] === firstLetter) {
                for (let rowOffset = row - 1; rowOffset <= row + 1; rowOffset++) {
                    for (let colOffset = col - 1; colOffset <= col + 1; colOffset++) {
                        if (rowOffset >= 0 && colOffset >= 0 && rowOffset < wordsearch.length && colOffset < wordsearch[row].length) {
                            if(wordsearch[rowOffset]?.[colOffset] === secondLetter) {
                                potentialWordPositions.push([[row,col],[rowOffset,colOffset]]);
                            }
                        }
                    }
                }
            }
        }
    }

    potentialWordPositions.map((positions, index) => {
        const [[firstLetterRow, firstLetterCol], [secondLetterRow, secondLetterCol]] = positions;

        const rowDiff = secondLetterRow - firstLetterRow;
        const colDiff = secondLetterCol - firstLetterCol;
        for (let i = 0; i < restOfWord.length; i++) {
            const nextRowToCheck = secondLetterRow + ((i + 1) * rowDiff);
            const nextColToCheck = secondLetterCol + ((i + 1) * colDiff);

            if (nextRowToCheck >= 0 && nextRowToCheck >= 0) {
                if (wordsearch?.[nextRowToCheck]?.[nextColToCheck] && wordsearch[nextRowToCheck][nextColToCheck] === restOfWord[i]) {
                    potentialWordPositions[index].push([nextRowToCheck, nextColToCheck])
                }
            }
        }
    });

    return potentialWordPositions.filter(word => word.length === 4);
};