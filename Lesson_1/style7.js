let userLogin = prompt("Enter your login");
let userEmail = prompt("Enter email.");
let userPassword = prompt("Enter your password.");
// let result = "Dear " + userLogin + " , your email is " + userEmail + ", your password is " + userPassword
let result = `Dear ${userLogin}, your email is ${userEmail}, your password is ${userPassword}.`
alert(result);
