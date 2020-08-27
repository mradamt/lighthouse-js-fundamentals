function range (start, end, step) {
  const arr = [];
  if (step < 0) {
    return [];
  }
  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }
  return arr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));