const students = [
    "Олександр",
    "Ігор",
    "Олена",
    "Іра",
    "Олексій",
    "Світлана"];
const themes = [
    "Диференційне рівняння",
    "Теорія автоматів",
    "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const pairsTaskMarks = [];
const pairsMarks = [];
const randomMarks = [];
const pairsRandomMarks = [];


function getPairs(students){
    const girls = [];
const boys  = [];
const pairs = [];
//let randomMark = Math.floor(Math.random() * 5) + 1;
for (let i = 0; i < students.length; i++) {
    if (students[i].endsWith("а")) {
        girls.push(students[i]);

    } else {
        boys.push(students[i]);
    }
  }



for (let i=0; i<girls.length; i++){
    pairs.push([boys[i], girls[i]]);
    pairsMarks.push([boys[i], girls[i], marks[i]]);
    pairsTaskMarks.push([boys[i], girls[i],themes[i], marks[i]]);
    for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        randomNumbers.push(randomNumber);
        
      }
    pairsRandomMarks.push(boys[i], girls[i], randomNumbers[i])


}
return pairs
}

const randomNumbers = [];

console.log(getPairs(students))
console.log(pairsMarks)
console.log(pairsTaskMarks)
console.log(pairsRandomMarks)







