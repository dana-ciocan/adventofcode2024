const isSpace = (item: string[]) => {
  return item.some((val) => val === '.') || item.length === 0;
};

const countSpaces = (item: string[]) => {
  return item.filter((val) => val === '.').length;
};

export const compactDisk = (diskMap: string[][]) => {
  let filePointer = diskMap.length - 2;

  // Cycle through all the files
  while (filePointer > 0) {
    let curFile = diskMap[filePointer];

    for (let i = 0; i < diskMap.length; ++i) {
      // console.log(diskMap);
      const curItem = diskMap[i];
      const numSpaces = countSpaces(diskMap[i]);
      if (isSpace(curItem) && numSpaces >= curFile.length && filePointer > i) {
        console.log(`curFile[0]: ${curFile[0]}`);
        console.log(
          `diskMap[${i}].findIndex((item: string) => item === '.'): ${diskMap[i].findIndex((item: string) => item === '.')}`,
        );
        console.log(`curFile.length]: ${curFile.length}`);
        const firstSpaceIndex = diskMap[i].findIndex(
          (item: string) => item === '.',
        );
        diskMap[i].fill(
          curFile[0],
          firstSpaceIndex,
          firstSpaceIndex + curFile.length,
        );
        diskMap[filePointer].fill('.');
        break;
      }
      if (filePointer < i) {
        break;
      }
    }
    filePointer -= 2;
  }

  return diskMap;
};
