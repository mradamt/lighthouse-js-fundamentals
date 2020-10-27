/* Given arguments
 * range = [a, b] 
 * multiples = [c, d]
 * words = ["word1", "word2"]
 * loopyLighthouse logs all numbers between a and b, but replacing multiples of c with "word1", 
 * multiples of d with "word2", and multiples of c and d with "word1word2" */

const loopyLighthouse = function (range, multiples, words) {  
  for (let n = range[0]; n <= range[1]; n++) {
    if (n % multiples[0] === 0 && n % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (n % multiples[0] === 0) {
      console.log(words[0]);
    } else if (n % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(n);
    }
  }
}

loopyLighthouse([15, 30], [2, 5], ["Batty", "Beacon"])
