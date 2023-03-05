let N = +prompt('введіть N:')
let M = +prompt('введіть M:')
let isEven = confirm('Пропускати парні числа?')
let sum = 0

while (!(N % 1 == 0) || N === ' ' || N === 0) {
    alert('Число N не підходить!')
    let N = +prompt('введіть N:')
};
while (!(M % 1 == 0) || M === ' ' || M === 0) {
    alert('Число M не підходить!')
    let M = +prompt('введіть M:')
};

if (isEven == true) {
for (let i = N; i <M; i++ && !(i % 2 == 0)){
   
    i=i+1;
    console.log(i)
            sum+=i
        }
    } else {
        for (let i = N; i <=M; i++){
            sum+=i
            console.log(i)
        }
        
    }




console.log(sum)
document.writeln('Введене число N: ', N)
document.writeln('Введене число N: ', M)
document.writeln('Чи пропускати парні числа? ', isEven)
document.writeln('Сума чисел: ', sum)




