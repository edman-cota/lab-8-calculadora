import { expect, test } from 'vitest';
import { sum } from '../utils/sum';

test('add 999999999 + 999999999 to equal null', () => {
  expect(sum(999999999, 999999999)).toBe(null);
});
