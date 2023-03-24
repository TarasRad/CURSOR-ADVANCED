const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }];

         //console.log(students)
    function getSubjects(students){
   let subjArr =[]
   let subjArrChanged =[]
   let subjChanged =[]
   for (i in students){
     // subjArr[i]=Object.keys(students[i].subjects)
   
     

     //      for(j=0;j<subjArr[i].length;j++){
     //           subject = (subjArr[i][j].replace('_',' '))

     //           subjArrChanged.push((subject).charAt(0).toUpperCase() + subject.slice(1))
               
     //           //console.log(subjArrChanged)

     //      }
          //console.log(subjChanged)

   }

     let subjTanya=[]
     let subjVictor=[]
     let subjAnton=[]

          for(let key0 in students[0].subjects){
               let formattedString = key0[0].toUpperCase() + key0.slice(1).replace('_', ' ');
               subjTanya.push(formattedString);
               
          }
          for(let key1 in students[1].subjects){
               let formattedString = key1[1].toUpperCase() + key1.slice(1).replace('_', ' ');
               subjVictor.push(formattedString);

          }
          for(let key2 in students[0].subjects){
               let formattedString = key2[0].toUpperCase() + key2.slice(1).replace('_', ' ');
               subjAnton.push(formattedString);

          }
          
          // for(let key1 in students[1].subjects){
          //      key1 = key1[0].toUpperCase() + key1.slice(1).replace('_', ' ');
          //      console.log(key1);
          // }
          // for(let key2 in students[2].subjects){
          //      key2 = key2[0].toUpperCase() + key2.slice(1).replace('_', ' ');
          //      console.log(key2);
          // }
          console.log('Subjects of Tanya ', subjTanya);
          console.log('Subjects of Victor ',subjVictor);
          console.log('Subjects of Anton ',subjAnton);

          //return 

    }
          //console.log(getSubjects(students))

    function getAverageMark(students){
     let marksTanya=[]
     let marksVictor=[]
     let marksAnton=[]
     let tempArr=[]
     let sum = 0;
  let average = 0;
          for(let i in students){
              tempArr=(Object.values(students[i].subjects).flat())
               console.log(tempArr)
               for(let j=0; j<tempArr.length;j++){
                    sum += tempArr[i];
                    //console.log(tempArr[i])
               }
               average = (sum / tempArr.length).toFixed(2);
               console.log('average mark ', average)

          }
    }

//getAverageMark(students)

function getStudentInfo(){
     let userTanya = [];
     let userViktor = [];
     let userAnton = [];
     for (let i in students){
          //userTanya = new Object(students[0])

          console.log()
     }

}
getStudentInfo()
// function getStudentInfo(student) {
//      for (let i in students) {
//        let subjArray = [];
//        let studentCourse = "";
//        let map = new Map();
//        subjArray[i] = students[i].name;
   
//        if (student.toUpperCase() === subjArray[i].toUpperCase()) {
//          studentCourse = students[i].course;
//          map.set("course", studentCourse);
//          map.set("name", students[i].name);
   
//          let averageMark = getAverageMark(students[i].name.toUpperCase());
//          map.set("averageMark", averageMark);
//          console.log(map);
//        }
//      }
//    }
//    //3
//    console.log(getStudentInfo("Anton".toUpperCase()));