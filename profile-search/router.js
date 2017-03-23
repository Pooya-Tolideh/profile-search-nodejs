const Profile = require('./profile-api.js');
const extractInfo = require('./extract-info');
const render = require('./render.js');


const homeRoute = function (req, res) {
    if (req.url === "/") {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        render('header', {}, res);
        render('search', stuInfo ,res);
        render('footer', {}, res);
        res.end();
        console.log('./HOME END');
    }
};

const userRoute = function (req, res) {
        let username = req.url.replace('/', '');
        const miscUrls = req.url === '/favicon.ico' ||
                         req.url === '/service-worker.js';
        if (username.length > 0 && !(miscUrls)) {
                res.writeHead(200, {'Content-Type' : 'text/plain'});
                res.write('Header\n');
                const studentProfile = new Profile(username);
                studentProfile.on('api-received', profile => {
                    const stuInfo = extractInfo(profile);
                    render('header', {}, res);
                    render('profile', stuInfo ,res);
                    render('footer', {}, res);
                    res.end();
                    console.log('./USER END');
                });
                studentProfile.getInfo();
            }
};

module.exports = {
    user : userRoute,
    home : homeRoute
}

