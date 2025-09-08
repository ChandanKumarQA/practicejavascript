class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  test(rall,pincode){
    this.rall=rall;
    this.pincode=pincode;
  } 
}

let car1 = new Car("BMW", 2020);

let car2 = new Car("Audi", 2022);

let stu = new Car()
stu.test(1000,221005);
console.log(car1.name, car1.year); // BMW 2020
console.log(car2.name, car2.year); // Audi 2022
console.log("Car 1:", car1);
console.log("Car 2:", car2); 
console.log("Student:", stu);           