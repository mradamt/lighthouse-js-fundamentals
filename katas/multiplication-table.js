// secretGist name: lhl-katas--multiplication-table.js
/* multiplicationTable prints an nxn multiplication table for numbers 1 to
 * a given maxValue 'n'. For example, if n = 5 the table prints the first five 
 * multiples of 1, then 2 etc. until the 5th row: 5 10 15 20 25 is printed */

const multiplicationTable = function(maxValue) {
  // Define an empty string to fill with output
  let table = ''

  // Outer loop: each row in the mulitplication table
  for (let i = 1; i <= maxValue; i++) {
    let row = '';
    // Inner loop: each number of a given row
    for (let j = 1; j <= maxValue; j++) {
      row += i * j + ' ';
    }
    table += row + '\n';
    // i === maxValue ? true : table += '\n'; // Don't add a newline on last row
  }
  return table
};




console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
