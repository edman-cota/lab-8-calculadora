import { expect, test } from 'vitest';
import { substraction } from '../utils/substraction';

test('substract 10 - 4 to equal 6', () => {
  expect(substraction(10, 4)).toBe(6);
});
