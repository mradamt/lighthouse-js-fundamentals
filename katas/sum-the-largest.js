// secretGist name: lhl-katas--sum-the-largest
// sumLargestNumbers returns the sum of the two largest numbers in a given array

const sumLargestNumbers = function(data) {
  // Set two variables equal to the first two numbers in the array 
  // (Doing this instead of initializing to 0 or 'null' means the function deals with negative numbers correctly)
  let largest = data[1];
  let secondLargest = data[0];
  
  // Iterate through array: cascading the two largest numbers into the respective variables
  data.forEach(function (thisNum) {
    if (thisNum > largest) {
      secondLargest = largest;
      largest = thisNum;
    } else if (thisNum > secondLargest) {
      secondLargest = thisNum;
    }
  });

  // Return the sum of the two numbers
  return largest + secondLargest
};

// console.log(sumLargestNumbers([1, 10, 5, 5, 4, 12, 1]));
// console.log(sumLargestNumbers([1, 2, 3]));
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2, -1, ]));
// console.log(sumLargestNumbers([-10, -44, -1, -3, 5, -20]))
console.log(sumLargestNumbers([4, -2]))