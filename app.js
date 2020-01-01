var Jimp = require('jimp');
var threshold = require('@jimp/plugin-threshold');
const configure = require('@jimp/custom')

configure({ plugins: [threshold] }, Jimp)

console.log(typeof treshold)
 
// open a file called "lenna.png"
Jimp.read('lena.png', (err, lenna) => {
  if (err) throw err;
  lenna
    .resize(256, 256) // resize
    .quality(60) // set JPEG quality
    .greyscale() // set greyscale
    .threshold({ max: 150 }) //  threshold
    .write('lena-small-bw.jpg'); // save

});