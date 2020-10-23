// secretGist name: lhl-katas--smart-parking
/* whereCanIPark takes in an array of arrays of upper or lowercase letters (parking spaces) for different vehicle types, 
 * and a vehicle type, and returns the index of the first match for vehicle type and available parking space. 
 * Vehicle types and spaces are:
    * Regular cars can only park in R spots.
    * Small cars can park in R or S spots.
    * Motorcycles can park in R, S, or M spots.
 * Return value is of the form [innerArray index, mainArray index], or false if no match is found */

const whereCanIPark = function (spots, vehicle) {
  // Create a blank array variable
  let type = [];

  // Fill in the 'type' array with letter codes corresponding to which spots that vehicle can occupy
  switch (vehicle) {
    case 'regular':
      type = ['R']
      break;
    case 'small':
      type = ['R','S']
      break;
    case 'motorcycle':
      type = ['R','S','M']
      break;
  }

  // For each column and row check if its spot matches one of the types that suit our vehicle. If so, return coordinates of that spot.
  for (let y in spots) {
    for (let x in spots[y]) {
      for (let i in type) {
        if (spots[y][x] == type[i]) {
          return [x, y];
        }
      }
    }
  }
  
  // If no spots are found that suit our vehicle type, return 'false'
  return false;

};


console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
