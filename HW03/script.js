function getSalary (fullSalary) {
     if (0 < fullSalary){
     const salary = fullSalary-(fullSalary*0.195);
     //console.log('salary',salary)
     return salary

     } else {
        console.log('ви ввели неправильне значення')
     }
}
//console.log(getSalary(1000))
 //getSalary(1000);

function getRandomPassword(symbolQuantity) {
    if (0 > symbolQuantity <= 8) {
        const fullPassword = (Math.floor(Math.random()*100000000)).toString();
        const password = fullPassword.substring(0, symbolQuantity);
        return password;
    } else {
        console.log('введіть число від 1 до 8')
    }
}
 //console.log(getRandomPassword())

function deleteLetters(letter, str) {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) !== letter) { //charAt() - отримує першу букву рядка
            newStr += str.charAt(i);
        }
    }
    return newStr;

}
// console.log(deleteLetters('a', "blablabla"))


function getRandomNumber(N, M) {
    const randomNumber = Math.floor(Math.random() * (M - N)) + N;
    return randomNumber;
}
//console.log(getRandomNumber(20, 50));



// function getMaxDigit(number) {
//     let maxDigit = 0;
//     let strRandomNumber = ((parseFloat(((Math.random() * (M - N)) + N).toString())).toFixed(2));

// for(let i=0, i<, i++){

// }

//    // console.log(strRandomNumber)

// }
// getMaxDigit()


function countLetter(str) {
    let newStr = str.toLowerCase();
    newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1); //slice(n) - видаляє буква з рядка за порядковим номером n
    return newStr 
}
//countLetter('qwerTYUIUI')

function convertCurrency(currency) {
if (currency.includes("$")) {
    currency = currency.slice(0, -1);
    const numbersOfCurrency = parseFloat(currency);
    let exchangeSum = numbersOfCurrency*25;
    return exchangeSum;
} else if ((currency.toLowerCase()).includes("uah")){
    currency = currency.slice(0, -3);
    const numbersOfCurrency = parseFloat(currency);
    let exchangeSum = numbersOfCurrency*0.04;
    return exchangeSum;

} else {
    console.log("Ви ввели некоректне значення");
}
}
//console.log(convertCurrency("100$"))
