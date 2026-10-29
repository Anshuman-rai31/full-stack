function convert() {
    let num = document.getElementById("num").value;
    let bin = num.toString(2);
    let hex = num.toString(16).toUpperCase();


    document.getElementById("result").innerText = "Binary: " + bin + " Hexadecimal: " + hex;
}
