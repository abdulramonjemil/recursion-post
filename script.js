// Logging a set of numbers into the console - using a loop

// function logIntoConsole(start, end) {
//   for (let i = start; i <= end; i++) {
//     console.log(i)
//   }
// }

// logIntoConsole(2, 5)




// Logging a number and the one after it into the console

// function logSingleIntoConsole(start, end) {
//   console.log(start)
//   console.log(end)
// }




// Logging a set of numbers into the console - using a recursive implementation

// function logIntoConsole(start, end) {
//   if(start === end) {
//     console.log(end)
//   } else {
//     console.log(start)
//     logIntoConsole(start + 1, end)
//   }
// }

// logIntoConsole(4, 6)




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




// Evaluating factorials - using a loop

// function evaluateFactorial(number) {
//   let finalValue = number;
//   for (let i = number - 1; i > 1; i--) {
//     finalValue *= i
//   }
//   return finalValue;
// }

// let factorialEvaluated = evaluateFactorial(6)
// console.log(factorialEvaluated)




// Simple calculation of the factorial of 2

// function evaluateSumToTwo() {
//   return 2 * 1
// }




// Evaluating factorials - using recursive implementation

// function evaluateFactorial (number) {
//   if (number === 1) {
//     return 1
//   } else {
//     return number * evaluateFactorial(number - 1)
//   }
// }

// let factorialEvaluated = evaluateFactorial(3)
// console.log(factorialEvaluated)




// Evaluating sample company data and exporting as a csv file

let companyData = {
  marketing: [
    { name: 'John', age: 25, workHours: 40, salary: 1000 },
    { name: 'Jane', age: 30, workHours: 50, salary: 2000 },
    { name: 'Joe', age: 35, workHours: 60, salary: 3000 }
  ],
  development: {
    websiteDevelopment: [
      { name: 'Alice', age: 33, workHours: 35, salary: 1500 },
      { name: 'Bob', age: 40, workHours: 45, salary: 2500 },
      { name: 'Charlie', age: 45, workHours: 55, salary: 3500 }
    ],
    mobileDevelopment: [
      { name: 'Dave', age: 50, workHours: 60, salary: 4000 },
      { name: 'Eve', age: 55, workHours: 70, salary: 5000 },
      { name: 'Frank', age: 60, workHours: 80, salary: 6000 }
    ]
  },
  sales: [
    { name: 'Greg', age: 25, workHours: 40, salary: 1000 },
    { name: 'Helen', age: 30, workHours: 50, salary: 1200 },
    { name: 'Harry', age: 35, workHours: 60, salary: 1400 }
  ]
}




// Exporting into an array - using a loop

// function exportIntoArray(data) {
//   let departmentsAsArray = []
//   for (let department of Object.values(data)) {
//     if (Array.isArray(department)) {
//       for ( let employee of department) {
//         departmentsAsArray.push(employee)
//       }
//     } else {
//       for (let subDepartment of Object.values(department)) {
//         for (let employee of subDepartment) {
//           departmentsAsArray.push(employee)
//         }
//       }
//     }
//   }
//   return departmentsAsArray
// }

// let departmentsAsArray = exportIntoArray(companyData)
// console.log(departmentsAsArray)




// Simple exportation of employee data into an array

// function exportIntoArray(data) {
//   let generatedArray = []
//   for (let department of Object.values(data)) {
//     for (let employee of department) {
//       generatedArray.push(employee)
//     }
//   }
//   return generatedArray
// }




// Exporting into an array - using a recursive implementation without nesting functions

// function exportIntoArray(data, generatedArray = []) {
//   if (Array.isArray(data)) {
//     for (let employee of data) {
//       generatedArray.push(employee)
//     }
//   } else {
//     for (let department of Object.values(data)) {
//       exportIntoArray(department, generatedArray)
//     }
//   }
//   return generatedArray
// }

// console.log(exportIntoArray(companyData))




// Exporting into array (another implementation)

// function exportIntoArray(data, generatedArray = []) {
//   if(data.name) generatedArray.push(data)
//   else if(Array.isArray(data)) for(let employee of data) exportIntoArray(employee, generatedArray)
//   else for (let department of Object.values(data)) exportIntoArray(department, generatedArray)
//   return generatedArray
// }




// Exporting into an array - using a recursive implementation - nesting functions

// function exportIntoArray(data, generatedArray = []) {
//   function generateArray(newData) {
//     if (Array.isArray(newData)) {
//       for (let employee of newData) {
//         generatedArray.push(employee)
//       }
//     } else {
//       for (let department of Object.values(newData)) {
//         generateArray(department)
//       }
//     }
//   }

//   generateArray(data)
//   return generatedArray
// }

// console.log(exportIntoArray(companyData))




// Exporting the generatedArray into a csv file

// function exportToCSV(generatedArray) {

//   let [ workHourSum, salarySum ] = [0, 0]
//   generatedArray.forEach(function(employee) {
//     workHourSum += employee.workHours
//     salarySum += employee.salary
//   })
//   generatedArray.push({
//     name: "",
//     age: "",
//     workHours: workHourSum,
//     salary: salarySum
//   })

//   let headerRow = { name: 'Name', age: 'Age', workHours: 'Work Hours', salary: 'Salary' }
//   generatedArray.unshift(headerRow)

  // let csvContent = "data:text/csv;charset=utf-8," + generatedArray.map(row => row.name + "," + row.age + "," + row.workHours + "," + row.salary).join('\n')

//   return encodeURI(csvContent)
// }

// let exportedCSV = exportToCSV(departmentsAsArray)
// console.log(exportedCSV)




// Downloading the csv file

// function downloadFile(file) {
//   let link = document.createElement("a")
//   link.setAttribute("href", file)
//   link.setAttribute("download", "employee-data.csv")
//   document.body.appendChild(link)
//   link.click()
// }

// downloadFile(exportedCSV)




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




// Alert single element in array

// function alertSingle(arr) {
//   alert(arr[0])
// }




// Alert all elements in an array

// function alertBulk(arr, index = 0) {
//   if(index === arr.length) return
//   alert(arr[index])
//   alertBulk(arr, index + 1)
// }

// alertBulk([3, 1, 5])




// A simple linked list

let list = { value: 10 }
list.next = { value: 20 }
list.next.next = { value: 30 }
list.next.next.next = { value: 40, next: null }




// Simple function to reverse a linked list with a single element

// function reverseSingle(list) {
//   let newList = {
//     value: list.value,
//     next: null
//   }

//   return newList
// }




// Reversing a linked list with single or multiple elements

// function reverseList(list, next = null) {
//   if(!list) return next

//   let newList = {
//     value: list.value,
//     next: next
//   }

//   return reverseList(list.next, newList)
// }

// console.log(reverseList(list))




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


