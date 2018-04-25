debugger;
var dice = {
  roll:
   function (){var dieFace = Math.floor(Math.random() * 6 ) + 1;
    return dieFace;
  }
}
function displayNumber(number) {
   var Dice = document.getElementsByClassName("Dice");
   placeholder.innerHTML = number;
}
var ClickToRoll = document.getElementById('button');
ClickToRoll.onclick = function() {
  var rollResult = dice.roll();
  displayNumber(rollResult);
}
