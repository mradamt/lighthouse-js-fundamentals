
const loopyLighthouse = function (range, multiples, words) {  
  // Parse out variables from function arguments
  const start = range[0];
  const end = range[1];

  const multi1 = multiples[0];
  const multi2 = multiples[1];

  const replace1 = words[0];
  const replace2 = words[1];
  const replace3 = replace1 + replace2;

  // Execute loops using variable names, to save fresh calculation every loop
  for (let n = start; n <= end; n++) {
    if (n % multi1 === 0 && n % multi2 === 0) {
      console.log(replace3);
    } else if (n % multi1 === 0) {
      console.log(replace1);
    } else if (n % multi2 === 0) {
      console.log(replace2);
    } else {
      console.log(n);
    }
  }
}

loopyLighthouse([15, 30], [2, 5], ["Batty", "Beacon"])
