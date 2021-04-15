// Without async/await
const https = require('https');
const fs = require('fs');

let count = 0;
let folderCount = 1;
let destinationRoot = './Download/dl_'

const downloadImages = function () {
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

        // Changing folder destination if files are > 5
        if (count >= 5) {
            count = 0
            folderCount++
            dest = destinationRoot + folderCount
        }

        // Checking if directory exists otherwise creating it
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true })
            console.log('Directory created: ', dest)
        }

        count++
        let destPath = ''
        let imageName = 'img_' + index + '.jpeg'
        destPath = dest + '/' + imageName
        console.log('Download has started for file : ', imageName);

        let file = fs.createWriteStream(destPath);

        https.get(element, function (response) {
            response.pipe(file);
            //console.log('Image name: ', imageName);

            file.on('finish', function () {
                console.log('Download is complete for file: ', imageName);
                file.close();
            });
        });
    });
}

downloadImages()

