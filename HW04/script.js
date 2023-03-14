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
const girls = [];
const boys  = [];
const pairs = [];
const pairsWithMarks = [];
const studentsMarks = [];


for (let i = 0; i < students.length; i++) {
    if (students[i].endsWith("а")) {
        girls.push(students[i]);

    } else {
        boys.push(students[i]);
    }
  }

//   console.log(girls);
//   console.log(boys);

for (let i=0; i<girls.length; i++){
    pairs.push([boys[i], girls[i], themes[i], marks[i]])
    console.log(pairs)
}

for (let i=0;i<students.length; i++) {
    studentsMarks.push([students[i], marks[i]])
    console.log(studentsMarks)
}

