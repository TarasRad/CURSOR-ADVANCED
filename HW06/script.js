const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];
// 1
function getSubjects(student) {
  for (let i in students) {
    let subjArray = [];
    let subjArrayChanged = [];
    subjArray[i] = students[i].name;
    if (student.toUpperCase() === subjArray[i].toUpperCase()) {
      subjArray[i] = Object.keys(students[i].subjects);

      for (let j = 0; j < subjArray[i].length; j++) {
        let subject = myCap(subjArray[i][j].replace("_", " ")); //?

        subjArrayChanged.push(subject);
      }
      console.log(subjArrayChanged);
    }
  }

  function myCap(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
getSubjects("Anton");


// 2
function getAverageMark(student) {
  for (let i in students) {
    let subjArray = [];
    let subjArrayStudent = [];
    subjArray[i] = students[i].name;

    if (student.toUpperCase() === subjArray[i].toUpperCase()) {
      subjArrayStudent = Object.values(students[i].subjects);
      let sumAll = 0;
      let len = 0;
      for (let j = 0; j < subjArrayStudent.length; j++) {
        let newArr = subjArrayStudent[j];
        let sum = 0;

        len += newArr.length;
        for (let k = 0; k < newArr.length; k++) {
          sum += parseInt(newArr[k], 10);
        }

        sumAll += sum;
      }

      let avg = (sumAll / len).toFixed(2);
      return avg;
      //console.log();
    }
  }
}
console.log('Average mark:',getAverageMark("Victor".toUpperCase()));


//3
function getStudentInfo(student) {
  for (let i in students) {
    let subjArray = [];
    let studentCourse = "";
    let map = new Map();  //?
    subjArray[i] = students[i].name;

    if (student.toUpperCase() === subjArray[i].toUpperCase()) {
      studentCourse = students[i].course;
      map.set("course", studentCourse);
      map.set("name", students[i].name);

      let averageMark = getAverageMark(students[i].name.toUpperCase());
      map.set("averageMark", averageMark);
      console.log(map);
    }
  }
}
getStudentInfo("Victor");

//5
function getStudentsNames(students) {
  const studentsNames = students.map((student) => student.name); //?
  return studentsNames.sort();
}
console.log(getStudentsNames(students));

//6
function calculateWordLetters(word) {
  let obj = {};

  for (let i = 0; i < word.length; i++) {
    let char = word.charAt(i);

    obj[char] = isNaN(obj[char]) ? 1 : obj[char] + 1;
  }

  console.log(obj);
}

calculateWordLetters("ttttest");
