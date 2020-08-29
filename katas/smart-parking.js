// secretGist name: lhl-katas--smart-parking
/* whereCanIPark takes in an array of arrays of upper or lowercase letters (parking spaces) for different vehicle types, 
 * and a vehicle type, and returns the index of the first match for vehicle type and available parking space. 
 * Vehicle types and spaces are:
    * Regular cars can only park in R spots.
    * Small cars can park in R or S spots.
    * Motorcycles can park in R, S, or M spots.
 * Return value is of the form [innerArray index, mainArray index], or false if no match is found */

const whereCanIPark = function (spots, vehicle) {
  let x = "";
  let y = "";
  
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      if (vehicle.toLowerCase() == "regular" && spots[y][x] === "R") {
        return [x, y];
      } else if (vehicle.toLowerCase() == "small" && (spots[y][x] === "R" || spots[y][x] === "S")) {
        return [x, y];
      } else if (vehicle.toLowerCase() == "motorcycle" && (spots[y][x] === "R" || spots[y][x] === "S" || spots[y][x] === "M")) {
        return [x, y];
      } else {
        continue;
      }
    }
  }

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
