const chorus = "Let's dance";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus + " " + repeat);
  repeat++;
}

console.log("Until we don't want to dance any longer");