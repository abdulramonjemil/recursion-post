/**
 * This file contains different recursive implementations of
 * evaluating the sum of arithmetic progression.
 * PS: File may also contain non-recursive implementations
 */



/**
 * Evaluate the sum of arithmetic progression (using a for loop)
 * {} is skipped in the for loop as the block contains just a line
 */

function evaluateSum(number) {
  let sum = 0
  for (; number >= 1; number--) sum += number
  return sum
}

// console.log(evaluateSum(5))



/**
 * Evaluate sum of arithmetic progression by adding the smaller number recursively
 */

function evaluateSum2(number) {
  if (number === 1) return 1
  return number + evaluateSum2(number - 1)
}

// console.log(evaluateSum2(4))



/**
 * The if else at the top could be changed to this one liner
 */

function evaluateSum3(number) {
  return number === 1 ? 1 : number + evaluateSum3(number - 1)
}

// console.log(evaluateSum3(6))



/**
 * Evaluate sum of arithmetic progression starting from 1 upwards
 */

function evaluateSum4(number, position = 1) {
  if(position === number) return position
  return position + evaluateSum4(number, position + 1)
}

// console.log(evaluateSum4(6))



/**
 * Pass the sum to the next stage of the function
 */

function evaluateSum5(number, sum = 0) {
  if (number === 0) return sum
  return evaluateSum5(number - 1, sum + number) 
}

// console.log(evaluateSum5(7))



/**
 * Prevent function caller from changing the default parameter
 */

function evaluateSum6(number) {
  let sum = 0
  function evaluate(number) {
    if(number === 0) return sum
    sum += number
    return evaluate(number - 1)
  }
  evaluate(number)
  return sum
}

// console.log(evaluateSum6(6))

