const fs = require('fs');

function merge(template, values) {
    for (key in values) {
        template = template.replace(`{{${key}}}` , values[key]);
    }
    return template;
}

function render (fileName, values ,res) {
    //get the html templates
    let templateFile = fs.readFileSync(__dirname + '/templates/' + `${fileName}.html`, 'utf8');

    //replace in the values

    templateFile = values === null ? templateFile : merge(templateFile, values);

    //send the response
    res.write(templateFile);
}

module.exports = render;