class Student {
  constructor(name, marks,city) {
    this.name = name;
    this.marks = marks;
  }

  displayInfo() {
    console.log(`${this.name} scored ${this.marks}`);
  }
}

let s1 = new Student("Chandan", 90,"Patna");
s1.displayInfo(); // Chandan scored 90
