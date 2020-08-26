// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

function buildTriangle(rows) {
  var out = "";
  for (var i = 1; i <= rows; i++) {
    out = out + makeLine(i);
  }
  // console.log(out)
  return out;
}

// test your code by uncommenting the following line
console.log(buildTriangle(3));
// buildTriangle(5)