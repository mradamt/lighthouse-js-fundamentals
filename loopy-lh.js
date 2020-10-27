/* Given arguments
 * range = [a, b] 
 * multiples = [c, d]
 * words = ["word1", "word2"]
 * loopyLighthouse logs all numbers between a and b, but replacing multiples of c with "word1", 
 * multiples of d with "word2", and multiples of c and d with "word1word2" */

const loopyLighthouse = function (range, multiples, words) {  
  for (let n = range[0]; n <= range[1]; n++) {
    let out = ""
    for (let i = 0; i < 2; i++) {
      if (n % multiples[i] === 0) {
        out += words[i];
      }
    }
    console.log(out === "" ? n : out)
  }
}

loopyLighthouse([1, 10], [2, 5], ["Foo", "Bar"])
