// secretGist name: lhl-katas--repeating-numbers.js
/* repeatNumbers takes in an array made up of one or more two-item [x, y] arrays 
 * and returns a comma-separated string of each x value repeated y number of times.  
 * The second item of each inner array (i.e. 'y') must be a number. */

const repeatNumbers = function(data) {
  const lenData = data.length;
  let toPrint = "";

  data.forEach(function (numArray, index) {
    const repeats = numArray[1];

    for (let i = 0; i < repeats; i++) {
      toPrint += numArray[0];
    };

    if (index < lenData - 1) {
      toPrint += ", ";
    };
  })
  return toPrint;
};





console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
