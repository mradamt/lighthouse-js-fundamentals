// secretGist name: lhl-katas--change-calculator.js
// change-calculator calculates change in currency denominations for a given total price and cash payment

const calculateChange = function(total, cash) {
  // Create array of objects of currency denomination names and values
  const currency = [
    {name: 'twentyDollar', value: 2000},
    {name: 'tenDollar', value: 1000},
    {name: 'fiveDollar', value: 500},
    {name: 'twoDollar', value: 200},
    {name: 'oneDollar', value: 100},
    {name: 'quarter', value: 25},
    {name: 'dime', value: 10},
    {name: 'nickel', value: 5},
    {name: 'penny', value: 1},
  ]

  // Create an object to print out results
  const result = {}
  // Define the amount of change still remaining to be dealt with
  let remaining = cash - total;

  /* Loop through each currency denomination. If the denomination value is small enough to be relevant,
   * find the largest whole integer that divides into 'remaining', add this to the result printout and 
   * recalculate 'remaining' */
  for (denomination of currency) {
    if (remaining > denomination.value) {
      result[denomination.name] = Math.floor(remaining / denomination.value);
      remaining = remaining % denomination.value;
    }
  }

  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

