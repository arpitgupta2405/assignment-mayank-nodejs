const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: 'URL List.csv',
  header: [
    {id: 'original', title: 'Original Url'},
    {id: 'shorten', title: 'Short Url'}
  ]
});

const writeCSV = function(data) {
  csvWriter
  .writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));
}

module.exports = writeCSV
