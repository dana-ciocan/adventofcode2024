export const convertFormat = (files: string): string[][] => {
  const result: string[][] = [];
  let fileId = 0;
  for (let i = 0; i < files.length; i += 2) {
    const fileLength: number = Number(files[i]);
    const spaceLength: number = Number(files[i + 1]);
    const file: string[] = [];
    const space: string[] = [];
    for (let j = 0; j < fileLength; j++) {
      file.push(String(fileId));
    }
    result.push(file);
    for (let k = 0; k < spaceLength; k++) {
      space.push('.');
    }
    result.push(space);
    fileId++;
  }

  return result;
};
