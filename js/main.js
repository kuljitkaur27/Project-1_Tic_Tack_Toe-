//*****************************************************************************
// Global Declarations..........
//*****************************************************************************
var arrBox = [
    { boxNo : "box0", value : ' '},
    { boxNo : "box1", value : ' '},
    { boxNo : "box2", value : ' '},
    { boxNo : "box3", value : ' '},
    { boxNo : "box4", value : ' '},
    { boxNo : "box5", value : ' '},
    { boxNo : "box6", value : ' '},
    { boxNo : "box7", value : ' '},
    { boxNo : "box8", value : ' '},
];

var winArr = [
  [0,3,6],[0,4,8],[0,1,2],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];
var roundWin = false;
var signOArr = [] , signXArr = [];
var turn = 0; // turn means all even turns are for player 1 "O" and vise versa

//*****************************************************************************
// Main Call on click on Tic Tac Toe..........
//*****************************************************************************
// On click of any button on Tic Tac Toe
$('.container').on('click', 'button', function () {
  if(roundWin == true){
    return;
  }
for(i=0;i<9;i++){
  if (arrBox[i].boxNo === this.id)
  {
    var sign = (turn % 2 === 0 ?  "O" : "X");
    arrBox[i].value = sign;
    arrBox[i].state = "click";
    if (sign === "O") {
      signOArr.push(i);
    }
    else if (sign === "X"){
      signXArr.push(i);
    }

    this.append(sign);
    this.disabled = true;
    if (turn >= 4) {
//1) Check who is the winner
      checkWin();
// 2) Check for Draw of game
      if (turn === 8 && roundWin === false) {
         $('p').html('Game Draw.....');
      }

    }
    turn = turn + 1;
    break;
  }
}
});

//*****************************************************************************
// Function Definations..........
//*****************************************************************************
//This function will check whether the child array exist in winArr (winning combination array)
 var checkWin = function(){
//sort array
   signOArr.sort();  //Sign "O"
   signXArr.sort();  //Sign "X"

   for (i=0;i<8;i++){
     var childArr = winArr[i];
     var j= 0;
// Compare 3 indices for sign "O"
     if (signOArr[j] === childArr[j] && signOArr[j+1] === childArr[j+1] && signOArr[j+2] === childArr[j+2])
     {
       $('p').html('Player 1 wins the game');
       roundWin = true;
       break;
     }
// Compare 3 indices for sign "O"
       else if (signXArr[j] === childArr[j] && signXArr[j+1] === childArr[j+1] && signXArr[j+2] === childArr[j+2])
       {
        $('p').html('Player 2 wins the game');
         roundWin = true;
         break;
       }
     }
   }
