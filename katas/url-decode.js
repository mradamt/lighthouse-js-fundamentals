// secretGist name: lhl-katas--url-decode.js
/* Decodes a URL string into JSON based on 3 rules:
   - %20 represents a space character.
   - Key-value pairs are represented using an = character: key=value
   - Multiple key-value pairs are separated using a & character: key1=value1&key2=value2
*/

const urlDecode = function(text) {
  let len = text.length;
  const output = {}
  
  // Create an object to store the key value pairs as they're processed
  let keyValue = {"k": '', "v": ''}
  // Create a switch to indicate which of key or value is currenly being added to
  let which = "k"

  for (let i = 0; i <= len; i++) {
    // If '&' or end of string: add key, value pair to output and reset them, set switch back to 'key'
    if (text[i] === "&" || i == len) {
      output[keyValue.k] = keyValue.v
      keyValue.k = ''
      keyValue.v = ''
      which = "k"
    } else if (text[i] === "=") {  // If '=' switch from recording key to recording value
      which = "v"
    } else if (text[i] === "%") {  // If %20 replace with space and add next letter to key or value
      i += 3;
      keyValue[which] += " " + text[i];
    } else {
      keyValue[which] += text[i];
    }
  }
  
return output;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
