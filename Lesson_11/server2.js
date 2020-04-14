//-------TASK#2-------------------------------------
const http = require("http");
let personalmodule = require('./personalmodule');

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(personalmodule);
    response.end();
}).listen(8080);