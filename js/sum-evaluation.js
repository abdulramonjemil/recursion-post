




// Sum of arithmetic progression (using a for loop)

// function evaluateSumTo(number) {
//   let sum = 0
//   for (let i = number; i >= 1; i--) {
//     sum += i
//   }
//   return sum
// }

// let summed = evaluateSumTo(5)
// console.log(summed)




// Simple sum of arithmetic progression from 1 up to 2

// function evaluateSumToTwo() {
//   return 2 + 1
// }




// Sum of arithmetic progression (using a recursive implementation) - using if else

// function evaluateSumTo(number) {
//   if (number === 1) {
//     return 1
//   } else {
//     return number + evaluateSumTo(number - 1)
//   }
// }

// let summed = evaluateSumTo(6)
// console.log(summed)




// Sum of arithmetic progression (using a recursive implementation) - cleaning up the if else

// function evaluateSumTo(number) {
//   if (number === 1) return 1
//   return number + evaluateSumTo(number - 1)
// }

// console.log(evaluateSumTo(5))




// Sum of arithmetic progression (using a recursive implementation) - cleaning up the if else

// function evaluateSumTo(number) {
//   return number === 1 ? 1 : number + evaluateSumTo(number - 1)
// }

// console.log(evaluateSumTo(3))








function evaluateSumToTwo() {
  return 2 + 1
}



// function evaluateSumTo(number) {
//   if (number === 1) return 1
//   return number + evaluateSumTo(number - 1)
// }

function evaluateSumTo(number, position = 1) {
  if(position === number) return position
  return position + evaluateSumTo(number, position + 1)
}

// console.log(evaluateSumTo(6))

// function evaluateSumTo(number, sum = 0) {
//   if (number === 0) return sum
//   return evaluateSumTo(number - 1, sum + number) 
// }