export const findAntennaTypes = (map: string[]) => {
  return Array.from(new Set(map.join('').replaceAll('.', '').split('')));
};
