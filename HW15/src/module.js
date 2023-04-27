//HW01


export function MaxCost() {
    let tea = 15.678;
    let coffe = 123.965;
    let juice = 90.2345;
    let maxCost = Math.max(tea,coffe,juice); 
    console.log(maxCost);
} 
MaxCost()

//HW02
export function numbers(){
let N = +prompt("введіть N:");
let M = +prompt("введіть M:");
let sum = 0;

while (!(N%1==0)||!(M%1==0)) {
  N = +prompt("введіть N:");
  M = +prompt("введіть M:");
}

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
console.log('numbers sum', sum);
// document.writeln("Введене число N: ", N);
// document.writeln("Введене число M: ", M);
// document.writeln("Чи пропускати парні числа? ", isEven);
// document.writeln("Сума чисел: ", sum);
}
numbers()


//HW03

export function getSalary (fullSalary) {
    if (0 < fullSalary){
    const salary = fullSalary-(fullSalary*0.195);
    //console.log('salary',salary)
    return salary

    } else {
       console.log('ви ввели неправильне значення')
    }
}
console.log('GetSalary result', getSalary(1000))
//getSalary(1000);
