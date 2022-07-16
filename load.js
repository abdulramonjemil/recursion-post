/**
 * This function loads all the required javascript files into the current webpage
 * The files are independent of one another, which is why this method works well
 */

function loadScript(url) {
  var head = document.querySelector('head')
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  head.appendChild(script)
}



/**
 * The array contains the list of JS file URLs to be loaded
 * The files are loaded by the loadScript function defined earlier
 */

let JSFileURLs = [
  "./js/bulk-alert.js", "./js/console-log.js",
  "./js/division.js", "./js/factorials.js",
  "./js/fibonacci.js", "./js/linked-list.js",
  "./js/number-collection.js", "./js/object-to-array.js",
  "./js/power.js", "./js/solution-derivation.js",
  "./js/sum-evaluation.js"
]

JSFileURLs.forEach(loadScript)

