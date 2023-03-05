let N = +prompt('введіть N:')
let M = +prompt('введіть M:')
let isEven = confirm('Пропускати парні числа?')
let sum = 0

if (!(N % 1 == 0) || N === ' ') {
    alert('Число N не підходить!')
};
if (!(M % 1 == 0) || M === ' ') {
    alert('Число M не підходить!')
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




