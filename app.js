console.log('./START');

const http = require('http');
const router = require('./controllers/router.js');

http.createServer((req, res) => {
    try {
        router.serveCSS(req, res);
        router.home(req, res);
        router.user(req, res);
    } catch (error) {console.log(error.message)}
}).listen(3000);

console.log('./SERVER ON');


// } catch(error) {console.log(error.message)}