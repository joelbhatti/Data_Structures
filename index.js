// // let yourArray = []

// //  yourArray = [
// // [
// // {one:1, two:2

// // },{
// //   three:3, four:4
// // }
// // ]
// // [{
// //   a: "a", b: "b"
// // }
// // [{
// //   x : "True", 
  
// // y : "False"
// // }]


// // ],

// // console.log("print", yourArray)





// // ]

// // console.log(yourArray,"print")

// // const students = ["joe", "salman", 1, 0, "imran", 5, "@#$^"]

// // console.log("result", students)

// let x = 5;
// console.log(x,"Salman Smoker")

let x = 5;
console.log(x)


class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";