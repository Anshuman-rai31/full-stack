let min = 1;
let max = 100;
let randomNumber = Math.floor(Math.random() * (max - min) + min);
console.log(randomNumber);

function checkGuess() {
    let num = document.getElementById("guess").value;
    let message = document.getElementById("message");
    if (num == randomNumber) {
        message.innerHTML = "Correct Guess";
    } else if (num > randomNumber) {
        message.innerHTML = "Incorrect Guess.Number is Smaller";
    } else {
        message.innerHTML = "Incorrect Guess.Number is Greater";
    }
}

