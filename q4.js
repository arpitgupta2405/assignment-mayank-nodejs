const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();

let count = 0;
let folderCount = 1;
let destinationRoot = './Download/dl_'


app.get("/", async (req, res) => {
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

    let dest = destinationRoot + folderCount


    urlArray.forEach((element, index) => {
        if (count >= 5) {
            count = 0
            folderCount++
            dest = destinationRoot + folderCount
        }
        
        console.log(dest)

        if (fs.existsSync(dest)) {
            console.log('The path exists.');
        } else {
            fs.mkdirSync(dest, { recursive: true })
            console.log('Directory created: ', dest)
        }

        // fs.access(dest, function(err){ // checks if directory exists
        //     if(err){
        //         console.log('folder doesnt exist')
        //         fs.mkdir(dest, function(){ // create directory
        //             if(err) {
        //                 return err
        //             }
        //             console.log('Directory created: ', dest)
        //         })
        //     }
        //     console.log('Directory exists: ', dest)
        // })

        count++
        let destPath = ''
        let imageName = 'img_' + index + '.jpeg'
        destPath = dest + '/' + imageName
        console.log('Download Started for file no. : ', index);
        download(element, destPath, imageName)

    });
});

async function download (url, dest, imageName) {
    console.log('Imaqge name: ' , imageName);
    var file = fs.createWriteStream(dest);
    https.get(url, function (response) {
        response.pipe(file);
        file.on('finish', function () {
            console.log('Download is complete: ' , imageName);
            file.close();
        });
    });

}

app.listen(9999);
