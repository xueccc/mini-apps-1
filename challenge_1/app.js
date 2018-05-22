var square = document.getElementsByClassName('square');
var placementCount = 0;
var playerXTurn = true;
var matrix ={board: []};
var winner;

var placeX = function(){
  event.preventDefault();
  var cube = this;
  toggleSquare(cube);
  setBoard();
  checkRow();
  if (winner === 'X' || winner === 'O'){
    console.log("==========>", winner);
  }
}

var setBoard = function(){ 
  var p = Array.prototype.slice.call(square);
  matrix.board = [[p[0].innerHTML,p[1].innerHTML, p[2].innerHTML],
                  [p[3].innerHTML, p[4].innerHTML, p[5].innerHTML],
                  [p[6].innerHTML, p[7].innerHTML, p[8].innerHTML]];
  // console.log(matrix.board);
}

var checkRow = function(){
  
  for (var i = 0; i< matrix.board; i++){
    var r = matrix.board[i];
    console.log(r);
    console.log(r[0] !== "" && r[0] === r[1] && r[0]===r[2]);
    if (r[1] !== "" && r[0] === r[1] && r[0]===r[2]){
      winner = r[0];
      console.log(winner);
    }
  }
}

var toggleSquare = function(box){
  if (box.innerHTML !== "X" && box.innerHTML !== "O"){
    placementCount++;
    if(playerXTurn){
      box.innerHTML="X";
      playerXTurn = false;
    } else {
      box.innerHTML="O";
      playerXTurn = true;
    }
  }
}


for (var i =0; i< square.length; i++){
  square[i].addEventListener('click', placeX);
}