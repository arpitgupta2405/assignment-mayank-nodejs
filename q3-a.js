const request = require('request');

const fs = require('fs');

request('http://www.google.com', function (error, response, body) {
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