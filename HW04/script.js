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
const randomNumbers = [];
const girls = [];
const boys  = [];
const pairs = [];


function getPairs(students){

for (let i = 0; i < students.length; i++) {
    if (students[i].endsWith("а")) {
        girls.push(students[i]);

    } else {
        boys.push(students[i]);
    }
  }



for (let i=0; i<girls.length; i++){
    pairs.push([boys[i], girls[i]]);


}
return pairs
}

function getPairsMarks(pairs){
    for (let i=0;i<pairs.length;i++){
        pairsMarks.push([pairs[i], marks[i]])
    }
    return pairsMarks;
}
 function getPairsTaskMarks(pairsMarks){
    for (let i=0; i<pairsMarks.length; i++){
        pairsTaskMarks.push([pairsMarks[i], themes[i]])
    }
    return pairsTaskMarks;
 }

 function getPairsRandomMarks(pairsTaskMarks){
    for (let i=0; i<pairsTaskMarks.length; i++){
        for (let i = 0; i < 5; i++) {
                const randomMark = Math.floor(Math.random() * 5) + 1;
                randomNumbers.push(randomMark);
              } 
        pairsRandomMarks.push([pairsTaskMarks[i], randomNumbers[i]])
    }
    return pairsRandomMarks
 }

console.log(getPairs(students))
console.log(getPairsMarks(pairs))
console.log(getPairsTaskMarks(pairsMarks))
console.log(getPairsRandomMarks(pairsTaskMarks))







