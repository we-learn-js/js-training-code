function simpleJoin(stringArray, i, accumulator) {
  console.log(stringArray, i, accumulator);
  if (i === stringArray.length) {
    return accumulator;
  } else {
    return simpleJoin(stringArray, i + 1, accumulator + stringArray[i]);
  }
}

var word = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"];

console.log(simpleJoin(word, 0, ""));
