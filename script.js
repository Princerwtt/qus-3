function findSingle(num, ar_size) {
  // Iterate over every element
  for (let i = 0; i < ar_size; i++) {
    // Initialize count to 0
    let count = 0;

    for (let j = 0; j < ar_size; j++) {
      // Count the frequency
      // of the element
      if (num[i] == num[j]) {
        count++;
      }
    }

    // if the frequency of the
    // element is one
    if (count == 1) {
      return num[i];
    }
  }

  // if no element exist at most once
  return -1;
}

let ar = [2, 3, 5, 4, 5, 3, 4];
let n = 7;

// Function call
console.log('Element occurring once is ' + findSingle(ar, n));
