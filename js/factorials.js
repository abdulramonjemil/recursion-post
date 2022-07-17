/**
 * This file contains different recursive implementations of calculation of factorials.
 * PS: The file may also contain non-recursive implementations.
 */


/**
 * Evaluate factorials - using a loop
 */

function evaluateFactorialWithLoop(number) {
  let finalValue = number;
  number--
  for(; number > 1; number--) {
    finalValue *= number
  }
  return finalValue;
}

// console.log(evaluateFactorialWithLoop(6))


/**
 * Evaluate factorials, by multiplying the number by the smaller one, recursively.
 */

function evaluateFactorial(number) {
  if(number === 1) return 1
  return number * evaluateFactorial(number - 1)
}

// console.log(evaluateFactorial(5))



/**
 * Evaluate factorials, passing along the computed value at each stage, as a parameter
 */

function evaluateFactorial2(number, calculated = 1) {
  if(number === 0) return calculated
  return evaluateFactorial2(number - 1, calculated * number)
}

// console.log(evaluateFactorial2(4))



/**
 * Evaluate factorials, passing along the computed value at each stage,
 * and preventing the function caller from changing the default parameter
 */

function evaluateFactorial3(number) {
  function doEvaluation(number, calculated) {
    if(number === 0) return calculated
    return doEvaluation(number - 1, calculated * number)
  }
  return doEvaluation(number, 1)
}

// console.log(evaluateFactorial3(5))



/**
 * Evaluate factorials, going the opposite direction
 */

function evaluateFactorialReversed(number, position = 1) {
  if(position === number) return number // or "return position"
  return position * evaluateFactorialReversed(number, position + 1)
}

// console.log(evaluateFactorialReversed(5))



/**
 * Evaluate factorials, going the opposite direction,
 * passing along the calculated value at each step
 */

function evaluateFactorialReversed2(number, position = 1, calculated = 1) {
  if(position > number) return calculated
  return evaluateFactorialReversed2(number, position + 1, calculated * position)
}

// console.log(evaluateFactorialReversed2(4))



/**
 * Avoid passing fixed parameters and prevent function caller from changing default values
 */

function evaluateFactorialReversed3(number) {
  function doEvaluation(position, calculated) {
    if(position > number) return calculated
    return doEvaluation(position + 1, calculated * position)
  }
  return doEvaluation(1, 1)
}

// console.log(evaluateFactorialReversed3(5))

