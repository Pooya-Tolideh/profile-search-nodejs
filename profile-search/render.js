const fs = require('fs');
function render (fileName, res) {
    //get the html templates
    const templateFile = fs.readFileSync(__dirname + '/views/' + `${fileName}.html`, 'utf8');

    //replace in the values

    //send the response
    res.write(templateFile);
}

module.exports = render;