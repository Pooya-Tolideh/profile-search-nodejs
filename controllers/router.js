const Profile = require('./profile-api.js');
const extractInfo = require('./extract-info');
const render = require('../views/render.js');
const querystring = require('querystring');
const fs = require('fs');


let errHandler = { status: 200}

const serveCSS = function (req, res) {
    if (req.url.indexOf('css') !== -1) {
        const css = fs.createReadStream('./' + req.url);
        css.pipe(res);
    }
};

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
        //print error if status is not OK
        if (errHandler.status !== 200) {
            render('error', {error: errHandler.status} , res);
            //reset the handler
            errHandler.status = 200;
        }
        render('search', {} ,res);
        render('footer', {}, res);
        res.end();
        console.log('./HOME END');
    }
};

const userRoute = function (req, res) {
        let username = req.url.replace('/', '');
        const miscUrls = req.url === '/favicon.ico' ||
                         req.url === '/service-worker.js' ||
                         req.url.indexOf('css') !== -1;
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
                studentProfile.on('status', status => {
                    if (status !== 200) {
                        res.writeHead(303, {'Location' : '/'});
                        errHandler.status = status;
                        res.end();
                    }
                });
            }
};

module.exports = {
    user : userRoute,
    home : homeRoute,
    serveCSS: serveCSS
}

