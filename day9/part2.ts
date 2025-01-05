import { calculateChecksum } from './calculate-checksum-part2.ts';
import { compactDisk } from './compact-disk-without-fragmentation.ts';
import { convertFormat } from './convert-2d-format.ts';
import { diskMap } from './input.ts';

const formattedFile = convertFormat(diskMap);
const compactedFile = compactDisk(formattedFile);
const checksum = calculateChecksum(compactedFile.flat());

console.log(checksum);
