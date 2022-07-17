/**
 * This file contains different recursive implementations of
 * collectNumbers a set of numbers into an array.
 * PS: The file may also contain non-recursive implementations.
 */



/**
 * Collect a set of numbers starting with the specified starting
 * number down to 1.
 */

function collectNumbers(number) {
  if(number === 1) return [1]
  return [number].concat(collectNumbers(number - 1))
}

// console.log(collectNumbers(6))



/**
 * Pass the collected numbers along as an array.
 * Pushing has to be done separately because the push method doesn't return the array.
 */

function collectNumbers2(number, arr = []) {
  if(number === 0) return arr
  arr.push(number)
  return collectNumbers2(number - 1, arr)
}

// console.log(collectNumbers2(5))



/**
 * We could also define a push function that pushes
 * the value into the array and returns the array.
 */

function push(arr, value) {
  arr.push(value)
  return arr
}

function collectNumbers3(number, arr = []) {
  if(number === 0) return arr
  return collectNumbers3(number - 1, push(arr, number))
}

// console.log(collectNumbers3(4))



/**
 * Prevent function caller from changing the default array value
 */

function collectNumbers4(number) {
  function collect(number, arr) {
    if(number === 0) return arr
    return collect(number - 1, push(arr, number))
  }
  return collect(number, [])
}

// console.log(collectNumbers4(9))



/**
 * Going from the 1 to the specified number
 */

function collectNumbersReversed(number, position = 1) {
  if(position === number) return [position]
  return collectNumbersReversed(number, position + 1).concat([position])
}

// console.log(collectNumbersReversed(5))



/**
 * Pass the generated array as a parameter at each step
 */

function collectNumbersReversed2(number, position = 1, arr = []) {
  if(position > number) return arr
  arr.unshift(position)
  return collectNumbersReversed2(number, position + 1, arr)
}

// console.log(collectNumbersReversed2(5))



/**
 * Prevent function caller from changing default values.
 * Avoid passing fixed parameters multiple times.
 * The array method "unshift" doesn't return the array.
 * So, it can't be passed directly to the function.
 * Note that we could define a helper unshift function
 * that returns the array after unshifting values (like the push defined earlier),
 * which can be passed directly to the function.
 */

function collectNumbersReversed3(number) {
  function collect(position, arr) {
    if(position > number) return arr
    arr.unshift(position)
    return collect(position + 1, arr)
  }
  return collect(1, [])
}

// console.log(collectNumbersReversed3(12))

