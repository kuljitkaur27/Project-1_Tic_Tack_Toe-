
var arrBox = [
    { boxNo : "box0", value : ' ', state : 'notClick'},
    { boxNo : "box1", value : ' ', state : 'notClick'},
    { boxNo : "box2", value : ' ', state : 'notClick'},
    { boxNo : "box3", value : ' ', state : 'notClick'},
    { boxNo : "box4", value : ' ', state : 'notClick'},
    { boxNo : "box5", value : ' ', state : 'notClick'},
    { boxNo : "box6", value : ' ', state : 'notClick'},
    { boxNo : "box7", value : ' ', state : 'notClick'},
    { boxNo : "box8", value : ' ', state : 'notClick'},
];

winArr = [
  [0,3,6],[0,4,8],[0,1,2],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];

const winCheck = function () {
  for (i=0;i<9;i++){

  }
}

var turn = 0; // turn all even turns are for player 1 "O" and vise versa
$('.container').on('click', 'button', function () {
for(i=0;i<9;i++){
if (arrBox[i].boxNo === this.id)
{ var sign = (turn % 2 === 0 ?  "O" : "X");
  arrBox[i].value = sign;
  arrBox[i].state = "click";
  this.append(sign);
  this.disabled = true;
  turn = turn + 1;
}
winCheck();
}
});
