//-------TASK#2-------------------------------------
const os = require('os');
let user = os.userInfo().username;
let alldate = Date.now();
let date = new Date(alldate);
let greet, res;

function greeting(userName) {
    if (date.getHours() >= 0 && date.getHours() < 6) {
        res = "night";
    } else if (date.getHours() >= 6 && date.getHours() < 12) {
        res = "morning";
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
        res = "afternoon";
    } else {
        res = "evening";
    }
    return greet = (`<p>Date of request: ${date.toString()}</br>Good ${res}, ${userName}`);
}
module.exports = greeting(user);