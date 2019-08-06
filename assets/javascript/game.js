let goalTotal = null
let userTotal = 0
let wins = 0
let losses = 0

//Min + (int)(Math.random() * ((Max - Min) + 1)) FYI


// Assign random value [1-12] to each crystal button (pardon mathematical redundancy)
let crysVal1 = 1 + Math.floor(Math.random() * ((12 - 1) + 1))
let crysVal2 = 1 + Math.floor(Math.random() * ((12 - 1) + 1))
let crysVal3 = 1 + Math.floor(Math.random() * ((12 - 1) + 1))
let crysVal4 = 1 + Math.floor(Math.random() * ((12 - 1) + 1))
//Assign random value to goal # [19-120]
let goal = 19 + Math.floor(Math.random() * ((120 - 19) + 1))

function updateGoalTotal() {
    document.getElementById("goalTotal").innerHTML = "Total to win: " + goal
}

const reset = function () {
    crysVal1 = 1 + Math.floor(Math.random() * ((12 - 1) + 1))
    crysVal2 = 1 + Math.floor(Math.random() * ((12 - 1) + 1))
    crysVal3 = 1 + Math.floor(Math.random() * ((12 - 1) + 1))
    crysVal4 = 1 + Math.floor(Math.random() * ((12 - 1) + 1))
    goal = 19 + Math.floor(Math.random() * ((120 - 19) + 1))
    updateGoalTotal()
}

function updateCurrentScore() {
    document.getElementById("userTotal").innerHTML = "Current Score: " + userTotal
}

reset();

//Click listener for each crystal button 
//Clicking crystal adds value to total

document.getElementById("crys1").addEventListener("click", function () {
    userTotal = userTotal + crysVal1;
    updateCurrentScore();
});
document.getElementById("crys2").addEventListener("click", function () {
    userTotal = userTotal + crysVal2;
    updateCurrentScore();
});
document.getElementById("crys3").addEventListener("click", function () {
    userTotal = userTotal + crysVal3;
    updateCurrentScore();
});
document.getElementById("crys4").addEventListener("click", function () {
    userTotal = userTotal + crysVal4;
    updateCurrentScore();
});

//Win condition: userTotal = goalTotal; Lose if userTotal > goalTotal
if (userTotal > goalTotal) {
    losses++;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    alert("You lose!");
    reset();
    updateGoalTotal();
}

else if (userTotal == goalTotal) {
    wins++;
    alert("You win!");
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    reset();
    updateGoalTotal();
}
//Game resets and reassigns all values upon W/L