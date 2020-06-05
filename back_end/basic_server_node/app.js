const http = require('http');
let {requestListener} = require('./callbackFile.js');
const PORT = process.env.PORT || 4000;

let server = http.createServer(requestListener);
server.listen(PORT);