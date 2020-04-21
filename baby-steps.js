let tmp = 0;

for (let i = 2; i < process.argv.length; i++) {
    tmp += +process.argv[i];
}

console.log(tmp);