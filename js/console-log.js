/**
 * This file contains different recursive implementations of logging a series
 * of numbers into the console. The functions take start and end parameters
 * which determine which number to log into the console first and which to log last.
 * File might also contain non-recursive implementations.
 */


/**
 * Log a set of numbers into the console - using a loop.
 * Note the the start parameter is also used directly in the loop.
 * {} is also ommitted in the for loop since the block
 * contains just one line of code.
 * {} cannot be ommitted in function definitions.
 */

function logIntoConsole1(start, end) {
  for (;start <= end; start++)  console.log(start)
}

// logIntoConsole1(2, 5)



/**
 * Log a set of numbers into the console recursively.
 * No parameters with default values are used.
 * So, there's no need to nest any functions
 */

function logIntoConsole2(start, end) {
  if(start > end) return
  console.log(start)
  logIntoConsole2(start + 1, end)
}

// logIntoConsole2(4, 6)



/**
 * Log a set of numbers into the console by looping,
 * starting with the last number.
 */

function logIntoConsoleReversed1(start, end) {
  for (;end >= start; end--)  console.log(end)
}

// logIntoConsoleReversed1(5, 7)



/**
 * Log a set of numbers into the console recursively,
 * starting with the last number.
 */

function logIntoConsoleReversed2(start, end) {
  if(end < start) return
  console.log(end)
  logIntoConsoleReversed2(start, end - 1)
}

// logIntoConsoleReversed2(2, 5)

