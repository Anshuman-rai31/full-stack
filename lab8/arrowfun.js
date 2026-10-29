const sum = ((a, b) => a + b)

console.log(sum(2, 5));

const mul = ((a, b) => a * b)

console.log(mul(2, 5));

// Armstrong With Arrow Function
const arm = (num) => {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit * digit * digit;
        temp = Math.floor(temp / 10);
    }
    if (sum === num) {
        console.log("Armstrong");
    } else {
        console.log("Not Armstrong");
    }
}

arm(153);

//Armstrong Using String Spilt() Method
function isArmstrong(num) {
    const digits = String(num).split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
    return sum === num;
}

console.log(isArmstrong(153));

//setTimeout() Method

// setTimeout(() => {
//     console.log("Hello");
// }, 2000);

//setInterval() Method

// let count = 0;

// const intervalId = setInterval(() => {
//     console.log(count);
//     count++;
//     if (count === 5) {
//         clearInterval(intervalId);
//     }
// }, 1000);


//Q:Write A Program using settimeout(),setInterval(),getElementById() to create a Timer For 15 Min.

// let time = 15 * 60;

// let myInterval = setInterval(() => {
//     let min = Math.floor(time / 60);
//     let sec = time % 60;

//     console.log(min + ":" + sec);
//     time--;
// }, 100);

// setTimeout(() => {
//     clearInterval(myInterval);
//     console.log("Time Up!");
// }, 15 * 60 * 1000);



let totalsec = 15 * 60;

let timer = setInterval(() => {
    totalsec -= 1;
    if (totalsec == 0) {
        clearInterval(timer);
    }
    updateTimer();
}, 1000);

function updateTimer() {
    let min = Math.floor(totalsec / 60);
    let sec = Math.floor(totalsec % 60);
    document.getElementById("timer").innerHTML = min + ':' + sec;
}
updateTimer();



