import { expect, test } from "vitest";
import { rotateGuard } from "./rotate-guard";

test('should go from north to east', () => {
  expect(rotateGuard('^')).toBe('>');
})

test('should go from east to south', () => {
  expect(rotateGuard('>')).toBe('v');
})

test('should go from south to west', () => {
  expect(rotateGuard('v')).toBe('<');
})

test('should go from west to north', () => {
  expect(rotateGuard('<')).toBe('^');
})
