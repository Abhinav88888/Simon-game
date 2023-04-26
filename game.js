var gamePattern = [];
var userClickedpattern = [];
var buttonColours = ["red", "blue", "green", "yellow"]
var Level = 0;
var keypresses =false;
$(document).keypress(function() {
  if (!keypresses) {
    $("h1").text("Level " + Level);
    keypresses++;
      keypresses=true;

    nextSequence();


   }
});

function checkAnswer() {
    var nooflength=0;
  for (var i = 0; i <userClickedpattern.length; i++) {
    if (userClickedpattern[i] != gamePattern[i]) {

     $("h1").text("Game Over, Press Any Key To Restart");
      var audio = new Audio("sounds/wrong.mp3");
      audio.play();
        $("body").addClass("gameover");
      setTimeout(function() {
        $("body").removeClass("gameover");
      }, 200);
      gameover();

    }
    else{
      nooflength++;
    }

  }
if(nooflength===gamePattern.length){
setTimeout(function(){
  nextSequence();
},1000);
}


}



function nextSequence() {
  userClickedpattern = [];
  var randomNumber = Math.random();
  randomNumber = Math.round(3 * randomNumber);
  var randomChosencolour = buttonColours[randomNumber];
  gamePattern.push(randomChosencolour);
  $("#" + randomChosencolour).fadeIn(100).fadeOut(100).fadeIn(100);

  Level += 1;
  $("h1").text("Level " + Level);

  playsound(randomChosencolour);
}


function playsound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickedpattern.push(userChosenColor);
  playsound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer();
});

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


function gameover(){
  Level=0;
  gamePattern=[];
  keypresses=false;

}
