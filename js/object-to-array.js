/**
 * This file contains different recursive implementations for traversing
 * a complex data structure and exporting values in them into an array.
 * PS: File may also contain non-recursive implementations and bonus code.
 */



/**
 * This is a sample object for working with data structure
 * traversals with recursion
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


/**
 * Export data contained in an object into an array.
 */

function exportIntoArray(data, generatedArray = []) {
  if(Array.isArray(data)) for(let employee of data) generatedArray.push(employee)
  else for (let department of Object.values(data)) exportIntoArray(department, generatedArray)
  return generatedArray
}

// console.log(exportIntoArray(companyData))




/**
 * Export data into array, going deeper into the data structure.
 */

function exportIntoArray2(data, generatedArray = []) {
  if(data.name) generatedArray.push(data)
  else if(Array.isArray(data)) for(let employee of data) exportIntoArray2(employee, generatedArray)
  else for (let department of Object.values(data)) exportIntoArray2(department, generatedArray)
  return generatedArray
}

// console.log(exportIntoArray2(companyData))



/**
 * Prevent function caller from changing default value of generated array,
 * access generated array from one source, and avoid returning the array multiple times.
 */

function exportIntoArray3(data) {
  let generatedArray = []
  function generateArray(data) {
    if(Array.isArray(data)) for(let employee of data) generatedArray.push(employee)
    else for (let department of Object.values(data)) generateArray(department)
  }
  generateArray(data)
  return generatedArray
}

// console.log(exportIntoArray3(companyData))



/**
 * Bonus code: export the generated array into a csv file
 */

function exportToCSV(generatedArray) {
  let [ workHourSum, salarySum ] = [0, 0]
  generatedArray.forEach(function(employee) {
    workHourSum += employee.workHours
    salarySum += employee.salary
  })
  generatedArray.push({
    name: "",
    age: "",
    workHours: workHourSum,
    salary: salarySum
  })
  
  let headerRow = { name: 'Name', age: 'Age', workHours: 'Work Hours', salary: 'Salary' }
  generatedArray.unshift(headerRow)
  let csvContent = "data:text/csv;charset=utf-8," + generatedArray.map(row => row.name + "," + row.age + "," + row.workHours + "," + row.salary).join('\n')
  return encodeURI(csvContent)
}

// console.log(exportToCSV(exportIntoArray(companyData)))



/**
 * Download the csv file
 */

function downloadFile(file) {
  let fileLink = document.createElement("a")
  fileLink.setAttribute("href", file)
  fileLink.setAttribute("download", "employee-data.csv")
  document.body.appendChild(fileLink) // Might be needed in some browsers
  fileLink.click()
}

// let departmentsAsArray = exportIntoArray(companyData)
// let exportedCSV = exportToCSV(departmentsAsArray)
// downloadFile(exportedCSV)

