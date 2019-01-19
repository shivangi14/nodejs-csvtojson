const csvToJson = require('csvtojson/v2')
const csvPath = require('./data/customer-data.csv')
const fs = require('fs')
const path = require('path')

const converter = csvToJson().fromFile(csvPath)
converter.then((jsonObj)=>{
    fs.writeFileSync(path.join(__dirname,data,'customer-data.json'),JSON.stringify(jsonObj))
    console.log('file converted!')
})