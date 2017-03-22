const http = require('http');
const https = require('https');
const events = require('events');
const util = require('util');


function Profile(username) {
    this.url = `https://teamtreehouse.com/${username}.json`
}

util.inherits(Profile, events.EventEmitter);

Profile.prototype.getInfo = function () {
    https.get(this.url, req => {
        let body = '';
        req.on('data', packet => {
            body += packet.toString();
        });
        req.on('end', () => {
            const profile = JSON.parse(body);
            this.emit('api-received', profile);
        });
    });
}

module.exports = Profile;


