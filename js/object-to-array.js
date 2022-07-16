/**
 * This is a sample object for working with data structure
 * traversals with recursion (used with another file)
 */

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



function exportIntoArray(data, generatedArray = []) {
  if(Array.isArray(data)) for(let employee of data) generatedArray.push(employee)
  else for (let department of Object.values(data)) exportIntoArray(department, generatedArray)
  return generatedArray
}


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


