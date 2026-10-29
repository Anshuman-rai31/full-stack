function palindrome() {
    var val1 = document.getElementById("val1").value;
    var rev = "";
    for (let i = val1.length - 1; i >= 0; i--) {
        rev += val1[i];
    }

    if (val1 == rev) {
        console.log("Palindrome");
    }
    else {
        console.log("Not Palindrome");
    }
}