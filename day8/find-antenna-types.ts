export const findAntennaTypes = (map: string[]): string[] => {
  return Array.from(new Set(map.join('').replaceAll('.', '').split('')));
};
