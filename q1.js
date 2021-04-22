const fs = require('fs');
const parse = require('xml-parser');
const chai = require('chai');
const expect = chai.expect;

const parseXML = function (path) {
  fs.access(path, fs.constants.F_OK, (err) => {
    if (err) {
      console.log(`"${path}" does not exist.`);
    } else {
      //file exists
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) throw err;

        let obj = parse(data);

        // Printing entire object
        let inspect = require('util').inspect;
        console.log(inspect(obj, { colors: true, depth: Infinity }));

        // Verifying output to be 
        expect(inspect(obj, { colors: true, depth: Infinity })).to.be.a('string').that.contains('soapenv:Envelope');
      });
      
    }
  })
}

module.exports = parseXML