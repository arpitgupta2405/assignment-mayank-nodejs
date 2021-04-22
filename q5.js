const writeCSV = require('./write-url-csv')
const bitlyToken = "503aa3708ea9902670ed50e8c06002e0495551ae"

const BitlyClient = require('bitly').BitlyClient;
const bitly = new BitlyClient(bitlyToken);

const chai = require('chai');
const expect = chai.expect;

let urlArray = [
  "https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg",
  "https://images.pexels.com/photos/1519753/pexels-photo-1519753.jpeg",
  "https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg",
  "https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg",
  "https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg",
  "https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg",
  "https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg",
  "https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg"
];

async function shortenURLs(urlArray) {
  let data = []
  let response;
  for (let i = 0; i < urlArray.length; i++) {
    let rowObj = {}
    response = await bitly.shorten(urlArray[i]);
    rowObj['original'] = urlArray[i]
    rowObj['shorten'] = response.link
    expect(response.link.length).to.be.greaterThan(0);
    data.push(rowObj)
    console.log(`Your shortened bitlink is ${response.link}`);
  }
  expect(data.length).to.equal(8);

  writeCSV(data)
}

shortenURLs(urlArray)