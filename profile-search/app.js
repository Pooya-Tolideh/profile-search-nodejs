console.log('./START');

const http = require('http');
const router = require('./router.js');

http.createServer((req, res) => {
    router.home(req, res);
}).listen(3000);

console.log('./END');