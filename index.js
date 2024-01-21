const fs = require('fs');
const csv = require('csv-parser');
fs.unlink('canada.txt', err => {
    if(err) throw err;
});
fs.unlink('usa.txt', err => {
    if(err) throw err;

});
const readStream = fs.createReadStream('input_countries.csv');
const canadaWriteStream = fs.createWriteStre2am('canada.txt')
const statesWriteStream = fs.createWriteStream('usa.txt')
readStream.pipe(csv())
    .on('data', row => {
        if(row.country === 'Canada'){
            canadaWriteStream.write(`${JSON.stringify(row)}\n`);
        }
        if(row.country === 'United States'){
            statesWriteStream.write(`${JSON.stringify(row)}\n`);
        }
    })
