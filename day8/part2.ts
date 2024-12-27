import { findAntennaLocations } from './find-antenna-locations.ts';
import { map } from './input.ts';

const antennaLocations = findAntennaLocations(map);
const antennaTypes = Object.keys(antennaLocations).sort();
const mapHeight = map.length;
const mapWidth = map[0].length;
let antinodeLocations: number[][] = [];

for (const type of antennaTypes) {
  for (const location of antennaLocations[type]) {
    const [curXPos, curYPos] = location;
    const locationOffsetsForType = antennaLocations[type]
      .map(([xPos, yPos]) => {
        return [-(xPos - curXPos), -(yPos - curYPos)];
      })
      .filter(([xPos, yPos]) => xPos !== 0 && yPos !== 0);
    for (const [xOffset, yOffset] of locationOffsetsForType) {
      let antinodeX = curXPos + xOffset;
      let antinodeY = curYPos + yOffset;

      while (
        antinodeX >= 0 &&
        antinodeY >= 0 &&
        antinodeX < mapWidth &&
        antinodeY < mapHeight
      ) {
        antinodeLocations.push([antinodeX, antinodeY]);
        antinodeX += xOffset;
        antinodeY += yOffset;
      }
    }
    for (const [xOffset, yOffset] of locationOffsetsForType) {
      let antinodeX = curXPos - xOffset;
      let antinodeY = curYPos - yOffset;

      while (
        antinodeX >= 0 &&
        antinodeY >= 0 &&
        antinodeX < mapWidth &&
        antinodeY < mapHeight
      ) {
        antinodeLocations.push([antinodeX, antinodeY]);
        antinodeX -= xOffset;
        antinodeY -= yOffset;
      }
    }
  }
}

const uniqueAntinodeLocations = Array.from(
  new Set(antinodeLocations.map((loc) => loc.join(','))),
).map((loc) => loc.split(','));

const newMap: string[][] = [...map].map((row) => row.split(''));

for (const [xCoordinate, yCoordinate] of uniqueAntinodeLocations) {
  if (map[xCoordinate][yCoordinate] === '.') {
    newMap[xCoordinate][yCoordinate] = '#';
  }
}

console.log(uniqueAntinodeLocations.length);
