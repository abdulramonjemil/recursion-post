




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

  list.next.next = {}
  list.next.next.value = list.value
  list.next.next.next = null
  list.next.next = list
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


// console.log(reverseLinkedList(myList))

