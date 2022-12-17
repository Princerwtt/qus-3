// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//You must implement a solution with a linear runtime complexity and use only constant extra space.

function findSingle(num, arr_size) {
  for (let i = 0; i < arr_size; i++) {
    let count = 0;

    for (let j = 0; j < arr_size; j++) {
      if (num[i] == num[j]) {
        count++;
      }
    }
    if (count == 1) {
      return num[i];
    }
  }

  return -1;
}

let num = [2, 3, 5, 4, 5, 3, 4];
let arr_size = 7;

console.log('Single Element is ' + findSingle(num, arr_size));
