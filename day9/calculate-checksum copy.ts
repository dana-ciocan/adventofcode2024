export const calculateChecksum = (diskMap: (string | number)[]) => {
  let checksum = 0;
  const diskMapArray: number[] = diskMap.filter(
    (char: string | number) => char !== '.',
  );

  for (let i = 0; i < diskMapArray.length; i++) {
    checksum += i * Number(diskMapArray[i]);
  }

  return checksum;
};
