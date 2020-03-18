//TASK 1.1

// let numbers = [2, 3, 4, 5];
// let res = 1;
// for (let i in numbers){
// res = res * numbers[i];
// }
// console.log(res);


//TASK 1.2

// let numbers = [2, 3, 4, 5];
// let i = 0;
// let res = 1;
// while (i < numbers.length){
//   res = res * numbers[i];
//   i++;
// }
// console.log(res);

//TASK 2

// for (let i = 0;i < 16; i++){
//   if (i % 2 == 0){
//     console.log(`number ${i} is even`);
//   } else{
//     console.log(`number ${i} is odd`);
//   }
// }

//TASK 3

// let randArr = [];
// let i = 0;
// function randArray(k){
//   while (i < k){
//     let res = Math.floor(Math.random(1) * 500 + 1)
//     randArr.push(res);
//     i++
//   }
//   console.log(randArr);
// }
// randArray(5);


//TASK 4

// let firstNumber = Number(prompt("Enter first number. But it must be only integer figure!!!"));
// let secondNumber = Number(prompt("Enter second number. But it must be only integer figure!!!"));
//
// function raiseToDegree(a,b){
//   if (Number.isInteger(a) && Number.isInteger(b)){
//     res = a**b;
//     console.log(res);
//   } else {
//     console.log("Entering number are not Integer.");
//   }
// }
// raiseToDegree(firstNumber,secondNumber);


//TASK 5

// function findMin(){
//   for (let i = 0;i < arguments.length; i++){
//     if (arguments[i] < arguments[i + 1]){
//       arguments[arguments.length] = arguments[i];
//     }
//   }
//   console.log(arguments[arguments.length]);
// }
// findMin(12,14,4,-4,0.2);


//TASK 6


// let b = 0;
// function findUnique(arr){
//   for (let a = 0; a < arr.length; a++){
//     for (b = a + 1; b < arr.length; b++){
//       if (arr[a] == arr[b]){
//         return false;
//       }
//     }
//   } return true;
// }
// console.log(findUnique([1,2,3,5,3]));
// console.log(findUnique([1,2,3,5,11]));


//TASK 7


// function lastElem(arr,x){
//   let res = [];
//
//   if (x == null){
//     i = arr.length - 1;
//     res.push(arr[i]);
//     return res;
//
//   } else if (x > arr.length){
//     while (x > arr.length){
//       x = x - arr.length;
//     }
//     while (x > 0){
//         i = arr.length - x;
//         res.push(arr[i]);
//         x--;
//       }return res;
//
//     } else {
//         while (x > 0){
//         i = arr.length - x;
//         res.push(arr[i]);
//         x--;
//   }return res;
//   }
// }
//
// // console.log(lastElem([3, 4, 10, -5],3));
// console.log(lastElem([3, 4, 10, -5]));      // -5
// console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
// console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]


//TASK 8

// let inArr = [];
// let outArr = [];
// function firstUpperLetter(){
//   let inpStr = prompt("Enter your string.")
//   arr = inpStr.split(" ");
//   for (let i = 0;i < arr.length;i++){
//     outArr[i] = arr[i].replace(arr[i].charAt(0),arr[i].charAt(0).toUpperCase());
//   } return outArr.join(" ");
// }
//
// console.log(firstUpperLetter());
