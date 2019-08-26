const dirfile = 'd_lotfac.htm'
const dirfile_other = 'BIG_DATA_OTHER.html'
const reg = /<td rowspan="\d.*">\d.*/g   // essa REGEX é MUUUITO  MELHOR
//const reg = /(\<td .*)/g  // essa NÂO serviu proque tem algumas linhas dentro do <td> que estão mal formatadas no original
const fs = require('fs')

const stream = fs.createWriteStream(dirfile_other,'utf8')
const myReadStream =fs.createReadStream(dirfile,'utf8')


myReadStream.on('data',(chunk_)=>{

    var myReturn = chunk_.match(reg)

    myReturn.forEach((trechoEncontrado)=> { stream.write(trechoEncontrado + '\n'); });
    
}) 
 