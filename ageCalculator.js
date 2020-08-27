function ageCalculator (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  out = name + " is " + age + " years old.";
  return out;
}


console.log(ageCalculator("Suzie", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

