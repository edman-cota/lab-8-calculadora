export function division(number1, number2) {
  if (number2 === 0) return null;

  let division = number1 / number2;
  division = division.toString();

  if (division.length > 0) {
    const decimalIndex = division.indexOf('.');

    if (decimalIndex === -1) {
      division = division.substring(0, 9);
    } else {
      division = division.substring(0, 9);
      if (division.endsWith('.')) {
        division = division.slice(0, -1);
      }
    }
  }

  return parseFloat(division);
}
