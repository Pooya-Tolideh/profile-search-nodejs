const homeRoute = function (req, res) {
    if (req.url === "/") {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.write('Header\n');
        res.write('Search Here...\n');
        res.end('Footer');
    }
};

const userRoute = function (req, res) {
    let username = req.url.replace('/', '');
    if (username.length > 0) {
            res.writeHead(200, {'Content-Type' : 'text/plain'});
            res.write('Header\n');
            res.write(`${username}\n`);
            res.end('Footer');
    }
};

module.exports = {
    user : userRoute,
    home : homeRoute
}