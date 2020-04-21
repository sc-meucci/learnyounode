const filterLs = require(".\\06-mymodule.js")

filterLs(process.argv[2], process.argv[3], (err, data) => {
    data.forEach(e => {
        console.log(e);
    });
})