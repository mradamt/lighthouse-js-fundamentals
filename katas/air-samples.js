// secretGist name: lhl-katas--air-samples.js
/* checkAir takes in an array containing 'clean' or 'dirty' air samples, and a 'threshold' value,
 * and calculates if the ratio of dirty/total exceeds that threshold */

const checkAir = function (samples, threshold) {
  const sampleCount = samples.length;
  let dirtyCount = 0;

  samples.forEach(function (sample) {
    if (sample == "dirty") {
      dirtyCount++;
    }
  })
  
  if (dirtyCount / sampleCount > threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
};



console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
