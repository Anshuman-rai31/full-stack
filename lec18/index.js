// ??(Coalescing Operator(Coalsence))
// var x = null;
// var y = undefined;
// var z = 5;
// console.log(x ?? z); // 5
// console.log(y ?? z); // 5
// console.log(z ?? y); // 5
// console.log(z ?? x); // 5
// console.log(y ?? 1); // 1
// console.log(x ?? 1); // 1


// let obj = {
//     name: "rahul",
//     location: {
//         city: "mathura",
//     }
// }
// console.log(obj.name ?? "unknown");
// console.log(obj.location.city ?? "unknown");
// console.log(obj.location?.state);


// console.log(document.getElementById("p").innerText);
// console.log(document.getElementById("p").textContent);

let btn = document.getElementById("btn")
let p = document.getElementById("p")
btn.addEventListener("click", () => {
    p.classList.toggle("hide");
})
