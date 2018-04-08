console.clear();

var times = 30;
var traversedElements = 0;

function traverseRecursion(current, depth) {
  var children = current.childNodes;
  for (var i = 0, len = children.length; i < len; i++) {
    traversedElements++;
    if (traversedElements === 1640) {
      next();
    }
    setTimeout(
      (function(current, depth) {
        traverseRecursion(current, depth);
      })(children[i], depth + 1),
      0
    );
  }
}

// Open browser's console

function next() {
  if (--times > 0) {
    console.timeEnd("asynchronous");
    console.time("asynchronous");
    traversedElements = 0;
    traverseRecursion(document.getElementById("parent-element"), 0);
  }
}

next();
