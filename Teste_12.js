//const dirfile = 'd_lotfac.htm'
const dirfile_other = 'BIG_DATA_OTHER.html'
//const reg = /<td rowspan="\d.*">\d.*/g   // essa REGEX é MUUUITO  MELHOR
const reg_2 = /(\<td rowspan="\d.*"\>)|(<\/td>)/g
//const reg = /(\<td .*)/g  // essa NÂO serviu proque tem algumas linhas dentro do <td> que estão mal formatadas no original
const fs = require('fs')
//const replace = require('replace-in-file');

const dirfile_2 = 'BIG_DATA.html'
//const stream_2 = fs.createWriteStream(dirfile_2,'utf8')
//const myreadStream = fs.createReadStream(dirfile_other,'utf8')

//myreadStream.on('data',(chunk_)=>{

  //  var myReturn = chunk_.replace(reg_2,'') // este parte das REGEX não funciona o match funciona mas NÃO o REPLACE

    //  myReturn.forEach((trechoEncontrado_2)=> { stream_2.write(trechoEncontrado_2 + '\n'); });
//})


fs.readFile(dirfile_other, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(reg_2,'');

  fs.writeFile(dirfile_2, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});