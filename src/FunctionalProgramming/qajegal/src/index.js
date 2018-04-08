console.clear();

var times = 30;
var traversedElements = 0;

function traverseRecursion(current, depth) {
  var children = current.childNodes;
  for (var i = 0, len = children.length; i < len; i++) {
    traversedElements++;
    traverseRecursion(children[i], depth + 1);
  }
}

function traverseLoop(current) {
  var stack = [current];
  var stackIdx = 0;
  var children, i, len;

  while ((current = stack[stackIdx++])) {
    children = current.childNodes;
    for (i = 0, len = children.length; i < len; i++) {
      traversedElements++;
      stack.push(children[i]);
    }
  }
}

// Open browser's console
// Change funcName to execute one of the functions

// "traverseLoop" || "traverseRecursion"
var funcName = "traverseRecursion";

for (var i = 0; i < times; i++) {
  traversedElements = 0;
  console.time(funcName);
  window[funcName](document.getElementById("parent-element"), 0);
  console.timeEnd(funcName);
  console.log(traversedElements);
}
