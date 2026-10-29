function factorial() {
    var num = document.getElementById("num").value;
    let fact = 1;
    while (num > 0) {
        fact = fact * num;
        num--;
    }
    console.log(fact);
}