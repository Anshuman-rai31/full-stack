let arr = [1, 2, 3, 4, 5];
console.log(arr);

// let nArr = arr.map((n) => { return n * n; });
// console.log(nArr);

let nArr = arr.map(n => n * n);
console.log(nArr);


const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));
console.log(roots);

nArr = arr.filter(n => n > 3);
console.log(nArr);


nArr = arr.find(n => n > 1);
console.log(nArr);


nArr = arr.reduce((sum, n) => sum + n, 0);
console.log(nArr);