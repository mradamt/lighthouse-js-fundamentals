// secretGist name: lhl-katas--vowels
// numberOfVowels counts the number of vowels in a given string

const numberOfVowels = function(data) {
  let count = 0;
  const dataLen = data.length;
  
  for (let i = 0; i < dataLen; i++) {
    if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
      count++
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("am i a coconut or am i not"));
