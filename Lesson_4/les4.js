//
// //TASK #1----------------------------------
//
// let cityInfo = {
//   name : "Lviv",
//   numberOfCitizens : 1000000,
//   isItTouristCity : true
// }
//
// let count = 0;
//
// function propsCount(currentObject){
//   for(key in currentObject){
//     count++
//   }
//   return count;
// }
//
// console.log(propsCount(cityInfo));


//TASK #2---------------------------------------------------------

// let planet = new Object();
// planet.earth = "blue";
// planet.mars = "red";
// planet.uranus = "yellow";
// planet.neptune = "aqua";
// planet.jupiter = "brown";
//
//
// let propObj = [];
// let valObj = [];
//
// function showProps(obj){
//   for (key in obj){
//     propObj.push(key);
//     valObj.push(obj[key]);
//   }
//   console.log(propObj);
//   console.log(valObj);
// }
// showProps(planet);


//TASK #3---------------------------------------

// class Worker {
//   constructor(fullName,dayRate,workingDays){
//     this.fullName = fullName;
//     this.dayRate = dayRate;
//     this.workingDays = workingDays;
//   }
//   showSalary(){
//     let salary = Math.round(this.dayRate * this.workingDays);
//     console.log(`${this.fullName} salary: ${salary}`);
//   }
//
//     showExp = 1.2;
//
//   showSalaryWithExperience(){
//     let showSalExp = Math.round(this.dayRate * this.workingDays * this.showExp);
//     console.log(`${this.fullName} salary: ${showSalExp}`);
//     // console.log(showSalExp);
//   }
//   set setExp(value){
//     this.showExp = value;
//   }
//   get getExp(){
//     return this.showExp;
//   }
// }
//
// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();


//TASK#4---------------------------------------------

// class Person {
//   constructor(name,surname){
//     this.name = name;
//     this.surname = surname;
//   }

//   showFullName(){
//     return(`${this.name} ${this.surname}`);
//   }

// }
//
// class Student extends Person {
//   constructor(name,surname,year) {
//     super(name,surname);
//     this.year = year;
//
//   }

//   showFullName(midleName){
//     this.midleName = midleName;
//     return(`${this.surname} ${this.name} ${this.midleName} `);
//   }

//   showCourse(){
//     let date = new Date();
//     let currentYear = date.getFullYear();
//     let currentCourse = currentYear - this.year;
//     if (currentCourse < 1 || currentCourse > 6){
//       return "Something is wrong! You are too long in the school!!!";
//   } else{
//       return currentCourse - 1;
//     }

//   }
// }
//
// let stud1 = new Student ("Petro", "Petrenko", 2015);
// let stud2 = new Student ("Ivan", "Ivanov", 2010);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 4
// console.log(stud2.showFullName("Ivanivich"));
// console.log("Current course: " + stud2.showCourse());


//TASK#5---------------------------------------------------

// 
// class GeometricFigure{
//
//   getArea(){
//     return 0;
//   }
//   toString(){
//     return Object.getPrototypeOf(this).constructor.name;
//   }
// }
//
// //Triangle area
//
// class Triangle extends GeometricFigure{
//     constructor(sideTriangle,heightOfTriangle){
//       super();
//       this.sideTriangle = sideTriangle;
//       this.heightOfTriangle = heightOfTriangle;
//     }
//     getArea(){
//       return (this.sideTriangle * this.heightOfTriangle) / 2;
//     }
//     toString(){
//       console.log(`Geometric figure: Triangle - area: ${this.getArea()}`);
//     }
// }
//
// // //Square area
//
// class Square extends GeometricFigure{
//     constructor(sideSquare){
//       super();
//       this.sideSquare = sideSquare;
//     }
//     getArea(){
//       return this.sideSquare ** 2;
//     }
//     toString(){
//       console.log(`Geometric figure: Square - area: ${this.getArea()}`);
//     }
// }
// // //Circle area
//
// class Circle extends GeometricFigure{
//     constructor(radius){
//       super();
//       this.radius = radius;
//     }
//     getArea(){
//       return Math.PI * this.radius**2;
//     }
//     toString(){
//       console.log(`Geometric figure: Circle - area: ${this.getArea()}`);
//     }
//   }
//
// // Output information and total area
//
//     function handleFigures(figures){
//       let sum = [];
//       for (let i = 0;i < figures.length;i++){
//         if (figures[i] instanceof GeometricFigure){
//         sum.push(figures[i].getArea());
//         }
//       }
//       let total = sum.reduce( function (element, amount){
//         return element + amount});
//         figures.toString();
//         console.log(total);
//     }
//
//
// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
// console.log(handleFigures(figures));
