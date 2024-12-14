export const rotateGuard = (guardDirection: string): string => {
  switch (guardDirection) {
    case '^':
      return '>';
    case '>':
      return 'v';
    case 'v':
      return '<';
    case '<':
      return '^';
    default:
      return guardDirection;
  }
}
