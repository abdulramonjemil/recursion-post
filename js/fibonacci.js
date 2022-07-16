




// Return the first calculatable fibonacci number

// 1, 1, 2, 3, 5, 8, 13 ...

// function fibonacciSingle() {
//   return 1 + 1
// }




// Return the nth fibonacci number

// function fibonacci(number) {
//   if(number === 1 || number === 2) return 1
//   return fibonacci(number - 2) + fibonacci(number - 1)
// }

// console.log(fibonacci(1))
// console.log(fibonacci(12))


// 1, 1, 2, 3, 5, 8, 13, ...

function fibonacciSingle() {
  return 1 + 1
}




// Return the nth fibonacci number

function fibonacci(position) {
  if(position === 1 || position === 2) return 1
  return fibonacci(position - 2) + fibonacci(position - 1)
}
