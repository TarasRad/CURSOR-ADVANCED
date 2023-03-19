let array = [];
let numbersArray = [];

function getRandomArray(length, min, max) {
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * (max - min)) + min);
  }
  return array;
}
//  getRandomArray(15, 2, 100);
//  console.log('Task 1', array);

// function getModal(...arr) {
//     let digitCounts = new Array(arr.length).fill(0);
//     let maxCount = 0;
//     let modalNumber = [];

//     arr.forEach(function(arr) {
//         digitCounts[digit]++;
//         if (digitCounts[arr] > maxCount) {
//           maxCount = digitCounts[arr];
//         }
//       });
//       digitCounts.forEach(function(count, arr) {
//         if (count === maxCount) {
//             modalNumber.push(arr);
//         }
//       });

//     console.log(modalNumber)
// }
// getModal(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)

function getAverage(...numbers) {
  // let numArray = []
  // numArray = numbers
  let sum = 0;
  let average = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  average = sum / numbers.length;
  // console.log('numbers', numbers)
  // console.log('sum', sum)
  // console.log('average', average)
  return sum;
}

//getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)

function getMedian(...numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  let medianNumber = 0;
  if (sortedNumbers.length % 2 === 0) {
    const firstDigit = sortedNumbers.length / 2 - 1;
    const secondDigit = sortedNumbers.length / 2 + 1;

    medianNumber = (sortedNumbers[firstDigit] + sortedNumbers[secondDigit]) / 2;
  } else {
    medianNumber = sortedNumbers[sortedNumbers.length / 2 - 0.5];
  }

  console.log(sortedNumbers);
  return medianNumber;
}
//console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))


function filterEvenNumbers(...numbers){
  const evenNumbers = numbers.filter(number => number% 2 !== 0);
  console.log(evenNumbers)
}

//filterEvenNumbers(1, 2, 3, 4, 5, 6)


function getDividedByFive(...numbers){
  const dividedByFive = numbers.filter(number => number% 5 === 0);
  console.log(dividedByFive)
}
 //getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)


 function divideByThree(word){
  
  (String(word).toLowerCase())
  let reWord= word.replace(/ /g, "")
    for (let i=0;i<reWord.length;i+=3) {
      let newWord = [];
      newWord.push(reWord.slice(i, i+3))

      console.log(reWord)

      console.log(newWord)

    }

 }
 //divideByThree('Commander')
