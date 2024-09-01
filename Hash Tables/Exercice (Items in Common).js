function itemInCommon(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) return true;
  }
  return false;
}

let array1 = [1, 3, 5];
let array2 = [2, 4, 5];

console.log(itemInCommon(array1, array2));
