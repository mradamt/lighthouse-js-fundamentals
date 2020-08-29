// let arr = ["captain", "second", "pilot", "companion", "mercenary", "mechanic"];


// // arr.forEach(function(item, index) {
// //   console.log(item);
// //   arr[index].slice(0,1,"GOLD");
// //   // console.log(array[index][0]);
// // })

// arr[0] = "MLEM";
// console.log(arr[0]);

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function (element, index) {
  console.log(element.type + " donuts cost $" + element.cost + " each")
});


