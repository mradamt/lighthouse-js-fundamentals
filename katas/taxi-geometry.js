// secretGist name: lhl-katas--talking-calendar.js
// Tracks a taxi's coordinates after a series of 90deg turns

const blocksAway = function(directions) {
  // Create array for tracking current taxi coordinates
  let taxiLocation = [0, 0];

  /* Direction arrays = [East, South, West, North]. 
   * We can use dir[d] where right turns mean d++, left mean d--, 
   * as long as 0 < d < 3  */
  let dir = [[1, 0],[0, -1],[-1, 0],[0, 1]];
  
  /* Set initial direction: 
   * If directions[0] is 'right' => now East, so d *was* North = 3; 
   * If directions[0] is 'left' => now North so d *was* East = 0 */
  let d = 0;
  if (directions[0] == "right") {
    d = 3;
  } 

  // Loop through 'directions' array, updating taxiLocation coordinates with dir[d] * move distance
  for (let i = 0; i < directions.length; i += 2) {
    if (directions[i] == "right") {
      d++
    } else if (directions[i] == "left") {
      d--
    }
    
    // Ensure 0 < d < 3. We could use modulo but infinite left/right turns could mean d becomes huge
    if (d < 0) {
      d += 4;
    } else if (d > 3) {
      d -= 4;
    }

    taxiLocation[0] += directions[i + 1] * dir[d][0]
    taxiLocation[1] += directions[i + 1] * dir[d][1]
  }

  return {"east": taxiLocation[0], "north": taxiLocation[1]}
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
