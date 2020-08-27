const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']  

function finalPosition(steps) {
  let posn = [0, 0];
  for (const step of steps) {
    console.log(step);
    switch (step) {
      case 'north':
        posn[1]++;
        break;
      case 'south':
        posn[1]--;
        break;
      case 'east':
        posn[0]++;
        break;
      case 'west':
        posn[0]--;
        break;
      }    
  }
  return posn;
}

// finalPosition(moves);
console.log(finalPosition(moves));
