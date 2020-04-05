
  //TASK#1-------------------------------

function upperCase(str) {
      if (/^[A-Z]/.test(str)) {
        console.log("String's starts with uppercase character");
    } else {
        console.log("String's not starts with uppercase character");
    }
}
upperCase('regexp');
upperCase('RegExp');

  //TASK#2-------------------------------
function checkEmail(email) {
    if (true) {
        return (/\S+@\S+\.\S+/.test(email));
    }
}
console.log(checkEmail("Qmail2@gmail.com"));
console.log(checkEmail("Qmail2gmail.com"));
console.log(checkEmail("4544@klsld/.com"));

  //TASK#3-------------------------------

let myString = "cdbBdbsbz";
let re = /d(b+)(d)/i;
console.log(myString.match(re));
console.log(re.exec(myString));


  //TASK#4-------------------------------

let str = "Java Script";
let result = str.replace(/(\w+) (\w+)/,'$2,$1');
console.log(result);

  //TASK#5-------------------------------


  function validateCreditCard(card) {
    let re = /\d{4}-\d{4}-\d{4}-\d{4}/;
    if (true) {
      return re.test(card);
    }
  }
console.log(validateCreditCard("9999-9999-9999-9999"));//true
console.log(validateCreditCard("9999-9999-9999 9999"));//false
console.log(validateCreditCard("9999-9999-9999-9999"));//true
console.log(validateCreditCard("9999-99999999-9999"));//false

  //TASK#6-------------------------------

function checkEmail(str) {
  let re =/^[a-z0-9]+(([\-]?([\d\w_]+))|(([\d\w_]+)[\-]?))@([\w])+\.([\w])+/gi
  let result = re.test(str);
  if (result == true) {
    console.log(`${str}\nEmail is correct!`);
  } else {
    console.log(`${str}\nEmail is not correct!`);
  }
}
checkEmail('my_mail@gmail.com');//  true
checkEmail('#my_mail@gmail.com');// false
checkEmail('my-ma_il@gmail.com');// true
checkEmail('my_ma_il@gmail.com');// true
checkEmail('my-mail@gmail.com');// true
checkEmail('my_mail@gm-ail.com');// false
checkEmail('_my_mail@gmail.com');// false
checkEmail('my__ma_43il@gmail.com');// true
checkEmail('my_mail-@gmail.com');//  true

  //TASK#7-------------------------------

function checkLogin(str) {
  if ((str.length > 2) && (str.length <= 10)){
    let re = /^[a-z]([\d.\d\w]+?[\d\w]+){2,}/gi;
    let re2 = /(\d\.\d)|(\d)/g;
    let check = re.test(str);
    let digit = str.match(re2);
    console.log(check);
    console.log(digit);
  }
}

  checkLogin('ee1.169t3');
  checkLogin('ee1.1ret3');
  // true
  // 1.1, 3

  checkLogin('ee1*1ret3');
  // false
  // 1, 1, 3
  checkLogin('ee11rereret3');
