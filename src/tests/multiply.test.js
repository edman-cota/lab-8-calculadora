import { expect, test } from 'vitest';
import { multiply } from '../utils/multiply';

test('multiply 4 * 4 to equal 16', () => {
  expect(multiply(4, 4)).toBe(16);
});
