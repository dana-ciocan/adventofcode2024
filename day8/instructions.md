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
  - For each location, check what its relationship to the other locations is
  - Save the locations of any antinodes - these will be opposite the second antenna that we've found
  - Remove any duplicates and any locations that are outside the map
