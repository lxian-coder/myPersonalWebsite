
var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
// 控制 用户每一轮游戏的点击次数
var clickTime = 0;

$("body").keydown(function () { 
    if(level===0){
nextSequence();
    }

});

$(".btn").on("click",function(event){
  
        clickTime++;   
         var userClickedColor = event.target.id;
        playSound(userClickedColor);
        animatePress(userClickedColor);
        // store user's color in array
        userClickedPattern.push(userClickedColor);
            
        checkAnswer();
        

});
function checkAnswer() {
    
    if(userClickedPattern[clickTime-1] !== gamePattern[clickTime-1]){
   
        playSound("wrong");
        $("body").css("background-color","red");
        setTimeout(function(){$("body").css("background-color","#011F3F");},100);
        $("#level-title").text("Game over, Press Any Ket to Restart");
        level = 0;
        clickTime = 0;
        gamePattern = [];
        userClickedPattern = [];
    
    }else {
        if(clickTime === level){
           
            clickTime = 0;
            userClickedPattern = [];
            nextSequence();
        }
    };
}

function nextSequence(){
    level++;

    console.log("cccccccc");
   $("#level-title").text("Level" + " "+level);

// get random number between 0 - 3
var randomNumber = Math.floor(Math.random() * 4);

// using random number to select random color from array
var randomChosenColour =  buttonColours[randomNumber];
// add new randomChosenColour to the end of gamePattern array.
gamePattern.push(randomChosenColour);


//Use jQuery to select the button with the same id as the randomChosenColour
//animate a flash to the button selected
$("#"+randomChosenColour).fadeOut(100).fadeIn(100);
console.log("gamePattern:"+gamePattern);
// play sound for the button color selected
// be careful the sound can not play automatically, must keydown, click to trigger.
// var aa = new Audio("sounds/"+ randomChosenColour+".mp3");
// aa.play();
playSound(randomChosenColour);
}

    


function animatePress(currentColor){

    $("#"+currentColor).addClass("pressed");

   setTimeout(function(){$("#"+currentColor).removeClass("pressed");},100);
    
}


function playSound(name){
    var aa = new Audio("simonSounds/"+ name + ".mp3");
    aa.play();
}



