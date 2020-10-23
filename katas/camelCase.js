// secretGist name: lhl-katas--camelCase.js
// camelCase takes in a string and converts it to camelCase 

 const camelCase = function(input) {
  // First trim the input of leading/trailing whitespace
  input = input.trim();
  let text = '';
  
  /* Loop through 'input' char by char, adding each char one by one to the 'text' variable.
   * If a character is whitespace, increment the iterator 'i' by one (to the next character)
   * and add it's uppercase equivalent. */
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      i++;
      text += input[i].toUpperCase();
    } else {
      text += input[i]
    }
  }
  return text;
};

console.log(camelCase("   this is a string ding  "));
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
