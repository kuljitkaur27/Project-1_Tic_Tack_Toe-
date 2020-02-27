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
var player1Sign, player2Sign;
var roundWin = false;
var sign1Arr = ["","","","","","","","",""] ,
    sign2Arr = ["","","","","","","","",""];
var turn = 0; // whose turn it is (even for player 1 , odd for player 2)

//*****************************************************************************
// Main Call on click on Tic Tac Toe..........
//*****************************************************************************

$('.container').on('click', 'button', function () {
//If any player wins the game stop the game
  if(roundWin == true){
    return;
  }
//if the mark for 2 players are same don't proceed
  if (player1Sign === player2Sign){
     $('p').html('2 Players cannot have the same sign .....');
     return;
  }
for(i=0;i<9;i++){
  if (arrBox[i].boxNo === this.id) // which box is clicked
  {
    var sign = (turn % 2 === 0 ?  player1Sign : player2Sign);
    arrBox[i].value = sign;

//Insert the mark(O/X) in array for each player
    if (sign === player1Sign) {
      sign1Arr[i] = sign;
    }
    else if (sign === player2Sign){
      sign2Arr[i] = sign;
    }
//Display mark(sign) on buttons on webpage
    this.append(sign);
    this.disabled = true;
    if (turn >= 4)
    {
// Check who is the winner .....
      checkWin();

// Check if the game is draw ....
      if (turn == 8 && roundWin === false) {
         $('p').html('Game Draw.....');
      }
    }
    turn = turn + 1;
    break;
  }
}
});

//*****************************************************************************
// Play again ..........
//*****************************************************************************
$('.play').on('click', 'button', function () {
roundWin = false;
sign1Arr = ["","","","","","","","",""] ,
sign2Arr = ["","","","","","","","",""];
turn = 0; // whose turn it is (even for player 1 , odd for player 2)
$('p').html("");
$('.box').html("");
$(".box").removeAttr('disabled');
});

//*****************************************************************************
// On selecting the option O or X on webpage by player..........
//*****************************************************************************

player1Sign = "0";
$( "select.mark" ).change(function () {
    player1Sign = $(this).children("option:selected").val();
  })
    .change();
  player2Sign = "X";
  $( "select.mark2").change(function () {
      player2Sign = $(this).children("option:selected").val();
    })
  .change();

//*****************************************************************************
// Zoom Heading Tic Tac Toe..........
//*****************************************************************************
  $("h1").click(function(){
    var div = $("div h1");
    div.animate({fontSize: '3em'}, "slow");
  });

//*****************************************************************************
// Function Definations..........
//*****************************************************************************
//This function will check whether the child array exist in winArr
//(winning combination array)
var checkWin = function()
{
// For Player 1
      checkWinEachPlayer(sign1Arr);
     if (roundWin === true){
       $('p').html('Player 1 wins the game');
      return;
      }

//For Player 2
     checkWinEachPlayer(sign2Arr);
     if (roundWin === true){
       $('p').html('Player 2 wins the game');
      return;
      }
}

// Check for each player one at a time
var checkWinEachPlayer = function(signArr)
{
    for (i=0;i<8;i++){
          var childArr = winArr[i];
          var x = signArr[childArr[0]];
          var y = signArr[childArr[1]];
          var z = signArr[childArr[2]];
          if (x === '' || y === '' || z === '') {
          continue;
          }
          if (x === y && y === z) {
              roundWin = true;
              break;
          }
      }
}
