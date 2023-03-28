class Student {
  constructor(fullName, university, course, marks) {
    this.name = fullName;
    this.university = university;
    this.course = course;
    this._marks = marks;
    this.dismissed = false;
    // this._null = null;
    // this.recovered = true;
  }
  getInfo() {
    console.log(`${this.course} ${this.university}, ${this.name}`);
  }
  getAverageMark() {
    //console.log("temp", this.marks);
    if(this.marks.length > 0){
    let sum = 0;
    let average = 0;
    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
      average = sum / this.marks.length;
    }
    return average
    //console.log(average);
  }
}

  dismiss() {
    this.dismissed = true;
    this.marks = null
    console.log('dismissed',this.dismissed);
  }
  recover() {
    this.dismissed = false;
  }

  get marks() {
    if (!this.dismissed) {
      return this._marks;
    } else {
      return null;
    }
  }
  set marks(mark) {
    if (!this.dismissed) {
        this._marks.push(mark);
    }
  }
  
}
let stud = new Student(
  "Остап Родоманський Бендер",
  "Вищої Школи Психотерапії м.Одеса",
  "Студент 1го курсу",
  [5, 4, 4, 5]
);
console.log(stud);
stud.getInfo();
console.log(stud.marks);
stud.marks = 5;
console.log(stud.marks);
stud.getAverageMark();
console.log(stud.getAverageMark());
stud.dismiss();
console.log(stud.marks); // null
stud.recover();
console.log(stud.marks); 


// class BudgetStudent extends Student {
//     constructor(scholarship){
//         super(scholarship)
//     }
//     getScholarship(){
//         console.log('Виотримали 1400 грн. стипендії');

//     }
    
// }
// let newStud = new BudgetStudent()

// console.log(newStud);

// newStud.getScholarship()
//console.log(newStud.getScholarship());