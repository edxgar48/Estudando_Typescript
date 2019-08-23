const dirfile = 'd_lotfac.HTM'
const dirfile_other = 'BIG_DATA_OTHER.html'
const reg = /(\<td .*)/g
const fs = require('fs')

const stream = fs.createWriteStream(dirfile_other,'utf8');
const myReadStream =fs.createReadStream(dirfile,'utf8');


myReadStream.on('data',(chunk_)=>{

    var myReturn = chunk_.match(reg)

    myReturn.forEach(function(trechoEncontrado) { stream.write(trechoEncontrado + '\n'); });
    
}) 
 