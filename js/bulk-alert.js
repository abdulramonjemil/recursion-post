/**
 * This file contains different recursive implementations of bulk alerts.
 * The functions alert all items in the array that is passed as a parameter.
 * The alert takes place on each of the items one after the other.
 * PS: File might also contain non-recursive implementations.
 */



/**
 * Sample arrays to work with functions below
 */

let arrayOne = [1, 2, 3], arrayTwo = [6, 5, 4]



/**
 * Alert each item in the array going from the first item to the last.
 */ 

function alertBulk(arr, index = 0) {
  if(index === arr.length) return
  alert(arr[index])
  alertBulk(arr, index + 1)
}

// alertBulk(arrayOne)



/**
 * Avoid passing the same fixed parameter (the array) by creating and nesting another
 * function that actually does the alert recursively. This approach also prevents the
 * caller of the function from changing the default index value.
 */

function alertBulk2(arr) {
  function doAlert(index) {
    if(index === arr.length) return
    alert(arr[index])
    doAlert(index + 1)
  }
  doAlert(0)
}

// alertBulk2(arrayOne)



/**
 * Alert each item in the array starting with the last item in the array.
 */

function alertBulkReversed(arr, index = arr.length - 1) {
  if(index < 0) return
  alert(arr[index])
  alertBulkReversed(arr, index - 1)
}

// alertBulkReversed(arrayTwo)



/**
 * Avoid passing the same fixed parameter (the array) by creating and nesting another
 * function that actually does the alert recursively. Also, prevent the
 * caller of the function from changing the default index value.
 */

 function alertBulkReversed2(arr) {
  function doAlert(index) {
    if(index < 0) return
    alert(arr[index])
    doAlert(index - 1)
  }
  doAlert(arr.length - 1)
}

// alertBulkReversed2(arrayTwo)

