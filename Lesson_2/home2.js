

// TASK #1

let x = 1;
let y = 2;

let res1 = String(x) + y // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x) + String(y) // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x + y)// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"


let res4 =  (Boolean(x) + String(y))  / y // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"


// TASK#2

let inputNumber = prompt("Enter number.")
if (inputNumber % 2 == 0 && inputNumber % 7 == 0 && inputNumber > 0){
  console.log(`Our number ${inputNumber} is corect.`);
} else {
  console.log(`Number ${inputNumber} is not correct.`);
}


// TASK#3

let testArray = [];
testArray.push(951);
testArray[1] = "home";
testArray.push(false);
testArray.push(null);
console.log(testArray.length);
testArray[5] = prompt("Enter something.");
alert(testArray[5]);
testArray.shift();
console.log(testArray);


//TASK#4

let cities = ["Rome", "Lviv", "Warsaw"];
let result = cities.join('*');
console.log(result);


//TASK#5

let isAdult = prompt("Enter your age.");
if (isAdult < 10){
  alert("You are too young!");
} else if (isAdult > 18) {
  alert("You've reached the age of majority.")
} else {
  alert("Your age is between 10 and 18 years. You are not adult!")
}


// TASK#6

let firstSide = a = Number(prompt("Enter the first side of the triangle."));
let secondSide = b = Number(prompt("Enter the second side of the triangle."));
let thirdSide = c = Number(prompt("Enter the third side of the triangle."));
let halfPerymetrOfTriangle = hp = (a + b + c) / 2;
let areaOfTriangle = parseFloat((hp * (hp - a) * (hp - b) * (hp - c)) ** (1/2));

if ((a <= 0 || b <= 0 || c <= 0) || (isNaN(a) || isNaN(b) || isNaN(c)) ){
  alert("Incorrect data!")
} else {
      console.log(areaOfTriangle);
    if ((a ** 2 + b ** 2 == c ** 2) || (b ** 2 + c ** 2 == a ** 2) || (a ** 2 + c ** 2 == b ** 2)){
      console.log("This is a right triangle.");
    } else {
      console.log("This is a not right triangle.");
    }
}



//TASK#7 variant A

let currentDateA = new Date();
let currentHourA = currentDateA.getHours();

if (currentHourA > 23 && currentHourA <= 5){
  alert("Good night!");
} else if (currentHourA > 5 && currentHourA <= 11) {
  alert("Good morning!");
} else if (currentHourA > 11 && currentHourA <= 17) {
  alert("Good afternoon!");
} else {
  alert("Good evening!");
}


//TASK#7 variant B


let currentDateB = new Date();
let currentHourB = currentDateB.getHours();
console.log(currentHourB);

switch (true) {
  case (currentHourB > 23 && currentHourB <= 5):
    alert("Good night!");
    break;
  case (currentHourB > 5 && currentHourB <= 11):
    alert("Good morning!");
    break;
  case (currentHourB > 11 && currentHourB <= 17):
    alert("Good afternoon!");
    break;
  default:
    alert("Good evening!");
}
