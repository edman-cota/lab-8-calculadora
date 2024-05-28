import { expect, test } from 'vitest';
import { division } from '../utils/division';

test('division 10 / 0 to equal null', () => {
  expect(division(10, 0)).toBe(null);
});
