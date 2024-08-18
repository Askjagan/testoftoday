



const fs = require('fs');
console.log({__dirname})
const header = ['test secnario','test case id','test step','expected results','actual result','status']
fs.writeFileSync(__dirname+'/jagan.csv',header.join(
    ','
))
























