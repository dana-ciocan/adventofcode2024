export const calculateChecksum = (diskMap: (string | number)[]) => {
  let checksum = 0;
  for (let i = 0; i < diskMap.length; i++) {
    if (diskMap[i] !== '.') {
      checksum += i * Number(diskMap[i]);
    }
  }

  return checksum;
};
