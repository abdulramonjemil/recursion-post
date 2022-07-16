// Alert single element in array

function alertSingle(arr) {
  alert(arr[0])
}



// Alert all elements in an array

function alertBulk(arr, index = 0) {
  if(index === arr.length) return
  alert(arr[index])
  alertBulk(arr, index + 1)
}

// alertBulk([3, 1, 5])