console.log('./START');

const http = require('http');

http.createServer((req, res) => {
    homeRoute(req, res);
}).listen(3000);

function homeRoute(req, res) {
    if (req.url === "/") {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.write('Header\n');
        res.write('Search Here...\n');
        res.end('Footer');
    }
}

function userRoute(req, res) {
    let username = req.url.replace('', '/');
    if (username.length > 0) {
            res.writeHead(200, {'Content-Type' : 'text/plain'});
            res.write('Header\n');
            res.write('username\n');
            res.end('Footer');
    }

}
console.log('./END');