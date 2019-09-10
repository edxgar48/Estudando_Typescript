//const dirfile = 'd_lotfac.htm'
const dirfile_other = 'BIG_DATA_OTHER.html'
//const reg = /<td rowspan="\d.*">\d.*/g   // essa REGEX é MUUUITO  MELHOR
const reg_2 = /(\<td rowspan="\d.*"\>)|(<\/td>)/g
//const reg = /(\<td .*)/g  // essa NÂO serviu proque tem algumas linhas dentro do <td> que estão mal formatadas no original
const fs = require('fs')
//const replace = require('replace-in-file');

const dirfile_2 = 'BIG_DATA.csv'
//const stream_2 = fs.createWriteStream(dirfile_2,'utf8')
//const myreadStream = fs.createReadStream(dirfile_other,'utf8')

//myreadStream.on('data',(chunk_)=>{

  //  var myReturn = chunk_.replace(reg_2,'') // este parte das REGEX funciona o match funciona mas NÃO o REPLACE

    //  myReturn.forEach((trechoEncontrado_2)=> { stream_2.write(trechoEncontrado_2 + '\n'); });
//})

// ------>>>>> essa REGEX (\d.*\,\d{2}) acho que vou ter que casar isso para mais um ajuste no arquivo e fazer mais um replace, mas desta vez colocando uma marca ou uma quebra de linha
//
// ------>>>>> ela casa tudo que estiver com digitos e virgulas, então para fazer um ajuste mais preciso vou ter que incluir uma quebra de linha ou um caracter especial

fs.readFile(dirfile_other, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  let result = data.replace(reg_2,'');

  fs.writeFile(dirfile_2, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});