// secretGist name: lhl-katas--conditional-sums
// conditionalSum sums numbers in a given array according to a given 'odd' or 'even' condition

const conditionalSum = function(values, condition) {
  // Initialize 'sum' to 0: function returns 0 if 'values' array is empty
  let sum = 0;

  values.forEach(function (num) {
    if (condition == "even") {
      if (num % 2 === 0) {
        sum += num;
      }
    } else if (condition == "odd") {
      if (num % 2 !== 0) {
        sum += num;
      }
    }
  })

  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
