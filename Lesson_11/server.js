//-------TASK#1-------------------------------------

const http = require("http");
const os = require("os");
const path = require('path');
http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<h1>System information</h1>');
    response.write(`<p>Current user name: ${os.userInfo().username}</br> 
    OS type: ${os.type()}</br> 
    System work time: ${(os.uptime()/60).toFixed(2)} minutes</br>
    Current work directory: ${path.dirname(__filename)}</br>
    Server file name: ${path.basename(__filename)}</p>`)
    response.end();
}).listen(5000);