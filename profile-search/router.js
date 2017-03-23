const Profile = require('./profile-api.js');
const extractInfo = require('./extract-info');
const render = require('./render.js');
const querystring = require('querystring');



const homeRoute = function (req, res) {
    if (req.url === "/" && req.method.toLowerCase() === 'post') {
        //Get the request body
        req.on('data', formBody => {
            //parse the query passed in the body
            const query = querystring.parse(formBody.toString());
            //redirect to the userRoute
            res.writeHead(303, {'Location' : `/${query.username}`});
            res.end();
            console.log('./POST END');
        });

    } else if (req.url === "/" ) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        render('header', {}, res);
        render('search', {} ,res);
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
                res.writeHead(200, {'Content-Type' : 'text/html'});
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

