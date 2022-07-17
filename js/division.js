/**
 * This file contains different recursive implementations of division.
 * The functions take dividend and divisor parameters which are needed.
 * The functions use subtraction to carry out the division.
 * PS: Non-recursive implementations may also be included.
 */



/**
 * Divide dividend by divisor and provide info of quotient
 * and remainder as a string, by subtracting recursively.
 */

function divide(dividend, divisor, quotient = 0) {
  if(divisor > dividend) return quotient + " rem " + dividend
  return divide(dividend - divisor, divisor, quotient + 1)
}

// console.log(divide(68, 9))
// console.log(divide2(37, 6))



/**
 * Avoid passing the same fixed parameter over and over.
 * Also, prevent function caller from changing the quotient default value.
 */

function divide2(dividend, divisor) {
  function doDivide(dividend, quotient) {
    if(divisor > dividend) return quotient + " rem " + dividend
    return doDivide(dividend - divisor, quotient + 1)
  }
  return doDivide(dividend, 0)
}

// console.log(divide2(37, 6))
// console.log(divide2(68, 9))



/**
 * Divide dividend by divisor and return info of quotient and remainder.
 * Do the division the opposite way.
 */

function divideReversed(dividend, divisor, quotient = 0, newDivisor = divisor) {
  if(newDivisor > dividend) return quotient + " rem " + (dividend - (newDivisor - divisor))
  return divideReversed(dividend, divisor, quotient + 1, newDivisor + divisor)
}

// console.log(divideReversed(50, 7))
// console.log(divideReversed(53, 9))



/**
 * Avoid passing fixed parameters
 */

function divideReversed2(dividend, divisor) {
  function doDivide(quotient, newDivisor) {
    if(newDivisor > dividend) return quotient + " rem " + (dividend - (newDivisor - divisor))
    return doDivide(quotient + 1, newDivisor + divisor)
  }
  return doDivide(0, divisor)
}

console.log(divideReversed2(50, 7))
console.log(divideReversed2(53, 8))

