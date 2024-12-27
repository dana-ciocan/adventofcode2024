import { calculateChecksum } from './calculate-checksum.ts';
import { compactDisk } from './compact-disk.ts';
import { convertFormat } from './convert-format.ts';
import { diskMap } from './input.ts';

const formattedFile = convertFormat(diskMap);
const compactedFile = compactDisk(formattedFile);
const checksum = calculateChecksum(compactedFile);

console.log(checksum);
