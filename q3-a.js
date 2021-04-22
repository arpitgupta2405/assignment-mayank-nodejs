const request = require('request');
const chai = require('chai');
const expect = chai.expect;

const fs = require('fs');

request('http://www.google.com', function (error, response, body) {
    let statusCode = response.statusCode
    expect(statusCode).to.equal(200);
    expect(response.statusMessage).to.equal('K');
    expect(response.body).to.be.a("string").contains("<!doctype html>")
    console.log('body:', body); // Print the HTML for the Google homepage.

    fs.writeFile('googlePage.html', body, 'utf8', (err) => {
        if (err) return err
        console.log('file saved')
    })

});


// ------------ 2nd approach AXIOS ------------

// const axios = require('axios');

// const fs = require('fs');


// axios.get('https://www.google.com/').then((res)=>{

// console.log(res.data)

// fs.writeFile('data.html', res.data, 'utf8', (err)=>{
//     if(err) return err
//     console.log('file saved')
// })

// }).catch((err) => {
//     console.log(err)
// })