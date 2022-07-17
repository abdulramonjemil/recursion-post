/**
 * This file contains different recursive implementations of
 * calculating fibonacci numbers at a specified index.
 * PS: The file may also contain non-recursive implementations.
 */



/**
 * Return the fibonacci number at the specified index.
 * Fibonacci numbers: 1, 1, 2, 3, 5, 8, 13, 21, ...
 */

function fibonacci(number) {
  if(number === 1 || number === 2) return 1
  return fibonacci(number - 2) + fibonacci(number - 1)
}

// console.log(fibonacci(1))
// console.log(fibonacci(6))

