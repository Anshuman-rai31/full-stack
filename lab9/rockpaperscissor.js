function play(x) {

    let a = Math.random();
    let msg = document.getElementById("message");

    if (a < 0.33) {
        a = "rock";
    }
    else if (a > 0.33 && a < 0.66) {
        a = "paper";
    }
    else {
        a = "scissor";
    }

    if (x == a) {
        msg.innerHTML += "Tie";
    }
    else if (x == "rock" && a == "scissor") {
        msg.innerHTML = "Win";
    }
    else if (x == "rock" && a == "paper") {
        msg.innerHTML = "Lose";
    }
    else if (x == "paper" && a == "rock") {
        msg.innerHTML = "Win";
    }
    else if (x == "paper" && a == "scissor") {
        msg.innerHTML = "Lose";
    }
    else if (x == "scissor" && a == "paper") {
        msg.innerHTML = "Win";
    }
    else if (x == "scissor" && a == "rock") {
        msg.innerHTML = "Lose";
    }
}