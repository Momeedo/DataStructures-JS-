function mergeSort(array) {
  if (array.length === 1) return array;

  let midIndex = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, midIndex));
  let right = mergeSort(array.slice(midIndex));

  return merge(left, right);
}

function merge(array1, array2) {
  let combined = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      combined.push(array1[i]);
      i++;
    } else {
      combined.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    combined.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    combined.push(array2[j]);
    j++;
  }
  return combined;
}

let myArray1 = [1, 3, 7, 8];
let myArray2 = [2, 4, 5, 6];
let merged = merge(myArray1, myArray2);
console.log(merged);

let myArray = [1, 6, 10, 3, 7, 8];
console.log(mergeSort(myArray));