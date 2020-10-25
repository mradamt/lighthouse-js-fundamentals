// secretGist name: lhl-katas--queen-threat-detector.js

const generateBoard = function (whiteQueen, blackQueen) {
  let board = []
  for (let x = 0; x < 8; x++) {
    let row = []
    for (let y = 0; y < 8; y++) {
      if (whiteQueen[0] == x && whiteQueen[1] == y || blackQueen[0] == x && blackQueen[1] == y) {
        row.push(1);
      } else {
        row.push(0)
      }
    }
    board.push(row)
  }
  return board;
}

/* The simplest method to determine queen threats is to use whiteQueen and blackQueen coordinates, 
 * not 'generatedBoard'. Here we back-calculate each queen's coordinates from the generated board
 * basically because it's fun to do at 9:30pm */
const queenThreat = function (generatedBoard) {
  let queens = [];
  let x = 0;
  let y = 0;
  for (row of generatedBoard) {
    y = 0;
    for (col of row) {
      if (col == 1) {
        queens.push([x, y])
      }
      y++;
    }
    x++;
  }
  
  let a = queens[0][0]
  let b = queens[0][1]
  let c = queens[1][0]
  let d = queens[1][1]
  // The four lines below could replace all lines above :)
  // let a = whiteQueen[0]
  // let b = whiteQueen[1]
  // let c = blackQueen[0]
  // let d = blackQueen[1]
  return (a == c || b == d || a - c == b - d || a - c == -b + d)
}



// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
let whiteQueen = [0, 3];
let blackQueen = [2, 3];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

// console.log(queenThreat())


