function groupAnagrams(strings) {
  const anagramGroups = new Map();

  for (const string of strings) {
    const chars = Array.from(string);
    chars.sort();
    const canonical = chars.join("");

    if (anagramGroups.has(canonical)) {
      anagramGroups.get(canonical).push(string);
    } else {
      const group = [string];
      anagramGroups.set(canonical, group);
    }
  }

  return Array.from(anagramGroups.values());
}

// ---------------
// Lowercase Anagrams
// ---------------
console.log("Lowercase Anagrams:");
console.log("Input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']");
console.log(
  "Output: ",
  JSON.stringify(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
);
console.log("---------------");

// ---------------
// Mixed Case Anagrams
// ---------------
console.log("Mixed Case Anagrams:");
console.log("Input: ['Eat', 'Tea', 'Tan', 'Ate', 'Nat', 'Bat']");
console.log(
  "Output: ",
  JSON.stringify(groupAnagrams(["Eat", "Tea", "Tan", "Ate", "Nat", "Bat"]))
);
console.log("---------------");

// ---------------
// No Anagrams
// ---------------
console.log("No Anagrams:");
console.log("Input: ['hello', 'world', 'test']");
console.log(
  "Output: ",
  JSON.stringify(groupAnagrams(["hello", "world", "test"]))
);
console.log("---------------");

// ---------------
// Empty Strings
// ---------------
console.log("Empty Strings:");
console.log("Input: ['', '', '']");
console.log("Output: ", JSON.stringify(groupAnagrams(["", "", ""])));
console.log("---------------");

// ---------------
// Single Characters
// ---------------
console.log("Single Characters:");
console.log("Input: ['a', 'b', 'a']");
console.log("Output: ", JSON.stringify(groupAnagrams(["a", "b", "a"])));
console.log("---------------");
