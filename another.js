// Generating solution to the provided target only by adding 5 to 2 or multiplying it by 3 once

// function deriveSolution(target) {
//   let derivedByAddingFive = 2 + 5 === target
//   if(derivedByAddingFive) return "(2 + 5)"

//   let derivedByMultiplyingByThree = 2 * 3 === target
//   if(derivedByMultiplyingByThree) return "(2 * 3)"
//   return null
// }




// function deriveSolution(target, currentResult = 2, history = 2) {
//   if(currentResult > target) return null

//   let resultIsDerived = currentResult === target
//   if(resultIsDerived) return history

//   return deriveSolution(target, currentResult + 5, `(${history} + 5)`) || deriveSolution(target, currentResult * 3, `(${history} * 3)`)
// }


// function deriveSolution(target, currentResult = target) {
//   if(currentResult < 2) return null
//   if(currentResult === 2) return "2"

//   let byMultiplyingByThree = deriveSolution(target, currentResult / 3)
//   if(byMultiplyingByThree) return "(" + byAddingFive + " * 3)"

//   let byAddingFive = deriveSolution(target, currentResult - 5)
//   if(byAddingFive) return "(" + byAddingFive + " + 5)"
//   return null
// }


function deriveSolution(target, currentResult = 2) {
  if(currentResult > target) return null
  if(currentResult === target) return "2"

  let byMultiplyingByThree = deriveSolution(target, currentResult * 3)
  if(byMultiplyingByThree) return "(" + byAddingFive + " * 3)"

  let byAddingFive = deriveSolution(target, currentResult + 5)
  if(byAddingFive) return "(" + byAddingFive + " + 5)"
  return null
}

// console.log(deriveSolution(12))


function divideSingle(dividend, divisor) {
  return 0 + " rem " + (divisor - dividend)
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

function fibonacci(position) {
  if(position === 1 || position === 2) return 1
  return fibonacci(position - 2) + fibonacci(position - 1)
}




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



function collectNumbers(number, arr = []) {
  if(number === 0) return arr
  arr.push(number)
  return collectNumbers(number - 1, arr)
}

function collectNumbers(number) {
  if(number === 1) return [1]
  return [number].concat(collectNumbers(number - 1))
}


// console.log(collectNumbers(4))



function exportIntoArray(data, generatedArray = []) {
  if(Array.isArray(data)) for(let employee of data) generatedArray.push(employee)
  else for (let department of Object.values(data)) exportIntoArray(department, generatedArray)
  return generatedArray
}



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


// function reverseList(list, next = null) {
//   if(!list) return next

//   let newList = {
//     value: list.value,
//     next: next
//   }

//   return reverseList(list.next, newList)
// }


var myList = {
  value: 10,
  next: {
    value: 20,
    next: {
      value: 30,
      next: {
        value: 40,
        next: null
      }
    }
  }
}


// var myList = {
//   value: 10,
//   next: {
//     value: 20,
//     next: null
//   }
// }

function reverseLinkedList(list) {
  if(!list.next) return list
  let newList = reverseLinkedList(list.next)
  // list.next.next = list
  // list.next = null

  // list.next.next = {}
  list.next.next = list
  list.next.next.value = list.value
  list.next.next.next = null
  // list = list.next
  // console.log(list)

  // newList.next = {}
  // newList.next.value = list.value
  // newList.next.next = null
  return newList
}

// function insertAtEnd(initialList, value, list = initialList) {
//   if(!list.next) {
//     list.next = {
//       value: value,
//       next: null
//     }
//     return initialList
//   }
//   return insertAtEnd(initialList, value, list.next)
// }

// function reverseLinkedList(list) {
//   if(!list.next) return list
//   let newList = reverseLinkedList(list.next)
//   newList = insertAtEnd(newList, list.value)
//   return newList
// }



// function reverseLinkedList(list) {
//   if(!list.next) return list
//   let newList = reverseLinkedList(list.next)
//   newList.next.next = {}
//   newList.next.next.value = list.value
//   newList.next.next.next = null
//   return newList
// }

// function reverseLinkedList(list) {
//   if(!list.next) return list
//   let newList = reverseLinkedList(list.next)
//   newList.next = {}
//   newList.next.value = list.value
//   newList.next.next = null
//   return newList
// }


// function reverseLinkedList(list) {
//   // if(!list.next) return list
//   // let newList = reverseLinkedList(list.next)
//   list.next.next.next = {}
//   list.next.next.next.value = list.value
//   list.next.next.next.next = null
//   // return newList
// }

// function reverseLinkedList(list) {
//   // if(!list.next) return list
//   // let newList = reverseLinkedList(list.next)
//   list.next.next = {}
//   list.next.next.value = list.value
//   list.next.next.next = null
//   // return newList
// }


console.log(reverseLinkedList(myList))


// var myList = {
//   value: 10,
//   next: {
//     value: 20,
//     next: {
//       value: 30,
//       next: null
//     }
//   }
// }

// let someval = {
//   value: 20,
//   next: {
//     value: 30,
//     next: {
//       value: 20,
//       next: null
//     }
//   }
// }

