const request = require('request');

const fs = require("fs");

const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('data_received', function () {

    request('http://google.com/').pipe(fs.createWriteStream('googleHome-stream.html'))

    console.log('data received succesfully.');
});

eventEmitter.emit('data_received');

