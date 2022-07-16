
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