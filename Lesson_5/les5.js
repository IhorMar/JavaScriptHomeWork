//TASK#1-------------------------------


function testThrow(exception){
  try {
    throw exception;
  } catch(error){
    console.log('Catch: ' + error);
  }
}
testThrow(5);
testThrow('Test');
testThrow(new Error('An error happened'))


//TASK#2-------------------------------

let rectangleWidth = parseFloat(prompt("Enter width of rectangle: "));
let rectangleHeight = parseFloat(prompt("Enter height of rectangle: "));

function calcRectangleArea(width,height){
  if (isNaN(width) || isNaN(height)){
    throw new Error("Your enter value is not figure.");
  } else if (width <= 0 || height <= 0) {
    throw new Error("Your enter value is less or equal zero.")
  }
  return width * height;
}
try{
  let result = calcRectangleArea(rectangleWidth,rectangleHeight);
  console.log(result);
} catch(error){
    console.log(error);
  }

//TASK#3-------------------------------

let age = parseInt(prompt("Enter your current age: "));

function checkAge(age){
  if (age == ""){
    throw new TypeError("The field is empty! Please enter your age.");
  } else if (isNaN(age)) {
    throw new TypeError("This is a not number value.");
  } else if (age < 14) {
    throw new RangeError("You age is less than 14.");
  }
  return ("Welcome. You are allowed to watch the movie.");
}

try{
  let result = checkAge(age);
  alert(result);
} catch(error){
  alert(`${error.name}: ${error.message}`)
}

//TASK#4-------------------------------

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class MonthException{
  constructor(message){
    this.message = message;
    this.name = 'MonthException';
  }
  getMessage(){
    return (`${this.name} ${this.message}`);
  }
}

let errMessage = new MonthException("Incorrect month number")


function showMonthName(month) {
   try {
     if (month > months.length){
       throw new Error();
     };
   } catch (error) {
     console.log(errMessage.getMessage());
      }
      return months[month-1];
   }

console.log(showMonthName(5));
console.log(showMonthName(13));


//TASK#5-------------------------------

function showUser(id) {
  let userId = {};
  try{
    if(id < 0){
      throw Error("Id must not be negative: ");
  }
    userId["id"] = id
    return userId;
    }
  catch(err){
    console.log(err + id);
  }
}

// console.log(showUser(5));
// console.log(showUser(-15));
// console.log(showUser(-55));
// showUser(5);
// showUser(-15);
// showUser(-55);


function showUsers(ids){
  let outputCurrectIds = []
  for(let i = 0;i < ids.length; i++){
    let result = showUser(ids[i]);
      if (result){
        outputCurrectIds.push(result)
      }
    }
console.log(outputCurrectIds);
  }

showUsers([7,-12,44,22])
