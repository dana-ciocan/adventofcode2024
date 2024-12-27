export const compactDisk = (diskMap: (string | number)[]) => {
  for (let i = 0; i < diskMap.length; i++) {
    if (diskMap[i] === '.') {
      const lastDigitIndex = diskMap.findLastIndex((char) => char !== '.');
      if (lastDigitIndex > i) {
        const lastDigit =
          diskMap[diskMap.findLastIndex((char) => char !== '.')];
        diskMap[i] = lastDigit;
        diskMap[lastDigitIndex] = '.';
      }
    }
  }

  return diskMap;
};
