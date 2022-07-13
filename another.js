// Generating solution to the provided target only by adding 5 to 2 or multiplying it by 3 once

function deriveSolution(target) {
  let derivedByAddingFive = 2 + 5 === target
  if(derivedByAddingFive) return "(2 + 5)"

  let derivedByMultiplyingByThree = 2 * 3 === target
  if(derivedByMultiplyingByThree) return "(2 * 3)"
  return null
}




function deriveSolution(target, currentResult = 2, history = 2) {
  if(currentResult > target) return null

  let derivedByAddingFive = currentResult + 5 === target
  if(derivedByAddingFive) return `(${history} + 5)`

  let derivedByMultiplyingByThree = currentResult * 3 === target
  if(derivedByMultiplyingByThree) return `(${history} * 3)`

  return deriveSolution(target, currentResult + 5, `(${history} + 5)`) || deriveSolution(target, currentResult * 3, `(${history} * 3)`)
}

console.log(deriveSolution(243))


function divideSingle(dividend, divisor) {
  return "0 rem " + (divisor - dividend)
}




function divide(dividend, divisor, quotient = 0) {
  if(divisor > dividend) return quotient + " rem " + (divisor - dividend)
  return divide(dividend - divisor, divisor, quotient + 1)
}




// 1, 1, 2, 3, 5, 8, 13, ...

function fibonacciSingle() {
  return 1 + 1
}




// Return the nth fibonacci number

function fibonacci(number) {
  if(number === 1 || number === 2) return 1
  return fibonacci(number - 2) + fibonacci(number - 1)
}




function evaluateSumToTwo() {
  return 2 + 1
}




function evaluateSumTo(number) {
  if (number === 1) return 1
  return number + evaluateSumTo(number - 1)
}



// function collectSingle() {
//   return (2 + " " + 1).split(" ").map(function (val) return Number(val))
// }


// function collectSingle2() {
//   return [2].concat[1]
// }




// function collectNumbers(number) {
//   if(number === 1) return 1
//   return (number + " " + collectNumbers(number - 1)).split(" ").map(function (val) return Number(val))
// }

// collectNumbers(5)




// Collect all the numbers from 1 to n

// function collectNumbers(number) {
//   if(number === 1) return [1]
//   return [number].concat(collectNumbers(number - 1))
// }

// console.log(collectNumbers(5))




// Sampling for the generation of a natural power of two for numbers

function findSquare(base) {
  return base * base
}




// Generating actual natural powers of numbers without nesting functions

function power(base, exponent) {
  if(exponent === 0) return 1
  if(exponent === 1) return base
  return base * power(base, exponent - 1)
}

