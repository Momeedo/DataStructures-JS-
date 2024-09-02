function hasUniqueChars(string) {
  const arrayFromString = [...string];
  const setFromArray = new Set(arrayFromString);
  return arrayFromString.length === Array.from(setFromArray).length;
}

function hasUniqueChars2(string) {
  const charSet = new Set();

  for (const ch of string) {
    if (charSet.has(ch)) {
      return false;
    }
    charSet.add(ch);
  }

  return true;
}

// ---------------
// Unique Chars
// ---------------
console.log("Unique Chars:");
console.log("Input: 'abc'");
console.log("Output: ", hasUniqueChars("abc"));
console.log("---------------");

// ---------------
// Duplicate Chars
// ---------------
console.log("Duplicate Chars:");
console.log("Input: 'aabb'");
console.log("Output: ", hasUniqueChars("aabb"));
console.log("---------------");

// ---------------
// Single Char
// ---------------
console.log("Single Char:");
console.log("Input: 'a'");
console.log("Output: ", hasUniqueChars("a"));
console.log("---------------");

// ---------------
// Empty String
// ---------------
console.log("Empty String:");
console.log("Input: ''");
console.log("Output: ", hasUniqueChars(""));
console.log("---------------");

// ---------------
// Case Sensitivity
// ---------------
console.log("Case Sensitivity:");
console.log("Input: 'Aa'");
console.log("Output: ", hasUniqueChars("Aa"));
console.log("---------------");
