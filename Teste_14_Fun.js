const dirfile = 'd_lotfac.htm'
const dirfile_1 = 'BIG_DATA_1.html'
const reg = /<td rowspan="\d.*">\d.*/g   // essa REGEX é para Ajustar o arquivo
//const reg_2 = /(\<td rowspan="\d.*"\>)|(<\/td>)/g //essa REGEX é para Retirar as tags

const fs = require('fs')
//const dirfile_2 = 'BIG_DATA_2.html'

const stream = fs.createWriteStream(dirfile_1,'utf8')
const myReadStream =fs.createReadStream(dirfile,'utf8')


myReadStream.on('data',(chunk_)=>{

    let myReturn = chunk_.match(reg)

    myReturn.forEach((trechoEncontrado)=> { stream.write(trechoEncontrado + '\n');
    if (trechoEncontrado === stream.writableLength -1 ){
        stream.close()
    }  
    
  });
});
    //  fs.readFile(dirfile_1, 'utf8', function (err,data_2) {
    //    if (err) {
    //      return console.log(err);
    //    }
    //    let result = data_2.replace(reg_2,'');
    //    
    //    fs.writeFile(dirfile_2, result, 'utf8', function (err) {
    //      if (err) return console.log(err);
    //    });
    //  });