




// Sampling for the generation of a natural power of two for numbers

// function findSquare(base) {
//   return base * base
// }




// Generating actual natural powers of numbers without nesting functions

// function power(base, exponent) {
//   if(exponent === 0) return 1
//   if(exponent === 1) return base
//   return base * power(base, exponent - 1)
// }




// Generating actual natural powers of numbers

// function power(base, exponent) {
//   function getPower() {
//     if(exponent === 0) return 1
//     if(exponent === 1) return base
//     exponent--
//     return base * getPower()
//   }
//   return getPower()
// }

// console.log(power(2, 3))
// console.log(power(3, 0))


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