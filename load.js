/**
 * This function loads all the required javascript files into the current webpage
 */

function loadScript(url) {
  var head = document.querySelector('head')
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  head.appendChild(script)
}



/**
 * The array contains the list of JS file URLs to be imported
 * The files are also loaded using the forEach method of arrays
 */

let JSFileURLs = [
  "bulk-alert", "console-log",
  "division", "factorials",
  "fibonacci", "linked-list",
  "number-collection", "object-to-array",
  "power", "solution-derivation", "sum-evaluation"
]

JSFileURLs.forEach(function(url) { loadScript("./js/" + url + ".js") })

