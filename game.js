var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
}

var randomChosenColour = buttonColours[nextSequence(0, 4)];
gamePattern.push(randomChosenColour);