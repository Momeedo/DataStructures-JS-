function itemInCommon(array1, array2) {
    const myMap = new Map();
    
    for (let i of array1) {
        myMap.set(i, true);
    }
    
    for (let j of array2) {
        if (myMap.has(j)) return true;
    }
    
    return false;
}

// ---------------
// One Common Item
// ---------------
console.log("One Common Item:");
console.log("Input: [1, 3, 5], [2, 4, 5]");
console.log("Output: ", itemInCommon([1, 3, 5], [2, 4, 5]));
console.log("---------------");

// ---------------
// No Common Items
// ---------------
console.log("No Common Items:");
console.log("Input: [1, 3, 5], [2, 4, 6]");
console.log("Output: ", itemInCommon([1, 3, 5], [2, 4, 6]));
console.log("---------------");

// ---------------
// Multiple Common Items
// ---------------
console.log("Multiple Common Items:");
console.log("Input: [1, 2, 3], [2, 3, 4]");
console.log("Output: ", itemInCommon([1, 2, 3], [2, 3, 4]));
console.log("---------------");

// ---------------
// Empty Arrays
// ---------------
console.log("Empty Arrays:");
console.log("Input: [], []");
console.log("Output: ", itemInCommon([], []));
console.log("---------------");

// ---------------
// One Empty Array
// ---------------
console.log("One Empty Array:");
console.log("Input: [1, 2, 3], []");
console.log("Output: ", itemInCommon([1, 2, 3], []));
console.log("---------------");
