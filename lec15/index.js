/**
 * Primary Data Types
 * -----------------
 * Number
 * String
 * Boolean
 * Undefined
 * Null
 */

// let a = 5;
// console.log(a, typeof a);

// a = "Ayush";
// console.log(a, typeof a);

// a = true;
// console.log(a, typeof a);

// a = undefined;
// console.log(a, typeof a);

// a = null;
// console.log(a, typeof a);

// console.log("5" + "3");

// console.log(2 * 2.5);
// console.log(2 - 4);
// console.log(2 / 5);
// console.log(2 % 5);
// console.log(1 + 1 + 1 + "1");

// var a = 1;
// console.log(a + a + a + a.toString());

// var a = "1";
// console.log(Number.parseInt(a) + Number.parseInt(a) + Number.parseInt(a) + Number.parseInt(a));


//Armstrong Number

// function isArmstrong(number) {
//     let temp = number;
//     let sum = 0;
//     const power = number.toString().length;

//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += Math.pow(digit, power);
//         temp = Math.floor(temp / 10);
//     }

//     return sum === number;
// }

// console.log(isArmstrong(153));


// let n = 153;
// let a = n;
// let sum = 0;
// while (a > 0) {
//     let digit = a % 10;
//     sum = sum + Math.pow(digit, 3);
//     a = Math.floor(a / 10);
// }

// if (sum == n) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

function isArmstrong(n) {
    let temp = n;
    let sum = 0;
    while (temp > 0) {
        let digit = temp % 10;
        sum = sum + Math.pow(digit, 3);
        temp = Math.floor(temp / 10);
    }
    if (sum == n) {
        return true;
    }
    else {
        return false;
    }
}

function checkAndShow() {
    let num = document.getElementById("val1").value;
    if (isArmstrong(num)) {
        console.log("Armstrong");
    }
    else {
        console.log("Not Armstrong");
    }

}
