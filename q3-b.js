const request = require('request');

const fs = require("fs");

const events = require('events');

const eventEmitter = new events.EventEmitter();

const chai = require('chai');
const expect = chai.expect;

eventEmitter.on('data_received', function () {

    let writeStreamObj = request('http://google.com/').pipe(fs.createWriteStream('googleHome-stream.html'))

    // Asserting using Chai.js
    expect(writeStreamObj).to.be.an("object");
    expect(writeStreamObj).to.have.deep.property("path").to.equal('googleHome-stream.html');
    expect(writeStreamObj).to.have.deep.property("writable").to.be.true;

    console.log('data received succesfully.');
});

eventEmitter.emit('data_received');

