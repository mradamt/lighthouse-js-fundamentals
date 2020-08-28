

function smartGarbage (trashType, binsArray) {
  binsArray[trashType] += 1;
  return binsArray;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }))