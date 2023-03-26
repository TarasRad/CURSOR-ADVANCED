class Student {
  constructor(fullName, university, course, marks) {
    this.name = fullName;
    this.university = university;
    this.course = course;
    this._marks = marks;
    this.dismissed = false;
  }
  getInfo() {
    console.log(`${this.course} ${this.university}, ${this.name}`);
  }
  getAverageMark() {
    console.log("temp", this.marks);
    let sum = 0;
    let average = 0;
    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
      average = sum / this.marks.length;
    }
    console.log(average);
  }

  dismiss() {
    this.dismissed = true;
  }

  set marks(mark) {
    if (!this.dismissed) {
      return null;
    } else {
      this._marks.push(mark);
    }
  }
  get marks() {
    if (this.dismissed) {
      return null;
    } else {
      return this._marks;
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
//stud.dismiss();
