// secretGist name: lhl-katas--percent-encoded-string
/* urlEncode converts all whitespace ' ' chars in a given string to '%20', for use in urls. 
 * it trims all leading/trailing whitespace. */

const urlEncode = function(text) {
  // Trim leading/trailing whitespace (using .trim())
  let trimText = text.trim();
  let textLen = trimText.length
  let encodedText = "";

  /* Loop through the trimmed text char by char, if the character is whitespace then
   * append '%20' to the encodedText string, otherwise append the character as-is. */
  for (let i = 0; i < textLen; i++) {
    if (trimText[i] === " ") {
      encodedText += "%20";
    } else {
      encodedText += trimText[i];
    }
  }

  return encodedText;
};


console.log(urlEncode("  He ym   on  "));

console.log(urlEncode("   Lighthouse Labs   "));

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure         "));
