function convert(val1) {
    return "Fahrenheit: " + (val1 * 9 / 5) + 32;
}

function show() {
    var val1 = document.getElementById("val1").value;
    console.log(convert(val1));
}