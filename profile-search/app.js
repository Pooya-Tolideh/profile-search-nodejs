console.log('./START');

const http = require('http');
const router = require('./router.js');

http.createServer((req, res) => {
    try {
        router.home(req, res);
        router.user(req, res);
    } catch (error) {console.log(error.message)}
}).listen(3000);

console.log('./END');