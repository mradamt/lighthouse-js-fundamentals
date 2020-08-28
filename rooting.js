const judgeVegetable = function (vegetables, metric) {
  let winner = 0;
  let highScore = 0;
  vegetables.forEach(function (element, index) {
    if (element[metric] > highScore) {
      highScore = element[metric];
      winner = index;
    }
  });
  return vegetables[winner].submitter;
}


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'plumpness';

console.log(judgeVegetable(vegetables, metric))
