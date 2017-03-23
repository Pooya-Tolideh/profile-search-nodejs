const http = require('http');
const https = require('https');
const events = require('events');
const util = require('util');


function Profile(username) {
    this.url = `https://teamtreehouse.com/${username}.json`;
    events.EventEmitter.call(this);
}

util.inherits(Profile, events.EventEmitter);

Profile.prototype.getInfo = function () {
    https.get(this.url, req => {
        let body = '';
        req.on('data', packet => {
            body += packet.toString();
        });
        req.on('end', () => {
            if (req.statusCode === 200) {
                const profile = JSON.parse(body);
                this.emit('api-received', profile);
            } else {
                const statusErr = new Error();
                statusErr.message = `${req.statusCode}`;
                console.log(statusErr.message);
            }
        });
    });
}

module.exports = Profile;


