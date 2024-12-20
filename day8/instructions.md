# Part 1

export const map = [
'............',
'........0...',
'.....0......',
'.......0....',
'....0.......',
'......A.....',
'............',
'............',
'........A...',
'.........A..',
'............',
'............',
];

- Get all the antenna types
- For each type:
  - Get every location of the antenna
  - Radiate out from the centre point and find any other antennas of the same type
  - Save the locations of any antinodes - these will be opposite the second antenna that we've found
  - Remove any duplicates and any locations that are outside the map
