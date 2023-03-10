let N = +prompt("введіть N:");
let M = +prompt("введіть M:");
let sum = 0;

while (!(N%1==0)||!(M%1==0)) {
  N = +prompt("введіть N:");
  M = +prompt("введіть M:");
}

// if (!(N % 1 == 0 && N === NaN)) {
//   alert("Число N не підходить!");
//   let N = +prompt("введіть N:");
// }
// if (!(M % 1 == 0 && M === NaN)) {
//   alert("Число M не підходить!");
//   let M = +prompt("введіть M:");
// }
let isEven = confirm("Пропускати парні числа?");

if (isEven == true) {
  for (let i = N; i < M; i++ && !(i % 2 == 0)) {
    i = i + 1;
    console.log(i);
    sum += i;
  }
} else {
  for (let i = N; i <= M; i++) {
    sum += i;
    console.log(i);
  }
}
console.log(sum);
document.writeln("Введене число N: ", N);
document.writeln("Введене число M: ", M);
document.writeln("Чи пропускати парні числа? ", isEven);
document.writeln("Сума чисел: ", sum);
