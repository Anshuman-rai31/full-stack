let score = 0;
let currentMole = -1;
let gameTime = 30;
let moleInterval;
let gameInterval;

function start() {
    score = 0;
    gameTime = 30;
    currentMole = -1;

    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("timer").innerHTML = "Time Left: " + gameTime + "s";
    document.getElementById("message").innerHTML = "Game Started! Whack the mole!";

    // Stop any previous timers if running
    clearInterval(moleInterval);
    clearInterval(gameInterval);

    // Reset all hole buttons
    for (let i = 0; i < 9; i++) {
        document.getElementById("hole" + i).innerHTML = "Hole " + i;
    }

    // Change mole location every 1 second
    moleInterval = setInterval(showMole, 1000);

    // Run game countdown every 1 second
    gameInterval = setInterval(countDown, 1000);
}

function showMole() {
    // Reset previous hole text back to normal
    if (currentMole !== -1) {
        document.getElementById("hole" + currentMole).innerHTML = "Hole " + currentMole;
    }

    // Pick a random hole number from 0 to 8
    currentMole = Math.floor(Math.random() * 9);

    // Show the mole on the selected hole
    document.getElementById("hole" + currentMole).innerHTML = "🐹 Mole!";
}

function whack(holeIndex) {
    let message = document.getElementById("message");

    // Don't allow click if game is not active
    if (gameTime <= 0) {
        message.innerHTML = "Click Start to play!";
        return;
    }

    // Check if the clicked hole has the mole
    if (holeIndex === currentMole) {
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
        message.innerHTML = "✅ Hit! Score: " + score;

        // Reset hole after hit so user cannot click multiple times
        document.getElementById("hole" + holeIndex).innerHTML = "Hole " + holeIndex;
        currentMole = -1;
    } else {
        message.innerHTML = "❌ Miss!";
    }
}

function countDown() {
    gameTime--;
    document.getElementById("timer").innerHTML = "Time Left: " + gameTime + "s";

    // When time runs out
    if (gameTime === 0) {
        clearInterval(moleInterval);
        clearInterval(gameInterval);

        // Reset mole hole
        if (currentMole !== -1) {
            document.getElementById("hole" + currentMole).innerHTML = "Hole " + currentMole;
            currentMole = -1;
        }

        document.getElementById("message").innerHTML = "🎮 Game Over! Final Score: " + score;
    }
}
