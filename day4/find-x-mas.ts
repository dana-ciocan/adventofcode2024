import { getVertices } from "./get-vertices.ts";


export const findXmas = (input: string[][]) => {
  const badLetters = ['A', 'X'];
  let numXmas = 0;
  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[row].length; col++) {
      if (input[row][col] === 'A') {
        const vertices = getVertices(row, col);
        if (vertices !== undefined) {
          const goodVertices = vertices.filter(letter => !badLetters.includes(letter));

          if (goodVertices.length === 4) {
            if (goodVertices[0] !== goodVertices[2] && goodVertices[1] !== goodVertices[3]) {
              numXmas++;
            }
          }
        }
      }
    }
  }
  return numXmas;
}
