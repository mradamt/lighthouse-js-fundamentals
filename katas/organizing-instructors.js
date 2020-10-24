// secretGist name: lhl-katas--organizing-instructors.js
/* organizeInstructors combines an array of objects with a key for each name and the course they instruct
 * to a single object with a key for each course and a list of instructor names */

const organizeInstructors = function(instructors) {
  
  const output = {}

  for (instructor of instructors) {
    // If the course 'key' already exists, push the additional instructor to the 'value' array
    if (output[instructor.course]) {
      output[instructor.course].push(instructor.name)
    } else {
      output[instructor.course] = [instructor.name]
    }
  }
  
  return output;
};





console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
