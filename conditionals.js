const temp = 15;
const raining = false;
const cold = true;

if (temp < 0) {
  console.log("Temp is freezing");
} else if (temp < 16) {
  console.log("Temp is mild, take a scarf");
} else {
  console.log("It's warmer than 16 deg");
}

if (temp < -40 || temp > 40) {
  console.log("Temp is extreme");
}

if (raining) {
  console.log("Don't forget your waterproof hair");
} else {
  console.log("No rain");
}

if (cold) {
  console.log("Is cold");
} else {
  console.log("Sun's out guns out");
}

console.log("Now go outside");