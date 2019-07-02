$(document).ready(function() {

    var randomNum = 0;
    var usersTotal = 0;
    var wins = 0;
    var losses = 0;

//This sets the variables for the wins, losses and the computer random number
// in the html code.

function setgameRandnum(){
  randomNum = Math.floor((Math.random()*60)+20);
};

function setCrystalvalues() {

  for(let i = 0; i < 4; i++){
  
  let crystalNum = Math.floor(Math.random()*12+1);
  //console.log(crystalNum);
  const crystal = $(".crystal").eq(i).attr("value", crystalNum);
  };
};
  
setgameRandnum();

  $(".wins").text("Wins: " +wins);
  $(".losses").text("Losses: " +losses);
  $(".randomNumber").text(randomNum);
  //$(".yourScore").attr("value", usersTotal);
  $(".yourScore").text(usersTotal);
  
 
//This sets a random number from 1 to 12 for each of the crystals,
//and outputs the number to the html crystal objects value attribute.

setCrystalvalues();
//This is the button click events for each crystal.  It outputs
//to the display and increments the users total score.

$(".crystal").on("click", function(){
  usersTotal = parseInt(usersTotal) + parseInt($(this).attr('value'));

console.log($(this).attr('value'));
console.log("yoursum: "+usersTotal);

$(".yourScore").text(usersTotal);


if(usersTotal > randomNum) {
  losses = losses +1;
  console.log("losses: " +losses);
  $(".losses").text("Losses: " + losses);
//call random numb genreator and update display

usersTotal = 0;
$(".yourScore").text(usersTotal);
//reset crystal values
setCrystalvalues();
setgameRandnum();
$(".randomNumber").text(randomNum);
}

else{
  if(usersTotal == randomNum){
    wins = wins +1;
    $(".wins").text("Wins: " +wins);
      usersTotal = 0;
      setCrystalvalues();
      setgameRandnum();
      $(".randomNumber").text(randomNum); 

  }};

});

});
