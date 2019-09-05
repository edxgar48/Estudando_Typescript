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


const leitura = fs.readFile(dirfile_1, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
})

 // var x = 0
  var i = 0
  //var j = [x]

  for (i = 0; i.length(); i++) {
    if (i >= 16) {
      leitura.unshift(i)
      console.log(i)
    }


  }


// leitura.on('data',(resultado)=>{
  
//   let j = 0
//   for (let i =[j];i.length();j++){
//       if (j>=16){
//         leitura.unshift(resultado)
//       } 

//   }

    
//   });
// console.log(leitura) 
  //   //var retorno = 0
//     for (retorno in leitura)
//       if (retorno >= 16) {
//         retorno.unshift(resultado)
//         //console.log(resultado)
//       }
// console.log(resultado)

//console.log(resultado)





// fs.readFile(dirfile_1, 'utf8', function (err,data) {
//   if (err) {
//     return console.log(err);
//   }

//   for (let i=0;i<16;i++) {

//     if (i < 16){
//       console.log(data)
//       if (i>=30) {
//         data.unshift()
//       }
//     } 




//   }
  
  
  
  
  
  
  
  
  //let result = data.replace(reg_2,'');

 // fs.writeFile(dirfile_2, data, 'utf8', function (err) {
   //  if (err) return console.log(err);
 // });
// });