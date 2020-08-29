// secretGist name: lhl-katas--instructors-names
// instructorWithLongestName takes in an array of {name, course} objects and returns the object with the longest 'name' value

const instructorWithLongestName = function(instructors) {
  // Define variables: x will track the index of the 'instructors' array that has the longest 'name' value (so far)
  let x;
  let maxLen = 0;

  instructors.forEach(function(element, index) {
    len = element.name.length;
    if (len > maxLen) {
      maxLen = len;
      x = index;
    };
  })

  return instructors[x];
};



console.log(instructorWithLongestName([
  {name: "Samuellllll", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
