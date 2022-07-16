




// Simple division with 0 quotient and some remainder

// function divideSingle(dividend, divisor) {
//   return "0 rem " + (divisor - dividend)
// }




// Divide numbers and provide info of quotient and remainder

function divide(dividend, divisor, quotient = 0) {
  if(divisor > dividend) return quotient + " rem " + (divisor - dividend)
  return divide(dividend - divisor, divisor, quotient + 1)
}

// console.log(divide(68, 8))


function divideSingle(dividend, divisor) {
  return 0 + " rem " + (divisor - dividend)
}


function divide(dividend, divisor, quotient = 0) {
  if(divisor > dividend) return quotient + " rem " + (divisor - dividend)
  return divide(dividend - divisor, divisor, quotient + 1)
}