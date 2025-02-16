/*
 * stmnts-07.js
 * Language: JavaScript
 * Test: tests/stmnts-07.test.js
 * Path: src/stmnts-07.js
 *
 * Logical Operations and Number Analysis Assignment:
 * Implement functions using logical operators, loops, and conditions.
 * These functions require you to combine earlier concepts.
 *
 * Note for beginners: Read each step carefully. Use loops like while or
 * do...while and Math.floor() when working with numbers.
 */

/**
 * Helper function to check if a value is an integer.
 * @param {*} value - Value to check.
 * @returns {boolean} - True if value is an integer, false otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 */
function isInteger(value) {
  return Number.isInteger(value);
}

/**
 * Checks if both values are truthy.
 * @param {*} a - First value.
 * @param {*} b - Second value.
 * @returns {boolean} - True if both values are truthy, false otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
 */
function logicalAnd(a, b) {
  return !!a && !!b;
}

/**
 * Checks if at least one value is truthy.
 * @param {*} a - First value.
 * @param {*} b - Second value.
 * @returns {boolean} - True if either value is truthy, false otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
 */
function logicalOr(a, b) {
  return !!a || !!b;
}

/**
 * Returns the opposite of the given boolean.
 * @param {boolean} bool - Boolean value to invert.
 * @returns {boolean} - False if input is true, true if input is false.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
 */
function invertBoolean(bool) {
  return !bool;
}

/**
 * Counts the number of digits in an integer.
 * @param {number} num - The input number.
 * @returns {number} - Number of digits in `num`.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
 */
function countDigits(num) {
  if (!Number.isInteger(num)) return 0;
  return Math.abs(num).toString().length;
}

/**
 * Computes the sum of the digits of an integer.
 * @param {number} num - The input number.
 * @returns {number} - Sum of its digits.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 */
function sumOfDigits(num) {
  if (!Number.isInteger(num)) return 0;
  return Math.abs(num)
    .toString()
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
}

/**
 * Reverses the digits of a number.
 * @param {number} num - The input number.
 * @returns {number} - The reversed number.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 */
function reverseNumber(num) {
  if (!Number.isInteger(num)) return 0;
  const reversed = parseInt(Math.abs(num).toString().split('').reverse().join(''));
  return num < 0 ? -reversed : reversed;
}

/**
 * Determines if a number is within a given range, inclusive.
 * @param {number} num - The number to check.
 * @param {number} min - Lower bound.
 * @param {number} max - Upper bound.
 * @returns {boolean} - True if num is between min and max, inclusive.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 */
function isWithinRange(num, min, max) {
  return num >= min && num <= max;
}

// Export functions
module.exports = {
  isInteger,
  logicalAnd,
  logicalOr,
  invertBoolean,
  countDigits,
  sumOfDigits,
  reverseNumber,
  isWithinRange,
};
