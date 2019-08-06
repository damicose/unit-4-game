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

function


//Click listener for each crystal button 
//Clicking crystal adds value to total

document.getElementById("crys1").addEventListener("click", function () {
    userTotal = userTotal + crysVal1;
});
document.getElementById("crys2").addEventListener("click", function () {
    userTotal = userTotal + crysVal2;
});
document.getElementById("crys3").addEventListener("click", function () {
    userTotal = userTotal + crysVal3;
});
document.getElementById("crys4").addEventListener("click", function () {
    userTotal = userTotal + crysVal4;
});

//Win condition: userTotal = goalTotal; Lose if userTotal > goalTotal
if (usertotal > goal) {
alert("You lose!")
}

else if (userTotal === goal) {
alert("You win!")
}
//Game resets and reassigns all values upon W/L