const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, files) => {
    files.filter((e) => path.extname(e) === `.${process.argv[3]}`).forEach(element => {
        console.log(element);
    });
});