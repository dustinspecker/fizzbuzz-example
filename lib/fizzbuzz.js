'use strict';

/**
 * Returns Fizz, Buzz, FizzBuzz, or number based on input.
 * @param {Number} n - number to evaluate
 * @returns {String|Number} - evaluated input
 */
module.exports.computedValue = function (n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz';
  } else if (n % 3 === 0) {
    return 'Fizz';
  } else if (n % 5 === 0) {
    return 'Buzz';
  }
  return n;
};

/**
 * Prints FizzBuzz values from 1 to n
 * @param {Number} n - number of FizzBuzz values to print up to
 */
module.exports.print = function (n) {
  var i;

  for (i = 1; i <= n; i++) {
    console.log(module.exports.computedValue(i));
  }
};
