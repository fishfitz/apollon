/*
    Used for log.
    Date the log, display it, and write ito into data/logs.txt
*/

const fs = require('fs');

module.exports = function(text) {
    const message = (new Date()).toUTCString() + ' - ' + text;
    console.log(message);
    fs.writeFile('data/logs.txt', message + '\n', {
        flag: 'a'
    }, (error) => {
        if (error) {
            this.error(error);
        }
    });
};