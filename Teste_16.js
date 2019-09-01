//const dirfile = 'd_lotfac.htm'
const dirfile_2 = 'BIG_DATA_2.csv'
//const reg = /<td rowspan="\d.*">\d.*/g   // essa REGEX é MUUUITO  MELHOR
//const reg_2 = /(\<td rowspan="\d.*"\>)|(<\/td>)/g
//const reg = /(\<td .*)/g  // essa NÂO serviu proque tem algumas linhas dentro do <td> que estão mal formatadas no original
const fs = require('fs')
//const replace = require('replace-in-file');

const dirfile_1 = 'BIG_DATA.csv'
//const stream_2 = fs.createWriteStream(dirfile_2,'utf8')
//const myreadStream = fs.createReadStream(dirfile_other,'utf8')

//myreadStream.on('data',(chunk_)=>{

  //  var myReturn = chunk_.replace(reg_2,'') // este parte das REGEX funciona o match funciona mas NÃO o REPLACE

    //  myReturn.forEach((trechoEncontrado_2)=> { stream_2.write(trechoEncontrado_2 + '\n'); });
//})


fs.readFile(dirfile_1, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  //let result = data.replace(reg_2,'');

  fs.writeFile(dirfile_2, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});