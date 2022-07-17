/**
 * This file contains different recursive implementations of
 * reversing singly linked lists.
 * PS: The file may also contain non-recursive implementations
 */



/**
 * Simple singly linked lists to work with the functions below.
 * They are of the same structure, but with slightly different values.
 */

let list = { value: 10 }
list.next = { value: 20 }
list.next.next = { value: 30 }
list.next.next.next = { value: 40, next: null }

let list2 = {
  value: 100,
  next: {
    value: 200,
    next: {
      value: 300,
      next: {
        value: 400,
        next: null
      }
    }
  }
}


/**
 * Reverse a singly linked list recursively
 */

function reverseList1(list) {
  if(!list || !list.next) return list
  let newList = reverseList1(list.next)
  list.next.next = list
  list.next = null
  return newList
}


// console.log(reverseList1(list))
// console.log(reverseList1(list2))



/**
 * Reverse a singly linked list recursively passing along the
 * changed value at each step.
 */

function reverseList2(list, next = null) {
  if(!list) return next
  let newList = {
    value: list.value,
    next: next
  }
  return reverseList2(list.next, newList)
}

// console.log(reverseList2(list))
// console.log(reverseList2(list2))



/**
 * Prevent function caller from changing default parameter.
 * Access the newList from the upper scope.
 * "next" can also be passed as a parameter to doReversal.
 */

function reverseList3(list) {
  let next = null
  function doReversal(list) {
    if(!list) return next
    next = {
      value: list.value,
      next: next
    }
    return doReversal(list.next)
  }
  return doReversal(list)
}

// console.log(reverseList2(list))
// console.log(reverseList2(list2))

