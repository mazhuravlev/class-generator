const fs = require('fs');
const uuid = require('uuid');

const param = process.argv[2];
const count = Number(param);
if(typeof count !== 'number' || isNaN(count)) {
    console.error(`bad number parameter ${param}`);
    return;
}
for(let i = 0; i <= count; i++) {
    console.log(`class ${uuid.v4().replace(/-/g, '')}{}`);
}
