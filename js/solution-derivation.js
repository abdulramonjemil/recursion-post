/**
 * This file contains different recursive implementations of
 * solution generation (more info below).
 * The functions return a possible combination of adding 5 to 2 or
 * multiplying it by 3, and then adding 5 or multiplying the result
 * by 3 continously to get the specified number.
 * Run an example to understand better.
 * PS: File may also contain non-recursive implementations.
 */



/**
 * Derive the result passing along the history to the next step,
 * and going from 2 upwards.
 */

function deriveSolution(target, currentResult = 2, history = "2") {
  if(currentResult > target) return null
  if(currentResult === target) return history
  return deriveSolution(target, currentResult + 5, `(${history} + 5)`) || deriveSolution(target, currentResult * 3, `(${history} * 3)`)
}

// console.log(deriveSolution(36))
// console.log(deriveSolution(11))



/**
 * Derive the result passing along the history to the next step,
 * and going from target downwards.
 */

function deriveSolution2(target, history = "2") {
  if(target < 2) return null
  if(target === 2) return history
  return deriveSolution2(target / 3, history.replace("2", "(2 * 3)")) || deriveSolution2(target - 5, history.replace("2", "(2 + 5)"))
}

// console.log(deriveSolution2(36))
// console.log(deriveSolution2(11))



/**
 * Derive result going from the target downwards.
 */

function deriveSolution3(target) {
  if(target < 2) return null
  if(target === 2) return "2"

  let byMultiplyingByThree = deriveSolution3(target / 3)
  if(byMultiplyingByThree) return "(" + byMultiplyingByThree + " * 3)"

  let byAddingFive = deriveSolution3(target - 5)
  if(byAddingFive) return "(" + byAddingFive + " + 5)"
  return null
}

// console.log(deriveSolution3(21))
// console.log(deriveSolution3(36))



/**
 * Derive solution without passing the history to the next step
 */

function deriveSolution4(target, currentResult = 2) {
  if(currentResult > target) return null
  if(currentResult === target) return "2"

  let byAddingFive = deriveSolution4(target, currentResult + 5)
  if(byAddingFive) return byAddingFive.replace("2", "(2 + 5)")
  
  let byMultiplyingByThree = deriveSolution4(target, currentResult * 3)
  if(byMultiplyingByThree) return byMultiplyingByThree.replace("2", "(2 * 3)")
  return null
}

// console.log(deriveSolution4(11))
// console.log(deriveSolution4(36))

