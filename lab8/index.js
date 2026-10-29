let btn = document.getElementById("btn");
let addMin = document.getElementById("addMin");
let counter = 0;
btn.addEventListener("click", () => {
    counter++;
    document.getElementById("counterValue").innerHTML = counter;
});

addMin.addEventListener("click", () => {
    counter += 60;
    document.getElementById("counterValue").innerHTML = counter;
});