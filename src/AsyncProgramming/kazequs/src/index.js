"// noprotect";
console.clear();

function times(count, func, callback) {
  if (!count) {
    callback();
  } else {
    func(count);
    setTimeout(function posponedTimes() {
      times(--count, func, callback);
    }, 0);
  }
}

function task(num) {
  console.time("task");
  Math.pow(5 * 2, 2);
  console.timeEnd("task");
}

let internalId = setInterval(function logClick() {
  console.log("click!");
}, 10);

setTimeout(function() {
  console.time("times");
  times(100, task, function() {
    console.timeEnd("times");
    clearInterval(internalId);
  });
}, 50);
