import { expect, test } from 'vitest';
import { sum } from '../utils/sum';

test('add 1 + 1 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
