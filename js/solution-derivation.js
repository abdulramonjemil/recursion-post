




// Generating solution to the provided target only by adding 5 to 2 or multiplying it by 3 once

// function deriveSolution(target) {
//   let derivedByAddingFive = 2 + 5 === target
//   if(derivedByAddingFive) return "(2 + 5)"

//   let derivedByMultiplyingByThree = 2 * 3 === target
//   if(derivedByMultiplyingByThree) return "(2 * 3)"
//   return null
// }

// console.log(deriveSolution(3))
// console.log(deriveSolution(7))




// Method to derive a solution

// function deriveSolution(target, currentResult = 2, history = 2) {
//   if(currentResult > target) return null

//   let derivedByAddingFive = currentResult + 5 === target
//   if(derivedByAddingFive) return `(${history} + 5)`

//   let derivedByMultiplyingByThree = currentResult * 3 === target
//   if(derivedByMultiplyingByThree) `(${history} * 3)`

//   return deriveSolution(target, currentResult + 5, `(${history} + 5)`) || deriveSolution(target, currentResult * 3, `(${history} * 3)`)
// }




// Another method to derive a solution - nesting functions

// function deriveSolution(target) {
//   function derive(currentResult, history) {
//     if(currentResult > target) return null
  
//     let derivedByAddingFive = currentResult + 5 === target
//     if(derivedByAddingFive) return `(${history} + 5)`
  
//     let derivedByMultiplyingByThree = currentResult * 3 === target
//     if(derivedByMultiplyingByThree) `(${history} * 3)`
  
//     return derive(currentResult + 5, `(${history} + 5)`) || derive(currentResult * 3, `(${history} * 3)`)
//   }
//   return derive(2, "2")
// }

// console.log(deriveSolution(28))
// console.log(deriveSolution(11))




// Generate the solution to the provided target only by adding 5 to 2 or multiplying it by 3 as needed without nesting functions

// function deriveSolution(target, currentResult = 2, history = "2") {
//   if(currentResult === target) return history
//   if(currentResult > target) return null
  
//   let derivedByAddingFive = deriveSolution(target, currentResult + 5, `(${history} + 5)`)
//   if(derivedByAddingFive) return derivedByAddingFive
  
//   let derivedByMultiplyingByThree = deriveSolution(target, currentResult * 3, `(${history} * 3)`)
//   return derivedByMultiplyingByThree

//   // if(derivedByMultiplyingByThree) return derivedByMultiplyingByThree
//   // return null
// }

// console.log(deriveSolution(23))
// console.log(deriveSolution(11))




// Generate the solution to the provided target only by adding 5 to 2 or multiplying it by 3 as needed - nesting functions

// function deriveSolution(target) {
//   function derive(currentResult, history) {
//     if(currentResult === target) return history
//     if(currentResult > target) return null

//     let derivedByAddingFive = deriveSolution(target, currentResult + 5, `(${history} + 5)`)
//     if(derivedByAddingFive) return derivedByAddingFive

//     let derivedByMultiplyingByThree = deriveSolution(target, currentResult * 3, `(${history} * 3)`)
//     return derivedByMultiplyingByThree
//   }
//   return derive(2, "2")
// }

// console.log(deriveSolution(28))
// console.log(deriveSolution(11))

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