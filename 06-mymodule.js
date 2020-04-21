const fs = require('fs');
const pathModule = require('path');

function filteredLs(path, ext, callback) {
    fs.readdir(path, (err, files) => {
        if (err) return callback(err);
        callback(null, files.filter((e) => pathModule.extname(e) === `.${ext}`));
    });
}

module.exports = filteredLs;