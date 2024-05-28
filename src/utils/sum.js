/* eslint-disable import/prefer-default-export */
export function sum(number1, number2) {
  let sum = number1 + number2;

  if (sum > 999999999) return null;

  return sum;
}
