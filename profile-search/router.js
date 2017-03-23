const Profile = require('./profile-api.js');
const extractInfo = require('./extract-info')


const homeRoute = function (req, res) {
    if (req.url === "/") {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.write('Header\n');
        res.write('Search Here...\n');
        res.end('Footer');
        console.log('./HOME END');
    }
};

const userRoute = function (req, res) {
        let username = req.url.replace('/', '');
        if (username.length > 0) {
                res.writeHead(200, {'Content-Type' : 'text/plain'});
                res.write('Header\n');
                const studentProfile = new Profile(username);
                studentProfile.on('api-received', profile => {
                    const stuInfo = extractInfo(profile);
                    res.write(`${stuInfo.username} has ${stuInfo.badges} badges`);
                    res.end('Footer');
                    console.log('./USER END');
                });
                studentProfile.getInfo();
            }
};

module.exports = {
    user : userRoute,
    home : homeRoute
}

