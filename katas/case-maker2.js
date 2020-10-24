// secretGist name: lhl-katas--case-maker2.js

const makeCase = function (input, caseType) {
  // Create an empty string to fill with modified output characters
  let output = ''

  // Check if caseType is an array
  if (Array.isArray(caseType)) {
    // Filter the array into 3 tiers to process in sequence
    const first = caseType.filter(type => type == "camel" || type == "pascal" || type == "snake" || type == "kebab" || type == "title")
    const second = caseType.filter(type => type == "vowel" || type == "consonant")
    const third = caseType.filter(type => type == "upper" || type == "lower")

    // Create a 'process' array of the first element of each tier (caseTypes from the same tiers override each other anyway)
    const process = [first[0], second[0], third[0]]

    // For these recursive calls, first set 'output' equal to 'input'
    output = input;
    // For each case type in 'process', recursively call this function to produce a new 'output' that serves an input to the next tier
    // *Check first that the 'type' being processed is non-empty*
    process.forEach(type => {
      if (type) {
        output = makeCase(output, type)
      }
    });
  } 

  // Call functions which replace space chars (" ") and modify case according to caseType
  switch (caseType) {
    case 'camel':
      output = replaceSpaceWith(input, "", false, true)
      break;
    case 'pascal':
      output = replaceSpaceWith(input, "", true, true)
      break;
    case 'snake':
      output = replaceSpaceWith(input, "_", false, false)
      break;
    case 'kebab':
      output = replaceSpaceWith(input, "-", false, false)
      break;
    case 'title':
      output = replaceSpaceWith(input, " ", true, false)
      break;
    case 'vowel':
      output = vowelsConsonants(input, true, false)
      break;
    case 'consonant':
      output = vowelsConsonants(input, false, true)
      break;
    case 'upper':
      output = input.toUpperCase();
      break;
    case 'lower':
      output = input.toLowerCase();
      break;
  }

  return output;
}

// replaceSpaceWith replaces space (" ") chars in a string with 'newChar' and modifies case either to TitleCase or camelCase
const replaceSpaceWith = function (string, newChar, TitleCase, camelCase) {
  let len = string.length;
  let output = ''

  for (let i = 0; i < len; i++) {
    if (i === 0 && TitleCase) {
      output += string[i].toUpperCase();
    } else if (string[i] == " ") {
      output += newChar;
      if (TitleCase || camelCase) {
        i++;
        output += string[i].toUpperCase();
      }
    } else {
      output += string[i];
    }
  }

  return output;
}

// vowelsConsonants changes either vowels or consonants in a string to upper case
// arguments are 'string' then a boolean each for vowels and consonants
const vowelsConsonants = function (string, vowels, consonants) {
  let len = string.length;
  let output = ''

  for (let i = 0; i < len; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
      if (vowels) {
        output += string[i].toUpperCase();
      } else {
        output += string[i];
      }
    } else {
      if (consonants) {
        output += string[i].toUpperCase();
      } else {
        output += string[i];
      }
    }
  }
  return output
}



console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["lower", "kebab"]));
