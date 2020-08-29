// secretGist name: lhl-katas--percent-encoded-string
/* urlEncode converts all whitespace ' ' chars in a given string to '%20', for use in urls. 
 * it ignores all leading/trailing whitespace. */

const urlEncode = function(text) {
  let textLen = text.length
  let encodedText = "";

  // First loop: remove all trailing whitespace chars by resetting 'textLen' to the final non-whitespace char
  for (let j = textLen; j >= 0; j--) {
    if (text[j-1] == " ") {
      continue;
    } else {
      textLen = j;
      break;
    }
  }

  /* Second loop: first condition ignores all leading whitespace chars, 
   * then either replace a whitespace char with '%20' or copy the 'text' char to the 'encodedText' variable */
  for (let i = 0; i < textLen; i++) {
    if (text[i] == " " && encodedText == "") {
      continue
    } else if (text[i] == " ") {
      encodedText += "%20";
    } else {
      encodedText += text[i];
    }
  }

  return encodedText;
};


console.log(urlEncode("  He ym   on  "));

console.log(urlEncode("   Lighthouse Labs   "));

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure         "));
