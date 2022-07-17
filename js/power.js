/**
 * This file contains different recursive implementations for generating natural powers
 * PS: File may contain non-recursive implementations too.
 */



/**
 * Generate natural powers of numbers, reducing exponent to 1.
 */

function power(base, exponent) {
  if(exponent === 0) return 1
  if(exponent === 1) return base
  return base * power(base, exponent - 1)
}

// console.log(power(4, 5))



/**
 * Increase custom exponent parameter until the specified exponent.
 */

function power2(base, exponent, newExponent = 1) {
  if(exponent === 0) return 1
  if(newExponent === exponent) return base
  return base * power2(base, exponent, newExponent + 1)
}

// console.log(power2(3, 4))



/**
 * Pass the evaluted value to the next step.
 */

function power3(base, exponent, calculated = 1) {
  if(exponent === 0) return 1
  if(exponent === 1) return calculated * base
  return power3(base, exponent - 1, calculated * base)
}

// console.log(power3(2, 4))



/**
 * Avoid passing the same fixed parameters.
 */

function power5(base, exponent) {
  function getPower(exponent) {
    if(exponent === 0) return 1
    if(exponent === 1) return base
    return base * getPower(exponent - 1)
  }
  return getPower(exponent)
}

// console.log(power5(5, 3))



/**
 * Avoid passing the same fixed parameters, and prevent
 * function caller from changing default parameter.
 */

function power4(base, exponent) {
  function getPower(exponent, calculated) {
    if(exponent === 0) return 1
    if(exponent === 1) return calculated * base
    return getPower(exponent - 1, calculated * base)
  }
  return getPower(exponent, 1)
}

// console.log(power4(3, 3))



/**
 * Increase custom exponent parameter until the specified exponent,
 * without passing the same fixed parameter (base). Also, prevent
 * function caller from changing default parameter.
 */

function power6(base, exponent) {
  function getPower(newExponent) {
    if(exponent === 0) return 1
    if(newExponent === exponent) return base
    return base * getPower(newExponent + 1)
  }
  return getPower(1)
}

// console.log(power6(4, 3))

