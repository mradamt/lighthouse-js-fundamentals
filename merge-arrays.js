/* 'merge' takes in two sorted number arrays and outputs a single sorted array.
 * It compares the first (left-most) number in each of the two starting arrays, appends (with .push()) 
 * the smaller of the two values to a new merged array, then removes (with .shift()) the number
 * entirely from its original array. 
 * If one array is empty (as happens eventually), the other array's left-most value is appended
 * and that array is shrunk by one item.
 * This continues until both arrays are empty (the while() condition turns false), returning the new merged array.
 * 
 * A 'break' statement is included just to take up the final 'else' condition, and if needed, exit from infinite loops.
 */

const merge = function (a, b) {
  const merged = [];

  while (a.length > 0 || b.length > 0) {

    if (a[0] < b[0] || b.length === 0) {
      merged.push(a[0]);
      a.shift();
    } else if (a[0] >= b[0] || a.length === 0) {
      merged.push(b[0]);
      b.shift()
    } else {
      break;
    }
  }

  return merged;
}


// console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
// console.log(merge([ 4 ], [ 2, 5, 8 ]));
// console.log(merge([ 1, 2, 6 ], []));


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);


  // for (let i = 0, j = 0; i < lenA + 1, j < lenB + 1; ) {
  //   console.log("merged is " + merged);
  //   if (count > 7) {break;};

  //   if (a[i] <= b[j] || j === lenB) {
  //     merged.push(a[i]);
  //     i++;
  //   } else if (a[i] >= b[j] || i === lenA){
  //     merged.push(b[j]);
  //     j++;
  //   } else {
  //     console.log("break?");
  //     break;
  //   }
  //   count++;
  // } 